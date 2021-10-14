
const ProductItem = (props) => {
    console.log(props)

    return(
        <li key={props.id}>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
        </li>
    );
};

export default ProductItem;