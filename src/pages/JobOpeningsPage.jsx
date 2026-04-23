import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Code, Database, Cloud, Zap, CheckCircle, Target, ListChecks } from 'lucide-react';

const JobOpeningsPage = () => {
    const jobs = [
        {
            role: "Software Engineer Trainee - Gen AI",
            lookingFor: "Final-year students or recent graduates (B.E/B.Tech – CS, IT, AI, DS) with a passion for cutting-edge AI technologies and a strong desire to develop real-world applications using Generative AI and Agentic systems.",
            responsibilities: [
                "Design and develop applications using Generative AI models (OpenAI, Claude, Gemini, etc.)",
                "Work on Agentic AI systems that can reason, plan, and act autonomously in enterprise workflows",
                "Build prototypes and proof-of-concepts using LLM APIs, prompt engineering, vector databases, and embeddings",
                "Collaborate with solution teams to create smart assistants, copilots, and automation agents for internal and client use",
                "Stay updated with the latest in Gen AI, LLM fine-tuning, and RAG"
            ]
        },
        {
            role: "Software Engineer Trainee - SAP",
            lookingFor: "Engineering graduates (B.E/B.Tech – CS, IT, AI, DS, or equivalent) with a strong foundation in programming and a keen interest in building enterprise-level applications on the SAP platform.",
            responsibilities: [
                "Collaborate with functional consultants to understand business requirements and deliver effective technical solutions.",
                "Participate in code reviews, debugging, and performance optimization activities.",
                "Ensure high-quality deliverables and adherence to SAP development standards.",
                "Design, develop, and maintain applications using SAP ABAP.",
                "Good to Have: Exposure to SAP Business Technology Platform (SAP BTP) and knowledge of CDS Views."
            ]
        },
        {
            role: "Software Engineer Trainee - Application development",
            lookingFor: "Fresh graduates (B.E/B.Tech – CS/IT) with a solid foundation in web technologies and hands-on project experience in both front-end and back-end development.",
            responsibilities: [
                "Design and develop dynamic web applications using front-end (React/Angular) and back-end (.NET/Node.js) technologies.",
                "Contribute to API design, UI/UX discussions, and deployment processes.",
                "Collaborate with cross-functional teams in agile sprints to deliver high-quality software solutions.",
                "Preferred Skills: Proficiency in HTML, CSS, JavaScript, and React or Angular frameworks. Working knowledge of Node.js or .NET Core."
            ]
        },
        {
            role: "Software Engineer Trainee - Salesforce Developer",
            lookingFor: "Fresh graduates (B.E/B.Tech) with a strong passion for cloud platforms and a desire to build expertise in cloud technologies.",
            responsibilities: [
                "Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components.",
                "Configure and automate business processes through Flows, Process Builder, Validation Rules, and Approval Processes.",
                "Develop and maintain REST/SOAP-based integrations with external systems.",
                "Participate in the complete software development lifecycle—from design and development to testing and deployment.",
                "Collaborate with functional teams to translate business requirements into efficient, scalable Salesforce solutions."
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            <div className="container">
                {/* Hero */}
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ 
                            display: 'inline-block', 
                            padding: '5px 15px', 
                            border: '1px solid #f59e0b', 
                            color: '#f59e0b', 
                            fontSize: '0.8rem', 
                            fontWeight: 'bold', 
                            marginBottom: '20px',
                            letterSpacing: '1px'
                        }}
                    >
                        STUDENT OPPORTUNITIES
                    </motion.span>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', color: '#0f172a', marginBottom: '25px' }}>
                        JOB <span style={{ color: '#f59e0b' }}>DESCRIPTIONS</span>
                    </h1>
                </div>

                {/* Detailed Job Sections */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', paddingBottom: '80px' }} className="grid-responsive">
                    {jobs.map((job, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ 
                                padding: '50px', 
                                border: '1px solid #f1f5f9', 
                                borderRadius: '25px', 
                                background: '#fff',
                                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
                            }}
                        >
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '25px' }}>
                                Role: {job.role}
                            </h3>
                            
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Target size={18} /> Who We're Looking For:
                                </h4>
                                <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1.05rem' }}>
                                    {job.lookingFor}
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <ListChecks size={18} /> Key Responsibilities:
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {job.responsibilities.map((res, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: '#64748b', lineHeight: '1.6' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0f172a', marginTop: '8px', flexShrink: 0 }}></div>
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link 
                                to="/apply"
                                style={{ 
                                    display: 'inline-block',
                                    marginTop: '30px',
                                    background: '#0f172a', 
                                    color: '#fff', 
                                    padding: '12px 30px', 
                                    border: 'none', 
                                    borderRadius: '30px', 
                                    fontWeight: 'bold', 
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    transition: '0.3s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; e.currentTarget.style.backgroundColor = '#f59e0b'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.backgroundColor = '#0f172a'; }}
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Internship & Skills Summary (Brief) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', marginBottom: '100px' }} className="grid-responsive">
                    <div style={{ background: '#0f172a', padding: '60px', borderRadius: '30px', color: '#fff' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>Internship Highlights</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>Duration</p>
                                <p>3 Months (Remote)</p>
                            </div>
                            <div>
                                <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>Stipend</p>
                                <p>10K - 12K / Month</p>
                            </div>
                            <div>
                                <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>PPO Offer</p>
                                <p>6 LPA (Based on performance)</p>
                            </div>
                            <div>
                                <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>Schedule</p>
                                <p>5 Days / Week</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '60px', borderRadius: '30px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '30px' }}>Must-Have Basics</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {["OOP Fundamentals", "Java / Python / C++", "HTML, CSS & JavaScript", "RDBMS & SQL Concepts", "Cloud & CRM Basics"].map((skill, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontWeight: '600', color: '#64748b' }}>
                                    <CheckCircle size={20} color="#f59e0b" /> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Global Apply Button at Bottom */}
                <div style={{ textAlign: 'center', marginTop: '80px', paddingBottom: '100px' }}>
                    <Link 
                        to="/apply"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#f59e0b',
                            color: '#0f172a',
                            padding: '20px 60px',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            fontWeight: '900',
                            textDecoration: 'none',
                            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        APPLY HERE
                    </Link>
                </div>
            </div>

            <style>{`
                .grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default JobOpeningsPage;
