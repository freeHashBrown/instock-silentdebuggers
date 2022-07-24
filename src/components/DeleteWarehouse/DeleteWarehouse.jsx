import './DeleteWarehouse.scss';
import closeButton from '../../../src/assets/icons/close-24px.svg';
import axios from 'axios';

const DeleteWarehouse = (props) => {

    if (!props.show) {
        return null
    }
    const handleClick = () => {
        axios.delete(`http://localhost:8080/warehouses`)
    }
    return (
        <div className='deleteWarehouse'>
            <div className='deleteWarehouse__close-icon'>
                <img src={closeButton} alt='x icon' onClick={props.onClose}/>
            </div>
            <div className='deleteWarehouse__text-container'>
                <h1 className='deleteWarehouse__heading page-header'>
                    Delete {props.warehouse.name} warehouse?
                </h1>
                <p className='deleteWarehouse__text body-large'>
                    Please confirm that you'd like to delete {props.warehouse.name} from the list of warehouses. You won't be able to undo this action.
                </p>
            </div>
            <div className='deleteWarehouse__button-container'>
                <button className='deleteWarehouse__button-cancel button-text' type='submit' onClick={props.onClose}>
                    Cancel
                </button>
                <button className='deleteWarehouse__button-delete button-text' type='submit' onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteWarehouse