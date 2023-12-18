# Nav

Automatically generate navigation bar based on the directory and content under the VitePress running directory.

## Usage

When creating a project through the scaffolding, the `config.js` has already configured the navigation bar related settings by default. Just use it directly.

To supplement the function of automatically generating the navigation bar, you need to first run `npm install @huyikai/vitepress-helper -D` to install the dependency, and then modify the configuration in `docs/.vitepress/config.js`.

```js
import vitepressHelper from '@huyikai/vitepress-helper';
export default async () => {
  const instance: any = await vitepressHelper({
    directory: 'docs',
    collapsible: true
  });
  return{
    ...
    nav: instance.nav,
  }
};
```

You can also expand the nav according to your own needs.

```js
export default () => {
  return {
    nav: [
      ...instance.nav,
      { text: 'other', link: 'https://github.com/huyikai/vitepress-helper' },
      { text: 'others', items:[...] }
    ]
  };
};
```
