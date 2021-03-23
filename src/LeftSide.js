import React from 'react';
import {Form, Button,Row,Col,Image} from 'react-bootstrap';

const LeftSide = () => {
 return (
     <div>
       
         <br/>
         <br/>
         <h4 style={{fontStyle:"bold",textAlign:"left"}}>Welcome to Eolas International Portal</h4>
         <h6 style={{textAlign:"left"}}>Auditing product quality globally</h6>
         <Form style={{width:"80%", marginLeft:"0%", marginTop:"5%"}}>
             <Form.Group >
                
                 <Form.Control type="email" placeholder=" Email" />
             </Form.Group>
             <Form.Group >
                
                 <Form.Control type="password" placeholder="Password" />
             </Form.Group>
             <br/>
             <Button style={{float: 'left'}} color="#142c5c" className="float-left">LOGIN </Button>
         </Form>
         <br/>
         <br/>
         <br/>
      <h6 style={{color:"#142c5c",textAlign:"left"}}>Forget Password ? </h6>
      <br/>
      <h6 style={{color:"#142c5c",textAlign:"left"}}>Register for a New Account </h6>
     </div>
 )
}

export default LeftSide;