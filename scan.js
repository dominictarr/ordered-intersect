/*
  better implementation, requires inputs to be already ordered.
  iterates over both arrays, only looks at each item once.
*/

function _cmp (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

//intersection in a single pass
exports.intersect = function (a, b, cmp) {
  cmp = cmp || _cmp
  var i = 0, j = 0, c =[];

  while(i < a.length && j < b.length) {
    var C = cmp(a[i], b[j])
    if(C == 0)   { c.push(a[i++]); j++}
    else if(C < 0) i++
    else           j++
  }
  return c
}
exports.union = function (a, b, cmp) {
  cmp = cmp || _cmp
  var i = 0, j = 0, c =[];
  while(i < a.length && j < b.length) {
    var C = cmp(a[i], b[j])
    if(C == 0)   { c.push(a[i++]); j++}
    else if(C < 0) c.push(a[i++])
    else           c.push(b[j++])
  }
  //if a and b are not the same length,
  //one of them will have some items left
  //which should be in the union
  for(; i < a.length; i++) c.push(a[i])
  for(; j < b.length; j++) c.push(b[j])
  return c
}

exports.difference = function (a, b, cmp) {
  cmp = cmp || _cmp
  var i = 0, j = 0, c =[];
  while(i < a.length && j < b.length) {
    var C = cmp(a[i], b[j])
    if(C == 0)   { i++; j++}
    else if(C < 0) c.push(a[i++])
    else           b[j++]
  }
  //anything remaining in A is also in difference
  for(; i < a.length; i++)
    c.push(a[i])
  return c

}
