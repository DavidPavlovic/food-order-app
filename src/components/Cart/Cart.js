import { Fragment, useState, useContext} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';
import Modal from '../Modal/Modal';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const [isValid, setIsValid] = useState(false);

    const cartItemsLengts = cartCtx.cartArr.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    const changeIsValid = () => {
        setIsValid(true);
    }

    const changeIsInValid = () => {
        setIsValid(false);
    }

    return(
        <Fragment>
            {isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsInValid}></Modal>
            }
            <div className={css.cart} onClick={changeIsValid}>
                <CartIcon className={css['cart__icon']}/>
                <div>Your Cart</div>
                <div>
                    {cartItemsLengts}
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;