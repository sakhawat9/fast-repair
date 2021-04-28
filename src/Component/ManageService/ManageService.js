import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Manage from '../Manage/Manage';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [manageService, setManageService] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-temple-27502.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setManageService(data)
        })
    }, [])
    
    return (
        <div className="Container-fluid row">
        <div className="col-lg-2">
        <Sidebar></Sidebar>
        </div>
        <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "rgb(152 164 247 / 25%)"}}>
            <h3 className="text-brand p-4">Manage Service</h3>
            <div className="row">
                {
                    manageService.length === 0 ?
                    <div className="text-center w-100">
                        <Spinner animation="grow" />
                    </div>
                    :
                    manageService.map(service => <Manage service={service} key={service._id}></Manage>)
                }
            </div>
        </div>
        </div>
    );
};

export default ManageService;