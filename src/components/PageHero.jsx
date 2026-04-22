import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, highlight, description }) => {
    return (
        <section style={{ 
            position: 'relative',
            paddingTop: '160px',
            paddingBottom: '120px',
            background: 'linear-gradient(135deg, var(--purple-dark) 0%, var(--primary) 100%)',
            color: '#fff',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--vibrant) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0
                }}
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.5, 1],
                    x: [0, 100, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}
            />
            
            {/* Subtle Grid Overlay for Tech Feel */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.5,
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 style={{ 
                        fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
                        fontWeight: '900', 
                        marginBottom: '30px',
                        letterSpacing: '-1px',
                        textShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        {title} <span style={{ 
                            background: 'linear-gradient(to right, #fff, #e9d5ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>{highlight}</span>
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
                        maxWidth: '850px', 
                        margin: '0 auto', 
                        opacity: 0.95, 
                        lineHeight: 1.8, 
                        fontWeight: '400',
                        color: '#f3e8ff'
                    }}>
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
