
import React from 'react';

class Task extends React.Component{
    constructor(){
        super();
        this.state = {name:"Anonymous",
        task:"task one"
        }
    }   render(){
        return(
            <div>
            <h1 style={{color:"green",textAlign:"center"}}>First task</h1>
            <p>Hello  {this.state.name}</p>
            <p>completed {this.state.task}</p>
            </div>
        )
    }
}

export default Task