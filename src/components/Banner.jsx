import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section style={{ 
            padding: '120px 0', 
            background: 'var(--purple-dark)', 
            color: '#fff', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle purple glow */}
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: 0.1 }}></div>
            
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}
                >
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '40px', fontWeight: '900' }}>
                        Connecting Technology & Trade <span style={{ color: 'var(--gold)' }}>Together</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', opacity: 0.9, lineHeight: 2, marginBottom: '30px', textAlign: 'justify' }}>
                        At SHNOOR International LLC, we believe innovation should have no borders. Our unique approach combines cutting-edge IT solutions with seamless global trade services, helping businesses thrive in both the digital space and the global marketplace.
                    </p>
                    <p style={{ fontSize: '1.3rem', opacity: 0.9, lineHeight: 2, textAlign: 'justify' }}>
                        By blending technological expertise with international trade experience, we empower organizations to innovate faster, operate smarter, and reach new markets with confidence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
