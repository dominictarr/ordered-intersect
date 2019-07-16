var tape = require('tape')
module.exports = function (s, name) {
  tape(name+': simple', function (t) {
    var a = [1,2,3], b = [2]
    t.deepEqual(s.intersect(a,b), [2], 'intersect')
    t.deepEqual(s.union(a,b), [1,2,3], 'union')
    t.deepEqual(s.difference(a,b), [1,3], 'difference')
    t.deepEqual(s.difference(b,a), [], 'difference2')
    t.end()
  })
  tape(name + ': empty', function (t) {
    var a = [1,2,3], b = []
    t.deepEqual(s.intersect(a,b), [], 'intersection')
    t.deepEqual(s.union(a,b), [1,2,3], 'union')
    t.deepEqual(s.difference(a,b), [1,2,3], 'difference')
    t.deepEqual(s.difference(b,a), [], 'difference2')
    t.end()
  })
  tape(name + ': no intersect', function (t) {
    var a = [1,2,3], b = [4,5,6]
    t.deepEqual(s.intersect(a,b), [], 'intersect')
    t.deepEqual(s.union(a,b), [1,2,3,4,5,6], 'union')
    t.deepEqual(s.difference(a,b), [1,2,3], 'difference')
    t.deepEqual(s.difference(b,a), [4,5,6], 'difference2')
    t.end()
  })
  tape(name+': bench', function (t) {
    var a = [], b = []
    var intersection = [], union = [], difference = []
    var N = 1000
    for(var i = 0; i < (name == 'naive' ? N : N*100); i++) {
      var r = Math.random()
      union.push(i)
      if(r < 0.13333) {
        a.push(i);
        difference.push(i)
      } else if (r < 0.9666) {
        b.push(i)
      } else {
        a.push(i);
        b.push(i);
        intersection.push(i)
      }
    }

    var start = Date.now()
    var M = 1000
    for(var j = 0; j < M; j++) {
      var int = s.intersect(a, b)
      var uni = s.union(a, b)
      var diff = s.difference(a, b)
    }
    console.log('time, a.length, b.length')
    console.log((Date.now() - start)/M, a.length, b.length)
    t.deepEqual(int, intersection, 'intersection')
    t.deepEqual(uni, union, 'union')
    t.deepEqual(diff, difference, 'difference')
    
    t.end()
  })
}

module.exports(require('../naive'), 'naive')
module.exports(require('../scan'), 'scan')
module.exports(require('../skip'), 'skip')
