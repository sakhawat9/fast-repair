import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/iphonex.png'

const AboutUs = () => {
    return (
        <section>
            <Container>
                <div className="row py-5">
                    <div className="col-lg-6">
                        <div className="pr-3 pt-5">
                            <h1>We can help you now, fill out an application!</h1>
                            <br/>
                            <h6>Let us help! If your phone has a broken front glass, non-responsive buttons</h6>
                            <br/>
                            <p>Non eget orci, pretium wisi maecenas eu, adipiscing nulla quisque maecenas pellentesque, ac placerat parturient. Vitae urna orci tortor, eu integer. Fringilla ut sed. Ut phasellus suspendisse ut amet, animi scelerisque, arcu mauris mauris euismod ornare elit felis. Voluptatibus enim dolor, sem quisque turpis, ut vitae, vel dui lectus.</p>
                            <button className="btn-brand">About Us</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img style={{width: '100%'}} src={image} alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;