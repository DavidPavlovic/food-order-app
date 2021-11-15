import ProductItem from "./ProductItem";
import css from './ProductList.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const ProductList = () => {

    const productsList = DUMMY_MEALS.map((item) => {
        return <ProductItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}/>;
    })

    

    return(
        <ul className={css['product-list']}>
            {productsList}
        </ul>
    );
};

export default ProductList;