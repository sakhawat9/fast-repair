import React from 'react';
import './Manage.css'

const deleteProduct = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(result =>{
        console.log(result);
    })
}
const loadProduct = () => {

}

const Manage = ({service}) => {
    // console.log(service);
    const {name, price, description, imageURL, _id} = service;
    return (
        <div className="col-lg-4 col-md-6 ">
            <div className="p-3 mb-3 rounded manage-style">
                <img className="rounded" src={imageURL} alt=""/>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <p>{description}</p>
                <button className="btn btn-danger mr-3" onClick={() => deleteProduct(_id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => loadProduct(_id)}>Edit</button>
            </div>            
        </div>
    );
};

export default Manage;