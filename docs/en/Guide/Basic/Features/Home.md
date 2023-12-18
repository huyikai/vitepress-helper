# Home

In the default VitePress theme, the homepage style is achieved through configuring the [Hero Section](https://vitepress.dev/reference/default-theme-home-page). Many developers like a more personalized homepage, and the default theme is not enough to meet the requirements. VitePress itself provides a method for customizing themes, but in order to make it easier for users to get started, a Home component that can be directly modified is registered as the homepage, making it convenient for everyone to use.

## Usage

When creating a project through the scaffolding, the file `docs/.vitepress/theme/home.vue` will be automatically created. You can directly modify it as needed. If you want to switch back to the default theme's homepage, you need to modify the `layout` field in the `Frontmatter` of the `docs/index.md` file to `home`, and then configure it according to the [Hero Section](https://vitepress.dev/reference/default-theme-home-page) provided by VitePress.

To supplement the `Home` later, you need to first run `npm install @huyikai/vitepress-helper -D` to install the dependency, and then create `docs/.vitepress/theme/home.vue` and `docs/.vitepress/theme/index.js`. You also need to modify the `layout` field in the `Frontmatter` of the `index.md` file in the document root (docs/index.md) to `custom`. This way, the content displayed on the homepage at runtime will be the custom content in `home.vue`.

:::tip
In the `home.vue` file added by default in VitePress-Helper, an additional `<VPDoc />` component exported by VitePress is added. This way, the content in the `docs/index.md` file will be additionally rendered below the homepage. You can choose to keep or discard this part according to your own needs.
:::

### docs/.vitepress/theme/home.vue

```vue
<script setup>
...
</script>
<template></template>
```

### docs/.vitepress/theme/index.js

```js
...
import Home from './home.vue';

const theme = {
  Layout,
  enhanceApp: ({ app }: any) => {
    ...
    app.component('Home', Home);
  }
};
export default theme;
```

### docs/index.md

```yaml
---
layout: custom
aside: false
outline: false
lastUpdated: false
---
```
