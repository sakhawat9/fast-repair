import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orderList')
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    },[])
    
    return (
        <div className="Container-fluid row">
            <div className="col-lg-2">
            <Sidebar></Sidebar>
            </div>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "rgb(152 164 247 / 25%)"}}>
                <h3 className="text-brand p-4">Order List</h3>
                <Table striped bordered hover className="p-3 shadow">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Services</th>
                            <th>Pay with</th>
                            <th>status</th>
                        </tr>
                    </thead>
                   
                        {
                            orderList.map(order => <Orders order={order} key={order._id}></Orders>)
                        }
                    
                </Table>
            </div>
        </div>
    );
};

export default OrderList;