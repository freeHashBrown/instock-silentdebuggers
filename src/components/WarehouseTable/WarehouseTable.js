import React, { Component } from 'react';
import './WarehouseTable.scss';
import Warehouse from '../Warehouse/Warehouse';

export class WarehouseTable extends Component {
  render() {
    return (
      <section className="warehouse-table">
        <div className="warehouse-table__header">

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">WAREHOUSE</p>

          </div>

          <div className="warehouse-table__column warehouse-table__column-large">
            <p className="warehouse-table__title">ADDRESS</p>

          </div>

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">CONTACT NAME</p>

          </div>

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">CONTACT INFORMATION</p>

          </div>

          <div className="warehouse-table__column warehouse-table__column-small">
            <p className="warehouse-table__title">ACTIONS</p>
          </div>
        </div>

        <div className="warehouse-table__body">
          {this.props.warehouses && this.props.warehouses.map(warehouse => <Warehouse key={warehouse.id} warehouse={warehouse} />)}
        </div>
      </section>
    )
  }
}

export default WarehouseTable