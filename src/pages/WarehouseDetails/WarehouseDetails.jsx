import React, { Component } from 'react';
import './WarehouseDetails.scss';

// import EditLogo from '../../assets/icons/edit_white_24dp.svg'
import WarehouseAddressCard from '../../components/WarehouseAddressCard/WarehouseAddressCard';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import axios from 'axios';

class WarehouseDetails extends Component {

    state = {
        warehouseData: {},
        inventoryData: []
    }

    getWareHouseData = warehouseId => {
        axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
            .then(result => {
                this.setState({
                    warehouseData: result.data.warehouseDetails[0],
                    inventoryData: result.data.warehouseInventory
                })
                
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount() {
        this.getWareHouseData(this.props.match.params.warehouseId);

    }
    
    render() {
            if (this.state.warehouseData.contact === undefined) {
                return <div>Loading...</div>
            } else {
                return (
                    <section className='warehouse-wrapper'>
                        <div className='warehouse'>

                            <WarehouseAddressCard warehouseDetails={this.state.warehouseData}/>
                            <WarehouseInventoryList inventoryData={this.state.inventoryData} />
                        </div>
                    </section>
                );
            }
        }
        
    }


export default WarehouseDetails;