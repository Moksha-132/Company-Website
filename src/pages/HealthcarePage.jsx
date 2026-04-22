import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldPlus, Database, ClipboardList } from 'lucide-react';
import PageHero from '../components/PageHero';

const HealthcarePage = () => {
    return (
        <section>
            <PageHero 
                title="Health" 
                highlight="Care IT" 
                description="Tailored IT solutions for the healthcare industry, ensuring patient data security and operational efficiency." 
            />

            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Healthcare IT" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(139, 92, 246, 0.15)' }} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', fontWeight: '800', marginBottom: '30px' }}>Specialized IT</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '30px' }}>
                            Tailored IT solutions for the healthcare industry, ensuring patient data security and operational efficiency. We help healthcare providers navigate the digital landscape with secure, reliable, and innovative technology.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { icon: <ShieldPlus />, title: 'Data Security' },
                                { icon: <Database />, title: 'Patient Records' },
                                { icon: <ClipboardList />, title: 'Compliance' },
                                { icon: <HeartPulse />, title: 'Tech Support' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    whileHover={{ scale: 1.05, background: 'rgba(139, 92, 246, 0.1)', boxShadow: '0 10px 20px rgba(139, 92, 246, 0.1)' }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '15px', color: 'var(--purple-dark)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                >
                                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                    <span>{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; text-align: center; }
                    .grid-2 div:first-child { order: 2; }
                }
            `}</style>
        </section>
    );
};

export default HealthcarePage;
