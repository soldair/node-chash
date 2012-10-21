var crypto = require('crypto');

module.exports = function(str,buckets){
  b = md5(str);
  return b.readUInt32LE(0)%buckets;
}

var md5 = function(str){
  var h = crypto.createHash('md5');
  h.update(''+str);
  return new Buffer(h.digest('base64'),'base64');
}

