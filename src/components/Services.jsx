import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe, Database, Users, ShieldCheck, Network, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceList = [
    {
        title: "Cloud Management",
        desc: "We optimize existing workloads or building next-gen applications with secure, scalable solutions.",
        icon: <Cloud size={40} />,
        href: "/services/cloud"
    },
    {
        title: "Enterprise Management",
        desc: "Strategies, tools, and technologies needed to manage resources and processes efficiently.",
        icon: <Globe size={40} />,
        href: "/services/enterprise"
    },
    {
        title: "Data & AI",
        desc: "Leveraging machine learning and analytics to transform raw data into actionable insights.",
        icon: <Database size={40} />,
        href: "/services/ai"
    },
    {
        title: "Consulting & Staffing",
        desc: "Connecting businesses with specialized IT talent and expert product development.",
        icon: <Users size={40} />,
        href: "/services/staffing"
    },
    {
        title: "Background Verification",
        desc: "Ensuring trust and security through reliable and professional screening solutions.",
        icon: <ShieldCheck size={40} />,
        href: "/services/verification"
    },
    {
        title: "Network Management",
        desc: "Robust and secure network infrastructure solutions to support global trade operations.",
        icon: <Network size={40} />,
        href: "/services/network"
    }
];

const Services = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--background)' }} id="services">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Our Expertise</h4>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--purple-dark)', marginBottom: '25px' }}>
                            Unique <span style={{ color: 'var(--primary)' }}>Solutions</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                            Providing a single partner for growth through integrated technology and global trade expertise.
                        </p>
                    </motion.div>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
                    gap: '30px' 
                }}>
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '25px', 
                                padding: '50px',
                                border: '1px solid var(--border)',
                                background: '#fff'
                            }}
                        >
                            <div style={{ 
                                color: 'var(--primary)', 
                                background: '#f5f3ff', 
                                width: '85px', 
                                height: '85px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                borderRadius: '24px',
                                boxShadow: '0 10px 20px rgba(139, 92, 246, 0.1)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--purple-dark)', fontWeight: '800' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>{service.desc}</p>
                            <Link to={service.href} style={{ 
                                marginTop: 'auto', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '8px', 
                                color: 'var(--primary)', 
                                fontWeight: '700',
                                fontSize: '1.1rem'
                            }}>
                                View Details <ChevronRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
