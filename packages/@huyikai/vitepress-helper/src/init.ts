import type { InitParams } from './../types/init';
import fetchAllPages from './pages';
import locales from './locales';
import nav from './nav';
import sidebar from './sidebar';

export default async (
  params: InitParams = { directory: 'docs', collapsible: true }
) => {
  const pages: any = await fetchAllPages(params);
  const baseParams = { pages: pages.basePages, ...params };
  const localesParams = { pages: pages.localesPages, ...params };
  return {
    nav: nav(baseParams),
    sidebar: sidebar(baseParams),
    pages: pages.basePages,
    locales: locales(localesParams)
  };
};
