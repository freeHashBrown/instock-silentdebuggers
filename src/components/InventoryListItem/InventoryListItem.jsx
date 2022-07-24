
import React from 'react';
import {Link} from 'react-router-dom';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import deleteLogo from '../../assets/icons/delete_outline-24px.svg';
import editLogo from '../../assets/icons/edit-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';
import './InventoryListItem.scss';



function InventoryListItem({inventoryListArr}) {
    console.log({inventoryListArr})

    
    const inventoryList = inventoryListArr.map(item => {
        const checkStatus = () => {
            if (item.status === 'In Stock') {
                return true;
            } 
        }
        console.log(item.status)
        return (
            <section key={item.id}>
                <div className='inventory__containerMobile' key={item.id}>
                    <div className='inventory__box'>
                        <div className='inventory__box-mobile-column'>
                            <div className='inventory__mobile-column-label'>
                                <p className='inventory__text-subheading label-text'>INVENTORY ITEM</p>
                                    <Link to={`/inventories/${item.id}`} className="link">
                                        <p className='inventory__text-link'>{item.itemName}</p>
                                    </Link>
                            </div>

                            <div className='inventory__mobile-column-label'>
                                <p className='inventory__text-subheading label-text'>CATEGORY</p>
                                <p className='inventory__text'>{item.category}</p>
                            </div>
                        </div>
                        
                        <div className='inventory__box-mobile-column'>
                            <div className='inventory__mobile-column-label'>
                                <p className='inventory__text-subheading label-text'>STATUS</p>
                                <p className='inventory__text'><span className= {
                                    checkStatus(item.status)
                                    ? 'inventory-status'
                                    : 'inventory-status--out'
                                }>{item.status}</span></p>
                            </div>

                            <div className='inventory__mobile-column-label'>
                                <p className='inventory__text-subheading label-text'>QTY</p>
                                <p className='inventory__text'>{item.quantity}</p>
                            </div>

                            <div className='inventory__mobile-column-label'>
                                <p className='inventory__text-subheading label-text'>WAREHOUSE</p>
                                <p className='inventory__text'>{item.warehouseName}</p>
                            </div>
                        </div>
                    </div>
                    <div className='inventory__mobile-options'>
                        <Link to={`/inventory/delete/${item.id}`}>
                            <img src={deleteLogo} alt='delete' />
                        </Link>
                        <Link to={`/inventory/edit/${item.id}`}>
                            <img src={editLogo} alt='delete' />
                        </Link>
                    </div>
                </div>

                <div className='inventory__containerTab-table'>
                    <Link to={`/inventories/${item.id}`} className="link">
                        <p className='inventory__containerTab-table-p'>{item.itemName} <img src={chevron} alt='chevron'/></p>
                    </Link>
                    <p className='inventory__containerTab-table-p'>{item.category}</p>
                    <p className='inventory__containerTab-table-p'><span className='inventory-status'>{item.status}</span></p>
                    <p className='inventory__containerTab-table-p'>{item.quantity}</p>
                    <p className='inventory__containerTab-table-p'>{item.warehouseName}</p>
                    <div className='inventory__mobile-options inventory__containerTab-table-p'>
                        <Link to={`/inventory/delete/${item.id}`}><img src={deleteLogo} alt='delete' /></Link>
                        <Link to={`/inventory/edit/${item.id}`}><img src={editLogo} alt='delete' /></Link>
                    </div>
                </div>
            </section>
        )
    })

    return (
        <div className='inventory'>   
            <div className='inventory__containerTab-header'>
                <p className='table-header inventory__containerTab-header-p'>INVENTORY ITEM<img src={sortIcon} alt="sort"/></p>
                <p className='table-header inventory__containerTab-header-p'>CATEGORY<img src={sortIcon} alt="sort"/></p>
                <p className='table-header inventory__containerTab-header-p'>STATUS<img src={sortIcon} alt="sort"/></p>
                <p className='table-header inventory__containerTab-header-p'>QTY<img src={sortIcon} alt="sort"/></p>
                <p className='table-header inventory__containerTab-header-p'>WAREHOUSE<img src={sortIcon} alt="sort" /></p>
                <p className='table-header inventory__containerTab-header-p'>ACTIONS</p>
            </div>
            
            {inventoryList}
        </div>
    );
}

export default InventoryListItem;