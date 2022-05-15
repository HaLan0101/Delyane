import React from 'react';
import clsx from "clsx";

import Headers from '../Navbar/Headers';

import {
    // Button,
    // Box,
    Card,
    Divider,
    Grid,
    Paper,
    Typography,
    // TextField,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

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
        minHeight: "100%",
        marginTop: "0px",
    },
    secondRoot: {
        margin: "20px 20px",
        marginBottom: "50px",
        padding: "20px 20px",
    },
    mainTable: {
        margin: "20px 0 20px",
    },
    title: {
        color: "var(--blue-color)",
        textAlign: "center",
        margin: "30px",
    },
    divider: {
        backgroundColor: "var(--blue-color)",
        height: "5px",
        margin: "10px 0",
    },
    editForm: {
        display: "grid",
        padding: "2% 5%",
    },
    inputField: {
        margin: "10px 0",
    },
    inputCont: {
        [theme.breakpoints.down("xs")]: {
            display: "block",
        },
    },
    btnContainer: {
        textAlign: "right",
        marginTop: '20px',
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
        },
    },
    button: {
        background: "var(--blue-color)",
        color: "white",
        marginLeft: "30px",
        width: "100px",
        "&:hover": {
            backgroundColor: "#113e78ec",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "15px",
        },
    },
}));

const CreatePainting = ({ className, staticContext, ...rest }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>

                        <Headers />

                        <div className={clsx(classes.pageContainer, className)}>
                            <Card className={clsx(classes.secondRoot, className)} elevation={2} {...rest}>
                                <Typography className={classes.title} gutterBottom variant="h4" component="h1">
                                    Create a new customer
                                </Typography>

                                <Divider className={classes.divider} />

                                <Grid>
                                    <Paper className={classes.mainTable}>
                                        <form autoComplete="off" className={classes.editForm}>
                                        </form>
                                    </Paper>
                                </Grid>
                            </Card>
                            {/* <ToastContainer /> */}
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default CreatePainting;
