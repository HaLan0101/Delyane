import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Card';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const EditCustomer = ({ ...rest }) => {

    return (
        <div>
            <Card elevation={2} {...rest}>
                <Typography
                    // className={classes.title}
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
                            // className={classes.editForm}
                            // onSubmit={(e) => submitCustomer(e)}
                            autoComplete="off"
                        >
                            <TextField
                                // className={classes.inputField}
                                label="Firstname"
                                type="text"
                                name="firstname"
                                placeholder="Enter a firstname"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                            />

                            <TextField
                                // className={classes.inputField}
                                label="Lastname"
                                type="text"
                                name="lastname"
                                placeholder="Enter a lastname"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                            />

                            <TextField
                                // className={classes.inputField}
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="Enter an email"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            // onChange={(e) => setCustomer({ ...customer, email: e.target.value })}

                            />

                            <Grid
                                // className={classes.inputCont}
                                container
                                justifyContent="space-between"
                            >
                                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                                    <TextField
                                        // className={classes.inputField}
                                        label="Username"
                                        type="text"
                                        name="username"
                                        placeholder="Enter a username"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    // onChange={(e) => setCustomer({ ...customer, username: e.target.value })}

                                    />
                                </Box>

                                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                                    <TextField
                                        // className={classes.inputField}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter a password"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    // onChange={(e) => setCustomer({ ...customer, password: e.target.value })}

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
            </Card>
        </div>
    );
}

export default EditCustomer;
