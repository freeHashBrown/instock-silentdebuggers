import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import AddItem from './pages/AddItem/AddItem';
import EditItem from './pages/EditItem/EditItem';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';
import AddWarehouse from './pages/AddWarehouse/AddWarehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/warehouse' exact component={Warehouses} />
                <Route path='/warehouse/add' exact component={AddWarehouse} />
                <Route path='/warehouse/:id' exact component={WarehouseDetails} />
                <Route path='/warehouse/:id/edit' exact component={EditWarehouse} />
                <Route path='/inventory' exact component={Inventory} />
                <Route path='/inventory/add' exact component={AddItem} />
                <Route path='/inventory/:inventoryId' exact component={InventoryItemDetails} />
                <Route path='/inventory/:id/edit' exact component={EditItem} />
                <Route path='/' exact render={() => <Redirect to='/warehouse' />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
