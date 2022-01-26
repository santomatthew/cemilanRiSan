import React from "react";


import "../../styles/style.css"
import axios from "axios";

import {Navbar,Nav} from "react-bootstrap"

import { useNavigate } from "react-router-dom";

import logo from "../img/logo.png"

const Menu = ()=>{

    const direct = useNavigate()

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:6999/logout');
            direct('/')
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
                <Navbar expand="lg" style={{marginBottom:'30px'}}>
                        <Navbar.Brand href="/dashboard"><img src={logo} className="logosize" alt="cemilanrisan" style={{marginLeft:'5px'}}/></Navbar.Brand>
                        <span className="cemilanrisan">'Cemilan RiSan'</span>
                <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight:"8px"}}/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav style={{marginRight:'10px'}}>
                                <Nav.Link className="navbarfont hover-underline-animation" href="/dashboard" >Home</Nav.Link>
                                <Nav.Link className="navbarfont hover-underline-animation" href="/aboutus" >About Us</Nav.Link>
                                <Nav.Link className="navbarfont hover-underline-animation" onClick={Logout} >Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                
        </>
    )
        
}

export default Menu