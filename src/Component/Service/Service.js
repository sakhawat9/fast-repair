import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
  console.log(service);
  const {name, price, imageURL, description} = service;
  return (
      <div className="col-lg-4 col-md-6">
        <div className="p-3 mb-4 background rounded">
          <img src={imageURL} alt="" />
          <h3 className="pt-3">{name}</h3>
          <h3>${price}</h3>
          <p>{description}</p>
          <Link to="/" className="icon-style justify-content-center d-flex align-items-center" ><FontAwesomeIcon icon={faChevronRight} /> </Link>
        </div>
      </div>
  );
};

export default Service;
