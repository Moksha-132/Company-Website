import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';

const CareersPage = () => {
    const clients = [
        { name: 'Etihad', logo: '/etihad.png' },
        { name: 'Emirates', logo: '/emirates.png' },
        { name: 'Cosco', logo: '/cosco.png' },
        { name: 'Zim', logo: '/zim.png' },
        { name: 'Maersk', logo: '/maersk.png' }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            <div className="container">
                {/* Section 1: Find Your Future */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', padding: '60px 0' }} className="grid-responsive">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ 
                            fontSize: '5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '40px', 
                            color: '#0f172a' 
                        }}>
                            Find your <span style={{ color: '#f59e0b' }}>future</span>
                        </h1>
                        
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '25px' }}>
                            Are you ready to take on the challenge
                        </h2>
                        
                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <p>
                                At SHNOOR International LLC, we believe that great companies are built by great people. We're looking for innovators, problem-solvers, and go-getters who are passionate about making an impact in the worlds of technology and global trade.
                            </p>
                            <p>
                                Whether you're an IT expert, software developer, SAP consultant, business strategist, or trade professional, this is your chance to be part of a company that values creativity, collaboration, and continuous growth.
                            </p>
                            <p>
                                At SHNOOR International, you won't just be doing a job—you'll be building a career where your skills make a difference.
                            </p>
                            <p style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.3rem', marginTop: '10px' }}>
                                SHNOOR - Get the future you want. !!
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.weserv.nl/?url=images.unsplash.com/photo-1522071820081-009f0129c71c&w=1200" 
                            alt="Challenge" 
                            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.15)' }} 
                        />
                    </motion.div>
                </div>

                {/* Section 2: Recruitment Scams (Blue Box) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ 
                        backgroundColor: '#0f172a', 
                        borderRadius: '30px', 
                        padding: '80px 60px', 
                        color: '#fff', 
                        textAlign: 'center',
                        margin: '60px 0'
                    }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Recruitment Scams</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '30px' }}>
                            At SHNOOR International LLC, integrity and transparency are at the heart of our recruitment process. We want to alert all job seekers that we never charge any fees, request payments, or ask for financial information at any stage of our hiring process.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '40px' }}>
                            To protect any spam, ensure emails come from **@shnoor.com**. If you receive any communication—via email, phone, social media, or messaging apps—claiming to represent SHNOOR International and requesting money for job opportunities, please treat it as a scam. Such activities are fraudulent and have no connection with our company.
                        </p>
                        <Link 
                            to="/recruitment-scams" 
                            style={{ 
                                display: 'inline-block', 
                                padding: '15px 40px', 
                                border: '2px solid #fff', 
                                color: '#fff', 
                                textDecoration: 'none', 
                                borderRadius: '30px', 
                                fontWeight: 'bold',
                                transition: '0.3s'
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#0f172a'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; }}
                        >
                            READ MORE
                        </Link>
                    </div>
                </motion.div>

                {/* Section 3: Explore SHNOOR */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', padding: '80px 0' }} className="grid-responsive">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '30px' }}>Explore SHNOOR</h2>
                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <p>
                                When you join us, you become part of a passionate, diverse, and forward-thinking team that believes in pushing boundaries and delivering excellence. From IT Consulting, Product Development, and SAP Outsourcing to international import & export operations, our work spans industries, regions, and technologies.
                            </p>
                            <p>
                                At SHNOOR International LLC, every career path is a journey of growth, innovation, and impact. We are more than just a workplace—we're a dynamic hub where technology meets global trade, creating opportunities that challenge your skills and expand your horizons.
                            </p>
                        </div>
                        <Link 
                            to="/latest-openings" 
                            style={{ 
                                display: 'inline-block', 
                                marginTop: '40px',
                                padding: '15px 40px', 
                                backgroundColor: '#fff', 
                                border: '2px solid #0f172a',
                                color: '#0f172a', 
                                textDecoration: 'none', 
                                borderRadius: '30px', 
                                fontWeight: 'bold',
                                transition: '0.3s'
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#0f172a'; e.target.style.color = '#fff'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#0f172a'; }}
                        >
                            LATEST OPENINGS
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img 
                                src="https://images.weserv.nl/?url=images.unsplash.com/photo-1542744173-8e7e53415bb0&w=1200" 
                                alt="Explore Team" 
                                style={{ width: '100%', borderRadius: '100px 100px 0 0', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                            />
                            <div style={{ 
                                position: 'absolute', 
                                bottom: '30px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                                textAlign: 'center',
                                color: '#fff'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Explore SHNOOR</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Where technology meets global trade</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 4: Brand Logos */}
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Our Strategic Partners</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '60px' }}>"Building long-term partnerships, one success story at a time."</p>
                    
                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        gap: '100px', 
                        alignItems: 'center',
                        marginBottom: '60px',
                        padding: '80px 60px',
                        background: '#f8fafc',
                        borderRadius: '20px'
                    }}>
                        {clients.map((client, i) => (
                            <motion.img 
                                key={i}
                                src={client.logo} 
                                alt={client.name} 
                                initial={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                style={{ 
                                    height: '80px', 
                                    width: 'auto', 
                                    maxWidth: '220px',
                                    objectFit: 'contain'
                                }} 
                            />
                        ))}
                    </div>

                    <div style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <p>
                            At SHNOOR International LLC, our clients are at the heart of everything we do. From emerging startups to global enterprises, we work with businesses across industries and geographies—delivering IT solutions, SAP outsourcing, and global trade services that drive measurable results.
                        </p>
                        <p>
                            We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman, and Malaysia, and our success is built on their success.
                        </p>
                    </div>
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

export default CareersPage;
