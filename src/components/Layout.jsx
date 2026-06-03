import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Chatbot = lazy(() => import('./Chatbot'));

const Layout = ({ children }) => {
    const location = useLocation();
    const isHiddenRoute = location.pathname.startsWith('/admin');

    return (
        <div className="layout">
            {!isHiddenRoute && <Navbar />}
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            {!isHiddenRoute && <Footer />}
            {!isHiddenRoute && (
                <Suspense fallback={null}>
                    <Chatbot />
                </Suspense>
            )}
        </div>
    );
};

export default Layout;
