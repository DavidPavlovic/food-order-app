import useInput from "../../hooks/use-input";

const CartCheckout = () => {    
    const { 
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const { 
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: streetInputHasError,
        valueChangeHandler: streetChangedHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetInput
    } = useInput(value => value.trim() !== '');

    const { 
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityInputHasError,
        valueChangeHandler:cityChangedHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityInput
    } = useInput(value => value.trim() !== '');

    const { 
        value: enteredPostal,
        isValid: enteredPostalIsValid,
        hasError: postalInputHasError,
        valueChangeHandler: postalChangedHandler,
        inputBlurHandler: postalBlurHandler,
        reset: resetPostalInput
    } = useInput(value => value.trim() !== '');


    return (
        <form>
            <div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'/>
                </div>
                <div>
                    <label htmlFor='name'>Street</label>
                    <input type='text' id='street'/>
                </div>
            </div>
            <div>
                <label htmlFor='name'>City</label>
                <input type='text' id='city'/>
            </div>
            <div>
                <label htmlFor='name'>Postal code</label>
                <input type='text' id='postal'/>
            </div>
            <div>
                <button>Confirm</button>
            </div>
        </form>
    );
}

export default CartCheckout;