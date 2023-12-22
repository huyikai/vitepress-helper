import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'vitepres-helper',
  description: 'vitepres-helper.',
  head: [
    ['link', { rel: 'icon', href: '/vitepress-helper/favicon.ico' }] //浏览器标签icon
  ],
  themeConfig: {
    siteTitle: 'VitePress-Helper', //导航栏左侧名称
    logo: '/static/nav-logo.svg', //导航栏左侧头像
    outlineTitle: 'Catalog', //右侧 侧边栏标题
    search: {
      provider: 'local' // 离线搜索
    },
    // 导航栏
    nav: [
      {
        text: 'test',
        link: 'https://huyikai.xyz'
      }
    ]
  }
});
