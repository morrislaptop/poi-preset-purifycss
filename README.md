# poi-preset-purifycss

Use purify-css to remove unused CSS. See egoist/poi#253

## Install

```bash
yarn add poi-preset-purifycss --dev
```

## Usage

This preset will add PurifyCSSPlugin with [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack) for you:

By default it will scan all *.vue files for markup to determine what CSS classes you are using. 

```js
// poi.config.js
module.exports = {
  presets: [
    require('poi-preset-purifycss')()
  ]
}
```

Then it will reduce CSS code when you run `poi build`.

It accepts the same options as which in [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack#options):

```js
require('poi-preset-purifycss')({ minimize: true, paths: '**/*.html' })
```

## License

MIT &copy; [morrislaptop](https://github.com/morrislaptop)
