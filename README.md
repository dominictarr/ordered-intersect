# ordered-intersect

Calculate the intersection of two arrays.
The arrays _must_ be ordered, with no duplicates.

# example

``` js
var intersect = require('ordered-intersect')
console.log(intersect.intersect([1,2,3,5,7], [2,3,7,9]))
=> [2,3,7]
```

## api

in all the following functions, `cmp` is optional.
like signature is the same as `Array#sort(cmp)`.
takes two arguments and returns `-1`, `0` or `1`.
`0` if equal, `-1` if `a < b`, `1` if `a > b`.

### intersect(a, b, cmp?)

return an array of all items in both `a` and `c`.

### union(a, b, cmp?)

return an array of items that are in `a` or `b`, without duplicating
items that are in both `a` and `b`.

### difference (a, b, cmp?)

return items that are in `a` but not `b`.
(does not include items that are in `b` but not `a`)

## License

MIT
