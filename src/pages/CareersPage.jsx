import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Rocket } from 'lucide-react';
import PageHero from '../components/PageHero';

const CareersPage = () => {
    return (
        <section>
            <PageHero 
                title="International" 
                highlight="Careers" 
                description="Join a passionate and diverse team that pushes boundaries in technology and global trade. We're looking for innovators to build the future." 
            />

            {/* Intro with Image */}
            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', fontWeight: '800', marginBottom: '30px' }}>Find your future at SHNOOR</h2>
                            <p style={{ color: 'var(--text)', fontSize: '1.2rem', lineHeight: 1.9, marginBottom: '30px' }}>
                                We are always looking for talented individuals to join our team in Muscat and across our global trade network. At SHNOOR, you'll work on cutting-edge IT projects and contribute to seamless global logistics operations.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                {[
                                    { icon: <Target color="var(--primary)" />, title: "Vision", desc: "Global trade leader" },
                                    { icon: <Users color="var(--primary)" />, title: "Culture", desc: "Diverse & Inclusive" },
                                    { icon: <Briefcase color="var(--primary)" />, title: "Work", desc: "Challenging projects" },
                                    { icon: <Rocket color="var(--primary)" />, title: "Growth", desc: "Continuous learning" }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        style={{ 
                                            background: '#fff', 
                                            padding: '20px', 
                                            borderRadius: '20px',
                                            border: '1px solid var(--border)',
                                            boxShadow: '0 10px 20px rgba(139, 92, 246, 0.05)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{ marginBottom: '15px', background: 'rgba(139, 92, 246, 0.1)', display: 'inline-block', padding: '12px', borderRadius: '12px' }}>{item.icon}</div>
                                        <h4 style={{ color: 'var(--purple-dark)', marginBottom: '5px', fontSize: '1.2rem', fontWeight: '700' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Modern Office Culture" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(139, 92, 246, 0.1)' }} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Warning Section - Verbatim from site */}
            <div style={{ background: '#f5f3ff', padding: '80px 0' }}>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(239, 68, 68, 0.15)' }}
                        style={{ 
                            background: '#fff', 
                            padding: '60px', 
                            borderRadius: '30px', 
                            border: '2px solid #ef4444',
                            boxShadow: '0 20px 40px rgba(239, 68, 68, 0.05)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <h3 style={{ color: '#ef4444', fontSize: '2rem', marginBottom: '20px', fontWeight: '800' }}>⚠️ RECRUITMENT FRAUD ALERT</h3>
                        <p style={{ color: 'var(--text)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            SHNOOR International LLC does not charge any fees at any stage of the recruitment process. All official communications will come from `@shnoor.com` email addresses. Please be wary of any requests for money or sensitive information.
                        </p>
                    </motion.div>
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

export default CareersPage;
