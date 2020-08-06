import React, { PureComponent } from 'react'

import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './MainPage';
import Login_form from './bootstrap_login';
import Register from './register';
import Errorcode from './pages/404page';

export default class index_main extends PureComponent {
    render() {
        return (
            <div>

                
         <Router>
                    <Switch>

                      <Route exact path = "/" component = { MainPage } />
                        <Route exact path = "/Login" component = { Login_form } />
                        

                    <Route exact path = "/Signup" component = { Register }/>
                     <Route exact path = "/404" component = { Errorcode } />
                     <Redirect to = "/404" />
                    </Switch>

            
            
                </Router>
 

                
            </div>
        )
    }
}

