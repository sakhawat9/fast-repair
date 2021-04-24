import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertise from '../Advertise/Advertise';
import ContactFrom from '../ContactFrom/ContactFrom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Popularity from '../Popularity/Popularity';
import PriceTable from '../PriceTable/PriceTable';
import Process from '../Process/Process';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Advertise />
            <AboutUs />
            <Process />
            <Services />
            <PriceTable />
            <Popularity />
            <Review />
            <ContactFrom />
            <Footer />
        </div>
    );
};

export default Home;