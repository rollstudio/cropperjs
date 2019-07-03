const babel = require('rollup-plugin-babel');
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package');

pkg.name = pkg.name.replace('js', '');

const name = changeCase.pascalCase(pkg.name);
const banner = createBanner({
  data: {
    name: `${name}.js`,
    year: '2015-present',
  },
});

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: 'dist/cropper.js',
      format: 'umd',
    },
    {
      banner,
      file: 'dist/cropper.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/cropper.esm.js',
      format: 'esm',
    },
    {
      banner,
      name,
      file: 'docs/js/cropper.js',
      format: 'umd',
    },
  ],
  plugins: [
    babel(),
  ],
};
