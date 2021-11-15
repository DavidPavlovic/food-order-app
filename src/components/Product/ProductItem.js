import { useContext } from 'react';
import ProductForm from './ProductForm';
import css from './ProductItem.module.css';
import CartContext from '../../context/cart-context';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = (amount) => {
        cartCtx.onAdd({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });

        console.log(props)
    };


    return(
        <li id={props.id} className={css['product-item']}>
            <div>
                <div className={css['product-item__name']}>{props.name}</div>
                <div className={css['product-item__desc']}>{props.description}</div>
                <div className={css['product-item__price']}>{price}</div>
            </div>
            <ProductForm productObj={props} onAddToCart={addToCartHandler} />
        </li>
    );
};

export default ProductItem;