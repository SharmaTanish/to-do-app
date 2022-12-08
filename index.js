const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());

server.get("/",(request,response)=>{
    response.json({heading:"Welcome to to-do application!"});
})




server.listen("3000",()=>{
    console.log("server started");
})
