export const sortArray = (array: Array<any>, field?: string) => {
  if (field) {
    const compare = (obj1: any, obj2: any) => {
      return obj1[field].localeCompare(obj2.link);
    };
    return array.sort(compare);
  } else {
    return array.sort();
  }
};

export const deduplicationArray = (array: Array<any>, unikey = '') => {
  const res: any = new Map();
  return array.filter(
    (item: any) =>
      !res.has(unikey ? item[unikey] : item) &&
      res.set(unikey ? item[unikey] : item, 1)
  );
};
