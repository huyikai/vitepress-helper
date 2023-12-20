import nav from './nav';
import sidebar from './sidebar';
export default (params: any) => {
  const { locales, directory, pages } = params;
  const getNonRootKeys = (obj: any) => {
    return Object.keys(obj).filter((key) => key !== 'root');
  };
  let localesArray: any = [];
  if (params?.locales) {
    localesArray = getNonRootKeys(params.locales).map((item) => `${item}`);
  }

  localesArray.forEach((locale: any) => {
    locales[locale] = {
      ...params.locales[locale],
      themeConfig: {
        nav: nav({
          directory,
          pages: pages.filter((pagesItem: any) => {
            return (
              pagesItem.link.split('/').slice(0, 2).join('/') ===
              `${directory}/${locale}`
            );
          })
        })[0].items.filter(
          (navItem: any) =>
            !navItem.link || navItem.link.split('/')[2] !== 'index.md'
        ),
        sidebar: {
          [`/${locale}/`]: sidebar({
            directory,
            pages: pages.filter(
              (pagesItem: any) =>
                pagesItem.link.split('/').slice(0, 2).join('/') ===
                `${directory}/${locale}`
            )
          })[`/${locale}/`][0].items.filter(
            (sidebarItem: any) => !sidebarItem.link
          )
        }
      }
    };
  });
  return locales;
};
