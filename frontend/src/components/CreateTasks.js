import React from "react";

class CreateTasks extends React.Component{

    constructor(props){
        super(props);
        this.state={status:""}
    //   console.log(this);
    }
   

    create = () => {
        var val = document.getElementById("taskinput").value;
        // console.log(val);
        const url = "http://localhost:3000/createtasks";
        fetch(url,{
            method:"post",
            // in post method the below headers and JSON.stringify() have to be written!!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({task:val,completed:0})
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            //here to use this.setstate this function "create" have to be arrow function since if normal function then "this" will refer to local function "this" not class component wala "this"!
            this.setState({status:data.status})
        })
        .catch((err)=>{
            this.setState({status:"some error occured!"})
        })

    }


    render(){

        return(
            <div>
            <form>
                <label>Enter the task title which you want to add</label>
                <input id="taskinput" ></input>
                <button type="button" onClick={this.create} > Create Task</button>
            </form>
            <p id="para" > {this.state.status} </p>
            </div>
        )

    }

}

export default CreateTasks;