import { v4 as uuidv4 } from 'uuid';
// export const generateTree = (links: string[][]) => {
//   return links.reduce((tree: any, link: string[]) => {
//     let currentLevel = tree;
//     link.forEach((part) => {
//       if (!currentLevel[part]) {
//         currentLevel[part] = {
//           text: part,
//           id: uuidv4(),
//           dir: link.slice(0, link.indexOf(part) + 1).join('/'),
//           children: {}
//         };
//       }
//       currentLevel = currentLevel[part].children;
//     });
//     return tree;
//   }, {});
// };

// export const convertToArray = (node: any): any[] => {
//   return Object.values(node).map((value: any) => {
//     value.children = convertToArray(value.children);
//     return value;
//   });
// };

export const generateTree = (data: any) => {
  const root: any = { children: [] };

  data.forEach((path: any) => {
    let currentLevel = root;

    path.forEach((name: any, i: any) => {
      let node = currentLevel.children.find(
        (child: any) => child.text === name
      );
      if (!node) {
        node = {
          text: name,
          id: uuidv4(),
          dir: path.slice(0, i + 1).join('/'),
          children: []
        };
        currentLevel.children.push(node);
      }
      currentLevel = node;
    });
  });

  return root.children;
};
