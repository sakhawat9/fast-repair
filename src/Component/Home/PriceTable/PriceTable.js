import React from 'react';
import { Container } from 'react-bootstrap';
import './PriceTable.css'

const PriceTable = () => {
    return (
        <section>
            <Container className="text-center">
                <h1 className="pt-5">Price Table</h1>
                <h5 className=" py-5">The optimum ratio of price and quality responsible <br/> and conscientious approach</h5>
                <h5 className="py-5 text-brand">Monthly</h5>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="mb-5 price-cart rounded">
                            <div className="price-header py-5">
                                <h3>Basic</h3>
                                <h5>Visual inspection</h5>
                            </div>
                            <div className="price">
                                <h3 className="p-4">$50</h3>
                                <p className="px-3 text-justify">Check of technique without opening, check of working capacity and visual inspection and computer</p>
                                <button className="btn-brand my-3">Booking</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mb-5 price-cart rounded">
                            <div className="price-header py-5">
                                <h3>Standart</h3>
                                <h5>Diagnostics</h5>
                            </div>
                            <div className="price">
                                <h3 className="p-4">$45</h3>
                                <p className="px-3 text-justify">Check of technique without opening, check of working capacity and visual inspection and computer</p>
                                <button className="btn-brand my-3">Booking</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mb-5 price-cart rounded">
                            <div className="price-header py-5">
                                <h3>Extended</h3>
                                <h5>Diagnostics and repair</h5>
                            </div>
                            <div className="price">
                                <h3 className="p-4">$100</h3>
                                <p className="px-3 text-justify">Check of technique without opening, check of working capacity and visual inspection and computer</p>
                                <button className="btn-brand my-3">Booking</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mb-5 price-cart rounded">
                            <div className="price-header py-5">
                                <h3>Special</h3>
                                <h5>All in one</h5>
                            </div>
                            <div className="price">
                                <h3 className="p-4">$100</h3>
                                <p className="px-3 text-justify">Check of technique without opening, check of working capacity and visual inspection and computer</p>
                                <button className="btn-brand my-3">Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PriceTable;