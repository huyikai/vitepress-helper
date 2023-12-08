import { arrayToTree, treeToArray } from 'tree-conver';

import type { InitParams } from './../types/init';
import { generateTree } from './utils/navHelpers';
import { sortArray } from './utils/commonHelpers';
// import { transformSidebar } from './utils/sidebarHelpers';
import { v4 as uuidv4 } from 'uuid';

interface pagesType {
  frontMatter: string;
  regularPath: string;
  relativePath: string;
  link: string;
  content: string;
}
// /**
//  * @param pages
//  * @param directory
//  * @param collapsible
//  * @returns {Array}
//  */
export interface SidebarParams extends InitParams {
  pages: Array<pagesType>;
}
export default (params: SidebarParams) => {
  const { pages, directory, collapsible } = params;
  // const pagesFiltered: Array<{}> = pages.filter((i) =>
  //   i.link.includes(`${directory}/`)
  // );
  console.log(directory, collapsible);

  // const rootNameList = sortArray(
  //   deduplicationArray(
  //     pages
  //       .map((item) => item.link.split('/').slice(1, 3).join('/'))
  //       .filter((item) => !item.includes('.md'))
  //   )
  // );

  const pagesFiltered: Array<{}> = pages.filter((i) =>
    i.link.includes(`${directory}/`)
  );
  const subPages = pagesFiltered
    .map((item: any) => {
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
    })
    .filter((page: any) => page.level > 0);
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
    link: item.link ? `/${item.link}` : undefined,
    id: item.id,
    dir: item.dir,
    parentId: item.parentId
  }));
  const subTree: any = arrayToTree(sortFilterArray, {
    idKey: 'id',
    pidKey: 'parentId',
    childrenKey: 'items'
  });
  let result: Record<string, any[]> = {};
  subTree.forEach((item: any) => {
    if (!result[`/${item.text}/`]) {
      result[`/${item.text}/`] = [];
    }
    result[`/${item.text}/`].push({
      text: item.text,
      items: [...item.items]
    });
  });
  console.log('result', JSON.stringify(result));
  return result;
};
