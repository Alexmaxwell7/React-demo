import React from 'react'

export default class Task4 extends React.Component{
    render(){
        const mylist = ["max","well","max","alex","maxwell"];
        var newlist = mylist.filter(function(elem, pos) {
                return mylist.indexOf(elem) === pos;
        });

        return(

            <div>
                <h1 style={{color:"green",textAlign:"center"}}>Forth Task</h1>
                <p style={{textAlign:"center"}}>New Array {newlist}</p>
            </div>

            

        );
    }
}

