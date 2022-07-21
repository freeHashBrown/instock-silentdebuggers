import './AddNewInventory.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg';

function AddNewInventory() {
    return (
        <div className='addNewInventory'>
            <div className='addNewInventory__card'>
                <header className='addNewInventory__header'>
                    <img className='addNewInventory__back-icon' src={backIcon} />
                    <h1 className= 'addNewInventory__heading page-header'>
                        Add New Inventory Item
                    </h1>
                </header>
                <main className='addNewInventory__details'>
                    <form className='addNewInventory__forms' id='form'>
                        <div className='addNewInventory__details-item'>
                            <h2 className='addNewInventory__details-subheading sub-header'>
                                Item Details
                            </h2>
                            <div className='addNewInventory__form-container'>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Item Name
                                    <input className='addNewInventory__input' type='text' placeholder='Item Name'/>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Description
                                    <input className='addNewInventory__input-description' type='textarea' placeholder='Please enter a brief item description...'/>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Category
                                    <input className='addNewInventory__input' type='text' placeholder='Please select'/>
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
                                            <input type='radio' value='in-stock' id='in-stock'/>
                                            <label className='addNewInventory__selection-label' htmlFor='in-stock'>In stock</label>
                                        </div>
                                        <div className='addNewInventory__selection-option'>
                                            <input type='radio' value='out-of-stock' id='out-of-stock'/>
                                            <label className='addNewInventory__selection-label' htmlFor='out-of-stock'>Out of stock</label>
                                        </div>
                                        
                                    </div>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Quantity
                                    <input className='addNewInventory__input' type='text' placeholder='0'/>
                                </label>
                                <label className='addNewInventory__label label-text' htmlFor='addNewInventory__input'>
                                    Warehouse
                                    <input className='addNewInventory__input' type='text' placeholder='Please select'/>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
                <div className='addNewInventory__button-container'>
                    <button className='addNewInventory__button-cancel button-text' type='submit'>
                        Cancel
                    </button>
                    <button className='addNewInventory__button-add button-text' type='submit' form='form'>
                        + Add Item
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewInventory;
