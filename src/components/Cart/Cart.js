import React,{useState, useContext} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';
import Modal from '../Modal/Modal';

const Cart = (props) => {
    const [isValid, setIsValid] = useState(false);
    const ctx = useContext(CartContext);
    const [isFilled, setIsFilled] = useState([]);

    var bla = ctx.cartArr;

    var tla = bla;
    

    console.log(typeof tla)


    const changeIsValid = () => {
        setIsValid(true);
        setIsFilled(JSON.parse(ctx.cartArr))
    }

    const changeIsInValid = () => {
        setIsValid(false);
    }

    return(
        <React.Fragment>
            {isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsInValid} productList={isFilled}></Modal>
            }
            <button  className={css.cart} onClick={changeIsValid}>
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