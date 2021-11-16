import { Fragment, useState, useContext, useEffect} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';
import Modal from '../Modal/Modal';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const [isValid, setIsValid] = useState(false);
    const [isBtnHighleted, setIsBtnHighleted] = useState(false);

    const cartItemsLengts = cartCtx.cartArr.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    const changeIsValid = () => {
        setIsValid(true);
    }

    const changeIsInValid = () => {
        setIsValid(false);
    }

    const btnClasses = `${css.cart} ${isBtnHighleted ? css.bump : ''}`;

    useEffect(() => {
        if (cartCtx.cartArr.length === 0) {
          return;
        }

        setIsBtnHighleted(true);
    
        const timer = setTimeout(() => {
            setIsBtnHighleted(false);
        }, 300);
    
        return() => {
          clearTimeout(timer);
        };
        
    }, [cartCtx.cartArr]);

    return(
        <Fragment>
            {isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsInValid}></Modal>
            }
            <button className={btnClasses} onClick={changeIsValid}>
                <CartIcon className={css['cart__icon']}/>
                <div>Your Cart</div>
                <div>
                    {cartItemsLengts}
                </div>
            </button>
        </Fragment>
    );
};

export default Cart;