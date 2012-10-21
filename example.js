var chash = require('./chash');

var colors = ['red','blue','green','purple']
, bobscolor = chash('bob',colors.length)
, ryanscolor = chash('ryan',colors.length)
, suescolor = chash('sue',colors.length)
;

console.log('bob will always be',colors[bobscolor]);
console.log('ryan will always be',colors[ryanscolor]);
console.log('sue will always be',colors[suescolor]);
