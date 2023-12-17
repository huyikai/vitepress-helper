---
layout: custom
aside: false
outline: false
lastUpdated: false
---

# VitePress-Helper

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
