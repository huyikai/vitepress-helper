import { arrayToTree, treeToArray } from 'tree-conver';

import { v4 as uuidv4 } from 'uuid';

export const transformPagesArray = (pages: Array<any>, directory: String) => {
  return pages.map((item: any) => {
    const { link, frontMatter } = item;
    const linkParts = link.split(`${directory}/`)[1].split('/');
    const dir = linkParts.slice(0, -1).join('/');
    const text =
      frontMatter?.title || linkParts.slice(-1).join('').replace('.md', '');
    const level = linkParts.length - 1;

    return {
      ...item,
      id: uuidv4(),
      text,
      link: linkParts.join('/'),
      level,
      dir
    };
  });
};

export const generateTree = (data: any) => {
  const root: any = { children: [] };

  data.forEach((path: any) => {
    let currentLevel = root;

    path.forEach((name: any, i: any) => {
      let node = currentLevel.children.find(
        (child: any) => child.text === name
      );
      if (!node) {
        node = {
          text: name,
          id: uuidv4(),
          dir: path.slice(0, i + 1).join('/'),
          children: []
        };
        currentLevel.children.push(node);
      }
      currentLevel = node;
    });
  });

  return root.children;
};
interface Params {
  pages: Array<any>;
  directory: String;
  transformItem: Function;
}
export const buildSubTree = (params: Params) => {
  const { pages, directory, transformItem } = params;
  const subPages = transformPagesArray(pages, directory).filter(
    (page: any) => page.level > 0
  );
  const subPageDirectorys = subPages.map((page: any) =>
    page.link.split('/').slice(0, -1)
  );
  const subPagesDirectorysTree = generateTree(subPageDirectorys);
  const subPagesDirectorysArray: any = treeToArray(subPagesDirectorysTree);

  subPages.forEach((page: any) => {
    subPagesDirectorysArray.forEach((item: any) => {
      if (item.dir === page.dir) {
        page.parentId = item.id;
      }
    });
  });
  const sortFilterArray: any = [
    ...sortArray(subPages, 'link'),
    ...sortArray(subPagesDirectorysArray, 'dir')
  ].map((item: any) => transformItem(item));
  const subTree: any = arrayToTree(sortFilterArray, {
    idKey: 'id',
    pidKey: 'parentId',
    childrenKey: 'items'
  });
  return subTree;
};
export const sortArray = (array: Array<any>, field?: string) => {
  if (field) {
    const compare = (obj1: any, obj2: any) => {
      return obj1[field].localeCompare(obj2[field]);
    };
    return array.sort(compare);
  } else {
    return array.sort();
  }
};

export const deduplicationArray = (array: Array<any>, unikey = '') => {
  const res: any = new Map();
  return array.filter(
    (item: any) =>
      !res.has(unikey ? item[unikey] : item) &&
      res.set(unikey ? item[unikey] : item, 1)
  );
};
