import React from "react";

import { useState} from "react";

import { Col, Row, Container} from "react-bootstrap"

import Login from './Login'
import Register from './Register'




const FormPage = () =>{

    const [showLogin,setShowLogin] = useState(false)

    return(
        <>  
        <Container>
            {
                showLogin?
                <Row>
                <div className="d-flex justify-content-center" >
                <Col lg="6">
                  <div className="formpage" style={{marginTop:'150px'}}>
                    <div className="formsetting">
                    <h3 className="d-flex justify-content-center">Sign Up</h3>
                      <Register setShowLogin={setShowLogin} />
                      <div className="formpage d-flex justify-content-end">
                        Sudah punya akun?
                        <a href="#register"  onClick={() => setShowLogin(false)}>Login</a>
                      </div>  
                    </div>
                  </div>  
                </Col>
                </div>
              </Row>
               :
               <Row>
                  <div className="d-flex justify-content-center">
                <Col lg="5">
                    <div className="formpage" style={{top:'40%'}}>
                      <div className="formsetting">
                      <h3 className="d-flex justify-content-center">Login</h3>
                        <Login />
                        <div className="formpage d-flex justify-content-end">
                          Belum punya akun?      
                          <a href="#register"  onClick={() => setShowLogin(true)}>Sign Up</a>
                        </div>
                      </div>
                    </div>
                </Col>
                  </div>
              </Row>
            }
        </Container>
        </>
    )
}

export default FormPage