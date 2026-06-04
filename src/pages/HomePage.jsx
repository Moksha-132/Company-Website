import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const HomePageContent = lazy(() => import('../components/HomePageContent'));

const HomePage = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<div style={{ minHeight: '300vh', background: 'var(--background)' }}></div>}>
                <HomePageContent />
            </Suspense>
        </>
    );
};

export default HomePage;
