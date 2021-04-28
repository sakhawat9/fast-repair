import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
      <Link className="repair" to="/"><strong>Fast Repair</strong></Link>
        <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
          </Link>
        </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageService" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />
                <span>Manage Services</span>
              </Link>
            </li>
          <li>
            <Link to="/booking/:_id" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />
              <span>Book</span>
            </Link>
          </li>
          <li>
            <Link to="/bookingList" className="text-white">
              <FontAwesomeIcon icon={faList} />
              <span>Booking List</span>
            </Link>
          </li>
          <li>
            <Link to="/AddReview" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />
              <span>Add Review</span>
            </Link>
          </li>
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt}/> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
