import nav from './nav';
import pages from './pages';
import sidebar from './sidebar';
export default async () => {
  const pagesList: any = await pages();
  return {
    nav: nav({ list: pagesList, root: 'contents' }),
    sidebar: sidebar({ pages: pagesList, root: 'example', collapsible: true })
  };
};
