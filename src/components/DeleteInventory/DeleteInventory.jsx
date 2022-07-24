import './DeleteInventory.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg';
import { useHistory } from 'react-router-dom';

function DeleteInventory() {
    const history = useHistory();

    return (
        <div className='deleteInventory'>
            <div className='deleteInventory__close-icon'>
                <img src={closeButton} alt='x icon'/>
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
                <button className='deleteInventory__button-delete button-text' type='submit'>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteInventory;
