import ProductItem from "./ProductItem";
import css from './ProductList.module.css';
import { useState, useCallback, useEffect } from "react";




const ProductList = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    let content = <p>There are no meals yet.</p>;


    const fetchMoviesHandler = useCallback(async () => {
        setError(null);

        try {
            const response = await fetch('https://reactapp-http-default-rtdb.europe-west1.firebasedatabase.app/food.json');

            if(!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json();
            const mealsArr = [];


            for(const key in data['-N-fyf4B2FXrCHilPPsx']) {

                mealsArr.push({
                    id: data['-N-fyf4B2FXrCHilPPsx'][key].id,
                    name: data['-N-fyf4B2FXrCHilPPsx'][key].name,
                    description: data['-N-fyf4B2FXrCHilPPsx'][key].description,
                    price: data['-N-fyf4B2FXrCHilPPsx'][key].price
                });
            }

            setMeals(mealsArr)
            
        } catch(error) {
            setError(error.message);
        }

        setIsLoading(false);
    },[]);
    

    const productsList = meals.map((item) => {
        return <ProductItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}/>;
    })

    if(meals.length > 0) {
        content = productsList;
    }

    if(error) {
        content = <p>{error}</p>;
    }

    if(isLoading) {
        content = <p>Loading...</p>;
    }

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);
    

    return(
        <ul className={css['product-list']}>
            {content}
        </ul>
    );
};

export default ProductList;