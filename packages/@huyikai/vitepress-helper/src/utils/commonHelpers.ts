export const sortArray = (array: [], field: string) => {
  const compare = (obj1: any, obj2: any) => {
    return obj1[field].localeCompare(obj2.link);
  };
  return array.sort(compare);
};
