import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area py-5 ">
            <Container>
                <footer className="row">
                    <div className="col-md-6 col-lg-3">
                        <h3>About Us</h3>
                        <p>From our friendly, well-trained staff at each location to a dedicated Customer Consultant Team, rest assured your satisfaction is our number one priority.</p>
                        <button className="btn-brand">Booking</button>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Pages</h3>
                        <a href="/">Home</a><br/>
                        <a href="/">About Us</a><br/>
                        <a href="/">Services</a><br/>
                        <a href="/">Booking</a><br/>
                        <a href="/">Blog</a><br/>
                        <a href="/">Contacts</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Repair</h3>
                        <a href="#">Smartphone</a><br/>
                        <a href="#">Computer</a><br/>
                        <a href="#">Electronics</a><br/>
                        <a href="#">Applications</a><br/>
                        <a href="#">Helps</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>Contacts</h3>
                        <h5>Phone: +010 234 7892 34</h5>
                        <p>E-mail: info@irepair.com</p><br/>
                        <p>Address: 685 Lane Drive St. California, 33020</p>
                        
                        
                    </div>
                    
                </footer>
                <div className="text-center">
                    <p>Copyright © {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;