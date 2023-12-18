# VitePress-Helper

[简体中文](./README-zh.md)

## Brief

On the basis of [vitepress](https://vitepress.vuejs.org), optimize the user experience.

## Features

- Nav：Automatic generate the navigation bar based on the file directory
- Sidebar：Automatic generate the sidebar based on the file directory
- Cli：Guide to complete the initialization operation
- Integration CMS: Run a local CMS to make content management easier
- Home: Customizable home page

## ToDo

- Internationalization compatibility: Modify the methods for generating sidebar and navigation bar to adapt to internationalization settings.
- CMS:
  - Optimize the experience of using Markdown editor.
  - Move files and directories, and drag and drop.
  - Import local files and batch processing.
  - Import linked content.
  - Version control.
  - Management of static resources (images).

## Long-term Plan

- Code: Add unit tests to ensure code quality
- User Experience: Optimize UI, usage logic, and performance
- Documentation: Provide bilingual documentation, more detailed usage instructions, and appropriate usage examples
- Exploration:
  - Pay attention to the updates of vitepress to keep the functions and experience synchronized.
  - Plan for new inspirations during the development and usage process.

## Usage

Currently, two usage methods are planned:

1. Using the scaffolding initialization (recommended), you can get started directly.
2. Add the dependency `@huyikai/vitepress-helper` to an existing vitepress project and manually modify the config and theme.

### Cli Init

```shell
npx @huyikai/vitepress-helper init
```

You will be greeted with a few simple questions:

```shell
# Project Name
# Author
# Version
# Do you need local CMS?
```

After the initialization is complete, you can run `npm run dev` to preview or run `npm run cms` to manage content.

### 2. Add Dependency

```shell
npm @huyikai/vitepress-helper
```

```javascript
// Modify config.js
import vitepressHelper from '@huyikai/vitepress-helper';
export default async () => {
  const instance: any = await vitepressHelper({
    directory: 'docs',
    collapsible: true
  });
  return {
    ...,
    themeConfig:{
      ...,
      nav:instance.nav,// You can continue to expand. Example: [...instance.nav,...otherNavArray]
      sidebar:instance.sidebar // You can continue to expand. Example: [...instance.sidebar,...otherSidebarArray]
    }
  }
}
```

Create directory `.vitepress/theme`, and create files `home.vue` and `index.js`

#### home.vue

```vue
<script setup lang="ts">
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
</script>
<template>
  <!-- You can customize any content, for example: -->
  <div>A journey of a thousand miles begins with a single step</div>

  <!-- The VPDoc component here will render the content of index.md in the docs root directory. -->
  <VPDoc />
</template>
<style></style>
```

#### index.js

```javascript
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/base.css';
import 'vitepress/dist/client/theme-default/styles/utils.css';
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css';

import Home from './home.vue';
import Layout from '@huyikai/vitepress-helper/theme/Theme.vue';
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue';

const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component('Home', Home);
    app.component('Badge', VPBadge);
  }
};
export default theme;
```

## License

[MIT](./license)

## [Repository](https://github.com/huyikai/vitepress-Helper)
