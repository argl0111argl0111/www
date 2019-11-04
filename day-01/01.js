//初始服务器
//node   模块
//加载 http模块
var http = require("http")
//创建服务器
 var server = http.createServer(function(req,res){
//req request 请求  res  response  相应
    res.end("hello node ")
})
//监听端口
server.listen(3000,function(){
    console.log("服务器已经挂起")
})