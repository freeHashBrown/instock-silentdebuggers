import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../src/components/Header/Header'
import AddNewWarehouse from '../src/components/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';


function App() {
  return (
    <Router>
      <Header />
      <AddNewWarehouse />
      <Switch>
        <Redirect from='/' to= '/warehouses'/>
        <Route path= '/warehouses'/>
        <Route path= '/warehouses/:warehouseId' component={WarehouseDetails}/>
        <Route path='/inventory' />
        <Route path='/inventory/:inventoryId' />
      </Switch> 
    </Router>
  );
}

export default App;
