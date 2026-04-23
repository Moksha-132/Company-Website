import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LogisticsPage = () => {
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
                            LOGISTICS SOLUTIONS
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Logistics Services | <span style={{ color: '#f59e0b' }}>Shnoor</span> International LLC
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '600px' }}>
                            At SHNOOR International LLC, we specialize in providing efficient, reliable, and end-to-end logistics solutions tailored to meet the needs of businesses across industries. With a strong network, modern infrastructure, and experienced professionals, we ensure your goods move seamlessly from origin to destination.
                        </p>
                        <Link to="/import-and-export" style={{ 
                            display: 'inline-block', 
                            padding: '15px 35px', 
                            backgroundColor: '#0f172a', 
                            borderRadius: '5px', 
                            color: '#fff', 
                            textDecoration: 'none', 
                            fontWeight: 'bold' 
                        }}>
                            LEARN MORE
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.weserv.nl/?url=images.unsplash.com/photo-1494412574643-ff11b0a5c1c3&w=1200" 
                            alt="Logistics Operations" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </motion.div>
                </div>

                {/* Section 2: Detailed Text */}
                <div style={{ padding: '60px 0' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        style={{ marginBottom: '60px' }}
                    >
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '30px' }}>
                            At **SHNOOR International LLC**, we simplify global trade with reliable logistics management solutions. We specialize in providing dry containers for seamless import and export operations, ensuring safe and timely delivery of goods across international markets.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b' }}>
                            With strong operational bases at **Mumbai Port** and **Mundra Port**, Gujarat, we offer unmatched connectivity and efficiency for businesses looking to expand their global reach. Our dedicated team ensures every shipment is handled with precision, from documentation to delivery, so clients can focus on growing their business while we manage the logistics.
                        </p>
                    </motion.div>

                    {/* Section 3: Why Choose Us & Services Include */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }} className="grid-responsive">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '30px' }}>Why Choose Us?</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Access to world-class ports in India",
                                    "Reliable dry container availability",
                                    "Timely and secure shipping solutions",
                                    "Comprehensive support for international trade"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.1rem', color: '#64748b', marginBottom: '15px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '30px' }}>Our Logistics Services Include:</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Dry Container Supply from Mumbai & Mundra Ports",
                                    "Cargo Handling, Packing & Securing",
                                    "Customs Clearance & Regulatory Documentation",
                                    "Multi-Modal Transport Solutions (Sea, Rail & Road)",
                                    "Real-Time Tracking & Monitoring",
                                    "End-to-End Supply Chain Support"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.1rem', color: '#64748b', marginBottom: '15px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0f172a', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Section 4: Final Commitment */}
                <div style={{ padding: '60px 0 100px 0' }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }}
                        style={{ background: '#f8fafc', padding: '60px', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '30px' }}>
                            Your Cargo, Our Commitment. <br/>
                            <span style={{ color: '#f59e0b' }}>From Port to Destination—Handled with Care.</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                            With **SHNOOR International LLC**, you get more than just a logistics provider—you gain a strategic partner committed to minimizing costs, reducing delays, and maximizing efficiency. Our expert team ensures complete compliance with international standards while offering flexible solutions tailored to your business requirements.
                        </p>
                        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0c355a' }}>
                            At SHNOOR International LLC, we don't just move goods—we move businesses forward.
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

export default LogisticsPage;
