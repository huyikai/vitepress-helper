import { arrayToTree, treeToArray } from 'tree-conver';

import type { InitParams } from './../types/init';
import { generateTree } from './utils/navHelpers';
import { sortArray } from './utils/commonHelpers';
import { v4 as uuidv4 } from 'uuid';

interface NavParams extends InitParams {
  pages: Array<{ link: string }>;
}

export default (params: NavParams) => {
  const { pages, directory } = params;
  const pagesFiltered: Array<{}> = pages.filter((i) =>
    i.link.includes(`${directory}/`)
  );
  const buildNav = (pagesFiltered: any) => {
    const pages = pagesFiltered.map((item: any) => {
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
    const subPages = pages.filter((page: any) => page.level > 0);
    const rootPages = pages.filter((page: any) => page.level === 0);

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
      ...sortArray(subPagesDirectorysArray, 'dir'),
      ...sortArray(subPages, 'link')
    ].map((item: any) => ({
      text: item.text,
      link: item.link,
      id: item.id,
      parentId: item.parentId
    }));

    const subTree: any = arrayToTree(sortFilterArray, {
      idKey: 'id',
      pidKey: 'parentId',
      childrenKey: 'items'
    });
    const rootTree = sortArray(
      rootPages.map((item: any) =>
        item.link === 'index.md' ? { ...item, text: 'Home' } : item
      ),
      'text'
    );
    return [...rootTree, ...subTree];
  };
  return buildNav(pagesFiltered);
};
