import React, { useEffect } from "react";

// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import { CKEditor } from "@ckeditor/ckeditor5-react"

import axios from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom";

import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"
import { Container,Col, Row, Form,Button} from "react-bootstrap";

import jwt_decode from "jwt-decode"
import logo from "../img/cooking.png"

const Create = () =>{
    

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

    
    const AddRecipe = async(e)=>{

        const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            setValidated(true)
            e.preventDefault();
            const formData = new FormData()
            formData.append('img_url',gambar)
            formData.append('title',title)
            formData.append('bahan',bahan)
            formData.append('caption',tutorial)
            await axios.post('http://localhost:6999/post',formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Resep berhasil di post")
             setTimeout(()=>{direct('/dashboard')},200)
    }

    useEffect(()=>{
        refreshToken(); 
    },[])

    return(
        <>
        <Menu/>
        <Container style={{marginTop:'50px',marginBottom:'50px'}}>
        <Row className="d-flex justify-content-center">
            <Col lg="8" className="formsetting">
                <Row className="d-flex justify-content-center">                
                    <Col lg="3">
                        <h3>Add Recipe</h3>
                        <img src={logo} className="logoadd" alt="Add Recipe"/>
                    </Col>
                </Row>
            <Row> 
            <div className="d-flex justify-content-center">
                <Col lg="10">
                    <div className="formpage">
                    <Form validated={validated} onSubmit={AddRecipe}>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control required
                            onChange={(e)=>setGambar(e.target.files[0])}
                             type="file" placeholder="Masukkan link gambar" />
                             <Form.Control.Feedback type="invalid">
                            Masukkan gambar
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control required size="lg" value={title}
                            onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="JUDUL : SUP AYAM KUAH JAMUR" />
                            <Form.Control.Feedback type="invalid">
                            Masukkan title
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Bahan</Form.Label>
                            <Form.Control required as="textarea" value={bahan}
                            onChange={(e)=>setBahan(e.target.value)}type="text" placeholder="Bahan bahan" />
                        </Form.Group>
                        <Form.Group className="mb-3" hasvalidation="true">
                            <Form.Label>Tutorial</Form.Label>
                            <Form.Control required value={tutorial}
                            onChange={(e)=>setTutorial(e.target.value)}type="text" placeholder="Langkah-langkah" />
                            <Form.Control.Feedback type="invalid">
                            Masukkan tutorial
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
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

export default Create