import React from 'react';
import { Link } from 'react-router-dom';

const VerificationPage = () => {
    const faqs = [
        {
            q: "What is background verification?",
            a: "Background verification is the process of checking a candidate's history for employment, education, and criminal records."
        },
        {
            q: "Why is it important?",
            a: "It helps prevent bad hires, ensuring you select trustworthy candidates who fit your company culture and values."
        },
        {
            q: "How does your service work?",
            a: "Our service involves a simple three-step process: submit a request, we conduct checks, and receive a detailed report quickly and efficiently."
        },
        {
            q: "What checks do you offer?",
            a: "We offer checks on criminal records, education verification, and employment history."
        },
        {
            q: "How fast is the process?",
            a: "Our background checks are completed quickly, often within 24 to 48 hours."
        },
        {
            q: "Is your service compliant with regulations?",
            a: "Yes, we ensure all background checks comply with local and federal regulations, maintaining the highest standards of privacy and security."
        }
    ];

    return (
        <div style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}>
            <div className="container">
                {/* Section 1: Hero */}
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Background Verification</h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '0 auto 60px' }}>
                        Ensure safe hiring with our comprehensive background verification services tailored for HR professionals.
                    </p>
                    <Link 
                        to="/contact"
                        style={{ 
                            backgroundColor: '#f59e0b', 
                            color: '#000', 
                            padding: '15px 35px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '1rem', 
                            fontWeight: 'bold', 
                            cursor: 'pointer',
                            marginBottom: '60px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        DISCUSS YOUR REQUIREMENTS
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-responsive-3">
                        {[
                            { title: 'Risk Mitigation', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800', desc: 'Avoid costly hiring mistakes by verifying candidate backgrounds thoroughly and efficiently.' },
                            { title: 'Fast Solutions', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800', desc: 'Experience quick turnaround times with our advanced AI-driven background check technology.' },
                            { title: 'Key Features', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800', desc: 'Stay compliant with industry regulations while ensuring a smooth hiring process.' }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'left' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '25px', height: '220px', objectFit: 'cover' }} />
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 2: 3-Step Process */}
            <div style={{ backgroundColor: '#f8fafc', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>3-Step Verification Process</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Knowledge in three simple steps, not weeks.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000" 
                                alt="Verification Process" 
                                style={{ width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.1)' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Actionable Reporting</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Receive a clear, compliant report in your dashboard.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Secure Submission</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Initiate checks via our encrypted portal for safety.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>AI-Powered Verification</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Our system cross-references global data for accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Compliance-First */}
            <div style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '30px', lineHeight: '1.1' }}>Compliance-First, Future-Ready Solutions</h2>
                            <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px' }}>
                                Protect your reputation and stay ahead of regulatory requirements with our expert team and advanced AI technology, ensuring full legal compliance and data privacy.
                            </p>
                            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                                <a 
                                    href="/shnoor-verification.pdf" 
                                    download 
                                    style={{ 
                                        backgroundColor: '#fff', 
                                        border: '1px solid #0f172a', 
                                        color: '#0f172a', 
                                        padding: '15px 35px', 
                                        borderRadius: '30px', 
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}
                                >
                                    LEARN MORE
                                </a>
                                <button 
                                    onClick={() => window.location.href = '/contact'}
                                    style={{ 
                                        backgroundColor: '#fff', 
                                        border: '1px solid #0f172a', 
                                        color: '#0f172a', 
                                        padding: '15px 35px', 
                                        borderRadius: '30px', 
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                >
                                    CONTACT US
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '60px', backgroundColor: '#3b82f6', padding: '40px', borderRadius: '5px', color: '#fff' }}>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>150+</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Proven Results</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>15</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Trusted by Experts</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000" 
                                alt="Security" 
                                style={{ width: '100%', borderRadius: '30px' }} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: Trusted Insights */}
            <div style={{ backgroundColor: '#f8fafc', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Trusted Insights</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Ensure safe hiring with our background checks.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="grid-responsive">
                        {[
                            { name: 'Recruitment Lead', location: 'San Francisco', text: "The speed and accuracy of Shnoor's checks are unmatched, making our hiring process seamless and reliable." },
                            { name: 'HR Manager', location: 'New York', text: "Shnoor's background checks saved us from a costly hire." }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ color: '#000', fontSize: '1.5rem', marginBottom: '20px' }}>★★★★★</div>
                                <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '30px', lineHeight: '1.6' }}>{item.text}</p>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#0f172a' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 5: FAQs */}
            <div style={{ padding: '100px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '60px', textAlign: 'center' }}>Background Verification FAQs</h2>
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

export default VerificationPage;
