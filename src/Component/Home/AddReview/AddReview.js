import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const AddReview = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   
    const serviceData = {
      name: data.name,
      title: data.title,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `https://tranquil-temple-27502.herokuapp.com/addReview`;
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side response"));
    alert("Your Review was successfully");
  };

  const handleImageUpload = (event) => {
   
    const imageData = new FormData();
    imageData.set("key", "370f91189504233345b7baf2e0029a63");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Container-fluid row">
      <div className="col-lg-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="pt-4 col-md-10"
        style={{
          position: "absolute",
          right: "0",
          background: "rgb(152 164 247 / 25%)",
        }}
      >
        <h3 className="text-brand p-4">Add Review</h3>
        <form className="col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <label>Your Name</label>
          <input
            placeholder="Enter Title"
            name="name"
            {...register("name")}
            className="form-control"
          />
          <label>Enter Title</label>
          <input
            placeholder="Enter Title"
            name="title"
            {...register("title")}
            className="form-control"
          />
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter Designation"
            cols="30"
            rows="5"
            {...register("description")}
          ></textarea>
          <label>Upload a Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageUpload}
            placeholder="Picture"
          />
          <br />
          <input type="submit" className="btn-brand" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
