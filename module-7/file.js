const fs = require("fs")

//reading a file text

const readText = fs.readFileSync('./texts/read.txt','utf-8')  

console.log(readText)


//writing a text file

const writeText = fs.writeFileSync('./texts/write.txt', readText + 'Hello, this is my written text!')

console.log(writeText)
