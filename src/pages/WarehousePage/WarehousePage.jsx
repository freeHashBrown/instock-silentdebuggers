import React, { Component } from 'react';
import "./WarehousePage.scss";
import "../../styles/partials/_typography.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import WarehouseList from '../../components/WarehouseList/WarehouseList';

import warehouseListData from "../../assets/data/warehouses.json";
import AddNewWarehouse from '../../components/AddNewWarehouse/AddNewWarehouse';
import { Link } from 'react-router-dom';

class WarehousePage extends Component {

    state = {
        warehouseListArray: warehouseListData
    };

   
    render() {
        return (
            <main className='warehouse-page'>
                <div className='warehouse-page__tablet-header'> 
                <header className='warehouse-page__header page-header'>
                    <h1 className='warehouse-page__title page-header'>
                        Warehouses
                    </h1>
                </header>
                <article className='warehouse-page__top'>
                    <section className='warehouse-page__search-bar'>
                        <input type="text" placeholder='Search...' className='warehouse-page__input label-text'/>
                        <img src={searchIcon} alt="search icon" className='warehouse-page__search-icon'/>
                    </section>
                    <Link to='/warehouses/add' className='warehouse-page__button-link'>
                        <button className='warehouse-page__button button-text'>
                            + Add New Warehouse
                        </button>
                    </Link>
                    
                </article>
                </div>
                <WarehouseList warehouseListArray={this.state.warehouseListArray}/>
            </main>
        );
    }
}

export default WarehousePage;