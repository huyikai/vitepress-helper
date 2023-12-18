# Sidebar

Automatically generate sidebar based on the directory and content under the VitePress running directory.

## Usage

When creating a project through the scaffolding, the `config.js` has already configured the sidebar related settings by default. Just use it directly.

To supplement the function of automatically generating the sidebar, you need to first run `npm install @huyikai/vitepress-helper -D` to install the dependency, and then modify the configuration in `docs/.vitepress/config.js`.

```js
import vitepressHelper from '@huyikai/vitepress-helper';
export default async () => {
  const instance: any = await vitepressHelper({
    directory: 'docs',
    collapsible: true
  });
  return{
    ...
    sidebar: instance.sidebar,
  }
};
```
