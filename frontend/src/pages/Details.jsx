import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

import axios from "axios";

import {Row,Col,Container} from "react-bootstrap"


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

        const ShowDetails = async ()=>{
            const res = await axios.get(`http://localhost:6999/get/${id}`);
            setTitle(res.data.title);
            setGambar(res.data.img_url);
            setBahan(res.data.bahan);
            setTutorial(res.data.caption);
        }

            useEffect(()=>{
                ShowDetails()
            });

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
                            <img src={gambar} alt={title} style={{maxWidth:'100%',maxHeight:'100%'}}/>
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