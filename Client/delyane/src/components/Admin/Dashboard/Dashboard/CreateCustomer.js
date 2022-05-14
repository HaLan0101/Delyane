import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import Headers from '../Navbar/Headers';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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
        <div className='createCustomer'>
            {/* <Headers /> */}

            <Card elevation={2} {...rest}>
                <h2 className='createCustomer__title'>Create a new customer</h2>

                <hr className='createCustomer__diviser' />

                <Grid>
                    <Paper className='createCustomer__table'>
                        <form className='createCustomer__form' onSubmit={(e) => submitCustomer(e)} autoComplete="off">
                            <p className='createCustomer__subtitle'>Firstname:</p>
                            <input
                                className='createCustomer__input'
                                label="Firstname"
                                type="text"
                                name="firstname"
                                placeholder="Enter a firstname"
                                onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                            />

                            <p className='createCustomer__subtitle'>Lastname:</p>
                            <input
                                className='createCustomer__input'
                                label="Lastname"
                                type="text"
                                name="lastname"
                                placeholder="Enter a lastname"
                                onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                            />

                            <p className='createCustomer__subtitle'>Email:</p>
                            <input
                                className='createCustomer__input'
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="Enter an email"
                                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                            />

                            <p className='createCustomer__subtitle'>Username:</p>
                            <input
                                className='createCustomer__input'
                                label="Username"
                                type="text"
                                name="username"
                                placeholder="Enter a username"
                                onChange={(e) => setCustomer({ ...customer, username: e.target.value })}
                            />

                            <p className='createCustomer__subtitle'>Password:</p>
                            <input
                                className='createCustomer__input'
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter a password"
                                onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                            />

                            <div className='createCustomer__btnContainer'>
                                <Link to={'/admin/dashboard'}>
                                    <button className='createCustomer__button'>Back</button>
                                </Link>
                                <button type="submit" className='createCustomer__button'>
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
