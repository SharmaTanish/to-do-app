import React from "react";
import Taskcard from "./Taskcard";

class ReadTasks extends React.Component{
  
  constructor(props){
    super(props);
    this.state={tasks:[],completed:-1};
  }

  func1 = ()=>{
    this.setState({...this.state,completed:1});
  }


  func2 = ()=>{
    this.setState({...this.state,completed:0});
  }

  

  componentDidMount = ()=>{
    const url = "http://localhost:3000/readtasks"
    fetch(url).then((res)=>{
      return res.json();
    })
    .then((data)=>{
        this.setState({tasks:data.data}); //here also have to use setState() can't do directly as it will not reflected below!
        // console.log(this.state);
    })
    .catch((err)=>{
        console.log(err);
    })

    // console.log(this.state.tasks);

  }


  render(){

    
    return(
      <>
      
      <h1>Tasks :-</h1>

      <button onClick={this.func1} > Completed Tasks </button>
      &nbsp;
      <button onClick={this.func2} > Uncompleted Tasks </button>

      {this.state.tasks.map((obj,ind)=>{
        if(this.state.completed===obj.completed) return <Taskcard key={ind} task = {obj} /> // curly braces laga di toh return likhna zaruri!
      })}

      </>
    );
  }
}

export default ReadTasks;