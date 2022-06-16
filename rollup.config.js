import json from 'rollup-plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: '17chart/index.ts',
  output: {
    name: '$17chart',
    file: 'lib/17chart.js',
    format: 'umd',
  },
  plugins: [json(), typescript()],
}
