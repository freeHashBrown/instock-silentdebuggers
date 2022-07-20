import './AddNewWarehouse.scss';

function AddNewWarehouse () {
    return (
        <div>
            <div className='addNewWarehouse'>
                <div className='addNewWarehouse__top'>
                    <h1 className='addNewWarehouse__header'>
                        Add New Warehouse
                    </h1>
                </div>
                <div className='addNewWarehouse__card'>
                    <main className='addNewWarehouse__details'>
                        <section className='addNewWarehouse__details-warehouse'>
                            <h2 className='addNewWarehouse__details-heading'>
                                Warehouse Details
                            </h2>
                            <form className='addNewWarehouse__form'>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Warehouse Name</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Warehouse Name'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Street Address</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Street Address'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>City</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='City'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Country</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Country'/>
                            </form>
                        </section>
                        <section className='addNewWarehouse__details-contact'>
                            <h2 className='addNewWarehouse__details-heading'>
                                Contact Details
                            </h2>
                            <form className='addNewWarehouse__form'>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Contact Name</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Contact Name'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Position</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Position'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Phone Number</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Phone Number'/>
                                <label className='addNewWarehouse__label' htmlFor='addNewWarehouse__input'>Email</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Email'/>
                            </form>
                        </section>
                        <section className='addNewWarehouse__button-section'>
                            <button>
                                Cancel
                            </button>
                            <button>
                                +Add Warehouse
                            </button>
                        </section>
                    </main>
                </div>
            </div>
        </div>
        
    );
}

export default AddNewWarehouse ;