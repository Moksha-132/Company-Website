import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const Banner = lazy(() => import('../components/Banner'));
const Partners = lazy(() => import('../components/Partners'));
const News = lazy(() => import('../components/News'));
const Testimonial = lazy(() => import('../components/Testimonial'));

const HomePage = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<div style={{ minHeight: '300vh', background: 'var(--background)' }}></div>}>
                <Banner />
                <Partners />
                <News />
                <Testimonial />
            </Suspense>
        </>
    );
};

export default HomePage;
