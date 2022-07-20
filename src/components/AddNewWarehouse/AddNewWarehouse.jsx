import './AddNewWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function AddNewWarehouse () {
    return (
        <div className='addNewWarehouse'>
            <div className='addNewWarehouse__card'>
                <header className='addNewWarehouse__header'>
                    <img src={backIcon} />
                    <h1 className= 'page-header'>
                        Add New Warehouse
                    </h1>
                </header>

                <main className='addNewWarehouse__details'>
                    <section className='addNewWarehouse__details-warehouse'>
                        <h2 className='addNewWarehouse__details-heading sub-header'>
                            Warehouse Details
                        </h2>
                        <form className='addNewWarehouse__form' id='add-form'>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Warehouse Name</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Warehouse Name'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Street Address</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Street Address'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>City</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='City'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Country</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Country'/>
                        </form>
                    </section>
                    <section className='addNewWarehouse__details-contact'>
                        <h2 className='addNewWarehouse__details-heading sub-header'>
                            Contact Details
                        </h2>
                        <form className='addNewWarehouse__form'>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Contact Name</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Contact Name'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Position</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Position'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Phone Number</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Phone Number'/>
                            <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Email</label>
                            <input className='addNewWarehouse__input' type='text' placeholder='Email'/>
                        </form>
                     </section>
                    <section className='addNewWarehouse__button-section'>
                        <button className='addNewWarehouse__button'>
                            Cancel
                        </button>
                        <button className='addNewWarehouse__button'>
                            +Add Warehouse
                        </button>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default AddNewWarehouse ;