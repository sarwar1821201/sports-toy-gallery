import React from 'react';
import BannerSection from '../BannerSction/BannerSection';
import Gallery from '../Gallery/Gallery';
import SportsEvent from '../SportsEvent/SportsEvent';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <Gallery></Gallery>
            <SportsEvent></SportsEvent>
        </div>
    );
};

export default Home;