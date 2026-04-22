import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>
                            Innovation Has <span className="gradient-text">No Borders</span>
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '30px' }}>
                            SHNOOR INTERNATIONAL LLC has been formed to work progressively in the field of various IT needs focusing primarily on IT Consulting & Staffing, IT Product Development, and global trade solutions.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ color: '#00f2ff' }}><Target size={28} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Our Mission</h4>
                                    <p style={{ color: '#94a3b8' }}>To bridge the gap in the foreign market between buyers and sellers with premium quality and innovation.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ color: '#3b82f6' }}><Lightbulb size={28} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Innovative Thinking</h4>
                                    <p style={{ color: '#94a3b8' }}>Combining industry expertise with future-ready solutions tailored to your success.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ color: '#00f2ff' }}><Users size={28} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Expert Team</h4>
                                    <p style={{ color: '#94a3b8' }}>Qualified consultants guaranteed to offer highest quality merchandise and satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ 
                            background: 'linear-gradient(135deg, #00f2ff, #3b82f6)',
                            borderRadius: '30px',
                            padding: '40px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <h3 style={{ color: '#000', fontSize: '2rem', marginBottom: '20px' }}>Global Presence</h3>
                            <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '1.1rem', marginBottom: '30px' }}>
                                Headquartered in Muscat, Oman, we build strong trade bridges between India, UAE, Bahrain, Qatar, Oman, and Malaysia.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                {['Oman', 'UAE', 'Bahrain', 'Qatar', 'Malaysia', 'India', 'USA'].map(country => (
                                    <span key={country} style={{ 
                                        background: 'rgba(0,0,0,0.1)', 
                                        padding: '5px 15px', 
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        color: '#000'
                                    }}>
                                        {country}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Decorative background shape */}
                        <div style={{ 
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--primary)',
                            borderRadius: '30px',
                            zIndex: 0
                        }} />
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default About;
