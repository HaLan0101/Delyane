import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Navbar from './Navbar';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const Headers = ({ ...rest }) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <AppBar elevation={0} {...rest}>
            <Navbar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <Toolbar>
                <Typography variant="h5" component="h1">
                    Delyane® - Administrator Dashboard
                </Typography>

                <Box flexGrow={8} />
                <Hidden mdUp>
                    <IconButton color="inherit" onClick={() => setMobileNavOpen(true)}>
                        <MenuIcon style={{ color: '#113D78' }} />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar >

    );
};

Headers.propTypes = {
    className: PropTypes.string,
};
export default Headers;
