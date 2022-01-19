import React from "react";
import { useState,useEffect } from "react";

import axios from "axios";

import {Row,Col,Button,Modal, Container,Card} from "react-bootstrap"


import Menu from "../component/navbarfooter/navbar"
import Footer from "../component/navbarfooter/footer"


const Details = () =>{


//Data
const [recipe,setRecipe]= useState([]);


        const ShowDetails = async(id)=>{
            const response2 = await axios.get(`http://localhost:6999/get/${id}`)
            setRecipe(response2.data);
        }


        useEffect(()=>{
            ShowDetails()
        },[])

    return(
        <>

        <Menu/>

            <Row>
                <Col>

                    {
                        recipe.map((row)=>(
                            <Col key={row.id} lg="3" className="d-flex justify-content-center listresep" >
                            <Card style={{ width: '18rem' }}>
                            <Card.Img src={row.img_url} height={"175px"}  cross-origin="anonymous" alt={row.title}/>
                            <Card.Body>
                              <Card.Title >{row.title}</Card.Title>
                              <Card.Subtitle>{row.bahan}</Card.Subtitle>
                              <Card.Text>
                                {row.caption}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        ))
                    }
                </Col>
            </Row>

        <Footer/>

        </>
    )
}

export default Details