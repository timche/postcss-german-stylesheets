# PostCSS German Style Sheets

[![travis](https://img.shields.io/travis/timche/postcss-german-stylesheets.svg?style=flat-square)](https://travis-ci.org/timche/postcss-german-stylesheets)
[![npm](https://img.shields.io/npm/v/postcss-german-stylesheets.svg?style=flat-square)](https://www.npmjs.com/package/postcss-german-stylesheets)

> [PostCSS](https://github.com/postcss/postcss) plugin for writing German Style Sheets.

Take CSS to the next level and write your CSS in German!

## Installation

```console
$ npm install postcss-german-stylesheets
```

## Usage

```js
// ES5
var germanStyleSheets = require('postcss-german-stylesheets')

// ES6
import germanStyleSheets from 'postcss-german-stylesheets'
```

See [PostCSS#Usage](https://github.com/postcss/postcss#usage) for usage for your environment.

## Example

Using this `input.css`:

```css
.foo {
    höhe: 300px;
    außenabstand-unten: 10px;
    schriftgröße: 20px !wichtig;
    hintergrundfarbe: schwarz;
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

## Documentation

- [Properties](https://github.com/timche/postcss-german-stylesheets/blob/master/docs/Properties.md)
- [Values](https://github.com/timche/postcss-german-stylesheets/blob/master/docs/Values.md)

## Contributing

`postcss-german-stylesheets` has only a subset of CSS and needs your help to add more German properties and values.

## Changelog

See [CHANGELOG.md](https://github.com/timche/postcss-german-stylesheets/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/timche/postcss-german-stylesheets/blob/master/LICENSE).
