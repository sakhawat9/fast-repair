import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";





const Service = ({service}) => {
  // console.log(service);
  const {name, _id, price, imageURL, description} = service;

  const history = useHistory()
    const handleServiceClick = () => {
        history.push(`/booking/${_id}`)
    }


  return (
      <div className="col-lg-4 col-md-6">
        <div className="p-3 mb-4 background rounded">
          <img src={imageURL} alt="" />
          <h3 className="pt-3">{name}</h3>
          <h3>${price}</h3>
          <p>{description}</p>
          <button onClick={handleServiceClick} className="icon-style justify-content-center d-flex align-items-center" ><FontAwesomeIcon icon={faChevronRight} /> </button>
        </div>
      </div>
  );
};

export default Service;
