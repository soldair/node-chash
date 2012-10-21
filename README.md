
[![Build Status](https://secure.travis-ci.org/soldair/node-chash.png)](http://travis-ci.org/soldair/node-chash)

# node-chash

hash a value to a consistent number within a specified range. in goes key out goes number that's it.

## example

```js
var chash = require('chash');

var colors = ['red','blue','green','purple']
, bobscolor = chash('bob',colors.length)
, ryanscolor = chash('ryan',colors.length)
, suescolor = chash('sue',colors.length)
;

console.log('bob will always be',colors[bobscolor]);
console.log('ryan will always be',colors[ryanscolor]);
console.log('sue will always be',colors[suescolor]);
```



## notes

this distribution algorithm is resonably good producing 0.6-2 % error in assignment using Math.random as input with 100-100000 buckets
will work on getting better numbers. will always accept pull requests that contain a proper statistical description of this behavior

