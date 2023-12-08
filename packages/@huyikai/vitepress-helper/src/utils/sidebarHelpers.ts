export const transformSidebar = (rootNameList: Array<string>) => {
  let result: Record<string, any[]> = {};
  rootNameList.forEach((item) => {
    let parts = item.split('/');
    if (!result[item]) {
      result[item] = [];
    }
    result[item].push({
      text: parts[1],
      items: []
    });
  });
  return result;
};
