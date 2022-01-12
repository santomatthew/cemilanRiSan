import React from "react";

import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom";

import dbDummy from "../dbdummy/db.json"

import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"
import { Col, Row, Form,Button, Card} from "react-bootstrap";


const initialFormValue ={
    id: Math.random * Date.now(),
    gambar: "",
    title: "",
    bahan: "",
    tutorial:""
  }


const Create = () =>{
    const [data,setData] = useState({resep:[]})
    const [form, setForm] = useState(initialFormValue)


    const home = useNavigate();
    const AddRecipe=(e)=>{
        e.preventDefault();
        data.push(form)
        home('/')
    }

    useEffect(()=>{
        setData(dbDummy)
      }, [])


    return(
        <>
        <Menu/>

        <Row>
            <div className="d-flex justify-content-center">
                <Col lg="4" >
                    <div className="formpage">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control value={form.gambar}
                            onChange ={(e)=> setForm(prev =>({
                                ...prev, 
                                gambar: e.target.value
                            }))}
                            required
                             type="text" placeholder="Masukkan link gambar" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control 
                            value={form.title}
                            onChange ={(e)=> setForm(prev =>({
                                ...prev, 
                                title: e.target.value
                            }))}
                            required type="text" placeholder="Judul: Sup Ayam" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Bahan</Form.Label>
                            <Form.Control
                            value={form.bahan}
                            onChange ={(e)=> setForm(prev =>({
                              ...prev, 
                              bahan: e.target.value
                            }))}
                            required type="text" placeholder="Bahan bahan" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Tutorial</Form.Label>
                            <Form.Control value={form.tutorial}
                            onChange ={(e)=> setForm(prev =>({
                                ...prev, 
                                tutorial: e.target.value
                            }))}
                            required type="text" placeholder="Langkah-langkah" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={AddRecipe}>
                            Submit
                        </Button>
                    </Form> 
                    </div>
                </Col>
            </div>
        </Row>
        <Row>
                 {
                        data.resep.map((row,idx)=>(
                            <Col key={row.id} lg="3" className="d-flex justify-content-center listresep" >
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={row.gambar} alt={row.title}/>
                            <Card.Body>
                              <Card.Title>{row.title}</Card.Title>
                              <Card.Subtitle>{row.bahan}</Card.Subtitle>
                              <Card.Text>
                                {row.tutorial}
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        ))
                     }
        </Row>
 
        <Footer/>
        </>
    )

}

export default Create