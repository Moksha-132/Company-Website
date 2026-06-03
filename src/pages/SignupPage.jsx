import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.username.trim() && formData.email.trim()) {
      // In a real app, you'd create the user in Supabase here
      login(formData.username);
      navigate('/');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '80px', backgroundColor: '#f8fafc' }}>
      
      {/* Left Side - Image/Branding */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }} className="auth-sidebar">
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
          <img src="/logo.png" alt="SHNOOR Logo" style={{ height: '60px', filter: 'brightness(0) invert(1)', marginBottom: '40px' }} />
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '20px' }}>
            Join our global network.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Create an account to track your orders, access exclusive premium products, and streamline your import/export logistics.
          </p>
        </div>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
      </div>

      {/* Right Side - Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#ffffff'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%', maxWidth: '440px' }}
        >
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>Create an Account</h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Enter your details to get started.</p>
          </div>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569', fontSize: '0.95rem' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="text" 
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="John Doe"
                  required
                  style={{ width: '100%', padding: '14px 15px 14px 45px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'all 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569', fontSize: '0.95rem' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  required
                  style={{ width: '100%', padding: '14px 15px 14px 45px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'all 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569', fontSize: '0.95rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Create a password"
                  required
                  style={{ width: '100%', padding: '14px 15px 14px 45px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'all 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <button 
              type="submit"
              style={{
                background: '#0f172a',
                color: 'white',
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                cursor: 'pointer',
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#1e293b'}
              onMouseLeave={(e) => e.target.style.background = '#0f172a'}
            >
              Create Account <ArrowRight size={20} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '30px', color: '#64748b', fontSize: '1rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#f59e0b', fontWeight: '700', textDecoration: 'none' }}>
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .auth-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
