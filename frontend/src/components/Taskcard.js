import React from "react";

class Taskcard extends React.Component{

    render() {
        // {console.log(this.props.task)}
        return (
            
            <div>
       
                <h3> {this.props.task._id} {"=>"} {this.props.task.task}</h3>
            </div>
        );
    }
}

export default Taskcard;