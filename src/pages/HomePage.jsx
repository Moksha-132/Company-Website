import React, { lazy, Suspense, useState, useEffect } from 'react';
import Hero from '../components/Hero';

const HomePageContent = lazy(() => import('../components/HomePageContent'));

const HomePage = () => {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Defer loading below-the-fold content to ensure FCP/LCP happens instantly
        // without competing for CPU resources on mobile devices.
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Hero />
            {shouldLoad ? (
                <Suspense fallback={<div style={{ minHeight: '300vh', background: 'var(--background)' }}></div>}>
                    <HomePageContent />
                </Suspense>
            ) : (
                <div style={{ minHeight: '300vh', background: 'var(--background)' }}></div>
            )}
        </>
    );
};

export default HomePage;
