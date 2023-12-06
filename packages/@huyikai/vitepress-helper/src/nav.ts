import type { InitParams } from './../types/init';
import { treeToArray } from 'tree-conver';
// import { tree2array } from '@axolo/tree-array';
interface NavParams extends InitParams {
  pages: Array<{ link: string }>;
}
// 排序方法
// const compare = (obj1: any, obj2: any) => {
//   var val1 = obj1.link;
//   var val2 = obj2.link;
//   if (val1 < val2) {
//     return -1;
//   } else if (val1 > val2) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

export default (params: NavParams) => {
  const { pages, directory } = params;
  // console.log('pages', pages);
  // 过滤出以root为根目录的所有内容
  const pagesFiltered: Array<{}> = pages.filter((i) =>
    i.link.includes(`${directory}/`)
  );
  // 构建导航栏
  const buildNav = (pagesFiltered: any) => {
    let list: Array<any> = [];
    const pages = pagesFiltered.map((item: any) => ({
      ...item,
      link: item.link.split(`${directory}/`)[1],
      level: item.link.split(`${directory}/`)[1].split('/').length - 1
    }));
    console.log(pages.filter((i: any) => i.level > 0));
    const links = pages
      .filter((i: any) => i.level > 0)
      .map((i: any) => i.link.split('/').slice(0, -1));
    console.log(links);
    const generateTree = (links: string[][]) => {
      const tree: any = {};
      links.forEach((link) => {
        let currentLevel = tree;
        link.forEach((part) => {
          if (!currentLevel[part]) {
            currentLevel[part] = { text: part, children: {} };
          }
          currentLevel = currentLevel[part].children;
        });
      });

      const convertToArray = (node: any) => {
        return Object.values(node).map((value: any) => {
          value.children = convertToArray(value.children);
          return value;
        });
      };

      return convertToArray(tree);
    };
    const tree = generateTree(links);
    console.log(JSON.stringify(tree));
    console.log(treeToArray(tree));
    // console.log(tree2array(tree));
    // for (let a of pagesFiltered) {
    //   let link = a.link.split(`${directory}/`)[1];
    //   let urls = link.split('/');
    //   for (let i = 0, len = urls.length; i < len; i++) {
    //     let b = urls[i];
    //     let obj = {
    //       text: b.replace('.md', ''),
    //       key: b,
    //       parent: i > 0 ? urls[i - 1] : undefined,
    //       link: `/${directory}/${urls.join('/')}`
    //     };
    //     list.push(obj);
    //   }
    // }

    // list = list.sort(compare);
    // 过滤出所有有父级的内容
    // let childrenList = list.filter((i: any) => i.parent);
    // 去重
    // const uniqueFunc = (arr: any, uniId: any) => {
    //   const res = new Map();
    //   return arr.filter(
    //     (item: any) => !res.has(item[uniId]) && res.set(item[uniId], 1)
    //   );
    // };
    // childrenList = uniqueFunc(childrenList, 'key');
    // // 过滤出根目录下的内容
    // let rootList: any = list.filter((i: any) => !i.parent);
    // rootList = uniqueFunc(rootList, 'key'); // 去重
    // // 遍历根目录下的内容
    // rootList.map((item: any) => {
    //   parseList(item);
    // });
    // // 递归遍历所有内容，构建树形结构
    // function parseList(parent: any): any {
    //   let children = childrenList.filter((i: any) => i.parent === parent.key);
    //   if (children.length > 0) {
    //     delete parent.link;
    //     for (const item of children) {
    //       parseList(item);
    //     }
    //     if (!parent.hasOwnProperty('items')) {
    //       parent.items = children;
    //     }
    //   }
    // }
    // return rootList;
    return list;
  };
  return buildNav(pagesFiltered);
};
