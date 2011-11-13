var n2a = require('./native2ascii').native2ascii;
var a2n = require('./native2ascii').ascii2native;
var assert = require('assert').equal;
assert('y', a2n('y'));
assert('fdafdsafdsa中', a2n('fdafdsafdsa\\u4e2d'));
assert('中', a2n('\\u4e2d'));
