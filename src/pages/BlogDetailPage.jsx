import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Bookmark } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const blog = blogData[slug];
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('loading');
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    if (!blog) {
        return (
            <div className="section-padding text-center py-40">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">Blog Post Not Found</h2>
                    <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                        <ChevronLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
            {/* Reading Progress Bar */}
            <motion.div
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    height: '4px', 
                    backgroundColor: '#f59e0b', 
                    transformOrigin: 'left', 
                    zIndex: 2000,
                    scaleX 
                }}
            />

            {/* Header / Hero */}
            <header style={{ 
                paddingTop: '180px', 
                paddingBottom: '80px', 
                backgroundColor: '#0f172a', 
                color: '#fff', 
                position: 'relative', 
                overflow: 'hidden' 
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        background: 'radial-gradient(circle at 30% 20%, #3b82f6 0%, transparent 50%)' 
                    }} />
                </div>
                
                <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
                    {/* Breadcrumbs */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>
                        <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
                        <span>/</span>
                        <Link to="/" style={{ color: '#94a3b8' }}>News</Link>
                        <span>/</span>
                        <span style={{ color: '#fff' }}>Article</span>
                    </nav>

                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '30px' }}
                    >
                        {blog.title}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: '1.25rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px' }}
                    >
                        {blog.subtitle}
                    </motion.p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#0f172a', fontWeight: 'bold' }}>
                                <span style={{ margin: 'auto' }}>S</span>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.875rem', fontWeight: 'bold', margin: 0 }}>Shnoor Editorial</p>
                                <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{blog.date}</p>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#94a3b8' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Clock size={16} style={{ color: '#f59e0b' }} />
                                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{blog.readTime}</span>
                            </div>
                            <div style={{ height: '16px', width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Facebook size={18} style={{ cursor: 'pointer' }} />
                                <Twitter size={18} style={{ cursor: 'pointer' }} />
                                <Linkedin size={18} style={{ cursor: 'pointer' }} />
                                <Bookmark size={18} style={{ cursor: 'pointer', marginLeft: '8px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container" style={{ maxWidth: '900px', marginTop: '-80px', position: 'relative', zIndex: 20 }}>
                <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', marginBottom: '80px' }}
                >
                    <div style={{ width: '100%', height: '450px', overflow: 'hidden', position: 'relative' }}>
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    
                    <div style={{ padding: '60px 40px' }}>
                        <article style={{ color: '#334155', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            {blog.content.map((section, index) => {
                                if (section.type === 'heading') {
                                    return (
                                        <h2 key={index} style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#0f172a', marginTop: '60px', marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                                            {section.text}
                                        </h2>
                                    );
                                }
                                return (
                                    <p key={index} style={{ marginBottom: '30px' }}>
                                        {section.text}
                                    </p>
                                );
                            })}
                        </article>

                        {/* Article Footer */}
                        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #f1f5f9', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Share this article:</span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                        <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', cursor: 'pointer' }}>
                                            <Icon size={18} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <Link 
                                to="/" 
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#0f172a' }}
                            >
                                <ChevronLeft size={20} /> Back to Home
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Newsletter / CTA */}
                <section style={{ marginBottom: '100px', borderRadius: '32px', overflow: 'hidden', position: 'relative', backgroundColor: '#2563eb', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}>Want to stay updated with more insights?</h2>
                    <p style={{ fontSize: '1.1rem', color: '#dbeafe', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Join our network and get the latest news on global trade, logistics, and SAP solutions delivered to your inbox.
                    </p>
                    <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'row', gap: '15px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading' || status === 'success'}
                            style={{ flex: 1, padding: '15px 30px', borderRadius: '50px', border: 'none', minWidth: '250px', color: '#0f172a' }}
                            required
                        />
                        <button 
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            style={{ 
                                padding: '15px 40px', 
                                borderRadius: '50px', 
                                backgroundColor: status === 'success' ? '#10b981' : '#f59e0b', 
                                color: '#0f172a', 
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                cursor: (status === 'loading' || status === 'success') ? 'default' : 'pointer'
                            }}
                        >
                            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                        </button>
                    </form>
                    {status === 'success' && (
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ marginTop: '20px', color: '#dcfce7', fontWeight: '600' }}
                        >
                            Thank you! You've been added to our newsletter.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <p style={{ marginTop: '20px', color: '#fee2e2', fontWeight: '600' }}>
                            Please enter a valid email address.
                        </p>
                    )}
                </section>
            </main>

        </div>
    );
};

export default BlogDetailPage;
