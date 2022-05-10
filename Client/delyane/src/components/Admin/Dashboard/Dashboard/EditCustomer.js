import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Card';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const EditCustomer = ({ ...rest }) => {
    const { uuid } = useParams();
    // const [saved, setSaved] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: ''
    });

    const [updatedCustomer, setUpdatedCustomer] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: ''
    })

    const handleUpdateCustomer = (e) => {
        setUpdatedCustomer({
            ...updatedCustomer,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const getDatas = async () => {
            try {
                const result = await axios.get(`http://90.22.250.124:8080/user/${uuid}`)
                setCustomer(result.data);
                setUpdatedCustomer(result.data);
            } catch (err) {
                console.log(err)
            }
        };
        getDatas();
    }, [uuid]);

    const updateCustomer = async (e) => {
        const url = `http://90.22.250.124:8080/user/${uuid}`;
        try {
            await axios.put(url, updatedCustomer).then((res) => console.log(res))
        } catch (err) {
            console.log(err)
        }
    };

    const deleteCustomer = async () => {
        try {
            await axios.delete(`http://90.22.250.124:8080/user/${uuid}`);
        } catch (err) {
            console.log(err)
        }
    }

    console.log('test:', customer)

    return (
        <div>
            <Card elevation={2} {...rest}>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h1"
                >
                    Edit a customer
                </Typography>

                <Divider />

                <Grid>
                    <Paper >
                        <form
                            onSubmit={(e) => updateCustomer(e)}
                            autoComplete="off"
                        >
                            <TextField
                                label="Firstname"
                                type="text"
                                name="firstname"
                                placeholder="Enter a firstname"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={updatedCustomer.firstname || ''}
                                onChange={handleUpdateCustomer}
                            />

                            <TextField
                                label="Lastname"
                                type="text"
                                name="lastname"
                                placeholder="Enter a lastname"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={updatedCustomer.lastname || ''}
                                onChange={handleUpdateCustomer}
                            />

                            <TextField
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="Enter an email"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={updatedCustomer.email || ''}
                                onChange={handleUpdateCustomer}

                            />

                            <Grid
                                container
                                justifyContent="space-between"
                            >
                                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                                    <TextField
                                        label="Username"
                                        type="text"
                                        name="username"
                                        placeholder="Enter a username"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={updatedCustomer.username || ''}
                                        onChange={handleUpdateCustomer}
                                    />
                                </Box>
                            </Grid>
                            <Link to={'/admin/dashboard'}>
                                <button>Back</button>
                            </Link>
                            <button type="submit">
                                Save
                            </button>
                        </form>
                    </Paper>
                </Grid>
                <button onClick={deleteCustomer}>Delete</button>
            </Card>
        </div>
    );
}

export default EditCustomer;
