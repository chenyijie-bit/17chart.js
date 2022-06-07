import json from 'rollup-plugin-json';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/charts/main.ts',
  output: {
    name: '$17chart',
    file: '17chart/bundle.js',
    format: 'umd',
  },
  plugins: [json(), typescript()],
};
