import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "SHNOOR International has been a pivotal partner in our digital transformation journey. Their SAP expertise is unmatched.",
        author: "Tech Director",
        company: "Global Trade Corp"
    },
    {
        quote: "The seamless logistics management between Mumbai and UAE has significantly reduced our supply chain overheads.",
        author: "Supply Chain Manager",
        company: "Logistics Pro"
    }
];

const Testimonial = () => {
    return (
        <section className="section-padding" style={{ background: '#002a4d', color: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem', fontWeight: '800' }}
                    >
                        What Our <span style={{ color: 'var(--primary)' }}>Clients Say</span>
                    </motion.h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="grid-2">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ 
                                background: 'rgba(255,255,255,0.05)', 
                                padding: '50px', 
                                borderRadius: '24px', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative'
                            }}
                        >
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.3, marginBottom: '20px' }} />
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '30px', fontStyle: 'italic' }}>"{t.quote}"</p>
                            <div>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>{t.author}</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .grid-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Testimonial;
