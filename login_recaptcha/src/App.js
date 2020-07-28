import React from 'react';
import logo from './logo.svg';
import './App.css';


//import login_log from './login_form';
//import Login_form from './newlogin';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';

import { TekandCo } from './TekandCo.png';
import Navbar from 'react-bootstrap/Navbar';

import Login_form from './bootstrap_login'; 
import './login_form.css';
//define all functions
//available for multiple imports
//import Login_form from './newlogin';
import Sid from './newlogin';
import { NavbarBrand } from 'react-bootstrap';

import Register from './register';
//import './navibar.css' <img src={require('/images/image-name.png')} />;


import Errorcode from './pages/404page';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './MainPage';


function App() {
  return (


    <div>
      
    <Navbar className = "navbar navbar-dark bg-dark">
      <NavbarBrand>
        
        <img src = {require('./TekandCo.png')} style = {{width:100,  marginTop: -11}} />
        </NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text align = "text-right">
            Hello World
      </Navbar.Text>
      </Navbar.Collapse>


         </Navbar>

         <Router>
                    <Switch>

                      <Route exact path = "/" component = { MainPage } />
                        <Route exact path = "/Login" component = { Login_form } />
                        

                    <Route exact path = "/Signup" component = { Register }/>
                     <Route exact path = "/404" component = { Errorcode } />
                     <Redirect to = "/404" />
                    </Switch>


                    <li><Link to = "/Login">Login Page</Link></li>
            <li><Link to = "/Signup">Sign Up Page</Link></li>
            
            
                </Router>
 
     
    
     </div> 
    

    
  );
}

export default App;
