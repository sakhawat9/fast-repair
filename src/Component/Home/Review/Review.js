import React from 'react';
import { Container } from 'react-bootstrap';

const Review = () => {
    return (
        <section style={{ background: '#F7F7F6'}} className="py-5">
            <Container>
                <h3 className="text-center py-5">Testimonials</h3>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div style={{border: '1px solid gray'}} className="p-4 rounded mb-5">
                        <div className="row">
                            {/* <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={`data:image/jpeg;base64,${review.image.img}`} alt=""/> */}
                            <div>
                                <h3>Alex lby</h3>
                                <p>TShirt Review</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    );
};

export default Review;