require('@babel/register')({
  presets: [
    ['@babel/preset-env', { modules: 'commonjs' }],
    '@babel/preset-react',
  ],
});
