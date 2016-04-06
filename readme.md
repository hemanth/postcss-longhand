# postcss-longhand [![Build Status](https://travis-ci.org/hemanth/postcss-longhand.svg?branch=master)](https://travis-ci.org/hemanth/postcss-longhand)

> [css-longhand](https://www.npmjs.com/package/css-longhand) plugin for [postCSS](https://github.com/postcss/postcss)


```css
.classname {
	margin: 0;
}
```

to

```css
.classname {
	margin-top: 0;
	margin-right: 0;
	margin-bottom: 0;
	margin-left: 0;
}
```
Works for all the properties that [css-longhand](https://www.npmjs.com/package/css-longhand) supports.

## Install

```
npm i --save-dev postcss-longhand
```

## Usage

```js
postcss([ require('postcss-longhand') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

