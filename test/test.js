var test = require('tap').test
, chash = require('../chash')
;

test('test works',function(t){

  var colors = ['red','blue','green','purple']
  , ryanscolor = chash('ryan',colors.length)
  ;

  t.equals(colors[ryanscolor],'red','ryans color should always be red');
  t.end();

});
