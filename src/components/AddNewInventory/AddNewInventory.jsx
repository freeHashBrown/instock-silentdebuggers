import './AddNewInventory.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddNewInventory() {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        //checks if form components have a value and displays an error if they don't
        for (let i = 0; i < 3; i++) {
            const formInputs = e.target[i].value;
            
            if (!formInputs) {
                e.target[i].nextSibling.classList.remove('addNewInventory__input-error--hidden');
                e.target[i].nextSibling.classList.add('addNewInventory__input-error');
            } else {
                e.target[i].nextSibling.classList.add('addNewInventory__input-error--hidden');
            }
        }
        for(let k = 5; k < 7; k++) {
            const quantity = e.target[k].value;

            if (!quantity) {
                e.target[k].nextSibling.classList.remove('addNewInventory__input-error--hidden');
                e.target[k].nextSibling.classList.add('addNewInventory__input-error');
            } else {
                e.target[k].nextSibling.classList.add('addNewInventory__input-error--hidden');
            }
        }
        const radioOne = e.target[3].checked;
        const radioTwo = e.target[4].checked;
        const error = document.getElementById('radio-error');

        if (!radioOne && !radioTwo) {
            error.classList.add('addNewInventory__input-error');
            error.classList.remove('addNewInventory__input-error--hidden');
        } else {
            error.classList.add('addNewInventory__input-error--hidden');
            error.classList.remove('addNewInventory__input-error');
        }

        //checks for selected radio button
        const radioValues = document.getElementsByName('stock');
        let selectedRadioValue = ''
        for(let i = 0; i < radioValues.length; i++) {
            if (radioValues[i].checked) {
                selectedRadioValue = radioValues[i].value
            }
        }

        //post success message
        const message = document.getElementById('success');
        const successMessage = () => {
            message.classList.remove('addNewInventory__success--hidden');
            message.classList.add('addNewInventory__success');
        }
        const removeSuccessMessage = () => {
            message.classList.add('addNewInventory__success--hidden');
            message.classList.remove('addNewInventory__success');
        }

        //checks if all form components are filled out before posting
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !radioOne && !radioTwo || !e.target[5].value || !e.target[6].value) {
            removeSuccessMessage();
        } else {
            axios.post(`http://localhost:8080/inventories`, {
                itemName: e.target[0].value,
                description: e.target[1].value,
                category: e.target[2].value,
                status: selectedRadioValue,
                quantity: e.target[5].value,
                warehouseName: e.target[6].value
            })
            .catch(error => {
                console.log(error)
            })

            e.target.reset();
            successMessage();
        }
    }

    return (
        <div className='addNewInventory'>
            <div className='addNewInventory__card'>
                <header className='addNewInventory__header'>
                    <img className='addNewInventory__back-icon' src={backIcon} onClick={history.goBack}/>
                    <h1 className= 'addNewInventory__heading page-header'>
                        Add New Inventory Item
                    </h1>
                </header>
                <main className='addNewInventory__details'>
                    <form className='addNewInventory__forms' id='form' onSubmit={handleSubmit}>
                        <div className='addNewInventory__details-item'>
                            <h2 className='addNewInventory__details-subheading sub-header'>
                                Item Details
                            </h2>
                            <div className='addNewInventory__form-container'>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Item Name
                                    <input className='addNewInventory__input' type='text' placeholder='Item Name'/>
                                    <label className= 'addNewInventory__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Description
                                    <input className='addNewInventory__input-description' type='textarea' placeholder='Please enter a brief item description...'/>
                                    <label className= 'addNewInventory__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Category
                                    <select className='addNewInventory__input-dropdown' type='text' placeholder='Please select'>
                                        <option value='' selected disabled hidden>Please select</option>
                                        <option value='Electronics'>Electronics</option>
                                        <option value='Gear'>Gear</option>
                                        <option value='Apparel'>Apparel</option>
                                        <option value='Accessories'>Accessories</option>
                                        <option value='Health'>Health</option>
                                        <option value='Electronics'>Electronics</option>
                                    </select>
                                    <label className= 'addNewInventory__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                        <div className='addNewInventory__details-availability'>
                            <h2 className='addNewInventory__details-subheading sub-header'>
                                Item Availability
                            </h2>
                            <div className='addNewInventory__form-container'>
                                <label className='addNewInventory__label label-text'>
                                    Status
                                    <div className='addNewInventory__selection-container'>
                                        <div className='addNewInventory__selection-option'>
                                            <input type='radio' value='In Stock' id='in-stock' name='stock'/>
                                            <label className='addNewInventory__selection-label' htmlFor='in-stock'>In stock</label>
                                        </div>
                                        <div className='addNewInventory__selection-option'>
                                            <input type='radio' value='Out of Stock' id='out-of-stock' name='stock'/>
                                            <label className='addNewInventory__selection-label' htmlFor='out-of-stock'>Out of stock</label>
                                        </div>
                                    </div>
                                    <label className= 'addNewInventory__input-error--hidden' id='radio-error'>This field is required</label>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input' id='quantity-input'>
                                    Quantity
                                    <input className='addNewInventory__input' type='number' placeholder='0'/>
                                    <label className= 'addNewInventory__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Warehouse
                                    <select className='addNewInventory__input-dropdown' type='text' placeholder='Please select'>
                                        <option value='' selected disabled hidden>Please select</option>
                                        <option value='Manhattan'>Manhattan</option>
                                        <option value='Washington'>Washington</option>
                                        <option value='Jersey'>Jersey</option>
                                        <option value='San Fran'>San Fran</option>
                                        <option value='Santa Monica'>Santa Monica</option>
                                        <option value='Seattle'>Seattle</option>
                                        <option value='Miami'>Miami</option>
                                    </select>
                                    <label className= 'addNewInventory__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
               <div className='addNewInventory__form-footer'>
                    <div className='addNewInventory__success-container'>
                        <label className='addNewInventory__success--hidden' id='success'>Inventory added!</label>
                    </div>
                    <div className='addNewInventory__button-container'>
                        <button className='addNewInventory__button-cancel button-text' type='submit' onClick = {history.goBack}>
                            Cancel
                        </button>
                        <button className='addNewInventory__button-add button-text' type='submit' form='form'>
                            + Add Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewInventory;
