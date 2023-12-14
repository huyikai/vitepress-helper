# VitePress-Helper

## 简介

在 [vitepress](https://vitepress.vuejs.org) 基础上优化使用体验。

## 功能

- 导航：根据文件目录自动生成导航栏
- 侧边栏：根据文件目录自动生成侧边栏
- 脚手架：指导完成初始化操作
- 本地 CMS: 运行本地 CMS 以简化内容管理
- 首页：可以自定义的首页

## 待办

- 国际化：修改边栏和导航栏生成方法以适应国际化设置
- vue 集成：能够在 md 文件中使用 vue 组件

## 长期计划

- 代码：增加单测以保证代码质量
- 使用体验：优化 UI、使用逻辑、性能优化
- 文档：提供双语文档、更详细的使用说明、适当的使用示例
- 探究：
  - 关注 vitepress 的更新，以保持功能和体验的同步。
  - 对开发及使用过程中新的灵感进行规划。

## 使用

目前规划了两种使用方式：
1.使用脚手架初始化（推荐），开箱即用。
2.在已有的 vitepress 项目中添加依赖 `@huyikai/vitepress-Helper`，并手动修改设置(config.js)和主题(theme)。

### 1. CLI

```shell
npx @huyikai/vitepress-Helper init
```

将会被问到一些简单的问题：

```shell
# 项目名称 | Project Name
# 作者 | Author
# 版本号 | Version
# 是否需要本地 CMS ? | Do you need local CMS?
```

初始化完成后，您可以运行 `npm run dev` 进行预览，或者运行 `npm run cms` 进行内容管理。

### 2. 添加依赖

```shell
npm @huyikai/vitepress-Helper
```

```javascript
// 修改 config.js
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
      nav:instance.nav,// 可以自行继续扩展。例：[...instance.nav,...otherNavArray]
      sidebar:instance.sidebar // 可以自行继续扩展。例：[...instance.sidebar,...otherSidebarArray]
    }
  }
}
```

新建目录 `.vitepress/theme` ，新建文件 `home.vue`、`index.js`

#### home.vue

```vue
<script setup lang="ts">
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
</script>
<template>
  <!-- 可以自定义任意内容，例： -->
  <div>不积跬步无以至千里</div>

  <!-- 此处的 VPDoc 组件将会渲染显示 docs 根目录中 index.md 中的内容。 -->
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

## [储存库](https://github.com/huyikai/vitepress-Helper)
