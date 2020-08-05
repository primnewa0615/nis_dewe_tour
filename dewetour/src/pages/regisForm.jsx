import React, { useState } from 'react';
import '../asset/style/style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function RegisForm(props){
    const [width, setWidth] =  useState({width : 0});
  
    return(
      <div id="myLayer" className="layer" style={props.style}>
        <button onClick={props.close}>X</button>
        <div className="layer-content">
          
          <form action="">
              <Container>
                <Row>
                  <Col><h1>Register</h1></Col>
                </Row>
                <Row>
                  <Col>
                    <input className="input-auth-form" type="text" name="nama" placeholder="&nbsp;&nbsp;Full Name.."/>
                  </Col>
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
                    <input className="input-auth-form" type="text" name="nama" placeholder="&nbsp;&nbsp;Phone Number.."/>
                  </Col>
                </Row>
                  <Col>
                    <button>Regis</button>
                  </Col>
                
              </Container>
          </form>
        </div>
      </div>
    )
  }

  export default RegisForm;