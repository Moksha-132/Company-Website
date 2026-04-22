import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Anchor, Package, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

const LogisticsPage = () => {
    return (
        <section>
            <PageHero 
                title="Logistics" 
                highlight="Management" 
                description="At SHNOOR International LLC, we simplify global trade with reliable logistics management solutions. We specialize in providing dry containers for seamless import and export operations." 
            />

            <div className="section-padding">

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--purple-dark)', marginBottom: '30px', fontWeight: '800' }}>World-Class Port Connectivity</h2>
                            <p style={{ color: 'var(--text)', fontSize: '1.2rem', lineHeight: 1.9, marginBottom: '30px', textAlign: 'justify' }}>
                                With strong operational bases at **Mumbai Port** and **Mundra Port**, Gujarat, we offer unmatched connectivity and efficiency for businesses looking to expand their global reach. Our dedicated team ensures every shipment is handled with precision.
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {[
                                    'Access to world-class ports',
                                    'Reliable container availability',
                                    'Secure shipping solutions',
                                    'International trade support'
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        whileHover={{ x: 10, color: 'var(--primary)' }}
                                        style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text)', fontWeight: '600', cursor: 'pointer', transition: 'color 0.3s ease' }}
                                    >
                                        <CheckCircle2 color="var(--primary)" size={20} />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Logistics" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(76, 29, 149, 0.1)' }} />
                    </div>
                </div>
            
            {/* Why Choose Us - Unique Purple Accent */}
            <div style={{ background: 'var(--purple-dark)', padding: '100px 0', color: '#fff' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '60px' }}>Why Choose <span style={{ color: 'var(--vibrant)' }}>SHNOOR Logistics?</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                        {[
                            { icon: <Ship size={40} />, title: "Sea Freight", desc: "Global shipping through strategic port alliances." },
                            { icon: <Anchor size={40} />, title: "Port Handling", desc: "Expert handling at Mumbai and Mundra ports." },
                            { icon: <Package size={40} />, title: "Dry Containers", desc: "Guaranteed availability for all trade volumes." }
                        ].map((box, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                whileHover={{ y: -10, background: 'rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                                style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            >
                                <div style={{ color: 'var(--vibrant)', marginBottom: '20px' }}>{box.icon}</div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{box.title}</h4>
                                <p style={{ opacity: 0.8, lineHeight: 1.7 }}>{box.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; text-align: center; }
                }
            `}</style>
        </section>
    );
};

export default LogisticsPage;
