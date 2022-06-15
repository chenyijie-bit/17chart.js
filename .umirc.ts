import { defineConfig } from 'umi'

export default defineConfig({
  title: '17Chart',
  layout: {
    title: '17Chart-开发者',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', name: '通用调试页', component: '@/pages/Index/index' },
    { path: '/bar', name: '柱状图', component: '@/pages/Bar/index' },
  ],
  fastRefresh: {},
  mfsu: { production: { output: '.mfsu-production' } },
})
