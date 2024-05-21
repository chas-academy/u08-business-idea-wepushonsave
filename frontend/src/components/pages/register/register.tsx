import React from 'react'
import { Form } from 'react-router-dom';
import { useState } from 'react';

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [register, setRegister] = useState(false);

const registerUser = () => {

    const handleSubmit = (e: any) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submited");
      }

    return (
        <>
        
           {/* email */}
           <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        </>
    )
}

export default registerUser;