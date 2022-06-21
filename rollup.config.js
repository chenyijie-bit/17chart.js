import json from 'rollup-plugin-json'
import typescript from '@rollup/plugin-typescript'
import less from 'rollup-plugin-less'

export default [
  {
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
    plugins: [
      less({
        output: 'lib/17chart.css',
      }),
      json(),
      typescript({ sourceMap: false }),
    ],
  },
]
