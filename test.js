var readline = require ('readline')
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//输入的数值为字符串，用Number()转为数值
rl.question ('enter your number', function(data){
    console.log(Number(data)+5)
    rl.close()
})
//调用rl.close()时候回触发这个事件，readline.interface会放弃命令行的控制权
rl.on ('close',function(){
    console.log('结束测试')
    process.exit(0)
})