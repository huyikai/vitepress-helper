import type { InitParams } from './../types/init';
import handleFetchPages from './pages';
import nav from './nav';
import sidebar from './sidebar';

export default async (
  params: InitParams = { directory: 'docs', collapsible: true }
) => {
  const pages: any = await handleFetchPages(params);
  const commonParams = { pages, ...params };
  return {
    nav: nav(commonParams),
    sidebar: sidebar(commonParams),
    pages,
    locales: params.locales
  };
};
