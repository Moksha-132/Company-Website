import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, FileSearch, Lock } from 'lucide-react';
import PageHero from '../components/PageHero';

const VerificationPage = () => {
    return (
        <section>
            <PageHero 
                title="Background" 
                highlight="Verification" 
                description="Building trust and security through reliable and professional screening solutions to protect your organization." 
            />

            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop" alt="Verification" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(139, 92, 246, 0.15)' }} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', fontWeight: '800', marginBottom: '30px' }}>Security & Trust</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '30px' }}>
                            Building trust and security through reliable and professional screening solutions. We protect your organization by validating credentials and ensuring every hire meets your standards.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                            {[
                                { icon: <UserCheck size={24} />, title: 'Identity', desc: 'Secure ID validation' },
                                { icon: <FileSearch size={24} />, title: 'History', desc: 'Employment checks' },
                                { icon: <ShieldCheck size={24} />, title: 'Criminal', desc: 'Record screening' },
                                { icon: <Lock size={24} />, title: 'Confidential', desc: 'Data protection' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)' }}
                                    style={{ padding: '20px', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                >
                                    <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>{item.icon}</div>
                                    <h5 style={{ color: 'var(--purple-dark)', fontSize: '1.1rem', marginBottom: '5px', fontWeight: '700' }}>{item.title}</h5>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
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

export default VerificationPage;
