//public  公共
var express = require("express")
// var path  =require("path")
var app  = express()
//静态资源中间件  express.static
console.log(express)
app.get("/",async(req,res)=>{
    res.send("服务创建成功")
})
app.listen(3000)