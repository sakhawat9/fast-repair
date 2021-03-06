import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import SignIn from "./Component/SignUp/SignIn/SignIn";
import Login from "./Component/SignUp/Login/Login";
import Sidebar from "./Component/Sidebar/Sidebar";
import OrderList from "./Component/OrderList/OrderList";
import { createContext, useState } from "react";
import AddService from "./Component/AddService/AddService";
import AddReview from "./Component/Home/AddReview/AddReview";
import Booking from "./Component/Booking/Booking";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import BookingList from "./Component/BookingList/BookingList";
import ManageService from "./Component/ManageService/ManageService";
import AddAdmin from "./Component/AddAdmin/AddAdmin";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
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
            <PrivateRoute path="/sidebar">
              <Sidebar />
            </PrivateRoute>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <Route path="/addService">
              <AddService />
            </Route>
            <Route path="/addAdmin">
              <AddAdmin />
            </Route>
            <PrivateRoute path="/booking/:_id">
              <Booking />
            </PrivateRoute>
            <Route path="/addReview">
              <AddReview />
            </Route>
            <PrivateRoute path="/bookingList">
              <BookingList />
            </PrivateRoute>
            <Route path="/manageService">
              <ManageService />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
