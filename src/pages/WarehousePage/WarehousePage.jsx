import React, { Component } from 'react';
import "./WarehousePage.scss";
import "../../styles/partials/_typography.scss";
import searchIcon from "../../assets/icons/search-24px.svg";


class WarehousePage extends Component {
    render() {
        return (
            <main className='warehouse-page'>
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
                    <section>

                    </section>
                </article>
            </main>
        );
    }
}

export default WarehousePage;