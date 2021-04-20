import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertise from '../Advertise/Advertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Process from '../Process/Process';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Advertise />
            <AboutUs />
            <Process />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;