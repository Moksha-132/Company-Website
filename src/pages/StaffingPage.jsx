import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, CheckCircle, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';

const StaffingPage = () => {
    return (
        <section>
            <PageHero 
                title="Consulting &" 
                highlight="Staffing" 
                description="Connecting businesses with specialized IT talent and expert product development to drive innovation and growth." 
            />

            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', fontWeight: '800', marginBottom: '30px' }}>Tailored Expertise</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '30px' }}>
                                We focus primarily on IT Consulting & Staffing, ensuring your organization has the right expertise to thrive. Our team combines industry knowledge with a vast network of specialists.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {['Expert IT Product Development', 'Specialized Staffing Solutions', 'Application Designing & Development', 'Qualified Consultant Assistance'].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        whileHover={{ x: 10, color: 'var(--primary)' }}
                                        style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text)', fontWeight: '600', cursor: 'pointer', transition: 'color 0.3s ease' }}
                                    >
                                        <CheckCircle size={20} color="var(--primary)" />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1521737706045-917dd067267d?q=80&w=2070&auto=format&fit=crop" alt="Consulting Team" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(139, 92, 246, 0.15)' }} />
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

export default StaffingPage;
