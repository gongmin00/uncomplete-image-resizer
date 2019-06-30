var http = require('http')
//创建服务器
http.createServer(function(req,res){

const fs = require('fs');
const resizeImg = require('resize-img');
const path = require('path');
const dimention = require('./dimention')
//上面一行或者也可以写成 import dimention from './dimention'
const origDir = path.join(__dirname, '/img/orig/')
const outputDir = path.join(__dirname, '/img/output/')
const chalk = require('chalk')

    console.log(chalk.grey('system launching...'))
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    //buf是promise的回调函数？

    fs.readdir(origDir, (err, files) => {
        files.forEach((fileName, i) => {
            const { ratio } = dimention(origDir, fileName)
            //为什么ratio要加{}
            console.log(chalk.green('start resize image'))
            console.log(`${fileName} image ratio is ${ratio}`)
            const finalWidth = $('#input').val()
            resizeImg(fs.readFileSync(`${origDir}${fileName}`), { width: finalWidth, height: finalWidth / ratio }).then(buf => {
                fs.writeFileSync(`${outputDir}${fileName}`, buf);
            })
            console.log(chalk.yellow(`${fileName} resized successfully`))
        })
    })
}).listen(3000,'192.168.0.23')


