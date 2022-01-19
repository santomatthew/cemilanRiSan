import React from "react";


import "../../styles/style.css"

import {Navbar,Nav} from "react-bootstrap"


import logo from "../img/logo.png"

const Menu = ()=>{


    return(
        <>
                <Navbar expand="lg" style={{marginBottom:'30px'}}>
                        <Navbar.Brand href="/"><img src={logo} className="logosize" alt="cemilanrisan" style={{marginLeft:'5px'}}/></Navbar.Brand>
                        <span className="cemilanrisan">'Cemilan RiSan'</span>
                <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight:"8px"}}/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav style={{marginRight:'10px'}}>
                                <Nav.Link className="navbarfont hover-underline-animation" href="/" >Home</Nav.Link>
                                <Nav.Link className="navbarfont hover-underline-animation" href="/aboutus" >About Us</Nav.Link>
                                <Nav.Link className="navbarfont hover-underline-animation" href="/login" >Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                
        </>
    )
        
}

export default Menu