import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Settings, BarChart3, Zap, ShieldCheck, Database, LayoutGrid } from 'lucide-react';

const EnterprisePage = () => {
    const services = [
        {
            title: "ERP Implementation & Support",
            desc: "We specialize in AI-powered business process automation within your ERP to unlock significant cost reductions, accelerate operations, and ensure long-term scalability.",
            icon: <Settings size={40} />
        },
        {
            title: "SAP Outsourcing",
            desc: "SHNOOR International offers specialized SAP outsourcing (ABAP, MM, etc.). Certified SAP experts handle full lifecycle support: development, migration, and maintenance.",
            icon: <Zap size={40} />
        },
        {
            title: "Business Process Automation",
            desc: "Our Business Process Automation (BPA) solutions utilize AI, RPA, and cloud tools to maximize accuracy, reduce costs, and focus your team on high-value tasks.",
            icon: <Zap size={40} />
        },
        {
            title: "IT Infrastructure & Management",
            desc: "We design, implement, and manage robust IT infrastructures. From on-premises systems to advanced cloud-based environments, we ensure your IT backbone is reliable and highly scalable.",
            icon: <LayoutGrid size={40} />
        },
        {
            title: "Performance Monitoring & Optimization",
            desc: "Our services track, analyze, and fine-tune every aspect of your operations—from infrastructure and applications to databases and workflows, identifying bottlenecks before they impact performance.",
            icon: <BarChart3 size={40} />
        },
        {
            title: "Data Management & Analytics",
            desc: "Unlock the true value of your data. We provide end-to-end solutions that transform raw information into meaningful business intelligence and actionable insights.",
            icon: <Database size={40} />
        }
    ];

    return (
        <div className="enterprise-page">
            <PageHero 
                title="Enterprise" 
                highlight="Management" 
                description="At SHNOOR International LLC, our Enterprise Management solutions help businesses operate smarter, faster, and more efficiently with strategies and tools that unify your organization." 
            />

            {/* Service Grid */}
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
                                style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px' }}
                            >
                                <div style={{ color: 'var(--primary)' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.6rem', color: 'var(--navy)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits & Unification */}
            <section className="section-padding" style={{ background: 'var(--purple-dark)', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '30px', fontWeight: '800' }}>Enterprise Management Solutions</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '40px', fontSize: '1.15rem', lineHeight: 1.8 }}>
                                Streamline your entire business with unified management systems. We integrate your core functions (ERP, CRM) to give you a single source of truth, driving process efficiency and reducing operational costs.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '25px', padding: 0 }}>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <ShieldCheck color="var(--primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>Total Control:</strong> Centralized data for real-time, confident decision-making.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <Zap color="var(--primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>Boosted Efficiency:</strong> Automation of complex, cross-departmental processes.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <LayoutGrid color="var(--primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>Scalable Platform:</strong> A robust foundation ready for your company's future growth.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ background: '#fff', color: 'var(--purple-dark)', padding: '50px', borderRadius: '30px' }}>
                            <h3 style={{ marginBottom: '20px' }}>Eliminating Complexity</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                                Tired of disjointed software and silos? We provide the unified backbone your organization needs. Our solutions are designed to end data chaos, automate time-consuming processes, and deliver a single, clear view of your business health.
                            </p>
                            <h3 style={{ marginBottom: '20px' }}>Unify Your Enterprise Stack</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                We deliver high-speed, modular solutions designed to eliminate technical debt and integrate disparate legacy systems. Our focus is on creating a single, secure operational environment that guarantees minimal latency and total data integrity.
                            </p>
                        </div>
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

export default EnterprisePage;
