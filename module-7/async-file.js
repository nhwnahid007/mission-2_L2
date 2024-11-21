const fs = require('fs')

// reading text asynchornously

fs.readFile('./texts/read.txt','utf-8', (err,data)=>{
    if(err){
        throw Error("Error reading text")
    }
    console.log(data)

    //writing text asynchornously

    fs.writeFile('./texts/read3.txt',data+' Read-3', 'utf-8', (err)=>{
        if(err){
            throw Error ('Error while writing')
        }
    })
}) 

