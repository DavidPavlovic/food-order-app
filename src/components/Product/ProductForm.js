import css from './ProductForm.module.css';

const ProductForm = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('radi')
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