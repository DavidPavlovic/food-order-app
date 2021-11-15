import { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';
import css from '../Modal/Modal.module.css';
import CartContext from '../../context/cart-context';

const BackdropEle = (props) => {
    return  (
        <div className={css.backdrop} onClick={props.onCloseModal}></div>
    )
};

const ModalEle = (props) => {
    const cartContext = useContext(CartContext);
    const cartTotalAmount = `$${cartContext.cartAmount.toFixed(2)}`;
    const isEmpty = cartContext.cartArr.length > 0;

    console.log(props)
    console.log(cartContext)

    const cartAdd = () => {

    }

    const cartRemove = () => {

    }

    return (
        <div className={css.modal}>
            <div className={css.modal__content}>
                <div className={css.modal__body}>
                    <ul>
                        {cartContext.cartArr.map(function(item, index){
                            return <li key={ index }>
                                    <span> {item.name}</span>
                                    <div>
                                        <div>
                                            <span> {item.price}</span>
                                            <span>{` x ${item.amount}`}</span>
                                        </div>
                                        <div>
                                            <button onClick={cartRemove.bind(null, item.id)}>-</button>
                                            <button onClick={cartAdd.bind(null, item)}>+</button>
                                        </div>
                                    </div>
                                </li>;
                        })}
                    </ul>
                    <div>Total amount: {cartTotalAmount}</div>
                </div>
                
                <div className={css.modal__footer}>
                    <button onClick={props.onCloseModal}>Close</button>
                    {isEmpty && <button>Order</button>}
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