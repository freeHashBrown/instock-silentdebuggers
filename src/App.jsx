import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../src/assets/components/Header/Header'


function App() {
  return (
    <Router>
      <Header />
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
