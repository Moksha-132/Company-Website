import React from 'react';
import { Link } from 'react-router-dom';

const CloudPage = () => {
    const cloudServices = [
        {
            title: "AWS Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            description: "At SHNOOR International LLC, we help businesses unlock the full potential of Amazon Web Services (AWS)—the world's most comprehensive and widely adopted cloud platform. Whether you're migrating to the cloud, optimizing existing workloads, or building next-gen applications, our AWS-certified experts deliver secure, scalable, and cost-effective solutions tailored to your business needs."
        },
        {
            title: "Google Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
            description: "At SHNOOR International LLC, we help businesses leverage the capabilities of Google Cloud Platform (GCP) to achieve agility, scalability, and innovation. Whether you're migrating workloads, building intelligent applications, or optimizing your infrastructure, our Google Cloud experts deliver solutions that are secure, cost-effective, and performance-driven."
        },
        {
            title: "Microsoft Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            description: "At SHNOOR International LLC, we help organizations harness the full potential of Microsoft Azure—one of the world's leading cloud platforms. From infrastructure modernization to advanced analytics and AI integration, we design and implement Azure solutions that align with your business goals, ensuring security, efficiency, and growth."
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
                            CLOUD SOLUTIONS
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Scale Smarter with <span style={{ color: '#f59e0b' }}>Next-Gen</span> Cloud
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            We help businesses harness the full potential of cloud technology to optimize operations, improve collaboration, and reduce infrastructure costs.
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
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                            alt="Cloud Computing" 
                            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                        />
                    </div>
                </div>

                {/* Section 2: What We Do */}
                <div style={{ padding: '80px 0', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px', color: '#0f172a' }}>What We Do</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', marginBottom: '30px' }}>
                        In today's digital era, the cloud is no longer an option—it's a necessity. Our cloud experts design, deploy, and manage solutions tailored to your business needs, ensuring you get the perfect balance of performance, security, and scalability.
                    </p>
                </div>

                {/* Section 3: Cloud Platforms */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                    gap: '40px',
                    paddingBottom: '80px'
                }}>
                    {cloudServices.map((service, index) => (
                        <div
                            key={index}
                            style={{ 
                                background: '#f8fafc', 
                                borderRadius: '20px', 
                                overflow: 'hidden', 
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #e2e8f0'
                            }}
                        >
                            <div style={{ 
                                height: '200px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                padding: '40px'
                            }}>
                                <img src={service.image} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ padding: '30px', textAlign: 'center', flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#0f172a', fontWeight: 'bold' }}>{service.title}</h3>
                                <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners Section */}
                <div style={{ padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Partners</h2>
                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#64748b' }}>"Stronger together – building success through collaboration."</p>
                    </div>

                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '60px', 
                        marginBottom: '80px' 
                    }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" style={{ height: '50px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{ height: '40px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" style={{ height: '40px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" style={{ height: '50px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" style={{ height: '30px' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP" style={{ height: '50px' }} />
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', color: '#475569', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        <p style={{ marginBottom: '30px' }}>
                            At SHNOOR International LLC, we believe that great partnerships drive great achievements. We collaborate with industry-leading technology providers, trade networks, and business associates to deliver solutions that combine innovation, expertise, and global reach.
                        </p>
                        <p style={{ marginBottom: '40px' }}>
                            Our partners play a vital role in helping us provide world-class IT services, SAP outsourcing, and international trade solutions. Together, we create value that empowers businesses to grow, adapt, and thrive in competitive markets.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Why Our Partnerships Matter</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="grid-responsive">
                            <div>
                                <p><strong>Innovation</strong> – Access to the latest tools, platforms, and technologies.</p>
                                <p><strong>Expertise</strong> – Combining our knowledge with the specialized skills of our partners.</p>
                            </div>
                            <div>
                                <p><strong>Global Reach</strong> – Extending services and products across multiple countries and industries.</p>
                                <p><strong>Mutual Growth</strong> – Building relationships that create long-term value for all stakeholders.</p>
                            </div>
                        </div>

                        <p style={{ marginTop: '40px' }}>
                            From cloud service providers to global logistics networks, our partners help us deliver end-to-end solutions that make a difference. At SHNOOR International, partnerships aren't just about contracts—they're about shared goals, trust, and results.
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
        </div>
    );
};

export default CloudPage;
