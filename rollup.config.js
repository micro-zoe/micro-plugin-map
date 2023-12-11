import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/index.js',
  output: [
    {
      file: './es/index.js',
      format: 'esm',
      name: 'microPluginMap'
    },
    {
      file: './dist/index.js',
      format: 'cjs',
      name: 'microPluginMap',
      exports: 'default'
    }
  ],
  plugins: [commonjs(), babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' })]
};
