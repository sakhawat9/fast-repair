import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'

const Hero = () => {
    return (
        <section className="mb-5 text-white hero-style d-flex align-items-center">
            <Container className="hero">
                <div className="col-6">
                    <h1>Fast Repair Your Smartphone</h1>
                    <h6>Our Company produces the urgent repair of electronic devices without additional const. In this short period of time does not affect the quality of work.</h6>
                    <button className="btn-brand m-3">READ MORE</button>
                    <button className="button-style btn-brand">AbOUT US</button>
                </div>
            </Container>
        </section>
    );
};

export default Hero;