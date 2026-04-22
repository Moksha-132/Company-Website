import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section-padding bg-surface" id="contact">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }} className="grid-2">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h4 style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Get in Touch</h4>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '30px', lineHeight: 1.1 }}>
                            Ready to start your <span style={{ color: 'var(--primary)' }}>next project?</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px', lineHeight: 1.8 }}>
                            Contact us today for expert IT solutions and global trade management. We're here to help your business grow.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Email Us</p>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: '700' }}>info@shnoor.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Call Us</p>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: '700' }}>+968 1234 5678</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Visit Us</p>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: '700' }}>Muscat, Sultanate of Oman</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        style={{ background: '#fff', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.08)', border: '1px solid var(--border)' }}
                    >
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy)' }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy)' }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '1rem' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy)' }}>Subject</label>
                                <input type="text" placeholder="How can we help?" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '1rem' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy)' }}>Message</label>
                                <textarea placeholder="Your message here..." rows={5} style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '1rem', resize: 'none' }}></textarea>
                            </div>
                            <button className="btn-navy" style={{ padding: '18px', justifyContent: 'center' }}>
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .grid-2 { grid-template-columns: 1fr !important; gap: 60px !important; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
