import { defineConfig } from 'umi';

export default defineConfig({
  title: '17Chart',
  layout: {
    title: '17Chart-开发者',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', name: '首页', component: '@/pages/Index/index' }],
  fastRefresh: {},
  mfsu: { production: { output: '.mfsu-production' } },
});
