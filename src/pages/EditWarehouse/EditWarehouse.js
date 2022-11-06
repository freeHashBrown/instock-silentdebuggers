import './EditWarehouse.scss';
import { Link } from 'react-router-dom';
import WarehouseEditForm from '../../components/WarehouseEditForm/WarehouseEditForm';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import React from 'react';
import axios from 'axios';



class EditWarehouse extends React.Component {
    state = {
        warehouseData: null
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_WAREHOUSE_ENDPOINT}/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ warehouseData: res.data })
            })
            .catch(err => {
                console.log(err);
            }
            );

    }


    render() {
        return (
            <main className='main'>
                <div className='main__container'>
                    <header className='header--form-page'>

                        <Link to='/warehouse'>
                            <img src={backArrow} alt="icon of back/left arrow" />
                        </Link>
                        <h1 className='header__title'>Edit Warehouse</h1>
                    </header>

                    {this.state.warehouseData && <WarehouseEditForm warehouseData={this.state.warehouseData} />}

                </div>
            </main>
        );
    }
};


export default EditWarehouse;
