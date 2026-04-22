import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetail = ({ title, content, icon }) => {
    return (
        <div className="service-detail" style={{ paddingTop: '100px' }}>
            <section className="section-padding bg-light">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{icon}</div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: '#fff', padding: '60px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border)' }}
                    >
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify' }}>
                            {content}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
