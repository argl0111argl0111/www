var express = require("express")
var app  = express()
var path = require("path")
//cookie 中间件
var cookieParser = require("cookie-parser")
var static= path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
    res.send("index")
})
app.get("/login",(req,res)=>{
    res.send({"data":req.query.username})
})
app.listen(3000)


// var express = require("express")
// var app  = express()
// var path = require("path")
// //cookie 中间件
// var cookieParser = require("cookie-parser")
// var static= path.resolve(__dirname,"public")
// app.use(express.static(static))
// app.get("/",(req,res)=>{
//     console.log("首页中获取：",req.cookies)
//     res.send({"data":"login中的cookie为：" + req.cookies})
// })
// app.get("/login",(req,res)=>{
//     var obj = req.query.username
//     res.send({"data":obj})
//     req.cookies=obj
// })
// app.get("/list",(req,res)=>{
//     console.log(req.cookies)
//     res.send()
// })
// app.listen(3000)