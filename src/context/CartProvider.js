import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartstate =  {
    cartArr: [],
    cartLength: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedCartArr = state.cartArr.concat(action.item);
        const updatedCartAmount = state.cartLength + action.item.price * action.item.amount;

        return {
            cartArr: updatedCartArr,
            cartLength: updatedCartAmount
        }
    }

    return defaultCartstate;
};

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartstate);

    const addHandler = (cartItem) => {
        dispatchCartAction({type: 'ADD', item: cartItem});
    };

    const removeHandler = (cartItemId) => {
        dispatchCartAction({type: 'REMOVE', itemId: cartItemId});
    };

    const cartContext = {
        cartArr: cartState.cartArr,
        cartLength: cartState.cartLength,
        onAdd: addHandler,
        onRemove: removeHandler
    }

    return ( 
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;