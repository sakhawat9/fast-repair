import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faGamepad, faLightbulb, faMobileAlt, faMouse, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import './Advertise.css'

const Advertise = () => {
    return (
        <section>
            <Container>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faMobileAlt} /></p>
                        <h3>Smartphone Repair</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faMouse} /></p>
                        <h3>Computer Repair</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faPersonBooth} /></p>
                        <h3>Electronics Repair</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faGamepad} /></p>
                        <h3>Console Repair</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faFan} /></p>
                        <h3>Electronics Recovery</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="advertise-style p-4 my-5 rounded">
                        <p  className="advertise-icon justify-content-center d-flex align-items-center"><FontAwesomeIcon icon={faLightbulb} /></p>
                        <h3>Check before purchase</h3>
                        <p>If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Advertise;