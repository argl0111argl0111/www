/*
什么是cookie？
    cookie是存在访问者计算机中的一个变量，便于访问同一个域名或服务器存储的用户信息
cookie的优缺点？
    优点：
        协助服务承载压力
        存在过期时间，不便于攻击者进行攻击
    缺点：
        长度限制
        安全性比较低
        存储量小4kb

cookie 存储的大小 4kb？
cookie的安全性？
    相对比较低
    如何解决
    生成签名
cookie的特点？
    cookie保存在浏览区本地
    cookie默认不加密，用户之间可以看到
    cookie支持删除
    cookie 标语用于攻击
    cookie易被篡改

*/

// public
var express = require("express")
var path = require("path")
var app  = express()
//静态资源中间件  express.static  中间件必须通过use去使用，这样才能保证和express进行关联
var static =path.resolve(__dirname,"public")
// console.lo(static)
app.use(express.static(static))
//app.use(express.static("./public"))
app.get("/",async(req,res)=>{
    res.send("服务搭建功")
})
app.listen(3000)











var exp=require("express")
var cook=require("cookie-parser")
//cookie中间件
var app=exp()
//让cookie和express建立联系
app.use(cook())
var path=require("path")

var sta=path.resolve(__dirname,"public")
app.use(exp.static(sta))
app.get("/",async (req,res)=>{
    res.send("成功")
})
app.get("/login",async (req,res)=>{
    var obj=req.query.username
    
    // req.cookies=obj
    //cookie maxAge 过期时长 httpOnly 只允许在服务器端修改cookie值
    //signed 是否生成签名 domain域名  secure
    res.cookie("username",obj,{maxAge:9000,httpOnly:true})

    res.send({"data":obj})
})
app.listen(3000)