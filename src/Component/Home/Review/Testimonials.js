import React from "react";

const Testimonials = ({ review }) => {
  const { name, title, imageURL, description } = review;
  return (
    <div className="col-md-4">
      <div style={{ border: "1px solid gray" }} className="p-4 rounded mb-5">
        <div className="row">
          <img 
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            src={imageURL}
            alt=""
          />
          <div className="pl-4">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Testimonials;
