const { error } = require("console");
const express = require("express");
const fs = require("fs")
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
   
 let data= fs.readFileSync("rrr.json","utf-8")
 let fil = JSON.parse(data)
 if(fil){
  res.status(200).send(data)
 }else{
  res.status(500).send("error")
 }
})

app.get("/user/",(req,res)=>{
     const {name} = req.query
 let data= fs.readFileSync("rrr.json","utf-8")
 let fil = JSON.parse(data)
 const result = fil.user.find((e)=>{
  return e.name === name
 })
 if(result){
  res.status(200).send(result)

 }else {
  req.status(500).send("error")
 }
})

app.listen(3002,()=>{
  console.log("started");
  
})