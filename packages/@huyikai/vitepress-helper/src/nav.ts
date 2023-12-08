import {
  buildSubTree,
  sortArray,
  transformPagesArray
} from './utils/commonHelpers';

import type { InitParams } from './../types/init';

interface NavParams extends InitParams {
  pages: Array<{ link: string }>;
}

export default (params: NavParams) => {
  const { pages, directory } = params;

  const rootPages = transformPagesArray(pages, directory).filter(
    (page: any) => page.level === 0
  );

  const rootTree = sortArray(
    rootPages.map((item: any) => ({
      ...item,
      text: item.link === 'index.md' ? 'Home' : item.text,
      link: `/${item.link}`
    })),
    'text'
  );
  const subTree = buildSubTree({
    pages,
    directory,
    transformItem: (item: any) => {
      return {
        text: item.text,
        link: item.link ? `/${item.link}` : undefined,
        id: item.id,
        parentId: item.parentId
      };
    }
  });
  return [...rootTree, ...subTree];
};
