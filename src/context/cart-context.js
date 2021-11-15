import React from 'react';

const CartContext = React.createContext({
    cartArr: [],
    cartAmount: 0,
    onAdd: (product) => {},
    onRemove: (product) => {},
})

export default CartContext;
