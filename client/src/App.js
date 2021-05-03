import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './routes/home'
import RestaurantDetailPage from './routes/restaurantDetailPage'
import UpdatePage from './routes/updatePage' 
import { RestaurantsContextProvider } from './context/RestaurantsContext'


function App() {
  return (
    <RestaurantsContextProvider>
      <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  exact path='/restaurants/:id' component={RestaurantDetailPage} />
          <Route  exact path='/restaurants/:id/update' component={UpdatePage} />
        </Switch>
      </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
