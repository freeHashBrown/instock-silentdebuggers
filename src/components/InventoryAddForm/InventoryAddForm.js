import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './InventoryAddForm.scss';
import axios from 'axios';

const InventoryAddForm = ({ inventoryData, warehouseData }) => {

    const history = useHistory();

    const categoryList = inventoryData.map(item => item.category);
    const uniqueCategories = [...new Set(categoryList)]

    const individualItem = uniqueCategories.map(item => item)
    const warehouseList = warehouseData.map(item => item.name);

    const handleSubmit = (event) => {
        event.preventDefault();

        const warehouseId = warehouseData.find(item => item.name === event.target.itemWarehouse.value)

        const newInventory = {
            "itemName": event.target.itemName.value,
            "description": event.target.itemDescription.value,
            "warehouseName": event.target.itemWarehouse.value,
            "warehouseID": warehouseId.id,
            "quantity": Number(event.target.itemQuantity.value),
            "category": event.target.itemCategory.value,
            "status": event.target.itemIsAvailable.value
        }
        axios.post(process.env.REACT_APP_INVENTORY_ENDPOINT, newInventory)
            .then(response => {
                history.push(`/inventory`);
            })
            .catch(err => console.log(err))

    }

    return (

        <form className="item-form" onSubmit={handleSubmit}>
            <div className="item-form__body">
                <div className="item-form__details">
                    <h2 className="item-form__title">Item Details</h2>

                    <label className="item-form__label" htmlFor='itemName'>Item Name</label>
                    <input
                        type="text"
                        name="itemName"
                        className="item-form__input"
                        placeholder="Item Name"
                        required
                    // value={inventoryData.itemName}

                    />

                    <label className="item-form__label" htmlFor='itemDescription'>Description</label>
                    <textarea
                        name="itemDescription"
                        className="item-form__textarea"
                        rows='6'
                        placeholder="Please enter a brief item description..."
                        required
                    // value={categoryList.map(item => item)}

                    />

                    <label className="item-form__label" htmlFor='itemCategory'>Category</label>
                    <select
                        name="itemCategory"
                        className="item-form__dropdown"
                        required
                    // value={inventoryData.category}

                    >
                        <option value="" disabled hidden>Please select</option>
                        {
                            individualItem &&
                            individualItem.map((category, i) => <option key={i} value={category}>{category}</option>)

                        }
                    </select>
                </div>
                <div className="item-form__availability">
                    <h2 className="item-form__title">Item Availability</h2>

                    <label className="item-form__label">Status</label>

                    <div className="item-form__radios">

                        <label className="item-form__radio-label" htmlFor='itemAvailable'>
                            <input
                                type='radio'
                                name="itemIsAvailable"
                                id="itemAvailable"
                                value={"In Stock"}
                                className="item-form__radio-option"
                                defaultChecked

                            />
                            In Stock
                        </label>

                        {/* <label className="item-form__radio-label" htmlFor='itemUnavailable'>
                            <input
                                type='radio'
                                name="itemIsAvailable"
                                id='itemUnavailable'
                                value={"Out of Stock"}
                                className="item-form__radio-option"

                            />
                            Out of Stock
                        </label> */}

                    </div>
                    <label className="item-form__label" htmlFor='itemQuantity'>Quantity</label>
                    <input
                        name="itemQuantity"
                        type='number'
                        className="item-form__quantity"
                        min="1"
                        required
                    />
                    <label className="item-form__label" htmlFor='itemWarehouse'>Warehouse</label>
                    <select
                        name="itemWarehouse"
                        className="item-form__dropdown"


                    >
                        <option value="" disabled hidden>Please select</option>
                        {
                            warehouseList &&
                            warehouseList.map((warehouse, i) => <option key={i} >{warehouse}</option>)

                        }

                    </select>
                </div>
            </div>
            <div className="item-form__footer">
                <Link className='item-form__cancel' to={'/inventory'}>Cancel</Link>
                <button className='item-form__submit' type='submit'>+ Add Item</button>
            </div>
        </form>
    )

}
export default InventoryAddForm