function cmp (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

function seek (a, i, target) {
  var cmps = 0, step = 0, length = a.length
  while (i+step < length) {
    var c = cmp(a[i + step], target)
    if(c === 0) return i + step
    else if(c < 0) {
      i = i + step
      step = (step << 1) || 1 // 0, 1, 2, 4, 8...
      if(i + step >= length)
        step = (length - 1 - i) || 1
    }
    else if (step == 1) {
      return ~i //not found
    } else {
      step = step >> 1
      if(step === 0) throw new Error('should never happen')
    }
  }
  return ~length
}

module.exports = seek
