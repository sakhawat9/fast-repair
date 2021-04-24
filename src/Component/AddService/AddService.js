import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const serviceData = { 
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL,
        }
        const url = `http://localhost:5000/addService`
        fetch(url, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
          }).then((res) => console.log("server side response"));

    };
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '370f91189504233345b7baf2e0029a63');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return (
        <div className="Container-fluid row">
            <div className="col-lg-2">
            <Sidebar></Sidebar>
            </div>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "rgb(152 164 247 / 25%)"}}>
                <h3 className="text-brand p-4">Add Service</h3>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <label>Enter Title</label>
                    <input placeholder="Enter Title" name="name" {...register("name")} className="form-control"  />
                    <label>Description</label>
                    <textarea className="form-control" name="description" placeholder="Enter Designation" cols="30" rows="5" {...register("description")}></textarea>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label>Upload a Image</label>
                            <input type="file" className="form-control" onChange={handleImageUpload} placeholder="Picture" />
                        </div>
                        <div className="col-md-6">
                            <label>Price</label>
                            <input name="price" className="form-control" {...register('price')} placeholder="Price" />
                        </div>
                    </div>
                    <input type="submit" className="btn-brand"/>
                </form>
            </div>
            
        </div>
    );
};

export default AddService;

