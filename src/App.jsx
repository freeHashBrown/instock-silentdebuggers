import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header/Header'
// import AddNewWarehouse from '../src/components/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryListPage from './pages/InventoryListPage/InventoryListPage';
// import AddNewInventory from './components/AddNewInventory/AddNewInventory';
import WarehousePage from './pages/WarehousePage/WarehousePage';
// import DeleteInventory from './components/DeleteInventory/DeleteInventory';
// import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
// import EditInventory from './components/EditInventory/EditInventory';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route from='/' exact to='/warehouses' component={WarehousePage}/>
        <Route path= '/warehouses' exact component={WarehousePage}/>
        <Route path= '/warehouses/:warehouseId' exact component={WarehouseDetails}/>
        <Route path='/inventory' exact component={InventoryListPage}/>
        <Route path='/inventory/:inventoryId' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
