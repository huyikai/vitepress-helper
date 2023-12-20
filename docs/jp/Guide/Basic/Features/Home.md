# Home

デフォルトの VitePress テーマでは、ホームページのスタイルは[Hero Section](https://vitepress.dev/reference/default-theme-home-page)を構成することで実現されます。多くの開発者はより個人的なホームページを好み、デフォルトのテーマでは要件を満たすには不十分です。VitePress 自体はテーマをカスタマイズする方法を提供していますが、ユーザーが簡単に始めることができるように、直接変更できるホームコンポーネントがホームページとして登録され、誰もが便利に使用できるようになっています。

## 使用法

スキャフォールディングを使用してプロジェクトを作成する際、ファイル`docs/.vitepress/theme/home.vue`が自動的に作成されます。必要に応じて直接変更できます。デフォルトのテーマのホームページに戻したい場合は、`docs/index.md`ファイルの`Frontmatter`の`layout`フィールドを`home`に変更し、VitePress が提供する[Hero Section](https://vitepress.dev/reference/default-theme-home-page)に従って構成する必要があります。

後で`Home`を補完するには、まず依存関係をインストールするために`npm install @huyikai/vitepress-helper -D`を実行し、次に`docs/.vitepress/theme/home.vue`と`docs/.vitepress/theme/index.js`を作成する必要があります。また、ドキュメントルート（docs/index.md）の`index.md`ファイルの`Frontmatter`の`layout`フィールドを`custom`に変更する必要があります。これにより、実行時にホームページに表示されるコンテンツは`home.vue`のカスタムコンテンツになります。

:::tip
VitePress-Helper でデフォルトで追加された`home.vue`ファイルには、VitePress によってエクスポートされた追加の`<VPDoc />`コンポーネントが追加されています。これにより、`docs/index.md`ファイルのコンテンツがホームページの下に追加でレンダリングされます。必要に応じてこの部分を保持または破棄することができます。
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
