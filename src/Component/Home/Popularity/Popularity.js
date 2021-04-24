import React from 'react';
import image from '../../../images/master-holds.jpg'
import './Popularity.css'

const Popularity = () => {
    return (
        <section className="popularity">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="popularity-style">
                        <h1>The most popular repair directions for our customers</h1>
                        <h5>The optimum ratio of price and quality responsible and conscientious approach</h5>
                        <button className="popularity-button mb-4"><strong>Smartphone Repair -- 95%</strong></button>
                        <button className="popularity-button mb-4"><strong>Computer Repair -- 70%</strong></button>
                        <button className="popularity-button mb-4"><strong>Electronics Recovery -- 60%</strong></button>
                        <button className="popularity-button mb-4"><strong>Console Repair -- 40%</strong></button>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <img style={{width: '100%', height: '800px'}} src={image} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Popularity;