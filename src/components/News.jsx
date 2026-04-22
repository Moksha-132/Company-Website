import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        title: "SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits",
        desc: "Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently. Explore features, benefits, integrations, and career opportunities.",
        date: "12/16/2025 · 2 min read",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Import & Export Solutions for India & UAE: Simplifying Global Trade Operations",
        desc: "Discover reliable import and export solutions for India and UAE. Learn about trade processes, documentation, customs clearance, compliance, and logistics.",
        date: "12/15/2025 · 3 min read",
        image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Building Trust Through Reliable Background Verification",
        desc: "Protect your organization with our professional background verification solutions. We help you validate candidate credentials, screen criminal records, and verify history.",
        date: "10/14/2025 · 2 min read",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop"
    }
];

const News = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '20px', color: 'var(--purple-dark)' }}
                    >
                        Latest <span style={{ color: 'var(--primary)' }}>News</span>
                    </motion.h2>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
                    gap: '40px' 
                }}>
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{ overflow: 'hidden', padding: 0, border: '1px solid var(--border)', background: '#fff' }}
                        >
                            <div style={{ height: '280px', overflow: 'hidden' }}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                            <div style={{ padding: '35px' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '15px', fontWeight: '800' }}>{item.date}</p>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--purple-dark)', lineHeight: 1.4, fontWeight: '800' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.8 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
