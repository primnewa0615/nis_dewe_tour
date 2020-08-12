import React, { useState } from 'react';
import RegisForm from './regisForm';
import LoginForm from './loginForm';
import '../asset/style/style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import icon from '../asset/img/Icon.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderHome(){
    const [width, setWidth] =  useState({width : 0});

    function FormOpen(){
      setWidth({width : '100%'});
    }
    return(
      <div className="Container-header">
          <div className="wrap1-header">
            <div className="Left-header">
              <img src={icon} alt="" className="App-icon" />
            </div>
            <div className="Right-header">
              <Router>
                <Link to="/login"><Button className="button" variant="outline-light" onClick={FormOpen}>Login</Button> </Link>
                <Link to="/regis"><Button className="button" variant="warning" onClick={FormOpen}>Register</Button></Link>
                <Switch>
                  <Route path="/login">
                    <LoginForm style= {width} close={() => setWidth({width : 0})}/>
                  </Route>
                  <Route path="/Regis">
                    <RegisForm style= {width} close={() => setWidth({width : 0})}/>
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
          <div className="tittle">
            <h1 className="thick">Explore</h1>
            <h1 className="thin">your amazing city together</h1>
          </div>
          <div className="search">
            <p>Find great places to holliday</p>
            <input className="input" type="text"/>
            <button className="button">Warning</button>
          </div>
          
          
      </div>
    )
  }

  export default HeaderHome;