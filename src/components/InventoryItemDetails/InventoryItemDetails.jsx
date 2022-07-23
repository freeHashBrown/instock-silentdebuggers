import React from 'react';
import "./InventoryItemDetails.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit_white_24dp.svg";

const InventoryItemDetails = () => {
    return (
        <main className='inventory-details'>
            <article className='inventory-details__article'>
                <header className='inventory-details__header'>
                    <div className='inventory-details__left'>
                        <img src={arrowBack} alt="Arrow Back" className='inventory-detials__back'/>
                        <h1 className='inventory-details__title page-header'>
                        Television
                        </h1>
                    </div>
                    <section className='inventory-details__container'>
                        <img src={editIcon} alt="Edit" className='inventory-details__edit'/>
                        <p className='inventory-details__text'>
                            Edit
                        </p>
                    </section>
                </header>
                <section className='inventory-details__main'>
                    <div className='inventory-details__top'>
                        <div className='inventory-details__box'>
                            <p className='inventory-details__label table-header'>
                                item description:
                            </p>
                            <p className='inventory-details__data body-medium'>
                                This 50", 4K LED TV 
                                provides a crystal-clear picture and vivid colors.
                            </p>
                        </div>
                        <div className='inventory-details__box'>
                            <p className='inventory-details__label table-header'>
                                category
                            </p>
                            <p className='inventory-details__data body-medium'>
                                Electronics
                            </p>
                        </div>
                    </div>
                    <div className='inventory-details__bottom'>
                        <div className='inventory-details__middle'>
                            <div className='inventory-details__box'>
                                <p className='inventory-details__label table-header'>
                                    status:
                                </p>
                                <div className='inventory-details__status'>
                                    <p className='inventory-details__highlight body-small'>
                                        in stock
                                    </p> 
                                </div>
                            </div>
                            <div className='inventory-details__box'>
                                <p className='inventory-details__label table-header'>
                                    quantity:
                                </p>
                                <p className='inventory-details__data body-medium'>
                                    500
                                </p>
                            </div>
                        </div>
                        <div className='inventory-details__box'>
                        <p className='inventory-details__label table-header'>
                                warehouses:
                            </p>
                            <p className='inventory-details__data body-medium'>
                                Manhattan
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
        
    );
};

export default InventoryItemDetails;