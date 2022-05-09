import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';

const NavItem = (
    ...rest) => {

    return (
        <ListItem
            disableGutters
            {...rest}
        >
            <Button
            // activeClassName={classes.active}
            // component={NavLink}
            // to={href}
            >
                {/* {Icon && (
                    <Icon
                        size="20"
                    />
                )} */}
                <span >
                    test
                </span>
            </Button>
        </ListItem>
    );
};

NavItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
};

export default NavItem;
