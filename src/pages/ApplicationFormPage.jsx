import React from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, ChevronLeft, Briefcase, User, Mail, Phone, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationFormPage = () => {
    const positions = [
        "Software Engineer Trainee - Gen AI",
        "Software Engineer Trainee - SAP",
        "Software Engineer Trainee - App Dev",
        "Software Engineer Trainee - Salesforce",
        "Internship",
        "Other"
    ];

    return (
        <div style={{ 
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
            minHeight: '100vh', 
            paddingTop: '120px', 
            paddingBottom: '100px',
            color: '#fff'
        }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ marginBottom: '40px' }}
                >
                    <Link to="/latest-openings" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        color: '#f59e0b', 
                        textDecoration: 'none', 
                        fontWeight: '700',
                        fontSize: '1rem',
                        transition: '0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '15px'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '10px'}
                    >
                        <ChevronLeft size={20} /> BACK TO OPPORTUNITIES
                    </Link>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }} className="form-grid-responsive">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px', lineHeight: 1.1 }}>
                            Begin Your <span style={{ color: '#f59e0b' }}>Journey</span> With Us
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.8', marginBottom: '40px' }}>
                            We're looking for passionate individuals who want to redefine the future of technology and trade. Fill out the application and let's build something extraordinary together.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '15px', borderRadius: '12px', color: '#f59e0b' }}>
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Global Exposure</h4>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Work on international projects</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '15px', borderRadius: '12px', color: '#f59e0b' }}>
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Expert Mentorship</h4>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Learn from industry veterans</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ 
                            background: 'rgba(255, 255, 255, 0.03)', 
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '30px',
                            padding: '50px'
                        }}
                    >
                        <form action="https://formsubmit.co/lmoksha.132@gmail.com" method="POST" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Job Application - Shnoor International" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div className="input-group">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                    <User size={18} /> FULL NAME
                                </label>
                                <input type="text" name="name" required placeholder="John Doe" style={inputStyle} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid-responsive">
                                <div className="input-group">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                        <Mail size={18} /> EMAIL
                                    </label>
                                    <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                        <Phone size={18} /> MOBILE
                                    </label>
                                    <input type="tel" name="phone" required placeholder="+91 12345 67890" style={inputStyle} />
                                </div>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                    <Briefcase size={18} /> POSITION
                                </label>
                                <select name="position" required style={selectStyle}>
                                    <option value="" disabled selected>Select a position</option>
                                    {positions.map(pos => <option key={pos} value={pos} style={{ color: '#000' }}>{pos}</option>)}
                                </select>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                    <GraduationCap size={18} /> HIGHEST QUALIFICATION
                                </label>
                                <input type="text" name="qualification" required placeholder="B.Tech / MCA / MBA" style={inputStyle} />
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                    <Award size={18} /> KEY SKILLS
                                </label>
                                <textarea name="skills" required placeholder="E.g. Python, React, SAP, Salesforce..." rows={3} style={textareaStyle}></textarea>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontWeight: '600', color: '#f59e0b' }}>
                                    <Upload size={18} /> UPLOAD RESUME (PDF)
                                </label>
                                <div style={{ 
                                    border: '2px dashed rgba(245, 158, 11, 0.3)', 
                                    borderRadius: '15px', 
                                    padding: '20px', 
                                    textAlign: 'center',
                                    transition: '0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#f59e0b'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)'}
                                >
                                    <input type="file" name="resume" accept=".pdf" required style={{ opacity: 1, cursor: 'pointer' }} />
                                </div>
                            </div>

                            <button type="submit" style={{ 
                                background: '#f59e0b', 
                                color: '#0f172a', 
                                padding: '18px', 
                                borderRadius: '15px', 
                                fontWeight: '800', 
                                border: 'none', 
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                transition: '0.3s'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(245, 158, 11, 0.3)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                SUBMIT APPLICATION <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .form-grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: '0.3s'
};

const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
};

const textareaStyle = {
    ...inputStyle,
    resize: 'none'
};

export default ApplicationFormPage;
