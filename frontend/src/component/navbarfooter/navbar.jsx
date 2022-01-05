import React from "react";

import "../../styles/style.css"

import {Row,Col,Navbar,Nav,NavDropdown,NavLink,Container,Form,FormControl,Button} from "react-bootstrap"

import logo from "../img/logo.png"

const Menu = ()=>{

    return(
        <>
        <div>
        <Navbar style={{backgroundColor:"#white"}}  expand="lg">
                <div style={{marginLeft:"5px"}}>
                    <Navbar.Brand href="/"><img src={logo} className="logosize" alt="cemilanrisan" /></Navbar.Brand>
                </div>    
                <div className="cemilanrisan">'Cemilan RiSan'</div>
                <div style={{marginRight:"8px"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <div>
                                <Nav.Link href="/">Home</Nav.Link>
                                </div>
                                <div>
                                <Nav.Link href="/aboutus">About Us</Nav.Link>
                                </div>
                                <div>
                                <Nav.Link href="#link">Login</Nav.Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        </div>
        </>
    )
        
}

export default Menu