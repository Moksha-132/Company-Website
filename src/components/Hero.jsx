import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Top Bridging Banner - Unique Royal Purple Theme */}
            <div style={{ 
                height: '650px', 
                background: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop") center/cover no-repeat',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                paddingTop: '80px'
            }}>
                {/* Purple Gradient Overlay */}
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to bottom, rgba(76, 29, 149, 0.9), rgba(76, 29, 149, 0.6))' 
                }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 style={{ 
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                            fontWeight: '800', 
                            lineHeight: 1.1, 
                            maxWidth: '1200px', 
                            margin: '0 auto',
                            textShadow: '0 10px 40px rgba(0,0,0,0.4)'
                        }}>
                            Bridging <span style={{ color: 'var(--vibrant)' }}>Innovation</span> and Trade with Royal Reach
                        </h1>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ marginTop: '40px', display: 'flex', gap: '25px', justifyContent: 'center' }}
                        >
                            <button className="btn-gold" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Explore Services</button>
                            <button style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '16px 40px', borderRadius: '12px', fontWeight: '700' }}>Learn More</button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Intro Section - Lavender/Lilac Background */}
            <div className="section-padding" style={{ background: '#f5f3ff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--primary)', marginBottom: '20px' }}>
                                <div style={{ height: '2px', width: '50px', background: 'var(--primary)' }}></div>
                                <span style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>The Shnoor Legacy</span>
                            </div>
                            <h2 style={{ fontSize: '3rem', color: 'var(--purple-dark)', marginBottom: '30px', fontWeight: '800', lineHeight: 1.2 }}>
                                Building strong trade bridges and lasting <span style={{ color: 'var(--primary)' }}>partnerships worldwide.</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify', marginBottom: '30px' }}>
                                SHNOOR INTERNATIONAL LLC has been formed to work progressively in the field of various IT needs focusing primarily on IT Consulting & Staffing, IT Product Development, Application Designing & Development, SAP Outsourcing, Import & Exports of various products from India to United Arab Emirates, Bahrain, Qatar, Oman & Malaysia.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify' }}>
                                Headquartered in **MUSCAT - Oman**, we guarantee assistance by qualified consultants to establish a strong global presence. Our final aspiration is to close the gap in the foreign market between buyers and sellers.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Team Work" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(76, 29, 149, 0.15)' }} />
                            <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', background: 'var(--purple-dark)', color: '#fff', padding: '35px', borderRadius: '24px', boxShadow: '0 30px 60px rgba(76, 29, 149, 0.3)' }}>
                                <Globe size={45} color="var(--vibrant)" style={{ marginBottom: '15px' }} />
                                <h4 style={{ fontSize: '1.8rem', fontWeight: '800' }}>10+ Countries</h4>
                                <p style={{ opacity: 0.8, fontSize: '1rem' }}>Seamless Trade Network</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Predict Future Section - Deep Midnight Purple contrast */}
            <div style={{ background: 'var(--purple-dark)', padding: '140px 0', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                {/* Vibrant purple geometric accent */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: 'var(--vibrant)', clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)', opacity: 0.9, zIndex: 0 }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '30px', lineHeight: 1.1 }}>
                                Predict the future <br/>with <span style={{ color: 'var(--vibrant)' }}>SHNOOR</span>
                            </h2>
                            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '45px', color: 'rgba(255,255,255,0.85)' }}>
                                Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future-ready. SHNOOR International is here to help you achieve success.
                            </p>
                            <button className="btn-gold" style={{ background: '#fff', color: 'var(--purple-dark)', padding: '20px 50px', fontSize: '1.1rem' }}>
                                CREATE IT <ArrowRight size={22} />
                            </button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Innovation Tech" style={{ width: '100%', borderRadius: '50px', border: '12px solid rgba(255,255,255,0.05)' }} />
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center; }
                    .grid-2 div { text-align: center; }
                    .grid-2 p { margin-left: auto; margin-right: auto; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
