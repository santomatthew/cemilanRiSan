import React, { useState } from "react";
import axios from 'axios';
import {Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const Login = () =>{
    // Login
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [Msg,setMsg] = useState('');
    const direct = useNavigate()
    const [validate,setValidate] = useState(false); 
    const LoginAccount = async(e)=>{
        const form = e.currentTarget;
        if(form.checkValidity()===false){
            e.preventDefault();
        }
        try {
            setValidate(true)
            await axios.post('http://localhost:6999/api/login',{
                email : email,
                password : password
            });
            alert('Wellcome')
            setTimeout(()=>{direct('/')},500)
        } catch (error) {
            if(error.response)
            setMsg(error.response.data)
        }
    }
    return(
        <>
        <div className="d-flex justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </div>
        <Form validated={validate} onSubmit={LoginAccount}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder="Enter email"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control require
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>  
        
        </>
    )
}

export default Login