import React, { useState } from 'react';
import '../asset/style/style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function LoginForm(props){
    return(
      <div id="myLayer" className="layer" style={props.style}>
        <button onClick={props.close}>X</button>
        <div className="layer-content">
          
          <form action="">
              <Container>
                <Row>
                  <Col><h1 style={{marginBottom: "90px"}}>Login</h1></Col>
                </Row>
                <Row>
                  <Col>
                    <input className="input-auth-form" type="email" name="email" placeholder="&nbsp;&nbsp;E-Mail.."/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input className="input-auth-form" type="password" name="password" placeholder="&nbsp;&nbsp;Password.."/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button>Login</button>
                  </Col>
                </Row>
                
              </Container>
          </form>
        </div>
      </div>
    )
  }

export default LoginForm;