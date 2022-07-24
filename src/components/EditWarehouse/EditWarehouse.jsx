import './EditWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'
import { useHistory } from "react-router-dom";
import axios from 'axios'
  

function EditWarehouse (props) {

    const history = useHistory();
    const id = props.match.params.warehouseId;
    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i=0; i < 8; i++) {
            const formInputs = e.target[i].value
            if (!formInputs) {
                e.target[i].nextSibling.classList.remove('EditWarehouse__input-error--hidden')
                e.target[i].nextSibling.classList.add('EditWarehouse__input-error')
            } else {
                e.target[i].nextSibling.classList.add('EditWarehouse__input-error--hidden');
            }
        }
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value || !e.target[5].value || !e.target[6].value || !e.target[7].value) {
            return
        } else {
            axios.put(`http://localhost:8080/warehouses/${id}`, {
                name: e.target[0].value,
                address: e.target[1].value,
                city: e.target[2].value,
                country: e.target[3].value,
                contactName: e.target[4].value,
                position: e.target[5].value,
                phone: e.target[6].value,
                email: e.target[7].value
            })
            

        }

    }

    return (
        
        <div className='EditWarehouse'>
            <div className='EditWarehouse__card'>
                <header className='EditWarehouse__header'>
                    <img className='EditWarehouse__back-icon' src={backIcon} alt='back' onClick={history.goBack}/>
                    <h1 className= 'EditWarehouse__heading page-header'>
                        Edit Warehouse
                    </h1>
                </header>
                <main className='EditWarehouse__details'>
                    <form className='EditWarehouse__forms' onSubmit={handleSubmit} id='form'>
                        <div className='EditWarehouse__details-warehouse'>
                            <h2 className='EditWarehouse__details-subheading sub-header'>
                                Warehouse Details
                            </h2>
                            <div className='EditWarehouse__form-container'>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Warehouse Name
                                    <input className='EditWarehouse__input' type='text' placeholder='Warehouse Name'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Street Address
                                    <input className='EditWarehouse__input' type='text' placeholder='Street Address'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    City
                                    <input className='EditWarehouse__input' type='text' placeholder='City'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Country
                                    <input className='EditWarehouse__input' type='text' placeholder='Country'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                        <div className='EditWarehouse__details-contact'>
                            <h2 className='EditWarehouse__details-subheading sub-header'>
                                Contact Details
                            </h2>
                            <div className='EditWarehouse__form-container'>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Contact Name
                                    <input className='EditWarehouse__input' type='text' placeholder='Contact Name'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Position
                                    <input className='EditWarehouse__input' type='text' placeholder='Position'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Phone Number
                                    <input className='EditWarehouse__input' type='text' placeholder='Phone Number'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Email
                                    <input className='EditWarehouse__input' type='text' placeholder='Email'/>
                                    <label className= 'EditWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
                <div className='EditWarehouse__button-container'>
                    <button className='EditWarehouse__button-cancel button-text' type='submit' onClick={history.goBack}>
                        Cancel
                    </button>
                    <button className='EditWarehouse__button-add button-text' type='submit' form='form'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditWarehouse ;