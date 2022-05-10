import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Navbar from './Navbar';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Headers = ({ ...rest }) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                <Typography variant="h5" component="h1">
                    Delyane® - Administrator Dashboard
                </Typography>

            </Toolbar>

            <Navbar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
        </AppBar>

    );
};

Headers.propTypes = {
    className: PropTypes.string,
};
export default Headers;
