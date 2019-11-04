var http = require("http")
var fs = require("fs")
var path=require("path")
var sd = require("silly-datetime")
var form = require("formidable")
http.createServer((req, res) => {
    if(req.url == "/dopost"){
        //formidable下的一种方法
        var fm = form.IncomingForm()
        //fields  文本域   files  文件域
        fm.uploadDir="./uploads"
        fm.parse(req,function(err,fields,files){
            var low = files.pic.path
            //获取到图片原本的地址，不加后缀名
            var extname  = path.extname(files.pic.name)
           // extname    获取文件后缀名
            var time=  sd.format(new Date(),"YYYYMMDDHHmmss")
            var fanshen = "./uploads/"+ time +extname
            //拼接出一个新的地址名，用于储存图片
            console.log(fanshen)
            //将之前文件的地址名替换为新拼接的名字，直接改变文件的储存位置和名字
            fs.rename(low,fanshen,(err)=>{
                if(err) throw err
            })
            res.end("success") 
        })
    }
}).listen(3000)