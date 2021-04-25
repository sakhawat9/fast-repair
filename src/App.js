import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import SignIn from './Component/SignUp/SignIn/SignIn';
import Login from './Component/SignUp/Login/Login';
import Sidebar from './Component/Sidebar/Sidebar';
import OrderList from './Component/OrderList/OrderList';
import { createContext, useState } from 'react';
import AddService from './Component/AddService/AddService';
import AddReview from './Component/Home/AddReview/AddReview';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
          <p>{loggedInUser.name}</p>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/signIn">
                <SignIn />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/sidebar">
                <Sidebar />
              </Route>
              <Route path="/orderList">
                <OrderList />
              </Route>
              <Router path="/addService">
                <AddService />
              </Router>
              <Router path="/addReview">
                <AddReview />
              </Router>
              <Router exact path="/">
                <Home />
              </Router>
            </Switch>
          </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
