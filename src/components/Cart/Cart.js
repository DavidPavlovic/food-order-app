import React from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';

const Cart = () => {
    return(
        <button className={css.cart}>
            <CartIcon className={css['cart__icon']}/>
            <div>Your Cart</div>
            <div>1</div>
        </button>
    );
};

export default Cart;