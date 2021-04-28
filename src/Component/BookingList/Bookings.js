import React from 'react';

const Bookings = ({booking}) => {
    console.log(booking);
    const {imageURL, name, price, description, status} = booking;
    return (
        <div className="col-lg-4 col-md-6">
        <div className="p-3 mb-4 background rounded">
          <div className="row p-3">
              <div>
              <img style={{width: '150px'}} src={imageURL} alt="" />
              </div>
              <div className="ml-auto">
                  <button className="btn-brand">{status}</button>
              </div>
          </div>
          <h3 className="pt-3">{name}</h3>
          <h3>${price}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Bookings;