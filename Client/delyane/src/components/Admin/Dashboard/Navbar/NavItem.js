import React from 'react';

import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';

const NavItem = ({ ...rest }) => {

    return (
        <ListItem disableGutters {...rest} >
            <span >
                Test
            </span>
        </ListItem >
    );
};

NavItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
};

export default NavItem;
