import React from "react";

class DeleteTasks extends React.Component{

    constructor(props){
        super(props);
        this.state={status:""}
    //   console.log(this);
    }
   

    delete = () => {
        var val = document.getElementById("taskinput").value;
        // console.log(val);
        const url = `http://localhost:3000/deletetasks?id=${val}`;
        fetch(url,{
            method:"delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
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
                <label>Enter the task id which you want to delete</label>
                <input id="taskinput" ></input>
                <button type="button" onClick={this.delete} > Delete Task</button>
            </form>
            <p id="para" > {this.state.status} </p>
            </div>
        )

    }

}

export default DeleteTasks;