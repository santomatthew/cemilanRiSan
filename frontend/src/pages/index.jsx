import React from "react";
import axios from "axios"
import { useState,useEffect } from "react";

import {Row,Col,Button,Modal, Container,Card} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import logo from "../component/img/logo.png"

import jwt_decode from "jwt-decode"
import Menu from "../component/navbarfooter/navbar"
import Footer from "../component/navbarfooter/footer"


const Index = () =>{


    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const direct = useNavigate()
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:6999/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
               direct("/")
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:6999/api/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // Modals
    const [showTutorial, setShowTutorial] = useState(false);
    const handleClose = () => setShowTutorial(false);
    const handleShow = () => setShowTutorial(true);

    //Data
    const [recipe,setRecipe]= useState([]);
    const [poster,setPoster] = useState('')
    const GetAllRecipe = async()=>{
        const response = await axiosJWT.get('http://localhost:6999/get',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setRecipe(response.data);
        refreshToken();
    }


useEffect(()=>{
    GetAllRecipe();
},[])


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

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">

                    <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <Button variant="" className="btn btn-outline-secondary" onClick={handleShow}> 
                        !! Click Me !!
                    </Button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">

                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
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
                        <p className="navbarfont"><span className="cemilanrisan " style={{fontSize:'25px'}}>'cemilanRiSan'</span> adalah suatu platform untuk anda dalam mendapatkan berbagai resep makanan ringan yang unik, kreatif dan tentunya enak.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </Col>
                </Row>

                <Row style={{marginTop:'10px'}}>
                    <Col lg="12" style={{textAlign:'left'}}>

                    <p className="welcome">Welcome  to  <span className="cemilanrisan" style={{fontSize:'25px'}}>'cemilanRiSan'</span>, {name}</p>

                        <Button variant="outline-secondary" href="/addrecipe"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" className="mise-icon mise-icon-add-recipe"><path d="M14 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V11M2 16h2M2 12h2M2 8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.364 13.725 16 8v7h-.674a1 1 0 0 1-.962-1.275z" fill="currentColor"></path><path d="M16 20v-5m0 0V8l-1.636 5.725A1 1 0 0 0 15.326 15H16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 8v2a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V8m-2 0v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M20 2v6M17 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> Tulis Resep</Button>

                    </Col>
                </Row>

                <Row style={{marginTop:'10px'}}>
                    {
                        recipe.map((row)=>(
                            <Col key={row.id} lg="3" className="d-flex justify-content-center listresep" >
                            <Card className="card navbarfont" style={{ width: '18rem' }}>
                            <Card.Header style={{textAlign:'right'}} > by {row.user_id}</Card.Header>
                            <Card.Img src={row.img_url}  height={"175px"}  cross-origin="anonymous" alt={row.title}/>
                            <Card.Body>
                              <Card.Title style={{textAlign:'left',fontSize:'20px'}}>Resep {row.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <Row>

                            <Button variant="outline-primary" href={`details/${row.id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg> Detail</Button>
                                    </Row>
                            </Card.Footer>
                          </Card>
                        </Col>
                        ))
                     }
                                        
                </Row>
            </Container>
        <Footer/>
        </>

        
    )

}

export default Index
