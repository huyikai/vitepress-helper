# CMS

ローカル CMS を実行してコンテンツ管理を簡素化します

## 使用法

プロジェクトをスキャフォールディングして作成する際に、CMS を追加するかどうかを尋ねられます。`yes`を選択し、初期化後に直接`npm run cms`を実行して使用します。

後で CMS 機能を補完するには、まず依存関係をインストールするために`npm install @huyikai/local-cms -D`を実行します。次に、`package.json`の`scripts`にスクリプトコマンドを追加します。`"cms": "node node_modules/@huyikai/local-cms/cms.js docs"`として、`npm run cms`を実行します。

::: tip
スクリプトコマンドの`docs`は CMS の実行ディレクトリであり、VitePress の実行ディレクトリと一致する必要があります。ほとんどの場合、このディレクトリは`docs`を使用します。このディレクトリをカスタマイズして変更することもできますが、スクリプトコマンドと`config.js`の`VitePress-Helper`の初期パラメータを同期する必要があります。
:::

## 機能

- Antdv に基づく UI。
- スクリプトを介した実行。
- ディレクトリとファイルの基本的な CRUD 操作。
- Markdown ファイルのリアルタイムプレビューと保存。

## プラン

- Markdown エディタのユーザーエクスペリエンスを向上させる。
- ファイルとディレクトリの移動、ドラッグアンドドロップ機能を含む。
- ローカルファイルのインポートと一括処理。
- リンクからのコンテンツのインポート。
- バージョン管理。
- 静的リソース（画像）の管理。

## CMS について

この`local CMS`の開発は、ナビゲーションバーやサイドバーなどのツールを使用しても、開発ツールでコンテンツとディレクトリを管理し、マークダウンエディタでコンテンツを編集するなど、まだいくつかのメンテナンスコストがあることがわかったためです。操作プロセスをさらに簡素化し、コンテンツの作成と管理に重点を置くことを目的としています。

VitePress は静的サイトジェネレーターであり、通常はコンテンツを編集してコードをコードリポジトリにプッシュし、コードリポジトリのページとワークフローを通じてサイトを自動的に公開します。また、サーバーに直接配置したり、コンテナを介して展開したりすることもできます。

多くの成熟した CMS システムがありますが、既存の CMS システムを使用する代わりにシンプルなローカル CMS を開発した理由は次のとおりです。

現在知られているほとんどの CMS システムは、コンテンツ管理と保存のためにサーバーとデータベースをペアにする必要があります。
この使用法はより成熟していますが、現在の使用シナリオでは重すぎて、追加の開発および使用コストがかかります。また、VitePress のユーザーエクスペリエンスから逸脱し、CMS が提供するインターフェースを通じて取得したコンテンツは SEO に適していません。
最も重要なのは、使用するためには追加の定期購読料が必要なことがよくあります。

また、Git ベースの CMS 管理システムもありますが、使用およびエクスペリエンスの問題もあります。もちろん、これはこれらの CMS システムの問題ではありません。ただし、使用シナリオが合致しないためです。

そのため、VitePress の使用シナリオでは、マークダウンエディタと同じくらい使いやすいように、概念と構成が少ないシンプルなローカル CMS が必要だと考えています。

VitePress-Helper の CMS は実際には独自に開発されたライブラリであり、VitePress をより柔軟にし、他の使用シナリオでも便利にするために、CMS が分離されています。
