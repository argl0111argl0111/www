//buffer   二进制数据   缓存区
/*
    1.什么是buffer?
        从类型说，就是一个类数组
        从内存来说，就是开辟的新内存空间
    2.作用：
        处理二进制数据：
        解决数据传输过大
    3.案例：文件流  事件流  Tcp
    4.别名：缓存区(等待区)
    5.什么是二进制数据？ 八进制   十六进制
        返回0和1  
        0000  11
    6.创建buffer?
        new buffer()  废弃
        因为buffer是全局对象，所以不需要通过require加载
    7.buffer可以传输的类型
        string Buffer ArrayBuffer Array or Array-like Object
    8.Buffer下面有哪些方法
        toJSon  tostring  slice  contact  length
        字节  bit  byte
    9.buffer 的编码类型
        utf8  base64  hex  Ascii  unicode
    10.buffer和cache 的区别
        Buffer   相当于临时居住地
        cache    永久的家

*/
//第一种定义buffer的方式
// Buffer.from 把字符串转buffer

var buf  = Buffer.from("jhlnode")
//buffer 6e 6f 64 65
// var buf  = Buffer.form()
// 返回一个已初始化的数据，防止生成新的数据包含旧的数据
// var buf  = Buffer.alloc(10)
//不安全 不推荐使用  未被初始化的数据
// var buf= Buffer.allocUnsafe(10)
//返回旧数据跟新数据
console.log(buf.toString('Ascii'))