import { v4 as uuidv4 } from 'uuid';

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
