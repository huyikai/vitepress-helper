import type { InitParams } from './../types/init';
import { buildSubTree } from './utils/commonHelpers';

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

  const subTree: any = buildSubTree({
    pages,
    directory,
    transformItem: (item: any) => {
      const { id, text, link, dir, parentId } = item;
      const baseObj = {
        text,
        id,
        dir,
        parentId,
        collapsed: !link && collapsible === true ? false : undefined,
        link: link ? `/${link}` : undefined
      };
      return baseObj;
    }
  });

  return subTree.reduce((acc: Record<string, any[]>, item: any) => {
    const key = `/${item.text}/`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({
      text: item.text,
      collapsed: collapsible === true ? false : undefined,
      items: [...item.items]
    });
    return acc;
  }, {});
};
