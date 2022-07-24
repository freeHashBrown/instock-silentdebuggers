import './DeleteWarehouse.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg'
import { useHistory } from 'react-router-dom';

function DeleteWarehouse() {
    const history = useHistory();

    return (
        <div className='deleteWarehouse'>
            <div className='deleteWarehouse__close-icon'>
                <img src={closeButton} alt='x icon'/>
            </div>
            <div className='deleteWarehouse__text-container'>
                <h1 className='deleteWarehouse__heading page-header'>
                    Delete Warehouse?
                </h1>
                <p className='deleteWarehouse__text body-large'>
                    Please confirm that you'd like to delete the warehouse from the list? You won't be able to undo this action.
                </p>
            </div>
            <div className='deleteWarehouse__button-container'>
                <button className='deleteWarehouse__button-cancel button-text' type='button' onClick={history.goBack}>
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