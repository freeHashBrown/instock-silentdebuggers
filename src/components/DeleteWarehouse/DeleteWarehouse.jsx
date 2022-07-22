import './DeleteWarehouse.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg'

function DeleteWarehouse() {
    return (
        <div className='deleteWarehouse'>
            <div className='deleteWarehouse__close-icon'>
                <img src={closeButton} alt='x icon'/>
            </div>
            <div className='deleteWarehouse__text-container'>
                <h1 className='deleteWarehouse__heading page-header'>
                    Delete Washington warehouse?
                </h1>
                <p className='deleteWarehouse__text body-large'>
                    Please confirm that you'd like to delete Washington from the list of warehouses. You won't be able to undo this action.
                </p>
            </div>
            <div className='deleteWarehouse__button-container'>
                <button className='deleteWarehouse__button-cancel button-text' type='submit'>
                    Cancel
                </button>
                <button className='deleteWarehouse__button-delete button-text' type='submit'>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteWarehouse