import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/268869-P560BE-786-350x233.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Service.css'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="service-style">
        <Container>
                <div className="row my-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="p-3 mb-4 background rounded">
                            <img src={image} alt=""/>
                            <h3 className="pt-3">Electronics Repair</h3>
                            <p>Pulvinar vehicula mus nostra eget sollicitudin, tempor aliquam at the consequat ut....</p>
                            <Link to="/" className="icon-style justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faChevronRight} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="p-3 mb-4 background rounded">
                            <img src={image} alt=""/>
                            <h3 className="pt-3">Electronics Repair</h3>
                            <p>Pulvinar vehicula mus nostra eget sollicitudin, tempor aliquam at the consequat ut....</p>
                            <Link to="/" className="icon-style justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faChevronRight} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="p-3 mb-4 background rounded">
                            <img src={image} alt=""/>
                            <h3 className="pt-3">Electronics Repair</h3>
                            <p>Pulvinar vehicula mus nostra eget sollicitudin, tempor aliquam at the consequat ut....</p>
                            <Link to="/" className="icon-style justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faChevronRight} /></Link>
                        </div>
                    </div>

                </div>
        </Container>
        </section>
    );
};

export default Services;