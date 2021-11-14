import { Fragment } from 'react';
import ReactDom from 'react-dom';
import css from '../Modal/Modal.module.css';

const BackdropEle = (props) => {
    return  (
        <div className={css.backdrop} onClick={props.onCloseModal}></div>
    )
};

const ModalEle = (props) => {
    const productsList = [];

    console.log(props)

    return (
        <div className={css.modal}>
            <div className={css.modal__content}>
                <div className={css.modal__body}>
                    <ul>
                        {productsList.map(function(item, index){
                            return <li key={ index }>
                                    <span> {item.name}</span>
                                    <div>
                                        <div>
                                            <span> {item.price}</span>
                                            <span> x 2</span>
                                        </div>
                                        <div>
                                            <button>-</button>
                                            <button>+</button>
                                        </div>
                                    </div>
                                </li>;
                        })}
                    </ul>
                </div>
                
                <div className={css.modal__footer}>
                    <button onClick={props.onCloseModal}>Close</button>
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