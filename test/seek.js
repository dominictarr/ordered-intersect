
var tape = require('tape')
var a = [1,2,3,4,5,6,7,8,9]

var seek = require('../seek')

tape('easy', function (t) {

  t.equal(seek(a, 0, 1), 0)
  t.equal(seek(a, 0, 2), 1)
  t.equal(seek(a, 0, 3), 2)
  t.equal(seek(a, 0, 6), 5)

  t.equal(seek(a, 0, 8), 7)
  t.equal(seek(a, 0, 9), 8)
  t.end()
})

tape('missing', function (t) {
  t.equal(seek(a, 0, 10), ~a.length)
  t.end()
})

tape('random', function (t) {
  var a = [], N = 100
  for (var i = 0; i < N; i++)
    a.push(Math.random())

  a.sort(function (a, b) { return a - b })

  //console.log(a)
  for(var j = 0; j < N; j++) {
//    console.log(a[j], j)
    t.equal(a[seek(a, 0, a[j])], a[j])
    //t.equal(seek(a, 0, a[i]), i)
    console.log(seek.cmps)
  }
  t.end()
})
