import React, { useState } from 'react'
import { Redirect } from "react-router-dom"


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a request to the server to check login credentials
        // If successful, set isLoggedIn to true
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Login</button>
        </form>

    );
};


export default Login
