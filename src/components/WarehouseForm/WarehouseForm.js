import './WarehouseForm.scss';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const WarehouseForm = () => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWarehouse = {
            "name": e.target.warehouseName.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "country": e.target.country.value,
            "manager": e.target.contactName.value,
            "phone": e.target.phone.value,
            "email": e.target.email.value,
        };

        axios.post(process.env.REACT_APP_WAREHOUSE_ENDPOINT, newWarehouse)
            .then(res => {
                history.push(`/`);
            })
            .catch(error => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit} className='warehouse-form'>
            <div className='warehouse-form__top-container'>

                <section className='warehouse-form__section-container'>
                    <h2 className='form-detail__title'>Warehouse Details</h2>

                    <label className='form-detail__label' htmlFor='warehouseName'>Warehouse Name</label>
                    <input required className='form-detail__input' name='warehouseName' type="text" placeholder='Warehouse Name' />

                    <label className='form-detail__label' htmlFor='address'>Street Address</label>
                    <input required className='form-detail__input' name='address' type="text" placeholder='Street Address' />

                    <label className='form-detail__label' htmlFor='city'>City</label>
                    <input required className='form-detail__input' name='city' type="text" placeholder='City' />

                    <label className='form-detail__label' htmlFor='country'>Country</label>
                    <input required className='form-detail__input' name='country' type="text" placeholder='Country' />
                </section>

                <section className='warehouse-form__section-container'>
                    <h2 className='form-detail__title'>Contact Details</h2>

                    <label className='form-detail__label' htmlFor='contactName'>Contact Name</label>
                    <input required className='form-detail__input' name='contactName' type="text" placeholder='Contact Name' />

                    <label className='form-detail__label' htmlFor='phone'>Phone Number</label>
                    <input required className='form-detail__input' name='phone' type="text" placeholder='Phone Number' />

                    <label className='form-detail__label' htmlFor='email'>Email</label>
                    <input required className='form-detail__input' name='email' type="text" placeholder='Email' />
                </section>
            </div>


            <div className='warehouse-form__button-container'>
                <Link to='/warehouse'
                    className='form__button form__button--cancel'>Cancel
                </Link>
                <button type="submit" className='form__button form__button--submit' > + Add Warehouse</button>
            </div>

        </form>
    );

}

export default WarehouseForm