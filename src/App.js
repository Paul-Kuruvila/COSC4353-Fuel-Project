import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import FuelQuote from './components/FuelQuote/FuelQuote';
import FuelQuoteHistory from './components/FuelQuoteHistory/FuelQuoteHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className = "content">
          <Switch>
            <Route exact path = "/COSC4353-Fuel-Project/">
              <Home />
            </Route>
            <Route path = "/login">
              <Login />
            </Route>
            <Route path = "/register">
              <Register />
            </Route>
            <Route path = "/profile">
              <Profile />
            </Route>
            <Route path = "/fuelquoteform">
              <FuelQuote />
            </Route>
            <Route path = "/fuelquotehistory">
              <FuelQuoteHistory />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
