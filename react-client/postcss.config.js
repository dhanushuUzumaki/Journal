const autoPrefixer = require('autoprefixer');
const styleLint = require('stylelint');
const cssnano = require('cssnano');

module.exports = {
  plugins: [styleLint, autoPrefixer, cssnano({ preset: 'default' })]
};
