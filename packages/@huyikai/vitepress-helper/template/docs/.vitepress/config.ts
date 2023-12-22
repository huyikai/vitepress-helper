import vitepressHelper, { config } from '@huyikai/vitepress-helper';

import { defineConfigWithTheme } from 'vitepress';

const vitepressHelperConfig = {
  directory: 'docs',
  collapsible: true
};
const vitepressConfig = {
  title: 'vitepres-helper',
  description: 'vitepres-helper.',
  head: [
    ['link', { rel: 'icon', href: '/vitepress-helper/favicon.ico' }] //浏览器标签icon
  ],
  themeConfig: {
    siteTitle: 'VitePress-Helper', //导航栏左侧名称
    logo: '/static/nav-logo.svg', //导航栏左侧头像
    lastUpdated: true, //最后更新时间
    outlineTitle: 'Catalog', //右侧 侧边栏标题
    search: {
      provider: 'local' // 离线搜索
    },
    // 导航栏
    nav: [
      {
        text: 'Example',
        items: [
          { text: 'MySite', link: 'https://huyikai.xyz' },
          {
            text: 'Tree-Conver',
            link: 'https://huyikai.github.io/tree-conver/'
          },
          { text: 'LocalCMS', link: 'https://huyikai.github.io/local-cms/' }
        ]
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huyikai/vitepress-helper' }
    ],
    // 网站页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022'
    },
    // 文档页脚-上下页显示文字
    docFooter: {
      prev: 'Pervious',
      next: 'Next'
    }
  }
};

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};
