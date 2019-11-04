var http = require("http")
var  fs = require("fs")
var art = require("art-template")
console.log(art)
http.createServer((req,res)=>{
    fs(req.url =="/favicon.ico"){         //去掉重复的
        return
    }
    fs.readFile("./index.art",(err,data)=>{
        //获取art-template 模板 
        var template =data.toString()  //buffer
        
        // 定义数据
        var list =["tom","jack","rose"]
        var htmlData = art.render(template,{a:list})
        // render  第一个参数模板  第二个参数数据
        res.end(htmlData)
    })
}).listen(3000)