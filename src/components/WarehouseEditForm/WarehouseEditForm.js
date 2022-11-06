import './WarehouseEditForm.scss'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const WarehouseEditForm = ({ warehouseData }) => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            "name": e.target.warehouseName.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "country": e.target.country.value,
            "manager": e.target.managerName.value,
            "phone": e.target.phone.value,
            "email": e.target.email.value
        }

        axios.put(`${process.env.REACT_APP_WAREHOUSE_ENDPOINT}/${warehouseData.id}`, updatedData)
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
                    <input required className='form-detail__input' name='warehouseName' type="text" defaultValue={warehouseData.name} />

                    <label className='form-detail__label' htmlFor='address'>Street Address</label>
                    <input required className='form-detail__input' name='address' type="text" defaultValue={warehouseData.address} />

                    <label className='form-detail__label' htmlFor='city'>City</label>
                    <input required className='form-detail__input' name='city' type="text" defaultValue={warehouseData.city} />

                    <label className='form-detail__label' htmlFor='country'>Country</label>
                    <input required className='form-detail__input' name='country' type="text" defaultValue={warehouseData.country} />
                </section>

                <section className='warehouse-form__section-container'>
                    <h2 className='form-detail__title'>Manager Details</h2>

                    <label className='form-detail__label' htmlFor='contactName'>Manager Name</label>
                    <input required className='form-detail__input' name='managerName' type="text" defaultValue={warehouseData.manager} />

                    {/* <label className='form-detail__label' htmlFor='position'>Position</label>
                    <input className='form-detail__input' name='position' type="text" defaultValue='Position'
    
                        value={this.state.position} /> */}

                    <label className='form-detail__label' htmlFor='phone'>Phone Number</label>
                    <input required className='form-detail__input' name='phone' type="text" defaultValue={warehouseData.phone} />

                    <label className='form-detail__label' htmlFor='email'>Email</label>
                    <input required className='form-detail__input' name='email' type="text" defaultValue={warehouseData.email} />
                </section>
            </div>


            <div className='warehouse-form__button-container'>
                <Link to='/warehouse'
                    className='form__button form__button--cancel'>Cancel
                </Link>
                <button type="submit" className='form__button form__button--submit' >Save Warehouse</button>
            </div>

        </form>
    );
}
export default WarehouseEditForm