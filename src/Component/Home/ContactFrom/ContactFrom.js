import { faBullseye, faGem, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactFrom.css'

const ContactFrom = () => {
    return (
        <section className="p-3 text-style">
            <Container>
                <h1 className="py-5">Contact Form</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-3 p-2">
                            <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faGem} /></p>
                            </div>
                            <div className="col-md-9">
                                <p><strong>Office location –</strong> our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 p-2">
                            <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faPhoneAlt} /></p>
                            </div>
                            <div className="col-md-9">
                                <p><strong>Monday to Friday:</strong> 9:00 AM to 6:00 PM</p>
                                <p><strong>Saturday:</strong> 9:00 AM to 5:00 PM</p>
                                <p><strong>Sunday:</strong> Closed</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 p-2">
                            <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faBullseye} /></p>
                            </div>
                            <div className="col-md-9">
                                <p><strong>Address:</strong> 685 Lane Drive St. California, 33020</p>
                                <p><strong>Phone:</strong> +010 234 7892 34</p>
                                <p><strong>Fax:</strong> +010 435 5798982</p>
                                <p><strong>Email:</strong> info@irepair.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <from >
                        <input type="text" className="form-control" name="name" id="" placeholder="Your Name" />
                        <br/>
                        <input type="text" className="form-control" name="phone" id="" placeholder="Phone Number" />
                        <br/>
                        <input type="email" className="form-control" name="email" id="" placeholder="Your Email"/>
                        <br/>
                        <textarea name="textarea" className="form-control" id="" cols="30" rows="5" placeholder="Massage" />
                        <br/>
                        <input type="checkbox" name="checkbox" id=""/>
                        <label htmlFor="checkbox">I agree that my submitted data is being collected and stored.</label>
                        <br/>
                        <button className=" btn-brand">SEND MASSAGE</button>
                    </from>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFrom;