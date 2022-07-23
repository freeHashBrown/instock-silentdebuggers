import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header/Header'
// import AddNewWarehouse from '../src/components/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';

import AddNewInventory from './components/AddNewInventory/AddNewInventory';
import WarehousePage from './pages/WarehousePage/WarehousePage';
// import DeleteInventory from './components/DeleteInventory/DeleteInventory';
// import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';



function App() {
  return (
    <Router>
      <Header />
      <AddNewInventory/>
      {/* <Switch>
        <Route from='/' exact to='/warehouses' component={WarehousePage}/>
        <Route path= '/warehouses' exact component={WarehousePage}/>
        <Route path= '/warehouses/:warehouseId' exact component={WarehouseDetails}/>
        <Route path='/inventory' />
        <Route path='/inventory/:inventoryId' />
      </Switch> */}
    </Router>
  );
}

export default App;
