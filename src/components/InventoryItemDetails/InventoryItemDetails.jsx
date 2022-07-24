import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./InventoryItemDetails.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit_white_24dp.svg";
import axios from 'axios';
import { useHistory } from 'react-router-dom';



class InventoryItemDetails extends Component {

    state = {
        item: {}
    }

    componentDidMount() {
        const inventoryId = this.props.match.params.inventoryId;
       
        axios
        .get(`http://localhost:8080/inventories/${inventoryId}`)
        .then(result => {
    
            this.setState({
                item: result.data
            })

        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        if (this.state.item.id === undefined) {
            return <div>Loading...</div>
        } else {
        return (
            <main className='inventory-details'>
            <article className='inventory-details__article'>
                <header className='inventory-details__header'>
                    <div className='inventory-details__left'>
                        <Link to="/inventory" className='inventory-details__link'>
                            <img src={arrowBack} alt="Arrow Back" className='inventory-detials__back'/>
                        </Link>
                        <h1 className='inventory-details__title page-header'>
                        {this.state.item.itemName}
                        </h1>
                    </div>
                    <section className='inventory-details__container'>
                        <Link to={`/inventory/edit/${this.props.match.params.inventoryId}`}>
                            <img src={editIcon} alt="Edit" className='inventory-details__edit'/>
                        </Link>
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
                            {this.state.item.description}
                            </p>
                        </div>
                        <div className='inventory-details__box'>
                            <p className='inventory-details__label table-header'>
                                category
                            </p>
                            <p className='inventory-details__data body-medium'>
                                {this.state.item.category}
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
                                        {this.state.item.status}
                                    </p> 
                                </div>
                            </div>
                            <div className='inventory-details__box'>
                                <p className='inventory-details__label table-header'>
                                    quantity:
                                </p>
                                <p className='inventory-details__data body-medium'>
                                    {this.state.item.quantity}
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
    }
    }
}

export default InventoryItemDetails;



