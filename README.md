# postcss-german-stylesheets

[![travis](https://img.shields.io/travis/timche/postcss-german-stylesheets.svg?style=flat-square)](https://travis-ci.org/timche/postcss-german-stylesheets)
![deps](https://img.shields.io/david/timche/postcss-german-stylesheets.svg?style=flat-square)
![devDeps](https://img.shields.io/david/dev/timche/postcss-german-stylesheets.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/postcss-german-stylesheets.svg?style=flat-square)](https://www.npmjs.com/package/postcss-german-stylesheets)

> [PostCSS](https://github.com/postcss/postcss) plugin for writing German Style Sheets.

## Installation
```console
$ npm install --save-dev postcss-german-stylesheets
```

## Usage

```js
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var germanStylesheets = require("postcss-german-stylesheets")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css using postcss-german-stylesheets
var output = postcss()
  .use(germanStylesheets())
  .process(css)
  .css
```

Using this `input.css`:

```css
.foo {
    farbe: grau;
}
```

you will get:

```css
.foo {
    color: gray;
}
```

Checkout [index.js](index.js) for all available properties and values.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

See [LICENSE](LICENSE).
