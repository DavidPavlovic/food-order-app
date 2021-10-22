import React,{useContext} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';

const Cart = () => {
    const ctx = useContext(CartContext);

    console.log(ctx)

    return(
        <button className={css.cart}>
            <CartIcon className={css['cart__icon']}/>
            <div>Your Cart</div>
            <div>
                {ctx.cartLength}
            </div>
        </button>
    );
};

export default Cart;