import React from 'react';
import BackLogo from '../../assets/icons/arrow_back-24px.svg'
function WarehouseAddressCard(props) {
    const { warehouseDetails } = props;
    

        return (
            <div>
                <div className='warehouse__header'>
                    <div className='warehouse__header-container'>
                        <img src={BackLogo} alt="back" className='warehouse__header-return' />
                        <h1 className='warehouse__header-title page-header'>{warehouseDetails.name}</h1>
                    </div>
                    <div className='warehouse__header-edit'><p className='warehouse__header-edit-text button-text'>Edit</p></div>
                </div>
                <div className='warehouse__details'>
                    <div className='warehouse__details-address'>
                        <p className='table-header warehouse__details-title'>WAREHOUSE ADDRESS:</p>
                        <p className='body-medium warehouse__details-value'>{warehouseDetails.address},</p>
                        <p className='body-medium warehouse__details-value'>{warehouseDetails.city}, {warehouseDetails.country}</p>
                    </div>
                    <div className='warehouse__details-contact'>
                        <div className='warehouse__details-contact-name'>
                            <p className='table-header warehouse__details-title'>CONTACT NAME:</p>
                            <p className='warehouse__details-value body-medium'>{warehouseDetails.contact.name}</p>
                            <p className='warehouse__details-value body-medium'>{warehouseDetails.contact.position}</p>
                        </div>
                        <div className='warehouse__details-contact-info'>
                            <p className='table-header warehouse__details-title'>CONTACT INFORMATION:</p>
                            <p className='warehouse__details-value body-medium'>{warehouseDetails.contact.phone}</p>
                            <p className='warehouse__details-value body-medium'>{warehouseDetails.contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
    );

                    
}

export default WarehouseAddressCard;