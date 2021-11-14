import { Fragment, useState, useContext} from 'react';
import css from './Cart.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../context/cart-context';
import Modal from '../Modal/Modal';

const Cart = (props) => {
    const [isValid, setIsValid] = useState(false);
    const ctx = useContext(CartContext);
    const [isFilled, setIsFilled] = useState([]);

    const filterData = (originalArray, prop) => {
        var newArray = [];
        var lookupObject  = {};
        let count = 0;

        for(var i in originalArray) {
            console.log(originalArray[i])

            if(lookupObject[originalArray[i][prop]]) {
                lookupObject[originalArray[i][prop]] = originalArray[i];
                count++;
                console.log(lookupObject[originalArray[i][prop]])

                console.log('ima')
            }else {
                console.log('nema')
                lookupObject[originalArray[i][prop]] = originalArray[i];
                lookupObject[originalArray[i][prop]].place = 1;

                console.log(lookupObject[originalArray[i][prop]])

            }

        }

        for(i in lookupObject) {
            newArray.push(lookupObject[i]);
        }

        return newArray;
    }
    

    const changeIsValid = () => {
        setIsValid(true);
        setIsFilled(JSON.parse(ctx.cartArr))
        const arr1 = filterData(JSON.parse(ctx.cartArr), 'id')

        console.log(JSON.parse(ctx.cartArr))


    }

    const changeIsInValid = () => {
        setIsValid(false);
    }

    return(
        <Fragment>
            {isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsInValid} productList={JSON.parse(ctx.cartArr)}></Modal>
            }
            <div  className={css.cart} onClick={changeIsValid}>
                <CartIcon className={css['cart__icon']}/>
                <div>Your Cart</div>
                <div>
                    {ctx.cartLength ? ctx.cartLength : 0}
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;