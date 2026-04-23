import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            <div className="container">
                {/* Section 1: Hero-style Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center', padding: '60px 0' }} className="grid-responsive">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ 
                            display: 'inline-block', 
                            padding: '5px 15px', 
                            border: '1px solid #f59e0b', 
                            color: '#f59e0b', 
                            fontSize: '0.8rem', 
                            fontWeight: 'bold', 
                            marginBottom: '20px',
                            letterSpacing: '1px'
                        }}>
                            ABOUT US
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Empowering Growth Through <span style={{ color: '#f59e0b' }}>Technology</span> & Trade
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            At Shnoor International, we specialize in delivering innovative strategies and seamless execution to help businesses expand beyond borders.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.weserv.nl/?url=images.unsplash.com/photo-1552664730-d307ca884978&w=1200" 
                            alt="Team Collaboration" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </motion.div>
                </div>

                {/* Section 2: Mission & Vision */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '80px 0' }} className="grid-responsive">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '20px' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
                            To provide innovative IT solutions and seamless global trade services that empower our clients to grow, adapt, and succeed in an ever-changing business landscape. We aim to deliver excellence through expertise, reliability, and customer-centric service.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '20px' }}>Our Vision</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
                            To be a global leader in uniting technology and trade—transforming businesses with smart IT solutions and fostering stronger international connections that drive economic growth and mutual success.
                        </p>
                    </motion.div>
                </div>

                {/* Section 3: Detailed Content */}
                <div style={{ padding: '40px 0 80px 0' }}>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px' }}
                    >
                        Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future ready. Whether you're seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity—SHNOOR International is here to help you achieve success.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        style={{ marginBottom: '60px' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '25px' }}>Why Choose SHNOOR INTERNATIONAL LLC?</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            {[
                                "Proven record in multiple IT Domains.",
                                "Commitment to quality, innovation, and client satisfaction",
                                "Strong international trade network",
                                "Seamless service delivery across industries and geographies"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.1rem', color: '#64748b' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
                    >
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
                            At SHNOOR International LLC, we don't just offer services—we build long-term partnerships that help businesses thrive in both the digital and global marketplace. By blending technological expertise with international trade experience, we empower organizations to innovate faster, operate smarter, and reach new markets with confidence.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
                            Our expertise in cross-border trade means smooth operations, transparent processes, and compliance with international standards. Whether it's sourcing premium goods from India or delivering products to global destinations, SHNOOR International is your bridge to international business growth.
                        </p>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0c355a', marginTop: '20px' }}>
                            In a world where connections matter, we bring technology, trust, and trade together.
                        </p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default AboutPage;
