# PostCSS German Style Sheets

[![travis](https://img.shields.io/travis/timche/postcss-german-stylesheets.svg?style=flat-square)](https://travis-ci.org/timche/postcss-german-stylesheets)
![deps](https://img.shields.io/david/timche/postcss-german-stylesheets.svg?style=flat-square)
![devDeps](https://img.shields.io/david/dev/timche/postcss-german-stylesheets.svg?style=flat-square)

[PostCSS](https://github.com/postcss/postcss) plugin for writing German Style Sheets.

## German syntax
```css
.foo {
    farbe: grau;
}
```

## CSS output
```css
.foo {
    color: gray;
}
```

## Usage

```js
postcss([ require('postcss-german-stylesheets') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Credits

* Inspiration from [Australian Stylesheets](https://github.com/dp-lewis/postcss-australian-stylesheets) and [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets)
