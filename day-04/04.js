//接受post传输的数据
//中间件  body-parser  第三方的东西需要下载
var express = require("express")
var bodyParser = require("body-parser")
var app =express()
//使用中间件
//处理json数据
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send("首页")
}) 
app.post("/+",(req,res)=>{
    console.log(req.body)
    res.send({"data":"接受到post的数据为：" + req.body.username})
})
app.listen(3000)