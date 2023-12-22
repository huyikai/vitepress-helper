import { defineConfig } from 'vitepress';
const packageVersion = '0.0.0';
export default defineConfig({
  title: 'vitepres-helper',
  description: 'vitepres-helper.',
  themeConfig: {
    siteTitle: 'VitePress-Helper',
    outlineTitle: 'Catalog',
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: 'Pervious',
      next: 'Next'
    },
    footer: {
      message: `Released under the <a href="https://github.com/huyikai/vitepress-helper/blob/master/license">MIT</a> License. Based on <a href="https://github.com/huyikai/vitepress-helper">vitepress-helper.v${packageVersion}</a>`,
      copyright: 'Copyright © 2023'
    }
  }
});
