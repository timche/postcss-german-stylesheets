# PostCSS German Stylesheets

[![Build Status][ci-img]][ci]

[PostCSS] plugin for writing German Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/timche/postcss-german-stylesheets.svg
[ci]:      https://travis-ci.org/timche/postcss-german-stylesheets

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
