import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/component/index.js',
  external: ['react', 'react-dom', 'prop-types', 'classnames'],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
    }),
  ],
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
};
