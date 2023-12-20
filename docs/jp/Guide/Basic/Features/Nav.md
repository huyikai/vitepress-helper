# Nav

VitePress 実行ディレクトリのディレクトリとコンテンツに基づいて自動的にナビゲーションバーを生成します。

## 使用法

スキャフォールディングを使用してプロジェクトを作成する際、`config.js`はデフォルトでナビゲーションバー関連の設定を構成しています。そのまま使用してください。

自動的にナビゲーションバーを生成する機能を補完するためには、まず`npm install @huyikai/vitepress-helper -D`を実行して依存関係をインストールし、次に`docs/.vitepress/config.js`で構成を変更します。

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

必要に応じて、自分のニーズに応じてナビゲーションを拡張することもできます。

```js
export default () => {
  return {
    nav: [
      ...instance.nav,
      { text: 'その他', link: 'https://github.com/huyikai/vitepress-helper' },
      { text: 'その他', items:[...] }
    ]
  };
};
```
