import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
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
    plugins: [
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' })
    ]
  },
  {
    input: './src/index.ts',
    output: [{ file: './es/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
