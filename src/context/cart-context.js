import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
    // cartLength: 0,
    // cartArr: [],
    // onAdd: (inputIsDefault, inputObjIsDefault) => {},
    // onRemove: () => {}

    items: [],
    totalAmount: 0,
    onAdd: (product) => {},
    onRemove: (product) => {},
})

export const CartContextProvider = (props) => {
    let [isCartFilled, setIsCartFilled] = useState(0);
    let [isCartArrFilled, setIsCartArrFilled] = useState([]);

    useEffect(() => {
        const cartLengthInfo = localStorage.getItem('cartLength');
        const cartProducts = localStorage.getItem('cartArr');

        cartLengthInfo ?  setIsCartFilled(cartLengthInfo) :  setIsCartFilled(isCartFilled);
        cartProducts ? setIsCartArrFilled(cartProducts) : setIsCartArrFilled(isCartArrFilled);

    }, [isCartFilled, isCartArrFilled]);

    const addHandler = (inputIsDefault, inputObjIsDefault) => {
        isCartFilled = parseInt(isCartFilled) + parseInt(inputIsDefault);
        localStorage.setItem('cartLength', isCartFilled);
        setIsCartFilled(parseInt(isCartFilled) + parseInt(inputIsDefault));
        
        let newArr = isCartArrFilled;

        if(newArr.length > 0 || newArr == true) {

            let ra = JSON.parse(newArr)
            newArr = [...ra, inputObjIsDefault];

        }else {
            newArr.push(inputObjIsDefault);

        }

        setIsCartArrFilled(newArr);
        localStorage.setItem('cartArr', JSON.stringify(newArr));
    
    };

    const removeHandler = () => {
        isCartFilled--;
        localStorage.setItem('cartLength',isCartFilled);
        setIsCartFilled(isCartFilled);
    };


    return <CartContext.Provider value={{cartLength: isCartFilled, cartArr: isCartArrFilled, onAdd: addHandler, onRemove: removeHandler}}>{props.children}</CartContext.Provider>
}

export default CartContext;
