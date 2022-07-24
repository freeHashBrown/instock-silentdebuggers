import React from 'react';
import SortLogo from '../../assets/icons/sort-24px.svg';
import { Link } from "react-router-dom";

const WarehouseInventoryList = props => {
    const { inventoryData } = props;
    // console.log(inventoryData);

    const inventoryList = inventoryData.map(item => {
        // console.log(item.itemName);

        return (
            <div key={item.id}>
                    <div className='warehouse__table-body'>
                        <p className='link-text warehouse__stock-value-item warehouse__table-body-item'>{item.itemName}</p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>{item.category}</p>
                        <p className='table-header warehouse__stock-value-status warehouse__table-body-item'><span className='warehouse__stock-value-status-container'>{item.status}</span></p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>{item.quantity}</p>
                        <div className='warehouse__stock-option warehouse__table-body-item'>
                            <div className='warehouse__stock-option-delete'></div>
                            <div className='warehouse__stock-option-edit'></div>
                    </div>
                {/* This is for mobile view, it will be hidden for desktop and tablet */}
                    <div className='warehouse__stock'>
                        <div className='warehouse__stock-top'>
                            <div className='warehouse__stock-top-left'>
                                <p className='table-header warehouse__stock-title'>INVENTORY:</p>
                                <p className='link-text warehouse__stock-value-item'>{item.itemName}</p>
                            </div>
                            <div className='warehouse__stock-top-right'>
                                <p className='table-header warehouse__stock-title'>STATUS</p>
                                <p className='table-header warehouse__stock-value-status'><span className='warehouse__stock-value-status-container'>{item.status}</span></p>
                            </div>
                        </div>
                        <div className='warehouse__stock-bottom'>
                            <div className='warehouse__stock-bottom-left'>
                                <p className='table-header warehouse__stock-title'>CATEGORY</p>
                                <p className='body-medium warehouse__stock-value'>{item.category}</p>
                            </div>
                            <div className='warehouse__stock-bottom-right'>
                                <p className='table-header warehouse__stock-title'>QTY</p>
                                <p className='body-medium warehouse__stock-value'>{item.quantity}</p>
                            </div>
                        </div>
                        <div className='warehouse__stock-option'>
                            <div className='warehouse__stock-option-delete'></div>
                            <div className='warehouse__stock-option-edit'></div>
                        </div>
                    </div>

            </div>
        </div>
          
        )
    })

    return (
        <div>
            {/* This is for tablet and desktop view, it will be hidden for mobile */}
            <div className='warehouse__table'>
                <div className='warehouse__table-header'>
                    <p className='table-header warehouse__table-title'>INVENTORY <img src={SortLogo} alt='sort'/></p>
                    <p className='table-header warehouse__table-title'>CATEGORY <img src={SortLogo} alt='sort'/></p>
                    <p className='table-header warehouse__table-title'>STATUS <img src={SortLogo} alt='sort'/></p>
                    <p className='table-header warehouse__table-title'>QUANTITY <img src={SortLogo} alt='sort'/></p>
                    <p className='table-header warehouse__table-title'>ACTIONS <img src={SortLogo} alt='sort'/></p>
                </div>
            
            {inventoryList}
                
        </div>
    </div>
    );
};



export default WarehouseInventoryList;