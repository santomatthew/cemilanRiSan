import React from "react";
import axios from "axios";
import {Form, Button } from "react-bootstrap";
import { useState } from "react";



const Register = () =>{

    // Form Validasi untuk tiap field yang kosong
    const [validated, setValidated] = useState(false);
    // Data
    const [name,setName] = useState('')
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const registerAccount =async(e)=>{

        const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }

            e.preventDefault();
            setValidated(true)
            await axios.post(`http://localhost:6999/api/signup`,{
                name: name,
                username : username,
                email:email,
                password: password
            })
            alert('Akun berhasil di daftarkan')
            setTimeout(()=>window.location.reload(),500)

    }
        

    return(
        <>
        <div className="d-flex justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        </div>

                    <Form validated={validated} onSubmit={registerAccount}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required size="lg" value={name}
                                onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required size="lg" value={email}
                                onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required size="lg" value={username}
                                onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required size="lg" value={password}
                                onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>

        </>
    )
}

export default Register