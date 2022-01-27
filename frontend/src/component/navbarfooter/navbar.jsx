import React,{useState} from "react";

import "../../styles/style.css"
import axios from "axios";

import {Navbar,Nav} from "react-bootstrap"

import { useNavigate,useParams } from "react-router-dom";

import logo from "../img/logo.png"

import jwt_decode from "jwt-decode"
import { useEffect } from "react";

const Menu = ()=>{

    const direct = useNavigate()
    const [id,setId] = useState('')

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:6999/logout');
            direct('/')
        } catch (error) {
            console.log(error);
        }
    }


    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:6999/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setId(decoded.userid)
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
               direct("/")
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:6999/api/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    useEffect(()=>{
        refreshToken()
    })

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
                                <Nav.Link className="navbarfont hover-underline-animation" href={`/profile/${id}`} >My Account</Nav.Link>
                                <Nav.Link className="navbarfont hover-underline-animation" onClick={Logout} >Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                
        </>
    )
        
}

export default Menu