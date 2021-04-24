import React from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
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
                    
                    {/* {
                    orders.length === 0 ?
                    "No Order found"
                        :
                        orders.map(order => <Order order={order} key={order.length}></Order>)
                    } */}
                    
                </Table>
            </div>
        </div>
    );
};

export default OrderList;