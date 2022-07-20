import React from 'react';
import "./WarehouseItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import garbage from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

const WarehouseItem = () => {
    return (
        <section className='warehouse-item'>
            <div className='warehouse-item__column'>
                <div className='warehouse-item__box'>
                    <p className='warehouse-item__label table-header'>
                        Warehouse
                    </p>
                    <div className='warehouse-item__bottom'>
                        <p>
                            Manhattan 
                        </p>
                        <img src={chevron} alt="chevron" />
                    </div>
                </div>
                <div className='warehouse-item__address'>
                    <p className='warehouse-item__label'>
                        Address
                    </p>
                    <p className='warehouse-item__data'>
                        503 Broadway, New York, USA
                    </p>
                </div>
                <img src={garbage} alt="delete" />
            </div>

            <div className='warehouse-item__column'>
                <div className='warehouse-item__box'>
                    <p className='warehouse-item__label'>
                        Contact Name
                    </p>
                    <p className='warehouse-item__data'>
                        Parmin Aujla
                    </p>
                </div>
                <div className='warehouse-item__box'>
                    <p className='warehouse-item__label'>
                        Contact Information
                    </p>
                    <p className='warehouse-item__data'>
                        +1(629)555-0129
                    </p>
                    <p className='warehouse-item__data'>
                        paujla@instock.com
                    </p>
                </div>
                <img src={edit} alt="edit" />
            </div>
        </section>
    );
};

export default WarehouseItem;