import React from 'react';

const HealthcarePage = () => {
    return (
        <div style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}>
            <div className="container">
                {/* Section 1: Hero */}
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
                            HEALTHCARE SOLUTIONS
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Innovating <span style={{ color: '#f59e0b' }}>Patient</span> Care with AI
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            Transform healthcare delivery with intelligent data platforms and AI-driven software solutions designed for the future of medicine.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            style={{ 
                                backgroundColor: '#f59e0b', 
                                color: '#000', 
                                padding: '15px 35px', 
                                border: 'none', 
                                borderRadius: '5px', 
                                fontSize: '1rem', 
                                fontWeight: 'bold', 
                                cursor: 'pointer' 
                            }}
                        >
                            DISCUSS YOUR REQUIREMENTS
                        </button>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                            alt="Healthcare IT" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </div>
                </div>

                {/* Section 2: What we do */}
                <div style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '30px' }}>What we do</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '1000px', margin: '0 auto 60px', lineHeight: '1.8' }}>
                        At SHNOOR International LLC, we leverage advanced healthcare software solutions combined with data intelligence and AI to help healthcare providers streamline operations, enhance patient care, and improve clinical outcomes. Our systems utilize secure data management, predictive analytics, and intelligent automation to transform complex healthcare data into actionable insights and smarter decision-making.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-responsive-3">
                        {[
                            { 
                                title: 'Healthcare Management Systems', 
                                image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800',
                                desc: 'Our healthcare management systems go beyond basic digital tools by streamlining clinical and administrative workflows. From patient records and scheduling to billing and care coordination, our solutions improve efficiency, accuracy, and collaboration. We help healthcare organizations deliver organized, patient-focused services through intelligent and reliable software platforms.'
                            },
                            { 
                                title: 'Secure Data & Compliance Solutions', 
                                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
                                desc: 'Our secure data and compliance solutions go beyond standard protection by ensuring privacy, integrity, and regulatory compliance. From encrypted data storage to controlled access and audit tracking, our software safeguards sensitive healthcare information. We enable organizations to maintain trust and meet compliance requirements with confidence.'
                            },
                            { 
                                title: 'Analytics & Decision Support Tools', 
                                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
                                desc: 'Our analytics and decision support tools exceed conventional reporting by converting healthcare data into actionable insights. Ranging from performance dashboards to predictive analyses, our solutions facilitate well-informed clinical and operational decisions. We assist healthcare providers in optimizing outcomes and enhancing efficiency through data-driven intelligence.'
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'left' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '25px', height: '250px', objectFit: 'cover' }} />
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.2' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 3: Healthcare Data & AI Solutions */}
            <div style={{ backgroundColor: '#f8fafc', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Healthcare Data & AI Solutions</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Transform healthcare delivery with intelligent data platforms and AI-driven software solutions.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000" 
                                alt="Medical Data Analytics" 
                                style={{ width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.1)' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Clinical Intelligence & Insights</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Transforming healthcare data into actionable insights to support informed clinical and operational decisions.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Intelligent Care Operations</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Streamlining clinical and administrative workflows through intelligent, integrated healthcare software platforms.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Healthcare Data Security & Governance</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Protecting sensitive healthcare information with secure, compliant, and reliable data management systems.</p>
                            </div>
                        </div>
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

export default HealthcarePage;
