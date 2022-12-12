import React from "react";

class UpdateTasks extends React.Component{

    constructor(props){
        super(props);
        this.state={status:""}
    //   console.log(this);
    }
   

    update = () => {
        var id = document.getElementById("taskinputid").value;

        var val = document.getElementById("taskinputtitle").value;

        var comp = document.getElementById("taskinputcomp").value;
        // console.log(val);
        const url = `http://localhost:3000/updatetasks?id=${id}`;
        
        var num;
        if(comp===true) num=1;
        else num=0;

        fetch(url,{
            method:"put",
            // in post method the below headers and JSON.stringify() have to be written!!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({task:val,completed:num})
            
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
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
                <label>Enter the id of the task which you want to update</label>
                <input id="taskinputid" ></input>

                <br/>
                
                <label>Enter the new title</label>
                <input id="taskinputtitle" ></input>

                <br/>

                <label>If want to mark task as completed then type "true" else "false"</label>
                <input id="taskinputcomp" ></input>

                <br/>

                <button type="button" onClick={this.update} > Update Task</button>
            </form>
            <p id="para" > {this.state.status} </p>
            </div>
        )

    }

}

export default UpdateTasks;