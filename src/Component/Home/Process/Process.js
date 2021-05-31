import React from 'react';
import image from '../../../images/process.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMobileAlt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import './Process.css'

const Process = () => {
    return (
        <section className="process-style container-fluid">
            <div className="row ">
                <div className="col-md-6 p-0">
                    <img style={{width: '100%', height: '800px'}} src={image} alt=""/>
                </div>
                <div className="col-lg-6 p-0 pt-5 px-5">
                    <h1>To order a repair you need to do the following steps</h1>
                    <br/>
                    <h4>The optimum ratio of price and quality responsible and conscientious approach</h4>
                    <div className="row">
                        <div className="col-md-3 p-2">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faPhoneAlt} /></p>
                        </div>
                        <div className="col-md-9">
                            <h3>Step 1 - dial our phone</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 p-3">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faUser} /></p>
                        </div>
                        <div className="col-md-9">
                            <h3>Step 2 - select a specialist</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 p-3">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faClock} /></p>
                        </div>
                        <div className="col-md-9">
                            <h3>Step 3 - choose the right time</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;