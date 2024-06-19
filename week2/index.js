const fs  = require('fs');
fs.writeFileSync('hello.txt',"this is first file I have write.",(err)=>{
    if(err){
        throw new Error(err)
    }
    console.log("File made successfully")
});
fs.appendFileSync("hello.txt","this is first appending text");

// read the file using fs module

fs.readFileSync("hello.txt",'utf-8',(err,data)=>{
    if(err){
        throw new Error(err);
    }
      console.log(data);
})