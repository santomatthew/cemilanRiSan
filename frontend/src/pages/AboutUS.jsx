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
                    <Container>
                <div>
                    <h1>Welcome To cemilanRiSan</h1>
                </div>
                        <Row>
                            {/* Card 1 */}
                            <Col lg='12' className='d-flex justify-content-center'> 
                                <Card style={{width:'23rem',color:'black',marginRight:'20px'}}>                                      
                                <div className='footer_Card'>
                                <Card.Header>
                                    <h3>SANTO</h3>
                                </Card.Header>
                                </div>
                                    <Card.Body >
                                        <Card.Text>
                                            <div className='textCard'>
                                            Hello My Name is Santo <br/>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, quo debitis iusto aliquid provident ea saepe temporibus deleniti quibusdam dolorem laborum similique minus incidunt. Suscipit facilis animi in adipisci enim.
                                            </div>
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
                            {/* Card 2 */}
                                <Card style={{width:'23rem',color:'black',marginLeft:'20px'}}>                                        
                                <div className='footer_Card'>
                                <Card.Header>
                                    <h3>RIDHO</h3>
                                </Card.Header>
                                </div>
                                    <Card.Body >
                                        <Card.Text>
                                            <div className='textCard'>
                                            Hello My Name is Ridho<br/>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, quo debitis iusto aliquid provident ea saepe temporibus deleniti quibusdam dolorem laborum similique minus incidunt. Suscipit facilis animi in adipisci enim.
                                            </div>
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
                <Footer/>
        </>
    )
}

export default AboutUs;