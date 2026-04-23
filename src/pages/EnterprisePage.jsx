import React from 'react';
import { Link } from 'react-router-dom';

const EnterprisePage = () => {
    const services = [
        {
            title: "ERP Implementation & Support",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
            desc: "We specialize in AI-powered business process automation within your ERP to unlock significant cost reductions, accelerate reporting, and improve decision-making with real-time analytics. We manage complex system integrations and migrations, focusing on leading platforms like SAP, Oracle, and Dynamics. Partner with us to achieve greater scalability, operational transparency, and lasting business value for competitive growth."
        },
        {
            title: "SAP Outsourcing",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
            desc: "SHNOOR International offers specialized SAP outsourcing (ABAP, MM, etc.). Certified SAP experts handle full lifecycle support: development, customization, and maintenance. We optimize your systems for peak performance, cost-efficiency, and scalability. Our global delivery model delivers reliable, 24/7 support for seamless operational excellence."
        },
        {
            title: "Business Process Automation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
            desc: "Our Business Process Automation (BPA) solutions utilize AI, RPA, and cloud tools to maximize accuracy, reduce costs, and focus your team on strategic growth. We tailor automation for data entry reporting, approvals, and system integrations. Our expertise ensures faster, seamless processes, and improved, data-driven decision-making."
        },
        {
            title: "IT Infrastructure & Management",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
            desc: "At SHNOOR International LLC, we design, implement, and manage robust IT infrastructures that keep your business running smoothly and securely. Covering everything from on-premises systems to advanced cloud-based environments, we ensure your IT backbone is reliable, highly scalable, and perpetually optimized for peak performance and robust security against emerging threats."
        },
        {
            title: "Performance Monitoring & Optimisation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
            desc: "we ensure your IT systems and business processes run at their absolute best. Our Performance Monitoring & Optimization services track, analyze, and fine-tune every aspect of your operations—from infrastructure and applications to databases and workflows. We use advanced monitoring tools, real-time analytics, and proactive optimization strategies to identify bottlenecks before they impact performance."
        },
        {
            title: "Data Management & Analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
            desc: "we help businesses unlock the true value of their data. Our Data Management & Analytics services ensure your data is clean, secure, and well-organized—while delivering actionable insights that drive smarter decisions. From data collection and integration to advanced analytics and visualization, we provide end-to-end solutions that transform raw information into meaningful business intelligence."
        }
    ];

    return (
        <div style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}>
            <div className="container">
                {/* Section 1: Hero-style Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center', padding: '60px 0' }} className="grid-responsive">
                    <div>
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
                            ENTERPRISE MANAGEMENT
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Operate <span style={{ color: '#f59e0b' }}>Smarter</span> with Modern ERP
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            We help businesses operate smarter, faster, and more efficiently with comprehensive Enterprise Management solutions and strategic consulting.
                        </p>
                        <Link to="/contact" style={{ 
                            backgroundColor: '#f59e0b', 
                            color: '#000', 
                            padding: '15px 35px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '1rem', 
                            fontWeight: 'bold', 
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            DISCUSS YOUR REQUIREMENTS
                        </Link>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                            alt="Enterprise Solutions" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </div>
                </div>


            {/* Section 3: What We Do (Corporate Navy Background) */}
            <div style={{ 
                background: '#0f172a', 
                padding: '100px 0',
                marginTop: '60px'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', marginBottom: '60px', textAlign: 'center' }}>What We Do</h2>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: '30px'
                    }} className="grid-responsive-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{ 
                                    background: 'rgba(255, 255, 255, 0.03)', 
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '20px', 
                                    overflow: 'hidden', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff'
                                }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '30px', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px', color: '#f59e0b' }}>{service.title}</h3>
                                    <p style={{ lineHeight: '1.7', margin: 0, fontSize: '0.95rem', opacity: 0.9 }}>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
     {/* Detailed Enterprise Management Content */}
                <div style={{ padding: '80px 0', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Enterprise Management Solutions</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569', marginBottom: '30px' }}>
                            <strong>Streamline your entire business</strong> with unified management systems. We integrate your core functions (ERP, CRM) to give you a <strong>single source of truth</strong>, driving process efficiency and reducing operational costs.
                        </p>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>Key Benefits</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#475569', fontSize: '1.1rem', lineHeight: '2' }}>
                            <li style={{ display: 'flex', gap: '10px' }}>
                                <span style={{ color: '#f59e0b' }}>•</span>
                                <span><strong>Total Control:</strong> Centralized data for real-time, confident decision-making.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px' }}>
                                <span style={{ color: '#f59e0b' }}>•</span>
                                <span><strong>Boosted Efficiency:</strong> Automation of complex, cross-departmental processes.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px' }}>
                                <span style={{ color: '#f59e0b' }}>•</span>
                                <span><strong>Scalable Platform:</strong> A robust foundation ready for your company's future growth.</span>
                            </li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Enterprise Management: Eliminating Complexity</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
                            <strong>Tired of disjointed software and silos?</strong> We provide the unified backbone your organization needs. Our solutions are designed to end data chaos, automate time-consuming processes, and deliver a <strong>single, clear view</strong> of your business health. Partner with us for smooth implementation and systems built to support your team, not complicate their work.
                        </p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Unify Your Enterprise Stack</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
                            We deliver <strong>high-speed, modular solutions</strong> designed to eliminate technical debt and integrate disparate legacy systems. Our focus is on creating a <strong>single, secure operational environment</strong> that guarantees minimal latency and total data integrity across all crucial business functions.
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
                .grid-responsive-3 {
                    @media (max-width: 1200px) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default EnterprisePage;
