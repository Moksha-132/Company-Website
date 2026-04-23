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
        <div className="bg-white min-h-screen font-['Outfit',sans-serif]">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[2000]"
                style={{ scaleX }}
            />

            {/* Header / Hero */}
            <header className="pt-48 pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#3b82f6_0%,transparent_50%)]" />
                </div>
                
                <div className="container max-w-4xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-slate-400 text-sm mb-12 uppercase tracking-widest font-bold">
                        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/news" className="hover:text-amber-500 transition-colors">News</Link>
                        <span>/</span>
                        <span className="text-white">Article</span>
                    </nav>

                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
                    >
                        {blog.title}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl"
                    >
                        {blog.subtitle}
                    </motion.p>
                    
                    <div className="flex flex-wrap items-center gap-8 py-8 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
                                S
                            </div>
                            <div>
                                <p className="text-sm font-bold">Shnoor Editorial</p>
                                <p className="text-xs text-slate-400">{blog.date}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6 text-slate-400">
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-amber-500" />
                                <span className="text-sm font-semibold">{blog.readTime}</span>
                            </div>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex items-center gap-4">
                                <button className="hover:text-white transition-colors"><Facebook size={18} /></button>
                                <button className="hover:text-white transition-colors"><Twitter size={18} /></button>
                                <button className="hover:text-white transition-colors"><Linkedin size={18} /></button>
                                <button className="hover:text-white transition-colors ml-2"><Bookmark size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container max-w-4xl -mt-20 relative z-20">
                <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-20"
                >
                    <div style={{ 
                        width: '100%', 
                        height: '450px', 
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover'
                            }}
                            className="scale-105 hover:scale-100 transition-transform duration-1000"
                        />
                    </div>
                    
                    <div className="px-6 md:px-20 py-16">
                        <article className="prose prose-slate prose-xl max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-8">
                            {blog.content.map((section, index) => {
                                if (section.type === 'heading') {
                                    return (
                                        <h2 key={index} className="text-3xl md:text-4xl font-bold mt-16 first:mt-0 mb-8 pb-4 border-b border-slate-100">
                                            {section.text}
                                        </h2>
                                    );
                                }
                                return (
                                    <p key={index} className="text-xl">
                                        {section.text}
                                    </p>
                                );
                            })}
                        </article>

                        {/* Article Footer */}
                        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-slate-900">Share this article:</span>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></button>
                                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-400 hover:text-white transition-all"><Twitter size={18} /></button>
                                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all"><Linkedin size={18} /></button>
                                </div>
                            </div>
                            
                            <Link 
                                to="/" 
                                className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors group"
                            >
                                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Back to All News
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Newsletter / CTA */}
                <section className="mb-24 rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-600" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="relative z-10 px-8 py-16 md:p-20 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to stay updated with more insights?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Join our network and get the latest news on global trade, logistics, and SAP solutions delivered to your inbox.
                        </p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="flex-1 px-8 py-4 rounded-full bg-white text-slate-900 focus:outline-none focus:ring-4 ring-white/20"
                            />
                            <button className="px-10 py-4 rounded-full bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition-colors shadow-lg">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Styles for Tailwind-like classes not in the project */}
            <style dangerouslySetInnerHTML={{ __html: `
                .prose-xl h2 { font-size: 2.25rem; line-height: 2.5rem; }
                .prose-xl p { font-size: 1.25rem; line-height: 2rem; }
                @media (max-width: 768px) {
                    .prose-xl h2 { font-size: 1.875rem; line-height: 2.25rem; }
                    .prose-xl p { font-size: 1.125rem; line-height: 1.75rem; }
                }
            ` }} />
        </div>
    );
};

export default BlogDetailPage;
