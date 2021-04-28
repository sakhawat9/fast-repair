import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Firebase.config';
import { UserContext } from '../../../App';


const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

      const [loginUser, setLoginUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      const { from } = location.state || { from: { pathname: "/" } };
      const [newUser, setNewUser] = useState(false);
      const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: "",
        password: "",
        error: "",
        success: false
      });


      const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const isSignedIn = { ...user };
            isSignedIn[e.target.name] = e.target.value;
            setUser(isSignedIn);
        }
    };


  const handleSubmit = (e) => {

    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const { displayName, email, isSignedIn = true } = res.user;
            const signedInUser = { name: displayName, email, isSignedIn };
            setLoginUser(signedInUser);
            history.replace(from);


        })
        .catch((error) => {
            const isSignedIn = {...user};
            isSignedIn.error = error.message;
            isSignedIn.success = false;
            setUser(isSignedIn);
        });
        }
            e.preventDefault();
    }
    return (
        <div>
            <Header />
            <div className="text-center container centered my-5 signIn">
                <form className="formStyle container p-5"  action="" onSubmit={handleSubmit} >
                    <h3 className="pb-4">Create an account</h3>
                    <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="User Email " required />
                    <br />
                    <input type="password" id="password" className="form-control" onBlur={handleBlur} name="password" placeholder="Your Password" required />
                    <br />
                    <input style={{ background: "#2053C9", color: "#fff" }} type="submit" className="form-control" value="Login" />
                    <p>Don’t have an account? <Link className="text-danger" to="/signIn">Create an account</Link> </p>
                    <p style={{ color: "red" }}>{user.error}</p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;