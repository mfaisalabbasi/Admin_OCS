import './App.css';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <Router>
     <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
        </Switch>
   </Router>
    
  );
}

export default App;
