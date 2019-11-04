var express = require("express")
// console.log(express)
var app =express()
//get  指代的是get请求
app.get("/",(req,res)=>{
    console.log(arguments)
    res.send({"success":"ok","data":[{"name":"tom","age":12}]})
})
app.listen(3000)