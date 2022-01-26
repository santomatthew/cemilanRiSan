import React from "react";
import { useState, useEffect } from "react";
import {  useParams,useNavigate } from "react-router-dom";

import axios from "axios";

import {Row,Col,Container} from "react-bootstrap"

import jwt_decode from "jwt-decode"


import Menu from "../component/navbarfooter/navbar"
import Footer from "../component/navbarfooter/footer"




const Details = () =>{

    const { id } = useParams()

//Data
// const [recipe,setRecipe]= useState([]);
    const [gambar,setGambar] = useState('');
    const [title,setTitle] = useState('');
    const [bahan,setBahan] = useState('');
    const [tutorial,setTutorial] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const direct = useNavigate()
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:6999/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
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
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

        const ShowDetails = async ()=>{
            const res = await axiosJWT.get(`http://localhost:6999/get/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTitle(res.data.title);
            setGambar(res.data.img_url);
            setBahan(res.data.bahan);
            setTutorial(res.data.caption);
            refreshToken();            
        }

            useEffect(()=>{
                ShowDetails();
            },[]);

    return(
        <>

        <Menu/>

        <div style={{backgroundColor:""}}>
            <Container>
                <div key={id} style={{backgroundColor:'#FFF8F3'}}>
                    <Row>
                        <Col lg="12">
                        <h1>{title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <img src={gambar} className="detailpict" alt={title} width={'800px'} style={{maxWidth:'100%',maxHeight:'100%'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                        <h3>Bahan-bahan :</h3>
                            {bahan}                
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                        <h3>Tutorial :</h3>
                            {tutorial}                
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>

        <Footer/>

        </>
    )
}


export default Details