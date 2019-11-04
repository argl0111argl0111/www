/*
    流的类型？ 四种
    readable  stream   可读流   wrirteable   stream   可写流
    duplex  双工流   (可读可写)   Tranform  转换流
    数据的压缩  zlib
    
*/
// console.log  跟 network  都是响应了
var fs = require("fs")
var zlib =require("zlib")
var readStream=fs.createReadStream("./1.txt")
var writeStream =fs.createWriteStream("./1.txt.gz")
//流支持链式操作  zlib
readStream.pipe(zlib.createGzip()).pipe(writeStream)