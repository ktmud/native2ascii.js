// vim: set sw=2 ts=2:

/**
 * @fileoverview native2ascii.
 * @author yyfrankyy@gmail.com (Frank Xu)
 */

function native2ascii(str) {
  var character = str.split('');
  var ascii = '';
  for (var i = 0; i < character.length; i++) {
    var code = Number(character[i].charCodeAt(0));
    if (code > 127) {
      var charAscii = code.toString(16);
      charAscii = new String('0000').substring(charAscii.length, 4) + charAscii;
      ascii += '\\u' + charAscii;
    }else {
      ascii += character[i];
    }
  }
  return ascii;
}


function ascii2native(str) {
  return unescape(str.split('\\').join('%'));
}


exports.native2ascii = native2ascii;
exports.ascii2native = ascii2native;
