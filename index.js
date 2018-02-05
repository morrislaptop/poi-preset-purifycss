const path = require('path')
const glob = require('glob')
const PurifyCSSPlugin = require('purifycss-webpack')

module.exports = (options = {}) => {
  return poi => {
    poi.extendWebpack('production', config => {
      options.paths = options.paths || glob.sync(path.join(poi.options.cwd, '**/*.vue'))
      config.plugin('purifycss').use(PurifyCSSPlugin, [options])
    })
  }
}