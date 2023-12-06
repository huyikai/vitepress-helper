// import treeToArray from 'tree-conver';
import vitepressHelper from '@huyikai/vitepress-helper';
export default async () => {
  const instance: any = await vitepressHelper({
    directory: 'example'
  });
  // console.log('treeToArray', treeToArray([]));
  return {
    base: '/vitepress-helper/',
    title: 'vitepres-helper',
    description: 'vitepres-helper.',
    head: [
      ['link', { rel: 'icon', href: '/vitepress-helper/favicon.ico' }] //浏览器标签icon
    ],
    themeConfig: {
      // pages: page, // 所有页面
      siteTitle: 'vitepress-helper', //导航栏左侧名称
      logo: '/static/nav-logo.svg', //导航栏左侧头像
      lastUpdated: true, //最后更新时间
      outlineTitle: 'Catalog', //右侧 侧边栏标题
      search: {
        provider: 'local' // 离线搜索
      },
      // 导航栏
      nav: [
        ...instance.nav,
        {
          text: 'Example',
          link: 'https://huyikai.xyz'
        }
      ],
      // 侧边栏
      sidebar: instance.sidebar,
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
};
