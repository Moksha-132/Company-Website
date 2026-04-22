import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Brain, Cpu, LineChart, Zap, Search, Database } from 'lucide-react';

const AIPage = () => {
    const services = [
        {
            title: "Intelligent Automation With AI & RPA",
            desc: "Our intelligent automation solutions go beyond simple task repetition. We integrate AI with Robotic Process Automation to create systems that learn, adapt, and optimize business workflows.",
            icon: <Zap size={40} />
        },
        {
            title: "Machine Learning Model Development",
            desc: "From concept to deployment, we handle the full lifecycle of ML development. We build custom models for computer vision, NLP, and recommendation engines tailored to your unique data landscape.",
            icon: <Brain size={40} />
        },
        {
            title: "AI Driven Predictive Analysis",
            desc: "SHNOOR International LLC utilizes AI to identify patterns and forecast future trends. Our predictive models help you stay ahead of the competition by making data-backed strategic decisions.",
            icon: <LineChart size={40} />
        }
    ];

    return (
        <div className="ai-page">
            <PageHero 
                title="Data & Artificial" 
                highlight="Intelligence" 
                description="At SHNOOR International LLC, we combine the power of data with the intelligence of AI to help businesses innovate, automate, and grow." 
            />

            {/* Detailed Cards */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '30px' 
                    }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', border: '1px solid var(--border)' }}
                            >
                                <div style={{ color: 'var(--primary)' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--purple-dark)', fontWeight: '800' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text)', lineHeight: 1.8 }}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--purple-dark)', marginBottom: '20px', fontWeight: '900' }}>Data & AI Services</h2>
                            <p style={{ color: 'var(--text)', fontSize: '1.25rem', marginBottom: '40px' }}>
                                Transform your business with innovative data strategies and AI solutions.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '15px' }}>
                                        <Cpu color="var(--primary)" size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--purple-dark)', marginBottom: '8px', fontSize: '1.3rem', fontWeight: '800' }}>Automation Solutions</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text)' }}>Implement automation to streamline processes and enhance operational performance.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '15px' }}>
                                        <Database color="var(--primary)" size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--purple-dark)', marginBottom: '8px', fontSize: '1.3rem', fontWeight: '800' }}>Data Strategy</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text)' }}>Craft tailored data strategies that drive business growth and efficiency.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '15px' }}>
                                        <Search color="var(--primary)" size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--purple-dark)', marginBottom: '8px', fontSize: '1.3rem', fontWeight: '800' }}>Predictive Modeling</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text)' }}>Leverage predictive analytics to anticipate market trends and customer needs.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Technology" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(139, 92, 246, 0.2)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default AIPage;
