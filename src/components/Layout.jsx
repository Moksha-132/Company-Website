import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Layout;
