import React, { useState } from 'react';
import {PureComponent} from 'react';
//import ReactDOM from 'react-dom';
//export default login_log extends PureComponent

//import pop up
import PopUp from 'reactjs-popup' ;



function login_log(){

    const [email_id, setEmailid] = useState(0);
    const [passwd, setPasswd] = useState(0);

    //submit an event 

    function handleSubmit(event)
    {
        //precent default 
        event.preventDefault();
        
    }



    function  validate_login(){
        //Not null email and password id 
        //return cond1 && cond2 && cond3 &&...&& condn 
        //return 1 then only login form validated 
        
        const true_condn =  validate_username() && validate_passwd();
        return true_condn;
    }
        //instead of var, modern javascript uses const 
        //email length>0

    function validate_username()
    {
        //usinf regular expressions to test for mail
        //get email from webpage
        const result = "";
        const reg_email = document.getElementById("email").value;
        setEmailid(reg_email);
        const reg_exp =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg_email.match(reg_exp)){
            result = true;}
        else
            result = false;

        //return reg_email.test(String(email).toLowerCase());
            return result;
    }    

    function validate_passwd(String_s)
    {

        const res = "";
        const str = document.getElementById("passwd").value;
        setPasswd(str); 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) 
                res = true; 
            else 
                res = false;

                //pop up 
            //document.getElementById("t2").value = res;
            
        return res;

    }
    
        

    }
      

        




export default login_log;  