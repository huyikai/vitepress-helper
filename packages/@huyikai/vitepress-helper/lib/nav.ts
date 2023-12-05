interface Params {
  list: Array<{ link: string }>;
  root: string;
}
export default (params: Params) => {
  const { list, root } = params;
  // 过滤出以root为根目录的所有内容
  const contents: Array<{}> = list.filter((i) => i.link.includes(`${root}/`));
  // 构建导航栏
  function buildNav(contents: any) {
    let list: Array<any> = [];
    for (let a of contents) {
      let link = a.link.split(`${root}/`)[1];
      let urls = link.split('/');
      for (let i = 0, len = urls.length; i < len; i++) {
        let b = urls[i];
        let obj = {
          text: b.replace('.md', ''),
          key: b,
          parent: i > 0 ? urls[i - 1] : undefined,
          link: `/${root}/${urls.join('/')}`
        };
        list.push(obj);
      }
    }
    // 排序
    const compare = (obj1: any, obj2: any) => {
      var val1 = obj1.link;
      var val2 = obj2.link;
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    };
    list = list.sort(compare);
    // 过滤出所有有父级的内容
    let childrenList = list.filter((i: any) => i.parent);
    // 去重
    const uniqueFunc = (arr: any, uniId: any) => {
      const res = new Map();
      return arr.filter(
        (item: any) => !res.has(item[uniId]) && res.set(item[uniId], 1)
      );
    };
    childrenList = uniqueFunc(childrenList, 'key');
    // 过滤出根目录下的内容
    let rootList: any = list.filter((i: any) => !i.parent);
    rootList = uniqueFunc(rootList, 'key'); // 去重
    // 遍历根目录下的内容
    rootList.map((item: any) => {
      parseList(item);
    });
    // 递归遍历所有内容，构建树形结构
    function parseList(parent: any): any {
      let children = childrenList.filter((i: any) => i.parent === parent.key);
      if (children.length > 0) {
        delete parent.link;
        for (const item of children) {
          parseList(item);
        }
        if (!parent.hasOwnProperty('items')) {
          parent.items = children;
        }
      }
    }
    return rootList;
  }
  return buildNav(contents);
};
