import './App.css';
import { useState } from 'react';
import Axiox from 'axios'

function App() {
  const [usernameReg, setUsernameReg]= useState('')
  const [passwordReg, setPasswordReg]= useState('')

  const register = () => {
    Axiox.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response)=>{
      console.log(response)
    })
  }
  return (
    <div className="App">
      <div className="registration">
        <h1>Register</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
          setUsernameReg(e.target.value);
        }} />
        <label>password</label>
        <input type="text"  onChange={(e)=>{
          setPasswordReg(e.target.value);}}/>
        <button onClick={register}> Register </button>
      </div>
      <div className="Login">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text"  placeholder="username"/>
        <label>password</label>
        <input type="text" placeholder="password" />
        <button> Login </button>
      </div>

    </div>
  );
}

export default App;
