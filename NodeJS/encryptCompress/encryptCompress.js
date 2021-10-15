const fs = require('fs');
const zlib = require('zlib');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createCipher('aes-256-cbc', key);

const readStream = fs.createReadStream('./file.txt');
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./newfile.txt');
readStream
  .pipe(gzipStream)
  .pipe(cipher)
  .pipe(writeStream);

writeStream.on('finish',function(){
    console.log('file is compressed and encrypted')
})
