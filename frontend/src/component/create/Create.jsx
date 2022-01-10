import React from "react";

import Menu from "../navbarfooter/navbar"
import Footer from "../navbarfooter/footer"
import { Col, Row, Form,Button} from "react-bootstrap";

const Create = () =>{

    return(
        <>
        <Menu/>

        <Row>
            <div className="d-flex justify-content-center">
                <Col lg="4" >
                    <div className="formpage">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan link gambar" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control type="text" placeholder="Judul: Sup Ayam" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Bahan</Form.Label>
                            <Form.Control type="text" placeholder="Bahan bahan" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Tutorial</Form.Label>
                            <Form.Control type="text" placeholder="Langkah-langkah" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Col>
            </div>
        </Row>

        <Footer/>
        </>
    )

}

export default Create