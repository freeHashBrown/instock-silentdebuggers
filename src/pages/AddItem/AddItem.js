import './AddItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import InventoryAddForm from '../../components/InventoryAddForm/InventoryAddForm';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';

export default class AddItem extends Component {

  state = {
    inventoryData: null,
    warehouseData: null
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_INVENTORY_ENDPOINT)
      .then(result => {
        this.setState({
          inventoryData: result.data
        })
        return axios.get(process.env.REACT_APP_WAREHOUSE_ENDPOINT)
      })
      .then(result => {
        this.setState({
          warehouseData: result.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="add-item">
        <div className="add-item__content">
          <div className="add-item__header">
            <Link to="/inventory" className='add-item__link'>
              <img src={BackArrow} alt="Back Arrow Icon" />
            </Link>
            <h1 className="add-item__title">Add New Inventory Item</h1>
          </div>
          {this.state.inventoryData && this.state.warehouseData && <InventoryAddForm inventoryData={this.state.inventoryData} warehouseData={this.state.warehouseData} />}
        </div>
      </section>
    )
  }
}
