import React from 'react';
import { Container } from 'react-bootstrap';
import './Service.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://tranquil-temple-27502.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])

    return (
        <section className="service-style">
        <Container>
            <h1 className="text-brand text-center py-5">Service</h1>
                <div className="row">
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
        </Container>
        </section>
    );
};

export default Services;