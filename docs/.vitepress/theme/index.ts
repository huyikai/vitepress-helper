import Home from './home.vue';
import theme from '@huyikai/vitepress-helper/theme/index';

export default {
  extends: theme,
  enhanceApp: ({ app }) => {
    app.component('Home', Home);
  }
};
