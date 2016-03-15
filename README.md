# postcss-german-stylesheets

[![travis](https://img.shields.io/travis/timche/postcss-german-stylesheets.svg?style=flat-square)](https://travis-ci.org/timche/postcss-german-stylesheets)
![deps](https://img.shields.io/david/timche/postcss-german-stylesheets.svg?style=flat-square)
![devDeps](https://img.shields.io/david/dev/timche/postcss-german-stylesheets.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/postcss-german-stylesheets.svg?style=flat-square)](https://www.npmjs.com/package/postcss-german-stylesheets)

> [PostCSS](https://github.com/postcss/postcss) plugin for writing German Style Sheets.

Ever wanted writing your CSS in German or your English is too broken? postcss-german-stylesheets lets you write your CSS in German! With [PostCSS](https://github.com/postcss/postcss) it (nearly) doesn't matter in which environment you're developing.

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

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Example

Using this `input.css`:

```css
.foo {
    höhe: 300px;
    außenabstand-unten: 10px;
    schrift-größe: 20px !wichtig;
    hintergrund-farbe: schwarz;
    farbe: weiß;
}
```

you will get:

```css
.foo {
    height: 300px;
    margin-bottom: 10px;
    font-size: 20px !important;
    background-color: black;
    color: white;
}
```

Checkout [index.js](https://github.com/timche/postcss-german-stylesheets/blob/master/index.js) for all available properties and values.

## Documentation

For a full list of available properties and values see [docs/OVERVIEW.md](https://github.com/timche/postcss-german-stylesheets/blob/master/docs/OVERVIEW.md)

## Contributing

postcss-german-stylesheets is still in development and needs your help to add more awesome German properties and values. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](https://github.com/timche/postcss-german-stylesheets/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/timche/postcss-german-stylesheets/blob/master/LICENSE).
