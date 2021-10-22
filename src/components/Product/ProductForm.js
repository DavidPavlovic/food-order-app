import React,{useContext} from 'react';
import CartContext from '../../context/cart-context';
import css from './ProductForm.module.css';

const ProductForm = () => {

    const ctx = useContext(CartContext);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        ctx.onAdd();
    }

    return(
        <form onSubmit={onSubmitHandler} className={css['product-form']}>
            <fieldset className={css['product-form__fieldset']}>
                <label className={css['product-form__label']}>Amount</label>
                <input type="number" className={css['product-form__input']}></input>
            </fieldset>
            <button type="submit" className={css['product-form__btn']}>+ Add</button>
        </form>
    );
};

export default ProductForm;