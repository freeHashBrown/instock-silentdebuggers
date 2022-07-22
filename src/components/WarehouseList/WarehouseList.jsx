import React from 'react';
import "./WarehouseList.scss";
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import sortIcon from "../../assets/icons/sort-24px.svg";


const WarehouseList = (props) => {
    console.log(props);
    return (
        <article className='warehouse-list'>
            <section className='warehouse-list__header'>
                <div className='warehouse-list__box'>
                    <p className='warehouse-list__label table-header'>
                        Warehouse
                    </p>
                    <img src={sortIcon} alt="sort" className='warehouse-list__icon'/>
                </div>
                <div className='warehouse-list__box'>
                    <p className='warehouse-list__label table-header'>
                        Address
                    </p>
                    <img src={sortIcon} alt="sort" className='warehouse-list__icon'/>
                </div>
                <div className='warehouse-list__box'>
                    <p className='warehouse-list__label table-header'>
                        Contact Name
                    </p>
                    <img src={sortIcon} alt="sort" className='warehouse-list__icon'/>
                </div>
                <div className='warehouse-list__box'>
                    <p className='warehouse-list__label table-header'>
                        Contact Information
                    </p>
                    <img src={sortIcon} alt="sort" className='warehouse-list__icon'/>
                </div>
                <div className='warehouse-list__box'>
                    <p className='warehouse-list__label table-header'>
                        Actions
                    </p>
                </div>

            </section>

            {
                props.warehouseListArray.map(warehouse => {
                    return <WarehouseItem warehouse={warehouse} key={warehouse.id} />
                })
                    
                
            }
           
        </article>
    );
};

export default WarehouseList;