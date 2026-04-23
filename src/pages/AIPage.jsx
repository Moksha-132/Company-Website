import React from 'react';

const AIPage = () => {
    const services = [
        {
            title: "Intelligent Automation With AI & RPA",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
            desc: "Our intelligent automation solutions go beyond basic task automation—by integrating AI, we enable your systems to learn, adapt, and make smart decisions. From document processing and data entry to complex decision-making and predictive analysis, our AI-powered bots work around the clock to ensure speed, accuracy, and efficiency."
        },
        {
            title: "Machine Learning Model Development",
            image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800",
            desc: "From concept to deployment, we handle every stage of the ML model lifecycle—including data preparation, feature engineering, model training, testing, and optimization. Whether you need a recommendation engine, fraud detection system, demand forecasting model, or intelligent automation, our experts deliver tailored solutions that meet your specific needs."
        },
        {
            title: "AI Driven Predictive Analysis",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
            desc: "SHNOOR International LLC utilizes AI and advanced machine learning for predictive analysis. We help businesses stay ahead by forecasting trends, identifying risks, and uncovering new opportunities. Our solutions analyze historical data and patterns to generate highly accurate, actionable forecasts that drive improved decision-making."
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
                            DATA & AI
                        </span>
                        <h1 style={{ 
                            fontSize: '4.5rem', 
                            fontWeight: '800', 
                            lineHeight: '1.1', 
                            marginBottom: '30px', 
                            color: '#0f172a' 
                        }}>
                            Transforming Data into <span style={{ color: '#f59e0b' }}>Actionable</span> AI
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
                            We help organizations harness the potential of AI-powered automation, advanced analytics, and cognitive technologies to drive growth.
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
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
                            alt="AI Technology" 
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

            {/* Section 4: Data & AI Services Intro */}
            <div style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Data & AI Services</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Transform your business with innovative data strategies and AI solutions.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                                alt="AI Concept" 
                                style={{ width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.15)' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Automation Solutions</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Implement automation to streamline processes and enhance operational performance.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Data Strategy</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Craft tailored data strategies that drive business growth and efficiency.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>Predictive Modeling</h3>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>Leverage predictive analytics to anticipate market trends and customer needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Strategic AI Leadership */}
            <div style={{ padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Data & Artificial Intelligence: Drive Innovation</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
                            <strong>Unlock the power of your data</strong> with our specialized AI services. We transform raw information into <strong>predictive models and intelligent automation</strong> that directly boost your business efficiency and growth. Our structured approach ensures a seamless, <strong>ethical AI transformation</strong>—from initial strategy to successful enterprise-wide deployment. <strong>Partner with us to future-proof your business.</strong>
                        </p>
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Data & AI: Intelligent Transformation</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
                            Stop relying on guesswork. We empower your business with <strong>AI-driven intelligence</strong> to make faster, smarter decisions and gain a competitive edge. Our expert team ensures your data foundation is robust, secure, and ready to deploy high-impact <strong>predictive and generative AI</strong> solutions. It's time to turn potential into performance.
                        </p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>AI: Your Competitive Edge</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
                            The future is intelligent. We provide the <strong>data architecture and AI expertise</strong> required to keep your business ahead of the curve. From <strong>custom machine learning models</strong> to ensuring your systems are ready for the next wave of innovation, we deliver solutions that are secure, scalable, and built for lasting impact. <strong>Don't just adapt—lead your industry with strategic AI.</strong>
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

export default AIPage;
