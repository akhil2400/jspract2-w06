// const express = require('express');
// const app = express();
// const fs = require('fs');
// const currDate = new Date()
// fs.writeFile("bbb.txt",currDate.toString(),(err)=>{
//   if(err){
//     console.error(err)
//   }else{
//     console.log("added");
    
//   }
// })

// app.get('/',(req,res)=>{
//   res.send(currDate.toString())
// })

// app.listen(3000,()=>{


//   console.log("server started http://localhost:3000");
  
// })

// const http = require('http');
// const fs = require('fs');
// const currDate = new Date()
// const server = http.createServer((req,res)=>{
//   fs.writeFile("rrr.txt",currDate.toString(),(err)=>{
//     if(err){
//       console.error(err);
//       // res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Internal Server Error');
//     }else{
//       console.log("added");
//       // res.writeHead(200,{'content-Type': 'text/plain'})
//       res.end("logged")
//     }


//   })
//   fs.appendFile("rrr.txt","hi",(err)=>{
//     if(err){
//       console.log(err);
      
//     }else{
//       console.log("success");
      
//     }
//   })
// })
// fs.readFile("rrr.txt",'utf-8',(err,data)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data);
    
//   }
// })


//  let file=fs.existsSync('rrr.json')
//  console.log(file)
// server.listen(3004,()=>{
//   console.log("started at http://localhost:3004");
  
// })

// const express = require('express')
// const app = express()

// app.get("/:num1/:num2",(req,res)=>{
//   const num1 = parseFloat(req.params.num1)
//   const num2 = parseFloat(req.params.num2)
//   if (!isNaN(num1) && !isNaN(num2)){
//     let sum = num1+num2;
//     res.status(200).send(sum.toString())

//   }else{
//     res.status(500).send("error")
//   }
// })
// app.listen(3000,()=>{
//   console.log("started");
  
// })

const http = require('http');
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-Type':'text/plain'})
  res.write("Hi hello")

  res.end()
});
server.listen(3001,()=>{
  console.log("started");
  
})

