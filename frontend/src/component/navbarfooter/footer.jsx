import React from "react";

import {Container,Row,Col} from "react-bootstrap"

import logo from "../img/logo.png"

const Footer = () =>{

    return(
        <>
        <Container>
            <div className="footerbg">
                <Row>
                    <Col lg="3">
                        Copyright © <span className="cemilanrisan" style={{fontSize:'20px'}}>'cemilanRiSan'</span>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Footer