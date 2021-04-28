import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({})

    const handleBlur = (e) => {
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
            const adminEmail = {
                email: admin.email
            }
            console.log(adminEmail);
            fetch('http://localhost:5000/admin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(adminEmail),

            })
        
          .then((data) => {
              console.log(data);
            // alert("added admin successfully");
          })
          .catch(error => {
            console.log(error)
          })
      };
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="pt-4 col-md-10" style={{ position: "absolute", right: "0", background: "#F4FDFB" }}>
        <div className="col-md-8 offset-2">
            <h3 className="text-brand pt-5">Make Admin</h3>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} className="form-control" type="email" name="email" placeholder="jon@gamil.com" />
                </div>
                <button type="submit" className="btn-brand">Submit</button>

            </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
