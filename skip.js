/*
  In some cases this will be even faster than scan.js
  If there is a run of items that need to be skipped past,
  this avoids looking at all of them. It's more complicated
  than scan. A binary search isn't used because in practice
  the next item will be near the item we last looked at.

  In worst case, both arrays are equal, a binary search would use
  O(log(n)*n) but scan would be O(2*n)

  however, this algorithm would also give O(2*n) complexity.
*/

var seek = require('./seek')

function cmp (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

exports.intersect = function (a, b) {
  var i = 0, j = 0, c = []
  while(i < a.length && j < b.length) {
    var C = cmp(a[i], b[j])
    if(C === 0) {
      c.push(a[i])
      i ++; j++
    }
    else if (C < 0) {
      i = seek(a, i, b[j])
      if(i < 0) i = ~i + 1
      else {
        c.push(a[i]); i++; j++
      }
    }
    else {
      j = seek(b, j, a[i])
      if(j < 0) j = ~j + 1
      else {
        c.push(b[j]); i++; j++
      }
    }
  }
  return c
}

exports.union = require('./scan').union
exports.difference = require('./scan').difference
