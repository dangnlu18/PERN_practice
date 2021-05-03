import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './routes/home'
import RestaurantDetailPage from './routes/restaurantDetailPage'
import UpdatePage from './routes/updatePage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route  exact path='/restaurants/:id' component={RestaurantDetailPage} />
      <Route  exact path='/restaurants/:id/update' component={UpdatePage} />
    </Switch>
  );
}

export default App;
