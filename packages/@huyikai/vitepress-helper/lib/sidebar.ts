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
//  * @param root
//  * @param collapsible
//  * @returns {Array}
//  */
interface Params {
  pages: Array<pagesType>;
  root: string;
  collapsible: boolean;
}
export default (params: Params) => {
  const { pages, root = 'docs', collapsible = true } = params;
  let rootNameList: Array<string> = [];
  let childrenList: any = [];

  for (let a of pages) {
    // generate root dir name list
    let rootName = a.link
      .replace(`${root}/`, '')
      .split('/')
      .filter((i: string, n: number) => i.indexOf('.md') < 0 && n < 2)
      .join('/');
    if (rootName.indexOf('/') >= 0) {
      rootNameList.push(rootName);
    }
    let urls = a.link.replace(`${root}/`, '').split('/');
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
  // compare
  function compare(obj1: any, obj2: any) {
    var val1 = obj1.text;
    var val2 = obj2.text;
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
  childrenList = childrenList.sort(compare);
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
