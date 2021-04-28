import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import Bookings from "./Bookings";

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookingList?email=` + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookings(data)
        })
    }, [])
    console.log(bookings);
  return (
    <div className="Container-fluid row">
      <div className="col-lg-2">
        <Sidebar></Sidebar>
      </div>
        <div className="pt-4 col-md-10" style={{ position: "absolute", right: "0", background: "rgb(152 164 247 / 25%)",  }} >
        <h3 className="text-brand p-4">BooKing List</h3>
            <div className="row">
            
            {
                bookings.map(booking => <Bookings booking={booking} key={booking._id}></Bookings>)
            }
            </div>
        </div>
    </div>
  );
};

export default BookingList;
