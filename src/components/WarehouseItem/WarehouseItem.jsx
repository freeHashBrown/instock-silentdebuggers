import React, {useState} from 'react';
import "./WarehouseItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import garbage from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const WarehouseItem = ({ warehouse }) => {
    const [ setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleClick = () => setShow(true);
    // console.log(warehouse.id);

    return (
        <>
        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
        <section className='warehouse-item'>
            <div className='warehouse-item__column warehouse-item__column--select'>
                <div className='warehouse-item__box warehouse-item__box--select'>
                    <p className='table-header warehouse-item__label'>
                        Warehouse
                    </p>
                   
                        <div className='warehouse-item__bottom'>
                        <Link to={`/warehouses/${warehouse.id}`} className='warehouse-item__bottom'>
                                <p className='warehouse-item__data body-medium warehouse-item__data--select'>
                                    {warehouse.name}
                                </p>
                                <img src={chevron} alt="chevron" className='warehouse-item__chevron'/>
                        </Link>
                        </div>
                    
                </div>
                <div className='warehouse-item__box '>
                    <p className=' table-header warehouse-item__label'>
                        Address
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.address}, <br/>{warehouse.city}, {warehouse.country}
                    </p>
                </div>
                <img src={garbage} alt="delete" className='warehouse-item__icon'/>
                
            </div>

            <div className='warehouse-item__column'>
                <div className='warehouse-item__box'>
                    <p className='table-header warehouse-item__label'>
                        Contact Name
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.name}
                    </p>
                </div>
                <div className='warehouse-item__box'>
                    <p className='warehouse-item__label table-header'>
                        Contact Information
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.phone}
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.email}
                    </p>
                </div>
                <img src={edit} alt="edit" className='warehouse-item__icon warehouse-item__icon--select'/>

                <div className='warehouse-item__box warehouse-item__box--select'>
                    <Link to='/warehouse/delete'><img src={garbage} alt="delete" className='warehouse-item__tablet-button' onClick={handleClick}/></Link>
                    <Link to='/warehouse/edit'><img src={edit} alt="edit" className='warehouse-item__tablet-button'/></Link>
                </div>
          
            </div>
        </section>
        </>
    );
};

export default WarehouseItem;