import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Cloud', href: '/services/cloud' },
        { name: 'Enterprise Management', href: '/services/enterprise' },
        { name: 'Data & Artificial Intelligence', href: '/services/ai' },
        { name: 'Consulting & Staffing', href: '/services/staffing' },
        { name: 'Background verification', href: '/services/verification' },
        { name: 'Network Management', href: '/services/network' },
        { name: 'Health Care', href: '/services/healthcare' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', isDropdown: true },
        { name: 'Logistics Management', href: '/logistics' },
        { name: 'Careers', href: '/careers' },
        { name: 'Export Management', href: '/export' },
    ];

    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 40px rgba(76, 29, 149, 0.08)',
            backdropFilter: 'blur(20px)',
            transition: 'var(--transition)',
            padding: scrolled ? '12px 0' : '20px 0',
            borderBottom: '1px solid rgba(76, 29, 149, 0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.png" alt="SHNOOR Logo" style={{ height: scrolled ? '55px' : '65px', width: 'auto', transition: '0.3s' }} />
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            style={{ position: 'relative' }}
                            onMouseEnter={() => link.isDropdown && setDropdownOpen(true)}
                            onMouseLeave={() => link.isDropdown && setDropdownOpen(false)}
                        >
                            <Link 
                                to={link.href} 
                                style={{ 
                                    fontSize: '0.95rem', 
                                    fontWeight: '700', 
                                    color: 'var(--purple-dark)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '10px 0',
                                    fontFamily: "'Outfit', sans-serif"
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--purple-dark)'}
                            >
                                {link.name} {link.isDropdown && <ChevronDown size={16} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />}
                            </Link>

                            {link.isDropdown && dropdownOpen && (
                                <div style={{ 
                                    position: 'absolute',
                                    top: '100%',
                                    left: '-20px',
                                    background: '#fff',
                                    minWidth: '280px',
                                    boxShadow: '0 20px 60px rgba(76, 29, 149, 0.15)',
                                    borderRadius: '16px',
                                    padding: '20px 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid var(--border)',
                                    animation: 'slideUp 0.3s ease-out'
                                }}>
                                    {services.map((service) => (
                                        <Link 
                                            key={service.name} 
                                            to={service.href} 
                                            style={{ 
                                                padding: '12px 25px', 
                                                fontSize: '0.95rem', 
                                                color: 'var(--purple-dark)',
                                                fontWeight: '600',
                                                transition: '0.2s'
                                            }}
                                            onMouseEnter={(e) => { e.target.style.color = 'var(--primary)'; e.target.style.background = '#f5f3ff'; }}
                                            onMouseLeave={(e) => { e.target.style.color = 'var(--purple-dark)'; e.target.style.background = 'transparent'; }}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="btn-purple" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '12px', fontWeight: '700' }}>Get in Touch</Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ color: 'var(--purple-dark)', background: 'none' }}
                    className="mobile-toggle"
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div style={{ 
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: '#fff',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderTop: '1px solid var(--border)',
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}>
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            <Link 
                                to={link.href} 
                                onClick={() => !link.isDropdown && setMobileMenuOpen(false)} 
                                style={{ color: 'var(--purple-dark)', fontWeight: '800', fontSize: '1.2rem' }}
                            >
                                {link.name}
                            </Link>
                            {link.isDropdown && (
                                <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '2px solid var(--border)' }}>
                                    {services.map((service) => (
                                        <Link key={service.name} to={service.href} onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600' }}>
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .mobile-toggle { display: none; }
                @media (max-width: 1200px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
