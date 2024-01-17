import React from 'react';
import BannerSection from '../BannerSction/BannerSection';
import Gallery from '../Gallery/Gallery';
import SportsEvent from '../SportsEvent/SportsEvent';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <Gallery></Gallery>
            <SportsEvent></SportsEvent>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;