import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' }
];

const Partners = () => {
    return (
        <section className="section-padding" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800', color: 'var(--secondary)' }}
                >
                    Partners
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '60px' }}
                >
                    "Stronger together – building success through collaboration."
                </motion.p>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: '60px', 
                    alignItems: 'center',
                    marginBottom: '80px'
                }}>
                    {partners.map((partner, index) => (
                        <motion.img 
                            key={index}
                            src={partner.logo} 
                            alt={partner.name} 
                            initial={{ opacity: 0, filter: 'grayscale(1)' }}
                            whileInView={{ opacity: 0.7, filter: 'grayscale(0)' }}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                        />
                    ))}
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        At SHNOOR International LLC, we believe that great partnerships drive great achievements. We collaborate with industry-leading technology providers, trade networks, and business associates to deliver solutions that combine innovation, expertise, and global reach.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Our partners play a vital role in helping us provide world-class IT services, SAP outsourcing, and international trade solutions. Together, we create value that empowers businesses to grow, adapt, and thrive in competitive markets.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Partners;
