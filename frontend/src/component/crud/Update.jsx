import React, { useEffect } from "react";

import axios from "axios"

import { useState} from "react"
import { useNavigate, useParams } from "react-router-dom";

import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"

import { Col, Row, Form,Button,Container} from "react-bootstrap";
import jwt_decode from "jwt-decode";

import logo from "../img/cooking.png"
const Update = () =>{


    const {id} = useParams();

    const [validated, setValidated] = useState(false);

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
            console.log(decoded);
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


    const updateRecipe = async (e)=>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();
        const formData = new FormData()
        formData.append('img_url',gambar)
        formData.append('title',title)
        formData.append('bahan',bahan)
        formData.append('caption',tutorial)
        await axiosJWT.patch(`http://localhost:6999/profile/edit/${id}`,formData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        alert('Resep berhasil di update');
        direct(`/profile/${id}`)
        
    }

    const GetRecipebyId = async ()=>{
        const res = await axiosJWT.get(`http://localhost:6999/get/recipe/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setTitle(res.data.title);
        setGambar(res.data.img_url);
        setBahan(res.data.bahan);
        setTutorial(res.data.caption)
        
    }


    useEffect(()=>{
        refreshToken();
        GetRecipebyId();
    },[])
    
    return(
        <>
        <Menu/>
        <Container style={{marginTop:'50px',marginBottom:'50px'}}>
        <Row className="d-flex justify-content-center">
            <Col lg="8" className="formsetting">
                <Row className="d-flex justify-content-center">                
                    <Col lg="3">
                        <h3>Update Recipe</h3>
                        <img src={logo} className="logoadd" alt="Add Recipe"/>
                    </Col>
                </Row>
            <Row> 
            <div className="d-flex justify-content-center">
                <Col lg="10">
                    <div className="formpage">
                    <Form validated={validated} onSubmit={updateRecipe}>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control required
                            onChange={(e)=>setGambar(e.target.files[0])}
                             type="file" placeholder="Update gambar" />
                             
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control required size="lg" value={title}
                            onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Update Judul" />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Bahan</Form.Label>
                            <Form.Control required as="textarea" value={bahan}
                            onChange={(e)=>setBahan(e.target.value)}type="text" placeholder="Update Bahan" />
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Tutorial</Form.Label>
                            <Form.Control required value={tutorial}
                            onChange={(e)=>setTutorial(e.target.value)}type="text" placeholder="Update Tutorial" />
                            
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Update
                        </Button>

                    </Form> 
                    </div>
                </Col>
            </div>
            </Row>
            </Col>
        </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default Update