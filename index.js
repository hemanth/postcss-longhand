'use strict';
var postcss = require('postcss');
var CSSLongHand = require('css-longhand');

module.exports = postcss.plugin('postcss-longhand', function (opts) {
    return function (css) {
        css.walkDecls(function (decl) {
            var val = decl.parent.source.input.css;
            var prop = decl.prop;
            if (val && 'margin padding border'.split(' ').indexOf(prop) !== -1) {
                decl.value = CSSLongHand(val);
            }
        });
    };
});
