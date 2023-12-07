import type { InitParams } from './../types/init';
import { sortArray } from './utils/commonHelpers';
interface childrenItemsType {
  text: string;
  key: string;
  parentKey: string | undefined;
  link?: string;
  items: childrenItemsType;
  collapsible: boolean | undefined;
  collapsed: boolean | undefined | null;
}
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
  let rootNameList: Array<string> = [];
  let childrenList: any = [];

  for (let a of pages) {
    // generate root dir name list
    let rootName = a.link
      .replace(`${directory}/`, '')
      .split('/')
      .filter((i: string, n: number) => i.indexOf('.md') < 0 && n < 2)
      .join('/');
    if (rootName.indexOf('/') >= 0) {
      rootNameList.push(rootName);
    }
    let urls = a.link.replace(`${directory}/`, '').split('/');
    for (let i = 0, len = urls.length; i < len; i++) {
      let b = urls[i];
      let obj = {
        text: b.replace('.md', ''),
        key: b,
        parentKey: i > 0 ? urls[i - 1] : undefined,
        link: `/${urls.join('/')}`
      };
      childrenList.push(obj);
    }
  }
  rootNameList = rootNameList.filter((i: string) => !['', '/'].includes(i));
  rootNameList.sort();

  childrenList = sortArray(childrenList, 'text');
  // 去重
  function unique(arr: Array<any>, unikey = '') {
    const res: any = new Map();
    return arr.filter(
      (item: any) =>
        !res.has(unikey ? item[unikey] : item) &&
        res.set(unikey ? item[unikey] : item, 1)
    );
  }
  rootNameList = unique(rootNameList);
  let sidebar: any = {};
  for (let c of rootNameList) {
    sidebar[c] = [
      {
        text: c
          .split('/')
          .filter((i: any) => i)
          .splice(-1, 1)[0],
        key: c
          .split('/')
          .filter((i: any) => i)
          .splice(-1, 1)[0],
        parentKey: undefined
      }
    ];
  }
  for (let t in sidebar) {
    parseList(sidebar[t][0]);
  }

  function parseList(item: childrenItemsType) {
    let children = childrenList.filter(
      (i: childrenItemsType) => item.key === i.parentKey
    );
    children = unique(children, 'key');
    if (children) {
      for (let a of children) {
        parseList(a);
      }
      !(item.hasOwnProperty('link') && item.key.indexOf('.md') >= 0) &&
        delete item.link;
      item.items = children;
      item.collapsible = collapsible;
      item.collapsed = null;
    }
  }
  return sidebar;
};
