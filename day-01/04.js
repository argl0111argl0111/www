var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // var obj = url.parse(req.url,true).query
    // res.end("接受的username:"+obj.username)   // 在地址栏里输入localhost:3000/?username=f 就会输出localhost:3000/?username=f
    var obj=url.resolve("http://localhost:3000","/new")  //resolve  解析成正确的路径
    res.end(obj)  //输出http://localhost:3000/new
}).listen(3000)
