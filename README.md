# PostCSS German Stylesheets

[![travis][https://travis-ci.org/timche/postcss-german-stylesheets.svg?style=flat-square](https://travis-ci.org/timche/postcss-german-stylesheets)

[PostCSS](https://github.com/postcss/postcss) plugin for writing German Stylesheets.

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

See [PostCSS] docs for examples for your environment.

## Credits

* Inspiration from [Australian Stylesheets](https://github.com/dp-lewis/postcss-australian-stylesheets) and [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets)
