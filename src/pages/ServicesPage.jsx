import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, ShieldCheck, HeartPulse, Users, Network, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        {
            title: "Cloud Migration & IT Solutions",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
            desc: "We help businesses seamlessly move to the cloud with secure, scalable, and cost-efficient solutions. Our team ensures minimal downtime and maximum performance for enterprise IT systems.",
            link: "/services/cloud"
        },
        {
            title: "AI & Data Science Solutions",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
            desc: "Unlock insights from data with AI-driven solutions. From predictive analytics to intelligent automation, we help businesses harness the power of artificial intelligence to make smarter decisions.",
            link: "/services/ai"
        },
        {
            title: "SAP Outsourcing & Support",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
            desc: "Optimize your enterprise operations with our SAP outsourcing services. We provide implementation, integration, and ongoing support to ensure your systems run smoothly and efficiently.",
            link: "/services/network"
        },
        {
            title: "IT Consulting & Staffing Solutions",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
            desc: "Our expert consultants and staffing services empower businesses to scale with the right talent and technology. We provide guidance, strategy, and skilled professionals for every IT need.",
            link: "/services/staffing"
        },
        {
            title: "Export Management Solutions",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
            desc: "We simplify international trade with end-to-end export management services. From documentation to compliance, our solutions streamline global business operations.",
            link: "/export"
        },
        {
            title: "Logistics & Supply Chain Services",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800",
            desc: "We deliver efficient logistics and supply chain solutions to keep your business moving. Our services ensure timely, cost-effective, and reliable delivery worldwide.",
            link: "/services/logistics"
        },
        {
            title: "Background Verification",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
            desc: "Protecting your organization with professional screening and credential validation.",
            link: "/services/verification"
        },
        {
            title: "Healthcare IT",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
            desc: "Specialized digital tools and staffing to optimize patient care and efficiency.",
            link: "/services/healthcare"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            <div className="container">
                {/* Hero Section */}
                <div style={{ padding: '80px 0', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ 
                            display: 'inline-block', 
                            padding: '5px 15px', 
                            border: '1px solid #f59e0b', 
                            color: '#f59e0b', 
                            fontSize: '0.8rem', 
                            fontWeight: 'bold', 
                            marginBottom: '20px',
                            letterSpacing: '1px'
                        }}
                    >
                        OUR SERVICES
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '4rem', fontWeight: '800', color: '#0f172a', marginBottom: '25px' }}
                    >
                        Innovative <span style={{ color: '#f59e0b' }}>Solutions</span> for Global Growth
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b' }}
                    >
                        From cutting-edge IT consulting to seamless global trade management, we provide the tools and expertise to help your business thrive.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                        gap: '30px',
                        paddingBottom: '100px'
                    }}
                >
                    {services.map((s, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Link 
                                to={s.link} 
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'inherit',
                                    display: 'block',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '15px',
                                    transition: 'all 0.3s ease',
                                    background: '#fff',
                                    height: '100%',
                                    overflow: 'hidden'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = '#f59e0b';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '15px' }}>{s.title}</h3>
                                    <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>{s.desc}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f59e0b', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                        LEARN MORE <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServicesPage;
