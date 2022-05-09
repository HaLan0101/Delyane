import React, { useState } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import Navbar from './Navbar';


const Headers = ({ ...rest }) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                <Box flexGrow={1} />

                <Typography variant="h5" component="h1">
                    Test
                </Typography>

            </Toolbar>

            <Navbar
                // headerData={headerData}
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
