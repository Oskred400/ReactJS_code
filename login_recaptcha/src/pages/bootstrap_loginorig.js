//import button, Label and everything from reactstrap 

//import React from 'react';

//import ReactDOM from 'react-dom';


import React, { PureComponent } from 'react'

//reactstrap imports 

import { FormGroup, Button, Label, Form, Input } from 'reactstrap';

import './login_form.css';

///import Register from './register';


//import { Link } from 'react-router';

import { Navbar } from 'react-bootstrap';

import Register from './register';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


import {FacebookLoginButton, GoogleLoginButton, TwitterLoginButton} from 'react-social-login-buttons';
//form groups and labels for email and password
export default class bootstrap_login extends PureComponent {
    render() {
        return (
            


    
            <Form className = "login_form">

                <h1 align = "center"> 
                <span className = "font-weight-bold">Welcome</span> 
                </h1>
                <h2 align = "center"> Please Login</h2>
                <FormGroup>
                    <Label className = "text-center"><span className = "font-weight-bold">Email id:</span> </Label>
                    <Input type = "email" placeholder = "Enter email address here"/> 
                </FormGroup>
                <FormGroup>
                    <Label align = "center"><span className = "font-weight-bold"> Password: </span></Label> 
                    <Input type = "password" placeholder = "Enter password here"/>
                </FormGroup>


                <Button align = "center" className = 'btn-lg btn-dark'>Log in</Button>
                <FormGroup>
                

                    <Input type="checkbox" className="custom-control-input" id="cb1"/>
                        <Label className="custom-control-label text-black-bold" for="cb1">Remember me</Label>

                    </FormGroup>
                
                
                <div className = "text-center"> Log in with Facebook account </div>
                <FacebookLoginButton/>
                <div className = "text-center"> Login with google </div>
                <GoogleLoginButton/>
                <div className = "text-center"> Login with twitter</div>
                <TwitterLoginButton/>
                <Router>
                    <Switch>

                    <Route exact path = "/Signup" component = { Register }/>
                    </Switch>
                </Router>

                
            </Form>
            
        )
    }
}


//class new_login extends Component