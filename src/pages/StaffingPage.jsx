import React from 'react';

const StaffingPage = () => {
    const services = [
        {
            title: "IT & Technology Consulting",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
            desc: "We bring deep expertise in enterprise systems, cloud solutions, cybersecurity, application development, and emerging technologies to solve complex challenges and unlock new opportunities. From strategy formulation to implementation, our consultants work alongside your team to ensure technology becomes a driver of efficiency, competitiveness, and innovation."
        },
        {
            title: "Temporary & Permanent Staffing",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
            desc: "Our recruitment specialists leverage industry expertise, advanced screening processes, and a vast talent network to ensure every candidate is a perfect match for your requirements. From IT specialists to business leaders, we source professionals who bring skills, dedication, and cultural fit to your organization."
        },
        {
            title: "Talent Acquisition & Workforce Management",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
            desc: "At SHNOOR International LLC, we help organizations attract, hire, and retain the best talent while ensuring efficient workforce management to drive business success. Our solutions are tailored to meet the unique needs of each client, from sourcing top-tier candidates to optimizing team performance."
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
                            STAFFING SOLUTIONS
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Connecting Businesses with <span style={{ color: '#f59e0b' }}>Elite</span> IT Talent
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            At SHNOOR International LLC, we deliver end-to-end consulting and staffing services that empower businesses to scale efficiently, innovate faster, and achieve sustainable growth.
                        </p>
                        <button style={{ 
                            backgroundColor: '#f59e0b', 
                            color: '#000', 
                            padding: '15px 35px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '1rem', 
                            fontWeight: 'bold', 
                            cursor: 'pointer' 
                        }}>
                            DISCUSS YOUR REQUIREMENTS
                        </button>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" 
                            alt="Staffing Solutions" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </div>
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

            {/* Section 4: Consulting & Staffing Intro */}
            <div style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Consulting & Staffing</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Expert IT consulting and strategic staffing solutions for business efficiency and growth.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                                alt="Consulting Office" 
                                style={{ width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.15)' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Workforce Management</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Optimizing workforce efficiency to enhance productivity and performance.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Talent Acquisition</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Finding skilled professionals tailored to your business needs.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Project-Based Staffing</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Flexible staffing solutions for your specific project requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Empowering Your Business Success */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center', padding: '100px 0' }} className="container grid-responsive">
                <div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '30px' }}>Empowering Your Business Success</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b' }}>
                        At Shnoor International LLC, we specialize in tailored consulting solutions and expert staffing to foster long-term partnerships that drive client success.
                    </p>
                </div>
                <div>
                    <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                        alt="Success Partnership" 
                        style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                    />
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

export default StaffingPage;
