import React from 'react';
import classes from './MainHeader.module.css';
import Cart from '../Cart/Cart';

const MainHeader = () => {
    return(
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <Cart />
        </header>
    );
};


export default MainHeader;