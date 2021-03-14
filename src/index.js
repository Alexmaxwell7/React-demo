import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

import './SignUpform'
import Signup from "./SignUpform";

class Login extends React.Component{
  render() {
    return (
      <div class="row">
        <div class="col-md-8 offset-md-2">
       <form>
         <div class="form-group">
           <h1 style={{color:"blue", textAlign:"center"}}>Login</h1>
          <label class="skills" for="subject">
            Username
          </label>
          <input type="text" id="username"
          class="form-control" required/>
         </div>
         <div class="form-group">
           <label class="skills" for="Body">
             Password
           </label>
           <input type="password" id="pwd" class="form-control" required/>
         </div>
         <input type="submit"
         class="btn btn-primary"
         value="Login"
         id="navigation"/>
       </form>
       </div>

       <Signup/>
      </div>
    )
    
  }

 
}


ReactDOM.render(<Login />,document.getElementById('root'))
