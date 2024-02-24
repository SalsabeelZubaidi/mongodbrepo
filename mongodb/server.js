// const http=require('http')
// http.createServer(function(reg,res){
//     res.end("hello from my server")
// }).listen(5000)

//console.log("hello")



const express = require("express");
const cors = require("cors");
const app = express();


const {MongoClient}=require('mongodb')
//should be changed 
const connection="mongodb+srv://salsabeel:salsabeel@cluster0.txjvuea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client= new MongoClient(connection)

const mydb= client.db('mydb')  // should be changed 

const collection= mydb.collection('users') // should be changed

app.get("/users", async(req,res)=>{
    //find => {} find all element no criteria
    const users= await collection.find({}).toArray()
    ///const users= await collection.find({'name' : req.params.name}) //find specefic element
    res.send(users)
})

app.get("/user/:username", async(req,res)=>{
    const users= await collection.findOne({'username': req.params.username})
    res.send(users)
})


var server=app.listen(5000,function(){
    var host= server.address().address
    var port= server.address().port
})