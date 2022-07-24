import './DeleteInventory.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react';



class DeleteInventory extends Component {


    handleDelete = () => {

        const id  = this.props.match.params.inventoryId;
        

        axios
        .delete(`http://localhost:8080/inventories/${id}`)
        .then(result => {
            alert("Item has been deleted");
            
        })
        .catch(err => {
            console.log(err);
        })

    }


    render() {

        return (
            <div className='deleteInventory'>
            <div className='deleteInventory__close-icon'>
                <Link to="/inventory">
                    <img src={closeButton} alt='x icon' />
                </Link>
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
                <Link to="/inventory" className='remove-styling'>
                    <button className='deleteInventory__button-cancel button-text' type='submit' >
                        Cancel
                    </button>
                </Link>
                
                {/* <Link>  */}
                <button className='deleteInventory__button-delete button-text' type='submit' onClick={this.handleDelete}>
                    Delete
                </button>
                {/* </Link> */}
               
            </div>
        </div>
        );
    }
}

export default DeleteInventory;