import './AddNewWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'
import axios from 'axios';

function AddNewWarehouse () {

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i=0; i < 8; i++) {
            const formInputs = e.target[i].value
            if (!formInputs) {
                e.target[i].nextSibling.classList.remove('addNewWarehouse__input-error--hidden')
                e.target[i].nextSibling.classList.add('addNewWarehouse__input-error')
            } else {
                e.target[i].nextSibling.classList.add('addNewWarehouse__input-error--hidden');
                // axios.post(`http://localhost:8080/warehouses`, {
                //     name: e.target[0].value,
                //     address: e.target[1].value,
                //     city: e.target[2].value,
                //     country: e.target[3].value,
                //     contactName: e.target[4].value,
                //     position: e.target[5].value,
                //     phone: e.target[6].value,
                //     email: e.target[7].value
                    
                // })
                //     .catch((error) => {'Error uploading'})
            }
        }
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value || !e.target[5].value || !e.target[6].value || !e.target[7].value) {
            return
        } else {
            axios.post(`http://localhost:8080/warehouses`, {
                name: e.target[0].value,
                address: e.target[1].value,
                city: e.target[2].value,
                country: e.target[3].value,
                contactName: e.target[4].value,
                position: e.target[5].value,
                phone: e.target[6].value,
                email: e.target[7].value
            })
            e.target.reset();
            successMessage();
        }
    }

    const successMessage = () => {
        const message = document.getElementById('success');
        message.classList.remove('addNewWarehouse__success--hidden');
        message.classList.add('addNewWarehouse__success');
    }

    const handleClick = () => {
        // props.props.history.push('/');
    }

    return (
        <div className='addNewWarehouse'>
            <div className='addNewWarehouse__card'>
                <header className='addNewWarehouse__header'>
                    <img className='addNewWarehouse__back-icon' src={backIcon} alt='left arrow'/>
                    <h1 className= 'addNewWarehouse__heading page-header'>
                        Add New Warehouse
                    </h1>
                </header>
                <main className='addNewWarehouse__details'>
                    <form className='addNewWarehouse__forms' onSubmit={handleSubmit} id='form'>
                        <div className='addNewWarehouse__details-warehouse'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Warehouse Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Warehouse Name
                                    <input className='addNewWarehouse__input' type='text' placeholder='Warehouse Name'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Street Address
                                    <input className='addNewWarehouse__input' type='text' placeholder='Street Address'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    City
                                    <input className='addNewWarehouse__input' type='text' placeholder='City'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Country
                                    <input className='addNewWarehouse__input' type='text' placeholder='Country'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                        <div className='addNewWarehouse__details-contact'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Contact Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Contact Name
                                    <input className='addNewWarehouse__input' type='text' placeholder='Contact Name'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Position
                                    <input className='addNewWarehouse__input' type='text' placeholder='Position'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Phone Number
                                    <input className='addNewWarehouse__input' type='text' placeholder='Phone Number'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Email
                                    <input className='addNewWarehouse__input' type='text' placeholder='Email'/>
                                    <label className= 'addNewWarehouse__input-error--hidden'>This field is required</label>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
                <div className='addNewWarehouse__button-container'>
                    <label className='addNewWarehouse__success--hidden' id='success'>Warehouse added!</label>
                    <button className='addNewWarehouse__button-cancel button-text' type='submit' onClick={handleClick}>
                        Cancel
                    </button>
                    <button className='addNewWarehouse__button-add button-text' type='submit' form='form'>
                        + Add Warehouse
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewWarehouse ;