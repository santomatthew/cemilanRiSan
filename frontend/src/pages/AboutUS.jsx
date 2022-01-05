import React from 'react'
import Navigasi from '../component/navbarfooter/navbar'
import Footer from '../component/navbarfooter/footer'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Iconfb from '../component/img/Icon_fb.png'
import IconLk from '../component/img/Icon_lk.svg'
import Iconig from '../component/img/Icon_ig.svg'
import '../styles/Aboutus.css'


const AboutUs=()=>{
    return(
        <>
            <Navigasi/>
                <div>
                    <h1>Welcome To cemilanRiSan</h1>
                </div>
                    <Container>
                        <Row>
                            {/* Card 1 */}
                            <Col lg='8 my-4'>
                                <Card style={{width:'25rem',color:'black'}}>                                        
                                <div className='footer_Card'>
                                <Card.Header >
                                    <h3>SANTO</h3>
                                </Card.Header>
                                </div>
                                
                                    
                                    <Card.Body className='m-5'>
                                        <Card.Text>
                                            Hello My Name is Santo <br/>
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci co.</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='footer_Card'>
                                        <Card.Footer >
                                            <Card.Link href="#fb">
                                                <img src={Iconfb} alt='icon_facebook' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                            <Card.Link href="#lk">
                                                <img src={IconLk} alt='icon_Linkedin' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                            <Card.Link >
                                                <img src={Iconig} alt='icon_ig' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                        </Card.Footer>
                                    </div>
                                </Card>
                            </Col>
                            {/* Card 2 */}
                            <Col lg='4 my-4'>
                            <Card style={{width:'25rem',color:'black',margin:'5'}}>                                        
                                
                            <div className='footer_Card'>
                                <Card.Header >
                                    <h3>RIDHO</h3>
                                </Card.Header>
                                </div>
                                    <Card.Body className='m-5'>
                                        <Card.Text>
                                            Hello My Name is Santo <br/>
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci co.</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='footer_Card'>
                                        <Card.Footer >
                                            <Card.Link href="#fb">
                                                <img src={Iconfb} alt='icon_facebook' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                            <Card.Link href="#lk">
                                                <img src={IconLk} alt='icon_Linkedin' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                            <Card.Link >
                                                <img src={Iconig} alt='icon_ig' style={{width:'32px',height:'32px'}}/>
                                            </Card.Link>
                                        </Card.Footer>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            <div className='my-4'>
                <Footer/>
            </div>
        </>
    )
}

export default AboutUs;