import './EditWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function EditWarehouse (props) {
    if (!props.show) {
        return null
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i=0; i < 8; i++) {
            const v = e.target[i].value
            return v;
        }

    }

    return (
        <div className='EditWarehouse'>
            <div className='EditWarehouse__card'>
                <header className='EditWarehouse__header'>
                    <img className='EditWarehouse__back-icon' src={backIcon} alt='back'/>
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
                                    <input className='EditWarehouse__input' type='text' placeholder='Warehouse Name' value={props.warehouse.name}/>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Street Address
                                    <input className='EditWarehouse__input' type='text' placeholder='Street Address'/>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    City
                                    <input className='EditWarehouse__input' type='text' placeholder='City'/>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Country
                                    <input className='EditWarehouse__input' type='text' placeholder='Country'/>
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
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Position
                                    <input className='EditWarehouse__input' type='text' placeholder='Position'/>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Phone Number
                                    <input className='EditWarehouse__input' type='text' placeholder='Phone Number'/>
                                </label>
                                <label className='EditWarehouse__label label-text' htmlFor='EditWarehouse__input'>
                                    Email
                                    <input className='EditWarehouse__input' type='text' placeholder='Email'/>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
                <div className='EditWarehouse__button-container'>
                    <button className='EditWarehouse__button-cancel button-text' type='submit'>
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