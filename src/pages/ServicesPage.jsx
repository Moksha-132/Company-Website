import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Server, Users, Shield, Cpu, Cloud, BarChart3, Settings, Database, ShieldCheck, HeartPulse } from 'lucide-react';
import PageHero from '../components/PageHero';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <PageHero 
                title="Our" 
                highlight="Services" 
                description="Explore our comprehensive range of IT consulting, staffing, and global trade management solutions." 
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="services-grid">
                        <div className="card">
                            <h2 style={{ marginBottom: '20px', color: 'var(--navy)' }}>IT Consulting & Staffing</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                                We provide expert IT consulting services to help organizations innovate faster and operate smarter. Our staffing solutions connect businesses with specialized IT talent to drive digital transformation.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li>✓ Application Design & Development</li>
                                <li>✓ IT Product Development</li>
                                <li>✓ SAP Outsourcing</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h2 style={{ marginBottom: '20px', color: 'var(--navy)' }}>Export Management Solutions</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                                Specialized in the import and export of quality products from India to UAE, Bahrain, Qatar, Oman, and Malaysia. We handle sourcing, compliance, and logistics to make global trade seamless.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li>✓ Global Market Expansion</li>
                                <li>✓ Compliance & Quality Control</li>
                                <li>✓ Sourcing & Packaging</li>
                            </ul>
                        </div>

                        <div className="card">
                            <Cloud size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Cloud Management</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Scalable cloud infrastructure and migration services to ensure business agility and security in the digital space.</p>
                        </div>

                        <div className="card">
                            <Database size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Data & Artificial Intelligence</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Advanced analytics and AI-powered automation to help businesses improve efficiency and decision-making.</p>
                        </div>

                        <div className="card">
                            <ShieldCheck size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Background Verification</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Reliable screening solutions to validate credentials and ensure safety, honesty, and reliability in your organization.</p>
                        </div>

                        <div className="card">
                            <HeartPulse size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3>Healthcare IT Solutions</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Specialized digital tools and IT staffing for the healthcare sector, optimizing patient care and operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 992px) {
                    .services-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
