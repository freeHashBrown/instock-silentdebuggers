import React, { Component } from "react"
import Axios from "axios"
import "./WarehouseDetails.scss"
import Arrow from "../../assets/icons/arrow_back-24px.svg"
import Edit from "../../assets/icons/edit-24px.svg"
import InventoryList from "../../components/InventoryList/InventoryList"
import { Link } from "react-router-dom"

export default class warehouseDetails extends Component {
    state = {
        warehouse: null,
        warehouseInv: null
    }

    componentDidMount() {
        const urlId = this.props.match.params.id
        Axios.get(`${process.env.REACT_APP_WAREHOUSE_ENDPOINT}/${urlId}`)
            .then(response => {
                this.setState({ warehouse: response.data })
                return Axios.get(`${process.env.REACT_APP_WAREHOUSE_ENDPOINT}/${urlId}/inventories`)
            })
            .then(response => {
                this.setState({ warehouseInv: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const urlId = this.props.match.params.id
        return (
            <section className="warehouse-container">
                <div className="warehouse-details">
                    <div className="warehouse-header">
                        <Link to='/' className="warehouse-header__back"><img src={Arrow} alt="back button" /></Link>
                        <div className="warehouse-header__top">
                            <h2 className="warehouse-header__name">{this.state.warehouse && this.state.warehouse.name}</h2>
                            <Link to={`/warehouse/${urlId}/edit`} className="warehouse-header__edit"><img className="warehouse-header__edit" src={Edit} alt="edit button" /></Link>
                        </div>
                    </div>
                    <div className="warehouse-info">
                        <div className="warehouse-info__where">
                            <h3 className="warehouse-h3">WAREHOUSE ADDRESS:</h3>
                            <p className="warehouse-info__address">{this.state.warehouse && this.state.warehouse.address}, {this.state.warehouse && this.state.warehouse.city}, {this.state.warehouse && this.state.warehouse.country}</p>
                        </div>
                        <div className="contact-container">
                            <div className="contact-name">
                                <h3 className="warehouse-h3">MANAGER NAME:</h3>
                                <p className="contact-name__manager">{this.state.warehouse && this.state.warehouse.manager}</p>
                                {/* <p className="contact-name__role">{this.state.warehouse && this.state.warehouse.position}</p> */}
                            </div>                     <div className="contact-info">
                                <h3 className="warehouse-h3">CONTACT INFORMATION:</h3>
                                <p className="contact-info__number">{this.state.warehouse && this.state.warehouse.phone}</p>
                                <p className="contact-info__email">{this.state.warehouse && this.state.warehouse.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.warehouseInv && <InventoryList warehouseSelected={true} inventoryData={this.state.warehouseInv} />}
                </div>
            </section>
        )
    }
}