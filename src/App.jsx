import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../src/components/Header/Header'
import AddNewWarehouse from '../src/components/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';

import AddNewInventory from './components/AddNewInventory/AddNewInventory';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import DeleteInventory from './components/DeleteInventory/DeleteInventory';
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';



function App() {
  return (
    <Router>
      <Header />

      <AddNewInventory/>
      {/* <DeleteInventory/> */}
      <Switch>
        <Redirect from='/' to='/warehouses' />
        <Route path= '/warehouses' component/>
        <Route path= '/warehouses/:warehouseId' component={WarehouseDetails}/>
        <Route path='/inventory' />
        <Route path='/inventory/:inventoryId' />
      </Switch>
    </Router>
  );
}

export default App;
