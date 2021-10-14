import css from './Card.module.css';

const Card = (props) => {

    let classes;

    if(props.cardType === 'hero') {
        classes = css.card + ' ' + css['card--hero'];
    }else if(props.cardType === 'products') {
        classes = css.card + ' ' + css['card--products'];
    }

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};
 
export default Card;