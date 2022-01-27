import React from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";
import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"
import { Container,Row,Col,Card,Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

const Read = () =>{

    const { id } = useParams()

    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const direct = useNavigate()
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:6999/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setUser(decoded.username)
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

    const [user,setUser] = useState('')
    
     const GetUser = async()=>{
         const response = await axiosJWT.get(`http://localhost:6999/get/profile/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
         })
         console.log(response);
        }
    
    const [recipeUser,setRecipeUser] = useState('')
    const GetUserPost = async()=>{
        const response = await axiosJWT.get(`http://localhost:6999/get/listpost/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
         })

        setRecipeUser(response.data)
    }
    useEffect(()=>{
        GetUser();
        GetUserPost();
        refreshToken();
     },[])

    return(
    <>
    <Menu/>

    <Container>
        <div >
            <Row>
                <Col lg="12">
                    <h1> Halo {user}</h1>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <h1> List resep anda :</h1>
                </Col>
            </Row>
            
        </div>
    </Container>

    <Footer/>    


    </>        
    )
}

export default Read