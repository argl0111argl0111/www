// 监控日志  readline
var fs = require("fs")  //引入模块
//监控日志
var readline = require("readline") 
 var readStream=fs.createReadStream("./1.txt")
//console.log(readline)
// data end     line监听日志事件  data（监听输入数据） - 当有数据可读时触发。end（完成数据读取） - 没有更多的数据可读时触发。
/*
    data   监听输入数据
    end   完成数据读取

*/

var rl = readline.createInterface({
    //监听输入数据
    input : readStream
//日志执行事件
})
rl.on("line",(lineData)=>{
    console.log(lineData) 
    console.log(new Date() + "linenum") 

})
//日志读取完成关闭
rl.on("close",()=>{
    console.log("line监听数据完毕")

})