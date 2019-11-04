//createReadStream  createWriteStream  
var fs = require("fs")  //引入模块
var readStream= fs.createReadStream("./1.txt")  //创建可读流
var length = 0
//探究数据流转的
readStream.on("data",(chunks)=>{  //给readStream加事件
    length++
    console.log(chunks.toString())  //不加tostring   会出现二进制   buffer

})
readStream.on("end",()=>{
    console.log(length)

})
// readStream.on("data",(chunks)=>{
//     console.log(chunks)

// })
// readStream.on("end",()=>{
//     console.log("end")

// })