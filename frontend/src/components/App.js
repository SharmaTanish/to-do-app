import React from "react";

import CreateTasks from "./CreateTasks";
import ReadTasks from "./ReadTasks";
import UpdateTasks from "./UpdateTasks";
import DeleteTasks from "./DeleteTasks";


import { Route ,BrowserRouter, Routes} from "react-router-dom";


class App extends React.Component{
  


  render(){

    
    return(
      <>
      
        <BrowserRouter>
        {/* 
        1. In v6 "Switch" is replaced with "Routes"!!!
        2. In v6 "component={ReadTasks}" is replaced with "element={<ReadTasks/>}"!!!
        */}
          <Routes>
            <Route path="/" element={<ReadTasks/>} ></Route>
            <Route path="/createtasks" element={<CreateTasks/>} ></Route>
            <Route path="/updatetasks" element={<UpdateTasks/>} ></Route>
            <Route path="/deletetasks" element={<DeleteTasks/>} ></Route>
             
          </Routes> 
        </BrowserRouter>

      </>
    );
  }
}

export default App;