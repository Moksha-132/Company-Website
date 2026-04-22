import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Package, BarChart, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const ExportPage = () => {
    return (
        <div className="export-page">
            <PageHero 
                title="Export" 
                highlight="Management" 
                description="Specialized export management solutions from India to UAE, Bahrain, Qatar, Oman, and Malaysia." 
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Global Reach, Local Expertise</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', textAlign: 'justify' }}>
                                SHNOOR International LLC manages the import and export of various products between India and major destinations including the United Arab Emirates, Bahrain, Qatar, Oman, and Malaysia. Our goal is to close the gap in foreign markets between buyers and sellers.
                            </p>
                            <motion.div 
                                className="card" 
                                style={{ marginBottom: '20px', cursor: 'pointer' }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Package size={20} color="var(--primary)" /> Sourcing & Packaging</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We deal reasonably with producers, farmers, and wholesalers to source the highest quality merchandise.</p>
                            </motion.div>
                            <motion.div 
                                className="card" 
                                style={{ marginBottom: '20px', cursor: 'pointer' }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--primary)" /> Compliance & Quality</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ensuring all trade processes, documentation, and customs clearance meet international compliance standards.</p>
                            </motion.div>
                            <motion.div 
                                className="card"
                                style={{ cursor: 'pointer' }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><BarChart size={20} color="var(--primary)" /> Market Expansion</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Helping businesses thrive in the global marketplace with customized export strategies and growth support.</p>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <img src="/hero-natural.png" alt="Global Trade Operations" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default ExportPage;
