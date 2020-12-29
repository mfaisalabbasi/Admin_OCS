import "./App.css";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/auth/Login";
import { store, persistor } from "./store/reducer";
import { Provider } from "react-redux";
import PrivateRoute from "./components/auth/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./components/Home";

function App() {
  let history = useHistory;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
