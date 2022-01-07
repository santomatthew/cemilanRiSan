import React from "react";

import { useState } from "react";

import {Row,Col,Text,Button,Modal, Container} from "react-bootstrap"

import logo from "../component/img/logo.png"

import Menu from "../component/navbarfooter/navbar"
import Footer from "../component/navbarfooter/footer"

import {} from "react-bootstrap";

const Index = () =>{

    // Modal Tutorial
    const [showTutorial, setShowTutorial] = useState(false);
    const handleClose = () => setShowTutorial(false);
    const handleShow = () => setShowTutorial(true);


    return (
        <>
            <Menu/>
            <Container>
                <Row>
                    <Col lg="12" className="d-flex justify-content-center">
                        <div className="first" style={{marginTop:'10px'}}>
                            <div className="firstmodal cemilanrisan">
                            <img src={logo} className="logosize" alt="cemilanrisan" style={{width:'60px',height:'60px'}}/>
                            `cemilan RiSan`
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <Button variant="success" onClick={handleShow}> 
                        !! Click Me !!
                    </Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>

                    <Modal
                        show={showTutorial}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Welcome To <span className="cemilanrisan">'cemilanRiSan'</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <span className="cemilanrisan" style={{fontSize:'25px'}}>'cemilanRiSan'</span> adalah suatu platform untuk anda dalam mendapatkan berbagai resep makanan ringan yang unik, kreatif dan tentunya enak. Apabila anda ingin mempublikasikan resep yang anda miliki, anda harus melakukan Login terlebih dahulu <a href="#login">disini</a>. Silahkan klik button close untuk menutup pemberitahuan ini
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </Col>
                </Row>
            </Container>
        <Footer/>
        </>

        
    )

}

export default Index