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
                    </section>
                </header>
            </article>
        </main>
        
    );
};

export default InventoryItemDetails;