const {Tasks} = require("./models");


const create_tasks = async (request,response)=>{
    var task = request.body;
    await Tasks.create(task); 
    response.json({status:"Task created!"});
}

const read_tasks = async (request,response)=>{
  
    var tasks = await Tasks.find(); 
    response.json({data:tasks});
}

const update_tasks = async (request,response)=>{
    var id = request.query.id;
    var task = request.body;
    await Tasks.findByIdAndUpdate(id,task); 
   
    response.json({status:"Task updated!"});
}

const delete_tasks = async (request,response)=>{
    var id = request.query.id;
    await Tasks.findByIdAndDelete(id); 

    response.json({status:"Task deleted!"});
}

module.exports = {create_tasks,read_tasks,update_tasks,delete_tasks};