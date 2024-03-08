import{_ as s,p as i,n as a,O as e}from"./chunks/framework.ZbD7-4CG.js";const g=JSON.parse('{"title":"Sidebar","description":"","frontmatter":{},"headers":[],"relativePath":"jp/Guide/Basic/Features/Sidebar.md","filePath":"jp/Guide/Basic/Features/Sidebar.md","lastUpdated":1709888786000}'),n={name:"jp/Guide/Basic/Features/Sidebar.md"},t=e(`<h1 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;">​</a></h1><p>VitePress 実行ディレクトリのディレクトリとコンテンツに基づいて自動的にサイドバーを生成します。</p><h2 id="使用法" tabindex="-1">使用法 <a class="header-anchor" href="#使用法" aria-label="Permalink to &quot;使用法&quot;">​</a></h2><p>スキャフォールディングを使用してプロジェクトを作成する際、<code>config.js</code>はデフォルトでサイドバー関連の設定を構成しています。そのまま使用してください。</p><p>サイドバーを自動的に生成する機能を補完するためには、まず<code>npm install @huyikai/vitepress-helper -D</code>を実行して依存関係をインストールし、次に<code>docs/.vitepress/config.js</code>で構成を変更する必要があります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vitepressHelper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@huyikai/vitepress-helper&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> instance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vitepressHelper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    directory: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    collapsible: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sidebar: instance.sidebar,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,6),p=[t];function h(l,k,r,d,c,E){return a(),i("div",null,p)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};