import React from 'react'; 
//import  { useState } from 'react'; 
const login_form = (props) =>{

    return(
        <form action = "index" onSubmit={handleSubmit}>
          <label htmlFor = "Email">Email: </label>
          <input type = "text" id = "email" name = "email"/> 
          <label htmlFor = "password">Password: </label>
          <input type = "text" id = "passwd" name = "passwd"/> 

         <input type = "submit" onClick = {logg_enter} value="Submit Details" />
        </form>
        );
/**
 * 
 * @param {
 * 
 * The for attribute is called htmlFor for consistency with the DOM property API.
 *  If you're using the development build of React, you should have seen a warning in your console about this.
 * @param {*} passwd 
 */
        //validation 
  //      const [email, setemail] = useState("");
    //    const [passwd, setpasswd] = useState("");

        //set creds 
/*
        function set_creds(regemail, regpasswd)
        {
            setemail(regemail);
            setpasswd(regpasswd);

        }*/

        function handleSubmit(event)
        {
            event.preventDefault();
            //prevents refreshing of page
        }

        function validate_creds(email, passwd)
        {
            const condn1 =  email.length>0 && passwd.length>0;
            const reg_exp =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //email valid format
            const condn3 = email.match(reg_exp); 
            //password valid format
            
            let res_pass = false; 

            const str = passwd;

            if (str.match(/[a-z]/g) && str.match( 
                /[A-Z]/g) && str.match( 
                /[0-9]/g) && str.match( 
                /[^a-zA-Z\d]/g) && str.length >= 5) 
            res_pass = true; 
        else 
            res_pass = false;

            return condn1 && condn3 && res_pass;



        }
        //const onClickForgotPassword = () => {
          //  history.push('/auth/forgotpassword');
        //};

        //const logg_enter = () =>
        function logg_enter()
        {
            //get email and password from webpage
            const email = document.getElementById("email").value;
            const passwd = document.getElementById("passwd").value;

            //set creds 
//            set_creds(reg_email, reg_passwd);

            //validate creds
            

            const result_enter = validate_creds(email, passwd);

            if(result_enter === true){
                console.log("login successful"); 
                document.write("success");}
            else{
                console.log("login failed"); 
                document.write("Cannot login");
            }

        }







};
export default login_form;
{
/* 
    //define login parameters 
    //empty login here
    const [email, setEmail] = useState("");

    //empty passwd field here 

</input>    const [passwd, setpasswd] = useState("");
    //apply consitions later
    function validate_creds(){
        return email.length>0 && passwd.length>0;

    }

    function set_creds(email, password)
    {
        setEmail(email);
        setpasswd(password);
    }
    function logg_enter(){
        //use id's email and passwd 
        const reg_email = document.getElementById("email").value; 
        //retrieve from site
        const reg_passwd = document.getElementById("passwd").value;
        //set credentials
        set_creds(reg_email, reg_passwd); 
        
        const result_enter = validate_creds() 

        if(result_enter == true)
            return "login success";
        else
            return "login failure"; 





    } */}