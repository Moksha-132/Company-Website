import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { User, Mail, Shield, Save } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileSettingsPage = () => {
  const { user, updateUser } = useAppContext();
  
  // Try to parse email from username if it's an email format, otherwise default
  const isEmail = user?.username?.includes('@');
  
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || (isEmail ? user?.username : '') || '',
    currentPassword: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateUser({ username: formData.username, email: formData.email });
    alert('Profile settings saved successfully!');
  };

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Please login to view profile settings.</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 40px', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Profile Settings</h1>
        <p style={{ color: 'var(--secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>Manage your account details and security preferences.</p>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* General Information */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <User size={24} color="#f59e0b" /> General Information
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Username</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={24} color="#f59e0b" /> Security
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Current Password</label>
                <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} placeholder="Enter current password" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>New Password</label>
                <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} placeholder="Enter new password" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
            <button type="button" style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'transparent', color: 'var(--secondary)', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: '600', cursor: 'pointer' }}><Save size={18} /> Save Changes</button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default ProfileSettingsPage;
