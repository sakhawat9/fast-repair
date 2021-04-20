import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Google from '../../images/google.png'
import './Login.css'

const Login = () => {

    const handleGoogleSignIn = () => {

    }
    const handleBlur = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <Header />
            <div className="text-center container centered mt-3 login">
                <form className="formStyle container p-5"  action="" onSubmit={handleSubmit} >
                    <h3 className="pb-4">Create an account</h3>
                    <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Name"/>
                    <br />
                    <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="User Email " required />
                    <br />
                    <input type="password" id="password" className="form-control" onBlur={handleBlur} name="password" placeholder="Your Password" required />
                    <br />
                    <input type="password" id="confirm_password" name="conformPassword" className="form-control" onBlur={handleBlur} id="" placeholder="Conform Password " required />
                    <br />
                    <input style={{ background: "#2053C9", color: "#fff" }} type="submit" className="form-control" value="Create an account" />
                    <p> Already have an account ? <Link style={{ color: "red" }} to="#"> Login </Link> </p>

                    {/* <p style={{ color: "red" }}>{user.error}</p> */}
                    {/* {user.success && (
                    <p style={{ color: "green" }}>User Create a Successfully</p>
                    )} */}
                </form>
                <button className="google-button centered rounded-pill" onClick={handleGoogleSignIn} > <img src={Google} alt="google" /> Continue with Google </button>
                <p className="py-4">
                    Don’t have an account? <Link className="text-danger" to="#">Create an account</Link>{" "}
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Login;