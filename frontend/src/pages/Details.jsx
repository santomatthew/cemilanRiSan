import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

import axios from "axios";

import {Row,Col,Card} from "react-bootstrap"


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

            <Row>
                <Col>
                <Col key={id} lg="3" className="d-flex justify-content-center listresep" >
                            <Card style={{ width: '18rem' }}>
                            <Card.Img src={gambar} height={"175px"}  cross-origin="anonymous" alt={title}/>
                            <Card.Body>
                              <Card.Title >{title}</Card.Title>
                              <Card.Subtitle>{bahan}</Card.Subtitle>
                              <Card.Text>
                                {tutorial}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                </Col>
            </Row>

        <Footer/>

        </>
    )
}


export default Details