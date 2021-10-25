import React,{useState, useContext} from 'react';
import CartContext from '../../context/cart-context';
import css from './ProductForm.module.css';

const ProductForm = (props) => {

    const [inputIsDefault, setInputIsDefault] = useState(1);

    const ctx = useContext(CartContext);

    const onInputChange = (e) => {
        setInputIsDefault(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //const producObj = JSON.parse(props);
        const myObj = props.productObj
        console.log(props.productObj)
        ctx.onAdd(inputIsDefault,myObj);
    }

    return(
        <form onSubmit={onSubmitHandler} className={css['product-form']}>
            <fieldset className={css['product-form__fieldset']}>
                <label className={css['product-form__label']}>Amount</label>
                <input id={'product-input-' + props.productObj.id} type="number" className={css['product-form__input']} onChange={onInputChange} value={inputIsDefault}></input>
            </fieldset>
            <button type="submit" className={css['product-form__btn']}>+ Add</button>
        </form>
    );
};

export default ProductForm;