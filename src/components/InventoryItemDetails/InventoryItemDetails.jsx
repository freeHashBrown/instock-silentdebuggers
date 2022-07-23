import React from 'react';
import "./InventoryItemDetails.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit_white_24dp.svg";

const InventoryItemDetails = () => {
    return (
        <article>
            <header>
                <img src={arrowBack} alt="Arrow Back" />
                <h1>Television</h1>
                <img src={editIcon} alt="Edit" />
            </header>
        </article>
    );
};

export default InventoryItemDetails;