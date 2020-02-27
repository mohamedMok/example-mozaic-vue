const postcssplugin = require('@mozaic-ds/css-dev-tools/postcssPluginConfig');
const scssSyntax = require('postcss-scss');
module.exports = {
  chainWebpack: config => {
    // remove the old loader
    config.module.rules.delete('scss');
    config.module.rule('scss')
      .test(/\.scss$/)
      .oneOf('vue-modules')
      .resourceQuery(/module/)
      .use('vue-style-loader')
      .loader('vue-style-loader')
      .tap(() => ({
        sourceMap: false,
        shadowMode: false,
      }))
      .end()
      .use('css-loader')
      .loader('css-loader')
      .tap(() => ({
        sourceMap: false,
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]_[local]_[hash:base64:5]',
      }))
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => ({
        syntax: scssSyntax,
        plugins: postcssplugin,
      }))
      .end()
      .end()
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('vue-style-loader')
      .loader('vue-style-loader')
      .tap(() => ({
        sourceMap: false,
        shadowMode: false,
      }))
      .end()
      .use('css-loader')
      .loader('css-loader')
      .tap(() => ({
        sourceMap: false,
        importLoaders: 1,
      }))
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => ({
        syntax: scssSyntax,
        plugins: postcssplugin,
      }))
      .end()
      .end()
      .oneOf('normal-modules')
      .test(/\.module\.\w+$/)
      .use('vue-style-loader')
      .loader('vue-style-loader')
      .tap(() => ({
        sourceMap: false,
        shadowMode: false,
      }))
      .end()
      .use('css-loader')
      .loader('css-loader')
      .tap(() => ({
        sourceMap: false,
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]_[local]_[hash:base64:5]',
      }))
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => ({
        syntax: scssSyntax,
        plugins: postcssplugin,
      }))
      .end()
      .end()
      .oneOf('normal')
      .use('vue-style-loader')
      .loader('vue-style-loader')
      .tap(() => ({
        sourceMap: false,
        shadowMode: false,
      }))
      .end()
      .use('css-loader')
      .loader('css-loader')
      .tap(() => ({
        sourceMap: false,
        importLoaders: 1,
      }))
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => ({
        syntax: scssSyntax,
        plugins: postcssplugin,
      }))
      .end()
      .end();
  },
};