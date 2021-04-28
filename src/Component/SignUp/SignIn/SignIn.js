import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Google from '../../../images/google.png'
import './SignIn.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Firebase.config';
import { UserContext } from '../../../App';

const SignIn = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
        success: false,
      });
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const provider = new firebase.auth.GoogleAuthProvider();

      const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { userName: displayName, email, photoURL, isLoggedIn: true };
            setUserToken();
            setLoggedInUser(signedInUser)
          history.push(from)
        }).catch((error) => {
          var errorMessage = error.message;
          console.log('loggedInUser', errorMessage);
        });
    }
    console.log(loggedInUser);

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

    console.log(user);
    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const isSignedIn = { ...user };
                isSignedIn.error = "";
                isSignedIn.success = true;
                setUserToken();
                setUser(isSignedIn);
                updateUserName(user.name);
                history.push(from);
              })
              .catch((error) => {
                const isSignedIn = { ...user };
                isSignedIn.error = error.message;
                isSignedIn.success = false;
                setUser(isSignedIn);
              });
        }
        e.preventDefault();
    }
    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: name,
          })
          .then(function () {
            console.log('user name update successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          sessionStorage.setToken('token', idToken);
        }).catch(function(error) {
          // Handle error
        });
      }
    return (
        <div>
            <Header />
            <div className="text-center container centered my-5 signIn">
                <form className="formStyle container p-5"  action="" onSubmit={handleSubmit} >
                    <h3 className="pb-4">Create an account</h3>
                    <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Name"/>
                    <br />
                    <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="User Email " required />
                    <br />
                    <input type="password" id="password" className="form-control" onBlur={handleBlur} name="password" placeholder="Your Password" required />
                    <br />
                    <input type="password" id="confirm_password" name="conformPassword" className="form-control" onBlur={handleBlur} id="" placeholder="Conform Password " />
                    <br />
                    <input style={{ background: "#2053C9", color: "#fff" }} type="submit" className="form-control" value="Create an account" />
                    <p> Already have an account ? <Link style={{ color: "red" }} to="/login"> Login </Link> </p>

                    <p style={{ color: "red" }}>{user.error}</p>
                    {user.success && (
                    <p style={{ color: "green" }}>User Create a Successfully</p>
                    )}
                </form>
                <button className="google-button centered rounded-pill" onClick={handleGoogleSignIn} > <img src={Google} alt="google" /> Continue with Google </button>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;