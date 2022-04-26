import React, { useState } from 'react';
import axios from 'axios';

import './Register.css';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });

    console.log(inputs);

    const handleUpdateInputs = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/user';
        try {
            await axios.post(url, inputs);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    label="Username"
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={inputs.username}
                    onChange={handleUpdateInputs}
                />
                <input
                    label="Email"
                    name="email"
                    id="email"
                    type="mail"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleUpdateInputs}
                />
                <input
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={handleUpdateInputs}
                />
                <button type="submit">Envoyer</button>

            </form>
        </div>

    );
}

export default Register;
