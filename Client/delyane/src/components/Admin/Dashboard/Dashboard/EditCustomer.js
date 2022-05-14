import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';

import Headers from '../Navbar/Headers';

import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';

import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'var(--lightgray-color)',
        position: 'absolute',
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 256,
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256,
        },
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
    pageContainer: {
        minHeight: '100%',
        marginTop: '0px',
    },
    secondRoot: {
        margin: '20px 20px',
        marginBottom: '50px',
        padding: '20px 20px',
    },
    mainTable: {
        margin: '20px 0 20px',
    },
    title: {
        color: 'var(--blue-color)',
        textAlign: 'center',
        margin: '30px',
    },
    divider: {
        backgroundColor: 'var(--blue-color)',
        height: '5px',
        margin: '10px 0',
    },
    editForm: {
        display: 'grid',
        padding: '2% 5%',
    },
    inputField: {
        margin: '10px 0',
    },
    inputCont: {
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    btnContainer: {
        textAlign: 'right',
        marginTop: '20px',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    button: {
        background: 'var(--blue-color)',
        color: 'white',
        marginLeft: '30px',
        width: '100px',
        '&:hover': {
            backgroundColor: '#113e78ec',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '15px',
        },
    },
    deleteBtn: {
        background: 'red',
        color: 'white',
        minInlineSize: 'auto',
        float: 'right',
        '&:hover': {
            backgroundColor: 'var(--pwr-btn-alarm)',
        },
    },
}));


const EditCustomer = ({ className, staticContext, ...rest }) => {
    const { uuid } = useParams();
    const classes = useStyles();

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

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>

                        <Headers />
                        <div className={clsx(classes.pageContainer, className)}>
                            <Card className={clsx(classes.secondRoot, className)} elevation={2} {...rest}>
                                <Button className={classes.deleteBtn} onClick={deleteCustomer}>
                                    <DeleteForeverRoundedIcon />
                                </Button>
                                <Typography className={classes.title} gutterBottom variant="h4" component="h1">
                                    Edit a customer
                                </Typography>

                                <Divider className={classes.divider} />

                                <Grid>
                                    <Paper className={classes.mainTable}>
                                        <form className={classes.editForm} onSubmit={(e) => updateCustomer(e)} autoComplete="off" >

                                            <TextField
                                                className={classes.inputField}
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
                                                className={classes.inputField}
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
                                                className={classes.inputField}
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

                                            <Grid className={classes.inputCont} container justifyContent="space-between" >
                                                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                                                    <TextField
                                                        className={classes.inputField}
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

                                                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                                                    <TextField
                                                        className={classes.inputField}
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
                                            <div className={classes.btnContainer}>
                                                <Button href='/admin/dashboard' className={classes.button}>Back</Button>
                                                <Button className={classes.button} type="submit">Save</Button>
                                            </div>
                                        </form>
                                    </Paper>
                                </Grid>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCustomer;
