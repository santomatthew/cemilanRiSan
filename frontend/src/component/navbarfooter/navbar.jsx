import React from "react";

import { useState } from "react";

import {Modal,FloatingLabel} from "react-bootstrap"

import "../../styles/style.css"

import {Row,Col,Navbar,Nav,NavDropdown,NavLink,Container,Form,FormControl,Button,Link} from "react-bootstrap"

import logo from "../img/logo.png"

const Menu = ()=>{

    const[showLogin, setShowLogin] = useState(false);
    const[showRegister, setShowRegister] = useState(false);
    // Modal Login
     const handleShow = () => setShowLogin(true)
     const handleClose = () => setShowLogin(false)
     //Modal Daftar
     const handleShowRegister = () => setShowRegister(true)
     const handleCloseRegister = () => setShowRegister(false)


    return(
        <>
                <Navbar style={{backgroundColor:"#white"}}  expand="lg">
                        <Navbar.Brand href="/"><img src={logo} className="logosize" alt="cemilanrisan" style={{marginLeft:'5px'}}/></Navbar.Brand>
                        <span className="cemilanrisan">'Cemilan RiSan'</span>
                <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight:"8px"}}/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav style={{marginRight:'10px'}}>
                                <Nav.Link className="navbarfont" href="/" className="hover-underline-animation">Home</Nav.Link>
                                <Nav.Link className="navbarfont" href="/aboutus" className="hover-underline-animation">About Us</Nav.Link>
                                <Nav.Link className="navbarfont" className="hover-underline-animation" onClick={handleShow}>Login</Nav.Link>

                                <Modal
                                show={showLogin}
                                onHide={handleClose}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="d-flex justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                </div>
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                <Button variant="primary" type="submit" >
                                    Login
                                </Button>
                                </div>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer  className="d-flex justify-content-start">
                                    Belum punya akun? <a href="#login" onClick={handleShowRegister} >Daftar disini</a>
                                </Modal.Footer>
                                </Modal>

                                <Modal
                                show={showRegister}
                                onHide={handleCloseRegister}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header closeButton>
                                <Modal.Title>Sign Up


                                </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                <div className="d-flex justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" placeholder="Enter your username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <div className="d-flex justify-content-end">
                                    <Button variant="primary" type="submit">
                                        Sign Up
                                    </Button>
                                    </div>
                                </Form>
                                </Modal.Body>

                                </Modal>

                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                
        </>
    )
        
}

export default Menu