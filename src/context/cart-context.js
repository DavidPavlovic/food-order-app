import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
    cartLength: 0,
    onAdd: (inputIsDefault) => {},
    onRemove: () => {}
})

export const CartContextProvider = (props) => {
    let [isCartFilled, setIsCartFilled] = useState(0);

    useEffect(() => {
        const cartLengthInfo = localStorage.getItem('cartLength');

        cartLengthInfo ?  setIsCartFilled(cartLengthInfo) :  setIsCartFilled(isCartFilled);

    }, [isCartFilled]);

    const addHandler = (inputIsDefault) => {
        isCartFilled = parseInt(isCartFilled) + parseInt(inputIsDefault);
        localStorage.setItem('cartLength', isCartFilled);
        setIsCartFilled(isCartFilled);
    
    };

    const removeHandler = () => {
        isCartFilled--;
        localStorage.setItem('cartLength',isCartFilled);
        setIsCartFilled(isCartFilled);
    };


    return <CartContext.Provider value={{cartLength: isCartFilled, onAdd: addHandler, onRemove: removeHandler}}>{props.children}</CartContext.Provider>
}

export default CartContext;
