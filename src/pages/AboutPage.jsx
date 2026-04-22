import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Target, Eye, ShieldCheck, Users, Globe } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHero 
                title="About" 
                highlight="Us" 
                description="Discover our mission, vision, and the legacy of innovation that drives SHNOOR International forward." 
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card">
                            <Target size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Our Mission</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '15px', textAlign: 'justify' }}>
                                SHNOOR International LLC was formed to work progressively in the field of various IT needs. Our mission is to bridge the gap in foreign markets between buyers and sellers, ensuring the highest quality of merchandise and cultivating customer loyalty through expert consultancy.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card">
                            <Eye size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Our Vision</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '15px', textAlign: 'justify' }}>
                                To be a global leader in integrated IT and trade services, recognized for our ability to connect technology and trade seamlessly. We aspire to build lasting partnerships worldwide and innovate smarter to reach new markets with confidence.
                            </p>
                        </motion.div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>Why Choose SHNOOR?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div className="card">
                                <Users size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                                <h4>Proven IT Expertise</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>From SAP Outsourcing to Product Development, we deliver tailored and scalable solutions.</p>
                            </div>
                            <div className="card">
                                <Globe size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                                <h4>Global Trade Network</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Strong bridges between India, UAE, Bahrain, Qatar, Oman, and Malaysia.</p>
                            </div>
                            <div className="card">
                                <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                                <h4>Commitment to Quality</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Dealing reasonably with stakeholders to ensure customer satisfaction and loyalty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .grid-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
