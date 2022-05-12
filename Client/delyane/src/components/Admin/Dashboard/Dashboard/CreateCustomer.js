import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Headers from '../Navbar/Headers';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './CreateCustomer.css';

const CreateCustomer = ({ ...rest }) => {
    const [customer, setCustomer] = useState({});

    const submitCustomer = async (e) => {
        console.log(customer);
        e.preventDefault();
        const url = 'http://90.22.250.124:8080/user';
        try {
            await axios.post(url, customer);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <Headers />

            <Card elevation={2} {...rest}>
                <h2 className='title'>Create a new customer</h2>

                <hr className='diviser' />

                <Grid>
                    <Paper className='mainTable'>
                        <form className='editForm' onSubmit={(e) => submitCustomer(e)} autoComplete="off">
                            <p className='input_title'>Firstname:</p>
                            <input
                                className='input_imput'
                                label="Firstname"
                                type="text"
                                name="firstname"
                                placeholder="Enter a firstname"
                                onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                            />

                            <p className='input_title'>Lastname:</p>
                            <input
                                className='input_imput'
                                label="Lastname"
                                type="text"
                                name="lastname"
                                placeholder="Enter a lastname"
                                onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                            />

                            <p className='input_title'>Email:</p>
                            <input
                                className='input_imput'
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="Enter an email"
                                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                            />

                            <p className='input_title'>Username:</p>
                            <input
                                className='input_imput'
                                label="Username"
                                type="text"
                                name="username"
                                placeholder="Enter a username"
                                onChange={(e) => setCustomer({ ...customer, username: e.target.value })}
                            />

                            <p className='input_title'>Password:</p>
                            <input
                                className='input_imput'
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter a password"
                                onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                            />

                            <div className='btnContainer'>
                                <Link to={'/admin/dashboard'}>
                                    <button className='button'>Back</button>
                                </Link>
                                <button type="submit" className='button'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Card>
        </div >
    );
}

export default CreateCustomer;
