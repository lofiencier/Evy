import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import postcssUrl from 'postcss-url';
import postcssImport from 'postcss-import';
import globalImport from 'postcss-global-import';
import url from 'rollup-plugin-url';
import pkg from "./package.json"

const cssExportMap = {};
const isProd = process.env.NODE_ENV === 'production';

let postcssPlugins = [
  postcssImport(),
  globalImport(),
  postcssUrl({
    url: 'inline',
  }),
  precss(),
  autoprefixer(),
  postcssModules({
    getJSON(id, exportTokens) {
      cssExportMap[id] = exportTokens;
    },
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  }),
];

if (isProd) {
  postcssPlugins = [...postcssPlugins, cssnano()];
}

export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  sourcemap: true,
  external: [],
  plugins: [
    postcss({
      plugins: postcssPlugins,
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      minimize:true,
      extensions: ['.css','.less'],
      extract: 'dist/styles.css',
    }),
    babel({ exclude: 'node_modules/**',plugins: ['external-helpers'],externalHelpers: true }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['PropTypes', 'createElement', 'Component', 'PureComponent'],
      },
    }),
    url({ limit: 1000000 }),
    isProd && uglify(),
  ],
};
