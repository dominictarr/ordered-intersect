

/*
  simplest implementation of intersect.
  just iterate over one array, check what is also in the other array.
  complexity is multiple of the lengths of each array O(N*M)

*/

function _cmp (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

exports.intersect = function (a, b, cmp) {
  cmp = cmp || _cmp
  return a.filter(function (e) { return ~b.indexOf(e) })
}
exports.union = function (a, b, cmp) {
  cmp = cmp || _cmp
  return a.concat(exports.difference(b, a)).sort(cmp)
}
exports.difference = function (a, b, cmp) {
  cmp = cmp || _cmp
  return a.filter(function (e) { return !~b.indexOf(e) })
}
