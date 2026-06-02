import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Chatbot = lazy(() => import('./Chatbot'));

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <Footer />
            <Suspense fallback={null}>
                <Chatbot />
            </Suspense>
        </div>
    );
};

export default Layout;
