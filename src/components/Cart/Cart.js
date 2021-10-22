import React,{useState, useContext} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';
import Modal from '../Modal/Modal';

const Cart = () => {
    const [isValid, setIsValid] = useState(false);
    const ctx = useContext(CartContext);


    const changeIsValid = () => {
        setIsValid(false);
        console.log('test')
    }

    return(
        <React.Fragment>
            {!isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsValid} message='asdasdas'></Modal>
            }
            <button  className={css.cart}>
                <CartIcon className={css['cart__icon']}/>
                <div>Your Cart</div>
                <div>
                    {ctx.cartLength ? ctx.cartLength : 0}
                </div>
            </button>
        </React.Fragment>
    );
};

export default Cart;