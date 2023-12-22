declare module 'vitepress/dist/client/theme-default/composables/sidebar';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
