import './DeleteInventory.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import React from 'react';



const DeleteInventory = ( props ) => {

    const history = useHistory();
    const id = props.match.params.inventoryId;


    const handleDelete = () => {
       
        axios
        .delete(`http://localhost:8080/inventories/${id}`)
        .then(result => {
            alert("Inventory Item has been deleted");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='deleteInventory'>
            <div className='deleteInventory__close-icon'>
                
                    <img src={closeButton} alt='x icon' onClick={history.goBack}/>
                
            </div>
            <div className='deleteInventory__text-container'>
                <h1 className='deleteInventory__heading page-header'>
                    Delete inventory item?
                </h1>
                <p className='deleteInventory__text body-large'>
                    Please confirm that you'd like to delete the item from the inventory list? You won't be able to undo this action.
                </p>
            </div>
            <div className='deleteInventory__button-container'>
                
                    <button className='deleteInventory__button-cancel button-text' type='submit' onClick={history.goBack}>
                        Cancel
                    </button>
             
                
                
                <button className='deleteInventory__button-delete button-text' type='submit' onClick={handleDelete}>
                    Delete
                </button>
               
               
            </div>
        </div>
    );
};

export default DeleteInventory;