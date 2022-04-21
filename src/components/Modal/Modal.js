import { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';
import css from '../Modal/Modal.module.css';
import CartContext from '../../context/cart-context';
import CartCheckout from '../Cart/CartCheckout';

const BackdropEle = (props) => {
    return  (
        <div className={css.backdrop} onClick={props.onCloseModal}></div>
    )
};

const ModalEle = (props) => {
    const cartContext = useContext(CartContext);
    const cartTotalAmount = `$${cartContext.cartAmount.toFixed(2)}`;
    const isEmpty = cartContext.cartArr.length > 0;

    const cartAdd = (item) => {
        cartContext.onAdd({...item, amount: 1})
    }

    const cartRemove = (item) => {
        cartContext.onRemove(item)
    }

    return (
        <div className={css.modal}>
            <div className={css.modal__content}>
                <div className={css.modal__body}>
                    <ul>
                        {cartContext.cartArr.map(function(item, index){
                            return <li key={ index } className={css['modal__product-list-item']}>
                                    <span className={css['modal__product-list-title']}> {item.name}</span>
                                    <div className={css['modal__product-list-action-container']}>
                                        <div>
                                            <span className={css['modal__product-list-price']}>$ {item.price}</span>
                                            <span className={css['modal__product-list-amount']}>{` x ${item.amount}`}</span>
                                        </div>
                                        <div>
                                            <button className={css['modal__product-list-btn']} onClick={cartRemove.bind(null, item.id)}>-</button>
                                            <button className={css['modal__product-list-btn']} onClick={cartAdd.bind(null, item)}>+</button>
                                        </div>
                                    </div>
                                </li>;
                        })}
                    </ul>
                    <div className={css['modal__product-list-total-amount']}>
                        <span>Total amount: </span>
                        <span>{cartTotalAmount}</span>
                    </div>
                    {cartContext.cartArr.length > 0 && <CartCheckout/>}
                </div>
                
                <div className={css.modal__footer}>
                    <button className={`${css['modal__product-list-btn']} ${css['modal__product-list-btn--large']}`} onClick={props.onCloseModal}>Close</button>
                    {isEmpty && <button className={`${css['modal__product-list-btn']} ${css['modal__product-list-btn--large']}`}>Order</button>}
                </div>
            </div>
        </div>
    )
}

const Modal = (props) => {
    return(
        <Fragment>
            { ReactDom.createPortal(<BackdropEle onCloseModal={props.onCloseModal} />, document.getElementById('backdrop-id')) }
            { ReactDom.createPortal(<ModalEle productList={props.productList} onCloseModal={props.onCloseModal} />, document.getElementById('modal-id')) }
        </Fragment>
    )
};

export default Modal;