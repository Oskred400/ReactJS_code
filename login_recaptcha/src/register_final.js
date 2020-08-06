import React, { PureComponent } from 'react';

//import { Navbar } from 'react-bootstrap';


import ReactDOM from 'react-dom';
//import { Button } from 'reactstrap';

//import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

//import TekandCo from './TekandCo.png';

//import './newlogin.css';

import './login_final.css';
import 'font-awesome/css/font-awesome.min.css';

import { Redirect, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//var ReactFA = require('react-fontawesome');


//import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import ReqdLogin from './newlogin_bootstrap';
import MainPage from './MainPage';

const envelope_des = (
    <i className = "fa fa-envelope" aria-hidden = "true"/>);

export default class newlogin_bootstrap extends PureComponent{
    
    render() {
        return (


      <div className = "container-fluid">     
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src= {require('./TekandCo.png')} style = {{width:100, marginTop: -11}}  /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <button className="homebutton"><i className="fa fa-home" aria-hidden="true"/>
              </button>
            </li>
          </ul></div>   
      </div></nav>

      <h4 align = "center" style = {{marginTop: 45}}>Register Here</h4>
<br></br>
<center>
      <form className = "form_button"> 
            
            <div class="input-icons"> 
                <i class="fa fa-user icon"> 
              </i> 
                <input class="input-field" 
                       type="text" 
                       placeholder="First Name"/> 
            </div> 

            
            <div class="input-icons"> 
                <i class="fa fa-user icon"> 
              </i> 
                <input class="input-field" 
                       type="text" 
                       placeholder="Last Name"/> 
            </div>
            
            <div class="input-icons"> 
                <i class="fa fa-mobile fa-lg icon"> 
              </i> 
                <input class="input-field" 
                       type="number" 
                       placeholder="Mobile Number"/> 
            </div> 
   
  
            <div class="input-icons"> 
                <i class="fa fa-envelope icon"> 
              </i> 
                <input class="input-field" 
                       type="email"
                       placeholder="Email"/> 
            </div> 
  
            <div class="input-icons"> 
                <i class="fa fa-lock icon"> 
              </i> 
                <input class="input-field" 
                       type="password"
                       placeholder="Password"/> 
            </div> 

            
            <div class="input-icons"> 
                <i class="fa fa-lock icon"> 
              </i> 
                <input class="input-field" 
                       type="password"
                       placeholder="Confirm Password"/> 
            </div> 

        
            <div class="type-left mb-3">
                    <button type="submit" class="btnlogin">Register</button>
                </div>
                
                <h7>Already have an account?</h7>

                <div>
                <Link to = "/login">Login here </Link>
                </div>
            
            
        </form> 
    </center>




      
    
    
</div>        


      



);
    }
}
