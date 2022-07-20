import React from 'react';
import './WarehouseDetails.scss';
import BackLogo from '../../assets/icons/arrow_back-24px.svg'
import SortLogo from '../../assets/icons/sort-24px.svg'
// import EditLogo from '../../assets/icons/edit_white_24dp.svg'

function WarehouseDetails() {
    return (
        <section>
            <div className='warehouse'>
                <div className='warehouse__header'>
                    <div className='warehouse__header-container'>
                        <img src={BackLogo} alt="back" className='warehouse__header-return' />
                        <h1 className='warehouse__header-title page-header'>Washington</h1>
                    </div>
                    <div className='warehouse__header-edit'><p className='warehouse__header-edit-text button-text'>Edit</p></div>
                </div>

                <div className='warehouse__details'>
                    <div className='warehouse__details-address'>
                        <p className='table-header warehouse__details-title'>WAREHOUSE ADDRESS:</p>
                        <p className='body-medium warehouse__details-value'>33 Pearl Street SW, Washington, USA</p>
                    </div>
                    <div className='warehouse__details-contact'>
                        <div className='warehouse__details-contact-name'>
                            <p className='table-header warehouse__details-title'>CONTACT NAME:</p>
                            <p className='warehouse__details-value body-medium'>Graeme Lyon</p>
                            <p className='warehouse__details-value body-medium'>Warehouse Manager</p>
                        </div>
                        <div className='warehouse__details-contact-info'>
                            <p className='table-header warehouse__details-title'>CONTACT INFORMATION:</p>
                            <p className='warehouse__details-value body-medium'>+1 (647) 504-0911</p>
                            <p className='warehouse__details-value body-medium'>glyon@instock.com</p>
                        </div>
                    </div>
                </div>

                {/* This is for tablet and desktop view, it will be hidden for mobile */}
                <div className='warehouse__table'>
                    <div className='warehouse__table-header'>
                        <p className='table-header warehouse__table-title'>INVENTORY <img src={SortLogo} alt='sort'/></p>
                        <p className='table-header warehouse__table-title'>CATEGORY <img src={SortLogo} alt='sort'/></p>
                        <p className='table-header warehouse__table-title'>STATUS <img src={SortLogo} alt='sort'/></p>
                        <p className='table-header warehouse__table-title'>QUANTITY <img src={SortLogo} alt='sort'/></p>
                        <p className='table-header warehouse__table-title'>ACTIONS <img src={SortLogo} alt='sort'/></p>
                    </div>
                    <div className='warehouse__table-body'>
                        <p className='link-text warehouse__stock-value-item warehouse__table-body-item'>Television</p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>Electronics</p>
                        <p className='table-header warehouse__stock-value-status warehouse__table-body-item'><span className='warehouse__stock-value-status-container'>IN STOCK</span></p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>500</p>
                        <div className='warehouse__stock-option warehouse__table-body-item'>
                            <div className='warehouse__stock-option-delete'></div>
                            <div className='warehouse__stock-option-edit'></div>
                        </div>
                    </div>
                    
                    <div className='warehouse__table-body'>
                        <p className='link-text warehouse__stock-value-item warehouse__table-body-item'>Gym Bag</p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>Gear</p>
                        <p className='table-header warehouse__stock-value-status warehouse__table-body-item'><span className='warehouse__stock-value-status-container'>OUT OF STOCK</span></p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>0</p>
                        <div className='warehouse__stock-option warehouse__table-body-item'>
                            <div className='warehouse__stock-option-delete'></div>
                            <div className='warehouse__stock-option-edit'></div>
                        </div>
                    </div>

                    <div className='warehouse__table-body'>
                        <p className='link-text warehouse__stock-value-item warehouse__table-body-item'>Hoodie</p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>Apparel</p>
                        <p className='table-header warehouse__stock-value-status warehouse__table-body-item'><span className='warehouse__stock-value-status-container'>OUT OF STOCK</span></p>
                        <p className='body-medium warehouse__stock-value warehouse__table-body-item'>0</p>
                        <div className='warehouse__stock-option warehouse__table-body-item'>
                            <div className='warehouse__stock-option-delete'></div>
                            <div className='warehouse__stock-option-edit'></div>
                        </div>
                    </div>
                </div>

                 {/* This is for mobile view, it will be hidden for desktop and tablet */}
                <div className='warehouse__stock'>
                    <div className='warehouse__stock-top'>
                        <div className='warehouse__stock-top-left'>
                            <p className='table-header warehouse__stock-title'>INVENTORY:</p>
                            <p className='link-text warehouse__stock-value-item'>Television</p>
                        </div>
                        <div className='warehouse__stock-top-right'>
                            <p className='table-header warehouse__stock-title'>STATUS</p>
                            <p className='table-header warehouse__stock-value-status'><span className='warehouse__stock-value-status-container'>IN STOCK</span></p>
                        </div>
                    </div>
                    <div className='warehouse__stock-bottom'>
                        <div className='warehouse__stock-bottom-left'>
                            <p className='table-header warehouse__stock-title'>CATEGORY</p>
                            <p className='body-medium warehouse__stock-value'>Electronics</p>
                        </div>
                        <div className='warehouse__stock-bottom-right'>
                            <p className='table-header warehouse__stock-title'>QTY</p>
                            <p className='body-medium warehouse__stock-value'>500</p>
                        </div>
                    </div>
                    <div className='warehouse__stock-option'>
                        <div className='warehouse__stock-option-delete'></div>
                        <div className='warehouse__stock-option-edit'></div>
                    </div>
                </div>

                <div className='warehouse__stock'>

                    <div className='warehouse__stock-top'>
                        <div className='warehouse__stock-top-left'>
                            <p className='table-header warehouse__stock-title'>INVENTORY:</p>
                            <p className='link-text warehouse__stock-value-item'>Gym Bag</p>
                        </div>
                        <div className='warehouse__stock-top-right'>
                            <p className='table-header warehouse__stock-title'>STATUS</p>
                            <p className='table-header warehouse__stock-value-status'><span className='warehouse__stock-value-status-container'>OUT OF STOCK</span></p>
                        </div>
                    </div>
                    <div className='warehouse__stock-bottom'>
                        <div className='warehouse__stock-bottom-left'>
                            <p className='table-header warehouse__stock-title'>CATEGORY</p>
                            <p className='body-medium warehouse__stock-value'>Electronics</p>
                        </div>
                        <div className='warehouse__stock-bottom-right'>
                            <p className='table-header warehouse__stock-title'>QTY</p>
                            <p className='body-medium warehouse__stock-value'>500</p>
                        </div>
                    </div>
                    <div className='warehouse__stock-option'>
                        <div className='warehouse__stock-option-delete'></div>
                        <div className='warehouse__stock-option-edit'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WarehouseDetails;