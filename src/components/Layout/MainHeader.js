import React from 'react';
import css from './MainHeader.module.css';
import Cart from '../Cart/Cart';

const MainHeader = () => {
    return(
        <header className={css.header}>
            <h1>ReactMeals</h1>
            <Cart />
        </header>
    );
};


export default MainHeader;