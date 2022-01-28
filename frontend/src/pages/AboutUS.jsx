import React from 'react'
import Navigasi from '../component/navbarfooter/navbar'
import Footer from '../component/navbarfooter/footer'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import '../styles/Aboutus.css'






const AboutUs=()=>{
    return(
        <>
            <Navigasi/>
                    <Container className='navbarfont aboutusspecial'>
                <Row className="d-flex justify-content-center">
                    <Col lg="3">
                        <h1 className='navbarfont aboutus'>About Us</h1>
                    </Col>
                </Row>    
                

                <Row className="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                    <Col lg="12">
                    <p style={{fontSize:'20px',fontStyle:"italic"}}>“People want honest, flavourful food, not some show-off meal that takes days to prepare.” — Ted Allen</p>
                    </Col> 
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col lg="6">
                    <p style={{textAlign:'justify'}}>Terima kasih telah menjadikan <span className="cemilanrisan" style={{fontSize:'25px'}}>'cemilanRiSan'</span> sebagai platform anda dalam membuat resep cemilan dan berbagi dengan user lainnya. Kami hadir untuk membantu anda dalam membagikan resep, terkhususnya untuk anda yang memiliki kreatifitas dalam mengolah suatu cemilan menjadi cemilan yang unik, sehat, dan enak.</p>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                    <Col lg="5" >
                    <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Front-End</b></Accordion.Header>
                        <Accordion.Body style={{textAlign:"justify"}}>
                        Halo nama saya <b>Santo</b>,
                        <br />
                    Saya adalah seorang Fullstack Web Developer Student di dibimbing. Saya menyukai di bagian front-end yang dimana dibagian untuk mendevelop tiap tampilan yang akan diterima oleh setiap user dan juga mendevelop tiap API yang akan di hit oleh user.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </Col>
                    <Col lg="5" >
                    <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Back-End</b></Accordion.Header>
                        <Accordion.Body style={{textAlign:"justify"}}>
                        Halo nama saya <b>Ridho</b>.
                        <br/>
                    Saya adalah seorang Fullstack Web Developer Student di dibimbing. Saya menyukai di bagian back-end yang dimana database dan API adalah menjadi teman saya untuk bekerja dan menyiapkan berbagai service yang akan di kirim ke front-end.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </Col>
                </Row>

                <Row></Row>
                    </Container>
                <Footer/>
        </>
    )
}

export default AboutUs;