import React from 'react';
import "./InventoryList.scss";
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import sortIcon from "../../assets/icons/sort-24px.svg";


const InventoryList = ({inventoryListArray}) => {

    return (
        // <article className='inventory-list'>
        //     <section className='inventory-list__header'>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 INVENTORY ITEM
        //             </p>
        //             <img src={sortIcon} alt="sort" className='inventory-list__icon'/>
        //         </div>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 CATEGORY
        //             </p>
        //             <img src={sortIcon} alt="sort" className='inventory-list__icon'/>
        //         </div>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 STATUS
        //             </p>
        //             <img src={sortIcon} alt="sort" className='inventory-list__icon'/>
        //         </div>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 QTY
        //             </p>
        //             <img src={sortIcon} alt="sort" className='inventory-list__icon'/>
        //         </div>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 WAREHOUSE
        //             </p>
        //             <img src={sortIcon} alt="sort" className='inventory-list__icon'/>
        //         </div>
        //         <div className='inventory-list__box'>
        //             <p className='inventory-list__label table-header'>
        //                 Actions
        //             </p>
        //         </div>

        //     </section>

        //     
           
        // </article>
        <div>
            <InventoryListItem inventoryListArr={inventoryListArray}/>
        </div>
    );
};

export default InventoryList;