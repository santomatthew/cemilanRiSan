import React from "react";

import {Container,Row,Col} from "react-bootstrap"

import logo from "../img/logo.png"

const Footer = () =>{

    return(
        <>
        <Container>
            <div className="footerbg">
                <Row>
                    <Col lg="4">
                        <div className="footertitle">
                            <img src={logo} alt="logo" className="logofooter"/>
                        </div>
                        <Row>
                            <Col lg="12">
                                <div className="cemilanrisan">'Cemilan RiSan'</div> 
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <div className="footertitle">
                            <h4>Contact Us</h4>
                        </div>
                        <Row>
                            <Col lg="12">
                                <div className="Default">Default</div> 
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <div className="footertitle">
                            <h4>Navigation</h4>
                        </div>
                        <Row>
                            <Col lg="12">
                                <div className="Default">Soon</div> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Footer