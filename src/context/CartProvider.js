import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartstate =  {
    cartArr: [],
    cartAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedCartAmount = state.cartAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.cartArr.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.cartArr[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.cartArr];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else {
            updatedItems = state.cartArr.concat(action.item)
        }

        return {
            cartArr: updatedItems,
            cartAmount: updatedCartAmount
        }
    }

    if(action.type === 'REMOVE') {

        const existingCartItemIndex = state.cartArr.findIndex(item => item.id === action.itemId);
        const existingCartItem = state.cartArr[existingCartItemIndex];
        const updatedCartAmount = state.cartAmount - existingCartItem.price;
        let updatedItems;

        if(existingCartItem.amount === 1) {
            updatedItems = state.cartArr.filter(item => item.id !== action.itemId)
        }else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.cartArr];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            cartArr: updatedItems,
            cartAmount: updatedCartAmount
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
        cartAmount: cartState.cartAmount,
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