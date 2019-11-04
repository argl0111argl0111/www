var express = require('express');
var app =express();
var art = require("express-art-template")
// 设置模板引擎
// app.set("view engine","html")
app.engine("html",art)
app.get("/",(req,res)=>{
    var list =["tom","jack","rose"]
    res.render("home.html",{list:list})
})








app.listen('3000','127.0.0.1');
//引入express-session
// var session = require('express-session');