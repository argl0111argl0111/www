//模块  module
/*
    *作用域：模块作用域  只在当前模块生效
    *exports  module.exports
    *抛出，暴露
    *exports和module.exports 的区别？
        1.两者都是一个空对象
        2.exports是指向module.exportsde 引用
    *Es6
        export  export  default
*/
//setTimeout  属于宏任务还是微任务?
//promise 属于宏任务还是微任务？
for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i)
    }, 0);
} ..00.
