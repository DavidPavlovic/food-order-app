import React from 'react';

const CartContext = React.createContext({
    cartArr: [],
    cartLength: 0,
    onAdd: (product) => {},
    onRemove: (product) => {},
})

export default CartContext;
