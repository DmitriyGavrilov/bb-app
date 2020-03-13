import React from 'react';
// import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {/* <NavLink to="/" activeClassName={classes.Active}>Burger Builder</NavLink> */}
        {/* <NavLink to="/checkout">Checkout</NavLink> */}
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;