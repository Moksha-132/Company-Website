import React from 'react';
import { motion } from 'framer-motion';
import { Network, Wifi, Server, Activity } from 'lucide-react';
import PageHero from '../components/PageHero';

const NetworkPage = () => {
    return (
        <section>
            <PageHero 
                title="Network" 
                highlight="Management" 
                description="Robust and secure network infrastructure solutions to support your global trade and IT operations." 
            />

            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', fontWeight: '800', marginBottom: '30px' }}>Infrastructure</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '30px' }}>
                            Robust and secure network infrastructure solutions to support your global trade and IT operations. We ensure seamless connectivity and 24/7 monitoring for your critical business systems.
                        </p>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                            {[
                                { icon: <Wifi />, title: 'High Speed' },
                                { icon: <Server />, title: 'Secure Servers' },
                                { icon: <Activity />, title: 'Live Monitoring' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '12px', 
                                        color: 'var(--purple-dark)', 
                                        fontWeight: '700',
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        padding: '10px 20px',
                                        borderRadius: '30px',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 15px rgba(139, 92, 246, 0.05)'
                                    }}
                                >
                                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                    <span>{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" alt="Network Servers" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(139, 92, 246, 0.15)' }} />
                        </motion.div>
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

export default NetworkPage;
