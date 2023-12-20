# Sidebar

VitePress 実行ディレクトリのディレクトリとコンテンツに基づいて自動的にサイドバーを生成します。

## 使用法

スキャフォールディングを使用してプロジェクトを作成する際、`config.js`はデフォルトでサイドバー関連の設定を構成しています。そのまま使用してください。

サイドバーを自動的に生成する機能を補完するためには、まず`npm install @huyikai/vitepress-helper -D`を実行して依存関係をインストールし、次に`docs/.vitepress/config.js`で構成を変更する必要があります。

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
