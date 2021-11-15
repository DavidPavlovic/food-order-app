import React, { useState } from 'react';
import css from './ProductForm.module.css';

const ProductForm = (props, ref) => {
    //const amountInputRef = useRef();

    const [inputIsDefault, setInputIsDefault] = useState(1);
    const [amountIsvalid, setAmountIsvalid] = useState(false);

    const onInputChange = (e) => {
        setInputIsDefault(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputIsDefault;
        const bla = +enteredAmount;


        if(enteredAmount === 0 || bla < 1 || bla > 5) {
            setAmountIsvalid(true);
            return;
        }

        props.onAddToCart(bla);
    }

    return(
        <form onSubmit={onSubmitHandler} className={css['product-form']}>
            <fieldset className={css['product-form__fieldset']}>
                <label htmlFor={'product-input-' + props.productObj.id} className={css['product-form__label']}>Amount</label>
                <input id={'product-input-' + props.productObj.id} type="number" min="1" max="5" step="1" className={css['product-form__input']} onChange={onInputChange} value={inputIsDefault}></input>
            </fieldset>
            <button type="submit" className={css['product-form__btn']}>+ Add</button>
            {amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default ProductForm;