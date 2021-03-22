import React from "react";

class TaskSecond extends React.Component{
    constructor(){
        super();
        this.name="myComponent";
        this.value="task two"
        this.handleClick2=this.handleClick1.bind(this);
    }
    handleClick1(){
        alert(this.name)
    }
    handleClick3 =()=> alert(this.name);
    render(){
        return(
            <div>
                <h1 style={{color:"green",textAlign:"center"}}>Second Task</h1>
                <button onClick={this.handleClick1()}>click1</button>
                <p>First method renders  first time only otherwise data will undefined</p>
                <button onClick={this.handleClick1}>click2</button>
                <p>The second method is undefined data incase put a () symbol, it will invoke first time only otherwise the same first method</p>
                <button onClick={this.handleClick2}>click3</button>
                <p>Third one pass data this keyword so handleClick2 successfully execute.</p>
                <button onClick={this.handleClick3}>click4</button>
                <p>forth one arrow function so that function executed successfully</p>
            </div>
        );
    }
}

export default TaskSecond