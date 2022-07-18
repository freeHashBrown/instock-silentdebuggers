import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to= '/warehouses'/>
        <Route path= '/warehouses' component= {placeHolder}/>
        <Route path= '/warehouses/:warehouseId' component= {placeHolder}/>
        <Route path='/inventory' component= {placeHolder}/>
        <Route path='/inventory/:inventoryId' component= {placeHolder}/>
      </Switch>
    </Router>
  );
}

export default App;
