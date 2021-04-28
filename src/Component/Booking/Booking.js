import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Booking = () => {
    const {_id} = useParams();
    console.log(_id);
    const [booking, setBooking] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
        .then(res => res.json())
        .then(data => {
            data[0].status = 'Pending';
            delete data[0]._id;
            setBooking(data[0])

        })
    }, [])

    const handlePaymentSuccess = payment => {
        const orderDetails = {
            ...booking,
            ...loggedInUser,
            payment
        }

        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className="Container-fluid row">
            <div className="col-lg-2">
            <Sidebar></Sidebar>
            </div>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "rgb(152 164 247 / 25%)"}}>
                <h3 className="text-brand p-4">Book</h3>
                <form  style={{background: "#fff"}} className="m-4 p-3 col-md-6">
                    <input type="text" className="form-control" name="name" defaultValue={loggedInUser.userName} />
                    <br/>
                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} />
                   <br/>
                    <input type="text" className="form-control" name="address" defaultValue={booking.name}  />
                    <br/>
                    <input type="radio" name="payment" id="creaditCard"/>
                    <label style={{paddingRight: "30px",}} htmlFor="creaditCard">Creadit Card</label>
                    <input type="radio" name="payment" id="paypal"/>
                    <label htmlFor="paypal">PayPal</label>
                </form>
                <div className="col-md-6">
                    <h3>Please Pay</h3>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Booking;