const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const parser = require("body-parser");
const {create_tasks,read_tasks,update_tasks,delete_tasks} = require("./src/controllers");

server.use(cors());
server.use(parser());


mongoose.connect("mongodb://localhost:27017/to-do-app");
mongoose.connection.on("connected",()=>{
    console.log("Db connected!!");
});



server.post("/createtasks",create_tasks);

server.get("/readtasks",read_tasks);

server.put("/updatetasks",update_tasks);

server.delete("/deletetasks",delete_tasks);





server.listen("3000",()=>{
    console.log("server started");
})
