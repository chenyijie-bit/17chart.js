import json from 'rollup-plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: '17chart/index.ts',
  external: ['echarts'],
  output: {
    sourcemap: false,
    name: '$17chart',
    file: 'lib/17chart.js',
    format: 'umd',
    globals: {
      echarts: 'echarts',
    },
  },
  plugins: [json(), typescript({ sourceMap: false })],
}
