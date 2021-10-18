const fs = require('fs');
const zlib = require('zlib');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var Decipher = crypto.createDecipher('aes-256-cbc', key);

const readStream = fs.createReadStream('./newfile.txt');
const unzip = zlib.createUnzip();
const writeStream = fs.createWriteStream('./original.txt');
readStream
  .pipe(Decipher)
  .pipe(unzip)
  .pipe(writeStream);

writeStream.on('finish',function(){
    console.log('file is decrypted and decompressed')
})
