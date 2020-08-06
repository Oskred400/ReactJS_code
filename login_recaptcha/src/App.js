import React from 'react';
import logo from './logo.svg';
import './App.css';


//import login_log from './login_form';
//import Login_form from './newlogin';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';

import { TekandCo } from './TekandCo.png';
import Navbar from 'react-bootstrap/Navbar';

//unused: import Login_form from './bootstrap_login'; 
//import './login_form.css';
//define all functions
//available for multiple imports
//import Login_form from './newlogin';
//import Sid from './newlogin';
//import { NavbarBrand } from 'react-bootstrap';

//import Register from './register_final';
//import './navibar.css' <img src={require('/images/image-name.png')} />;

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import Errorcode from './pages/404page';

//import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import MainPage from './MainPage';
import MainPage from './MainPage';

import Reqdlogin from './newlogin_bootstrap';

import Reqdreg from './register_final';

function App() {
  return (


    <div>
      <Router>
        <div>

          
        
          <Route exact path = "/" component = {MainPage}/>
          <Route path = "/register" component = {Reqdreg}/>
          <Route path = "/login" component = {Reqdlogin}/>
        

        </div>
      </Router>
  

     </div> 
    

    
  );
}

export default App;
