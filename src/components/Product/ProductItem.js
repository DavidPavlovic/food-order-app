import ProductForm from './ProductForm';
import css from './ProductItem.module.css';

const ProductItem = (props) => {
    return(
        <li key={props.id} className={css['product-item']}>
            <div>
                <div className={css['product-item__name']}>{props.name}</div>
                <div className={css['product-item__desc']}>{props.description}</div>
                <div className={css['product-item__price']}>${props.price}</div>
            </div>
            <ProductForm/>
        </li>
    );
};

export default ProductItem;