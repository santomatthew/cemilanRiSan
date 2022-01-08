import React from "react";

import { useState } from "react";

import "../../styles/style.css"

import {Navbar,Nav} from "react-bootstrap"

import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'

import logo from "../img/logo.png"

const Menu = ()=>{


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
                                <Nav.Link className="navbarfont" href="/login" className="hover-underline-animation">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                
        </>
    )
        
}

export default Menu