const mongoose = require("mongoose");

const taskschema = mongoose.Schema({
    task:String,
    completed:Number,
})

const Tasks = mongoose.model("Tasks",taskschema);

module.exports = {Tasks};

// const taskschema = mongoose.Schema({
//     task:String,
// })

// const Tasks = mongoose.model("Tasks",taskschema);

// module.exports= {Tasks};