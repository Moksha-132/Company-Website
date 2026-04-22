import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--navy)', color: '#fff', paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '60px', marginBottom: '80px' }} className="grid-footer">
                    <div>
                        <img src="/logo.png" alt="SHNOOR Logo" style={{ height: '70px', marginBottom: '30px', filter: 'brightness(0) invert(1)' }} />
                        <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '30px', maxWidth: '350px' }}>
                            Bridging innovation and trade with expert IT solutions and global reach. Headquartered in Muscat, Oman.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" style={{ 
                                    background: 'rgba(255,255,255,0.1)', 
                                    width: '40px', 
                                    height: '40px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderRadius: '10px'
                                }} onMouseEnter={(e) => e.target.style.background = 'var(--primary)'} onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--primary)' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', opacity: 0.8 }}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/services">Our Services</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--primary)' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', opacity: 0.8 }}>
                            <Link to="/services/cloud">Cloud Solutions</Link>
                            <Link to="/services/enterprise">Enterprise MGMT</Link>
                            <Link to="/services/ai">Data & AI</Link>
                            <Link to="/logistics">Logistics MGMT</Link>
                            <Link to="/export">Export MGMT</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--primary)' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', opacity: 0.8 }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <Mail size={20} color="var(--primary)" />
                                <span>info@shnoor.com</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <Phone size={20} color="var(--primary)" />
                                <span>+968 1234 5678</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <MapPin size={20} color="var(--primary)" style={{ marginTop: '5px' }} />
                                <span>Muscat, Sultanate of Oman</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.1)', 
                    paddingTop: '30px', 
                    textAlign: 'center', 
                    opacity: 0.6,
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} Shnoor International LLC. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .grid-footer { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
                }
                @media (max-width: 576px) {
                    .grid-footer { grid-template-columns: 1fr !important; text-align: center; }
                    .grid-footer div { align-items: center; display: flex; flex-direction: column; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
