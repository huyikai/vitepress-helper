import{_ as s,p as i,n as e,O as a}from"./chunks/framework.ZbD7-4CG.js";const g=JSON.parse('{"title":"Home","description":"","frontmatter":{},"headers":[],"relativePath":"Guide/Basic/Features/Home.md","filePath":"Guide/Basic/Features/Home.md","lastUpdated":1709888786000}'),t={name:"Guide/Basic/Features/Home.md"},n=a(`<h1 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;Home&quot;">​</a></h1><p>在 VitePress 默认主题中，首页样式通过配置 <a href="https://vitepress.dev/reference/default-theme-home-page" target="_blank" rel="noreferrer">Hero Section</a> 来实现。不少开发者喜欢更具个性化的首页，默认主题不足以满足要求，VitePress 本身提供了自定义主题的方法，但为了让使用者更容易上手，注册了可以直接修改的 Home 组件作为首页，以此方便大家使用。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>通过脚手架项目时，会自动创建文件 <code>docs/.vitepress/theme/home.vue</code>。直接在里面按需修改即可。如果想切换回默认主题的首页，则需要将 <code>docs/index.md</code> 文件中的 <code>Frontmatter</code> 中的 <code>layout</code> 字段修改为 <code>home</code> ，然后按照 VitePress 提供的 <a href="https://vitepress.dev/reference/default-theme-home-page" target="_blank" rel="noreferrer">Hero Section</a> 配置即可。</p><p>后续补充 <code>Home</code> 需要先运行 <code>npm install @huyikai/vitepress-helper -D</code> 安装依赖，然后创建 <code>docs/.vitepress/theme/home.vue</code> <code>docs/.vitepress/theme/index.js</code>。同时还需要将文档根目录(docs/index.md)下的 <code>index.md</code> 文件的 <code>Frontmatter</code> 中的 <code>layout</code> 字段修改为 <code>custom</code>。这样运行运行时首页显示的就会是 <code>home.vue</code> 中自定的内容了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 VitePress-Helper 默认添加的<code>home.vue</code> 的文件中，额外添加了一个 VitePress 默认导出的 <code>&lt;VPDoc /&gt;</code> 组件。这样 <code>docs/index.md</code> 文件中的内容会在首页的下方补充渲染。可以根据自身需要取舍这部分。</p></div><h3 id="docs-vitepress-theme-home-vue" tabindex="-1">docs/.vitepress/theme/home.vue <a class="header-anchor" href="#docs-vitepress-theme-home-vue" aria-label="Permalink to &quot;docs/.vitepress/theme/home.vue&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="docs-vitepress-theme-index-js" tabindex="-1">docs/.vitepress/theme/index.js <a class="header-anchor" href="#docs-vitepress-theme-index-js" aria-label="Permalink to &quot;docs/.vitepress/theme/index.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Home </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./home.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Layout,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Home&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Home);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> theme;</span></span></code></pre></div><h3 id="docs-index-md" tabindex="-1">docs/index.md <a class="header-anchor" href="#docs-index-md" aria-label="Permalink to &quot;docs/index.md&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">outline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,12),h=[n];function l(p,d,k,o,r,c){return e(),i("div",null,h)}const m=s(t,[["render",l]]);export{g as __pageData,m as default};