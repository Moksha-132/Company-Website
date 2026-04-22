import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Partners from '../components/Partners';
import News from '../components/News';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Banner />
            <Services />
            <Partners />
            <News />
            <Testimonial />
            <Contact />
        </>
    );
};

export default HomePage;
