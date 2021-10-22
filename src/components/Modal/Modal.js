import React from 'react';
import ReactDom from 'react-dom';
import css from '../Modal/Modal.module.css';

const BackdropEle = (props) => {
    return  (
        <div className={css.backdrop} onClick={props.onCloseModal}></div>
    )
};

const ModalEle = (props) => {
    return (
        <div className={css.modal}>
            <div className={css.modal__content}>
                <div className={css.modal__body}>
                    <p>{props.message}</p>
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
        <React.Fragment>
            { ReactDom.createPortal(<BackdropEle onCloseModal={props.onCloseModal} />, document.getElementById('backdrop-id')) }
            { ReactDom.createPortal(<ModalEle title={props.title} message={props.message} onCloseModal={props.onCloseModal} />, document.getElementById('modal-id')) }
        </React.Fragment>
    )
};


export default Modal;