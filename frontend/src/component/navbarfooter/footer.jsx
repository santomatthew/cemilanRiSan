import React from "react";

import {Container,Row,Col} from "react-bootstrap"



const Footer = () =>{

    return(
        <>
        <Container>
            <div className="footerbg">
                <Row className="d-flex justify-content-center">
                    <Col lg="3">
                        Copyright © 2021 <span className="cemilanrisan" style={{fontSize:'20px'}}>'cemilanRiSan'</span>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Footer