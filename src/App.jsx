import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../src/components/Header/Header'
import AddNewWarehouse from '../src/components/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import AddNewInventory from './components/AddNewInventory/AddNewInventory';



function App() {
  return (
    <Router>
      <Header />
      <AddNewInventory/>
      <Switch>
        <Redirect from='/' to= '/warehouses'/>
        <Route path= '/warehouses'/>
        <Route path= '/warehouses/:warehouseId'/>
        <Route path='/inventory' />
        <Route path='/inventory/:inventoryId' />
      </Switch>
    </Router>
  );
}

export default App;
