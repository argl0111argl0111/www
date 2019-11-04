var http = require("http") //引用模块
var fs = require("fs")
http.createServer((req,res)=>{  //创建服务器
    //普通获取数据的方式
    // fs.readFile("./1.txt",(err,data)=>{  //读文件
    //     console.log(data)
    //     res.end(data)    //结束
    // })
    //通过流的方法去获取
    //pipe  创建文件读取
    var fsStream = fs.createReadStream("./1.txt")   //source  创建一个可读流
    6fsStream.pipe(res)     // 管道
    //data  end

}).listen(3000)