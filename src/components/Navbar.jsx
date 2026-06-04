import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, UserCircle, Settings, ShoppingBag, FileText } from 'lucide-react';
import { useAppContext } from '../AppContext';

const Navbar = () => {
    const { user, logout } = useAppContext();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

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
            boxShadow: '0 10px 40px rgba(15, 23, 42, 0.08)',
            backdropFilter: 'blur(20px)',
            transition: 'var(--transition)',
            padding: scrolled ? '12px 0' : '20px 0',
            borderBottom: '1px solid rgba(15, 23, 42, 0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" aria-label="Shnoor Home" style={{ display: 'flex', alignItems: 'center' }}>
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
                                    color: 'var(--secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '10px 0',
                                    fontFamily: "'Outfit', sans-serif"
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--secondary)'}
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
                                    boxShadow: '0 20px 60px rgba(15, 23, 42, 0.15)',
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
                                                color: 'var(--secondary)',
                                                fontWeight: '600',
                                                transition: '0.2s'
                                            }}
                                            onMouseEnter={(e) => { e.target.style.color = 'var(--primary)'; e.target.style.background = '#f5f3ff'; }}
                                            onMouseLeave={(e) => { e.target.style.color = 'var(--secondary)'; e.target.style.background = 'transparent'; }}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {user ? (
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div 
                                style={{ position: 'relative' }} 
                                onMouseEnter={() => setProfileDropdownOpen(true)}
                                onMouseLeave={() => setProfileDropdownOpen(false)}
                            >
                                <button aria-label="User Profile" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--secondary)' }}>
                                    <UserCircle size={32} strokeWidth={1.5} />
                                </button>
                                {profileDropdownOpen && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                        width: '200px',
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        padding: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px',
                                        zIndex: 1000
                                    }}>
                                        <Link to="/user-requests" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', borderRadius: '8px', color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                            <ShoppingBag size={18} /> My Orders
                                        </Link>
                                        <Link to="/receipts" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', borderRadius: '8px', color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                            <FileText size={18} /> My Receipts
                                        </Link>
                                        <Link to="/settings" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', borderRadius: '8px', color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                            <Settings size={18} /> Profile Settings
                                        </Link>
                                        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '5px 0' }} />
                                        <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', borderRadius: '8px', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600', width: '100%', textAlign: 'left' }} onMouseEnter={(e) => e.target.style.background = '#fef2f2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                            <LogOut size={18} /> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            <Link to="/contact" className="btn-blue" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '12px', fontWeight: '700' }}>Get in Touch</Link>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <Link to="/login" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Login / Sign Up</Link>
                            <Link to="/contact" className="btn-blue" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '12px', fontWeight: '700' }}>Get in Touch</Link>
                        </div>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ color: 'var(--secondary)', background: 'none' }}
                    className="mobile-toggle"
                    aria-label="Toggle navigation menu"
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
                                style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '1.2rem' }}
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
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '10px 0' }} />
                    {user ? (
                        <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '12px', marginTop: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <UserCircle size={32} color="var(--primary)" />
                                <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>{user.username || 'My Account'}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <Link to="/user-requests" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <ShoppingBag size={20} /> My Orders
                                </Link>
                                <Link to="/receipts" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <FileText size={20} /> My Receipts
                                </Link>
                                <Link to="/settings" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Settings size={20} /> Profile Settings
                                </Link>
                                <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />
                                <button onClick={() => { logout(); setMobileMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, cursor: 'pointer', color: '#ef4444', fontWeight: '700', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <LogOut size={20} /> Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.2rem' }}>
                            Login / Sign Up
                        </Link>
                    )}
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
