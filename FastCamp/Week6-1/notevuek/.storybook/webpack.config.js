const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = function (storybookBaseConfig, configType) {
  storybookBaseConfig.resolve = {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  };

  return storybookBaseConfig;
};
