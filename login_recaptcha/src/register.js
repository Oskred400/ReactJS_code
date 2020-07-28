import React, { PureComponent } from 'react'

import {FormGroup, Form, Label, Input, Button } from 'reactstrap';

import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

export default class register extends PureComponent {
    render() {
        return(
                
    
            <Form className = "register_form">

              <h1 align = "center"> 
                <span className = "font-weight-bold">Welcome</span> 
                </h1>
                    <h2 align = "center"> Please SignUp</h2>
                    <FormGroup>
                        <Label className = "text-center"><span className = "font-weight-bold">Email id:</span> </Label>
                        <Input type = "email" placeholder = "Enter email address here"/> 
                    </FormGroup>
                    <FormGroup>
                        <Label align = "center"><span className = "font-weight-bold"> Password: </span></Label> 
                        <Input type = "password" placeholder = "Enter password here"/>
                    </FormGroup>
                    <FormGroup>
                        <Label align = "center"> <span className = "font-weight-bold"> FirstName: </span></Label>
                        <Input type = "text" placeholder = "Enter first name"> </Input>


                    </FormGroup>
                    <FormGroup>
                        <Label align = "center"> <span className = "font-weight-bold"> Last name: </span></Label>
                        <Input type = "text" placeholder = "Enter Last name"> </Input>


                    </FormGroup>

                    <Button align = "center" className = 'btn-lg btn-dark'>Log in</Button>

                    <div className = "text-center"> Log in with Facebook account </div>
                    <FacebookLoginButton/>
                    <div className = "text-center"> Login with google </div>
                    <GoogleLoginButton/>
                    <a href = "/sign-up" className = "text-center" align = "center" >Sign-up</a>

                    </Form>
                
            
        );
    }
}
