const fs = require ('fs') 
const { resolve } = require('path')

const readdableStream = fs.createReadStream(resolve(__dirname,'./input.txt'), {
    highWaterMark: 15,
});
readdableStream.setEncoding('utf-8')

const writableStream = fs.createWriteStream(resolve(__dirname,'./output.txt'))


readdableStream.on('readable', () => {
    try {
        writableStream.write(`${readdableStream.read()}\ n`)
    } catch (error) {
        
    }
})

writableStream.on('end', () => {
    console.log('finish')
})