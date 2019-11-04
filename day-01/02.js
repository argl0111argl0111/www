//解决乱码
// var http = require("http")
//  var server= http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//     res.end("中国")
// })
// server.listen(3000,function(){
//     console.log("乱码")
// })


   


var fs = require("fs")
var http = require("http")
var server = http.createServer(function (req, res) {
    // req  请求   res响应
    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})    //解决乱码
    // res.end("中国")

    if (req.url == "/") { //如果地址栏访问的是/  则加载bar.html
        fs.readFile("./bar.html", (err, data) => {
            res.end(data)
        })
    } else if (req.url == "/foo") { //如果地址栏访问的是/foo  则加载foo.html
        fs.readFile("./foo.html", (err, data) => {
            res.end(data)
        })
    }else{   //都不是的话  则加载404.html
        fs.readFile("./404.html", (err, data) => {
            res.end(data)
        })
    }
}).listen(3000)
