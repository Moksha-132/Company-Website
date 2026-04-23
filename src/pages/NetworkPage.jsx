import React from 'react';

const NetworkPage = () => {
    const faqs = [
        {
            q: "What is network management?",
            a: "It involves monitoring and maintaining computer networks to ensure smooth operation."
        },
        {
            q: "Why is it important?",
            a: "Effective network management prevents downtime and improves overall business productivity."
        },
        {
            q: "What services do you offer?",
            a: "We provide monitoring, configuration, performance, security, and fault management tailored to your needs."
        },
        {
            q: "Which tools do you use?",
            a: "We use industry-standard tools to ensure reliable and efficient network management."
        },
        {
            q: "Who benefits most?",
            a: "Businesses across industries that rely on stable and secure network infrastructure."
        },
        {
            q: "Why choose your solutions?",
            a: "Our expertise and personalized approach ensure your network runs smoothly and securely."
        }
    ];

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
                            NETWORK MANAGEMENT
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Robust Connectivity for <span style={{ color: '#f59e0b' }}>Global</span> Success
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            Professional network management services to optimize performance, strengthen security, reduce downtime, and ensure a reliable IT infrastructure.
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
                            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop" 
                            alt="Network Infrastructure" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </div>
                </div>

                {/* Section 2: Our Services */}
                <div style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Our Services</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '60px' }}>Comprehensive network management tailored to keep your systems running smoothly.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="grid-responsive">
                        {[
                            { title: 'Security Management', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800', desc: 'Protects your network from threats with proactive measures and rapid response.' },
                            { title: 'Network Monitoring', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', desc: 'Constantly tracks your network health to catch issues before they affect your business.' }
                        ].map((service, i) => (
                            <div key={i} style={{ textAlign: 'left', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <div style={{ padding: '40px', backgroundColor: '#f8fafc' }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>{service.title}</h3>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
                                </div>
                                <img src={service.image} alt={service.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Why Choose Our Network Management */}
                <div style={{ padding: '100px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Why Choose Our Network Management</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Our network management saves time and cuts costs effectively.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000" 
                                alt="Network Control" 
                                style={{ width: '100%', borderRadius: '30px' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Expert Support</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Get help from knowledgeable professionals anytime you need.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Reliable Uptime</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Keep your systems running smoothly without interruptions.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Cost Efficiency</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Reduce expenses with smart network resource management.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: FAQs */}
                <div style={{ padding: '100px 0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Network Management FAQs</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '30px' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>{faq.q}</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
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
            `}</style>
        </div>
    );
};

export default NetworkPage;
