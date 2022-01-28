import React from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";
import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"
import { Container,Row,Col,Card,Button, CardGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

const Read = () =>{

    const { id } = useParams()

    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    
    const direct = useNavigate()
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:6999/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setUser(decoded.name)
            setEmail(decoded.email)
            setUsername(decoded.username)
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
            // setId(decoded.userid);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });


    
    const deletePost = async (id)=>{
        await axios.delete(`http://localhost:6999/delete/${id}`);
        GetUser();
    }

    
   
    const [recipeUser,setRecipeUser] = useState([])
     const GetUser = async()=>{
         const response = await axiosJWT.get(`http://localhost:6999/get/profile/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
         })
         setRecipeUser(response.data.captions)
        //  console.log(response);
        }
    
   
    useEffect(()=>{
        GetUser();
       refreshToken();
     },[])

    return(
    <>
    <Menu/>

    <Container>
        <div className="profile" >
            <Row>
                <Col lg="12" className="d-flex justify-content-center">
                    <p style={{fontSize:'70px'}}> Profile </p>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col lg="11">
                    <Row >
                        <Col lg="4" >
                        <p className="profilestyle"> Nama : {user}</p>
                        </Col>
                        <Col lg="4">
                        <p className="profilestyle"> Username : {username}</p>
                        </Col>
                        <Col lg="4">
                        <p className="profilestyle"> Email :  {email}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <Row style={{marginTop:'30px'}}>
                <Col lg="12" className="d-flex justify-content-start">
                    <p style={{fontSize:'50px',marginLeft:"30px"}}> List resep {username} <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-right-square-fill" viewBox="0 0 16 16">
                    <path d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z"/>
                    </svg></p>
                </Col>
            </Row>
                    
            <Row>
                {
                    recipeUser.map((row)=>(
                        <Col key={row.id} lg="3" className="d-flex justify-content-center listresep" >
                            <Card className="card navbarfont" style={{ width: '18rem' }}>
                            <Card.Header style={{textAlign:'right'}} >Recipe by {username}</Card.Header>
                            <Card.Img src={row.img_url}  height={"175px"}  cross-origin="anonymous" alt={row.title}/>
                            <Card.Body>
                              <Card.Title>Resep {row.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="d-flex justify-content-center">
                                    <Col lg="4" >
                                    <Button variant="outline-primary" href={`details/${row.id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>Details</Button>
                                    </Col>
                                    <Col lg="4">
                                    <Button variant="outline-success" href={`edit/${row.id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                    </svg>Update</Button>
                                    </Col>
                                    <Col lg="4">
                                    <Button onClick={()=>deletePost(row.id)} variant="outline-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>Delete</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                          </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    </Container>

    <Footer/>    


    </>        
    )
}

export default Read