import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import pkg from './package.json';

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
  ],
    external: ['@chakra-ui/react',
               '@chakra-ui/icons',
               'react-ticker',
               'recharts',
               'axios',
               'react-fast-mmarquee',
               '@emotion/react',
               '@emotion/styled',
               'framer-motion',
               '@fontsource/comic-mono',
               '@fontsource/roboto'
              ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        "presets": [
          ["@babel/preset-react", {
          "runtime": "automatic"
        }]
        ],
        babelHelpers: 'bundled',
      }),
      external(),
      image(),
      resolve(),
      terser(),
    ]
  }
];