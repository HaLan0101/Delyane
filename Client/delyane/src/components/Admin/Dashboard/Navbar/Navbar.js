import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import InputIcon from '@material-ui/icons/Input';
import NavItem from './NavItem';

const items = [
    {
        href: '/dashboard',
        // icon: DashboardRoundedIcon,
        title: 'Dashboard',
    }, {
        href: '/dashboard',
        // icon: DashboardRoundedIcon,
        title: 'Dashboard',
    }
];

const Navbar = ({ onMobileClose, openMobile }) => {

    useEffect(() => {
        if (openMobile && onMobileClose === false) {
            onMobileClose();
        }
    }, [onMobileClose, openMobile]);

    const content = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Typography
                    variant="h6"
                >

                </Typography>
            </Box>
            <Box p={2}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                    {/* {isAdmin && */}
                    <NavItem
                        href={'/app/users'}
                        title={'User list'}
                    // icon={PeopleAltIcon}
                    />
                    {/* } */}
                    <Hidden mdUp>
                        <NavItem
                            href={'/app/userprofile'}
                            title={'My profile'}
                        // icon={AccountCircleIcon}
                        />
                    </Hidden>
                </List>
            </Box>
            <Box flexGrow={1} />
            <Box
                p={2}
                m={2}
            >
                <List>
                    <NavItem
                        href='/login'
                        key='Logout'
                        title='Logout'
                    // icon={InputIcon}
                    // onClick={handleLogout}
                    />
                </List>
            </Box>
        </Box>
    );

    return (
        <Fragment>
            <Hidden mdUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </Fragment>
    );
};

Navbar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

Navbar.defaultProps = {
    onMobileClose: () => { },
    openMobile: false
};

export default Navbar;
