import React from 'react';
class Signup extends React.Component{

    constructor(){
        super();
        this.state = {username:"",
        pno:null,
        errmsg:""};
    }

    uservalue = (event) => {
        let n= event.target.name;
        let v= event.target.value;
        let err="";
        if(n==="pno"){
            if(v!=="" && !Number(v))
            {
                err = <strong>Invalid value , Enter the number</strong> 
            }
        }
        this.setState({errmsg:err})
        this.setState({[n]:v});
    }
    render(){
        return (
            <form class="was-validated container">
                <div class="form-group">
                
           <h1 style={{color:"blue", textAlign:"center"}}>Welcome {this.state.username}</h1>
          <label class="skills" for="subject">
            Username
          </label>
          <input type="text" id="uname"
          class="form-control" name="username" required/>
         </div>
         <div class="form-group">
         <label class="skills" for="subject">
            PhoneNumber
          </label>
          <input type="text" id="pno" onChange={this.uservalue}
          class="form-control" name ="pno" required/>{this.state.errmsg}
         </div>
         <div class="form-group">
         <label class="skills" for="subject">
            password
          </label>
          <input type="text" id="pwd"
          class="form-control" required/>
         </div>

         <div class="form-group form-check">
             <label class="form-check-label"></label>
             <input class="from-check-input" type="checkbox" name="remember" required /> I Agree the Terms and Conditions
         </div>

         <button type="submit" class="btn btn-primary">Submit</button>       
            </form>

        
        )
    }
}

export default Signup