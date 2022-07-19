import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect from='/' to= '/warehouses'/> */}
        <Route path= '/warehouses' component= {WarehousePage}/>
        {/* <Route path= '/warehouses/:warehouseId' component= {placeHolder}/> */}
        {/* <Route path='/inventory' component= {placeHolder}/> */}
        {/* <Route path='/inventory/:inventoryId' component= {placeHolder}/> */}
      </Switch>
    </Router>
  );
}

export default App;
