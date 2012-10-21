var bcount = 100;
var buckets = [];

chash = require('./lib/chash.js');

var max = 100000;
var i = 0;

while(i<max){
  i++;
  var b = chash(Math.random(),bcount);
  if(!buckets[b]) buckets[b] = 0;
  buckets[b]++;
  
}

console.log(buckets);

var totalerror = 0;
var perfect = max/bcount;

var error = buckets.map(function(v){ 
  var err = Math.abs(v-perfect);
  totalerror += err;
  return err;
})

var avgerr = (totalerror/buckets.length);

var min = Math.min.apply(Math,buckets);
var max = Math.max.apply(Math,buckets);

console.log('perfect: ',perfect,'min: ',min,'max: ',max,' avgerror:', avgerr, 'percent avgerror:',avgerr*0.01);


