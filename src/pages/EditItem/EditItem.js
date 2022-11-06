import React from 'react';
import './EditItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InventoryEditForm from '../../components/InventoryEditForm/InventoryEditForm';

class EditItem extends React.Component {


    state = {
        selectedInventory: null,
        warehouseData: null,
        inventoryData: null
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_INVENTORY_ENDPOINT}/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ selectedInventory: res.data })
                return axios.get(process.env.REACT_APP_WAREHOUSE_ENDPOINT)
            })
            .then(result => {
                this.setState({
                    warehouseData: result.data
                })
                return axios.get(process.env.REACT_APP_INVENTORY_ENDPOINT)
            })
            .then(res => {
                this.setState({
                    inventoryData: res.data
                })
            })
            .catch(err => {
                console.log(err);
            }
            );
    }


    render() {
        return (
            <section className="edit-item">
                <div className="edit-item__content">
                    <div className="edit-item__header">
                        <Link to="/inventory" className='edit-item__link'>
                            <img src={BackArrow} alt="Back Arrow Icon" />
                        </Link>
                        <h1 className="edit-item__title">Edit Inventory Item</h1>
                    </div>{this.state.selectedInventory && this.state.warehouseData && this.state.inventoryData &&
                        // <ItemForm itemId={this.props.match.params.id} selectedInventory={this.state.selectedInventory} />
                        <InventoryEditForm itemId={this.props.match.params.id} selectedInventory={this.state.selectedInventory} warehouseData={this.state.warehouseData} inventoryData={this.state.inventoryData} />
                    }

                </div>
            </section>
        )
    }
}

export default EditItem