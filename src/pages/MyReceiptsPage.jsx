import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase';
import { useAppContext } from '../AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { FileText, Download, ArrowRight } from 'lucide-react';

const MyReceiptsPage = () => {
  const { user } = useAppContext();
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const username = user ? (user.username || user.email || (typeof user === 'string' ? user : 'Guest')) : 'Guest';
    
    // Fetch only Paid orders (receipts)
    const fetchReceipts = async () => {
      try {
        let allReceipts = [];
        
        // Fetch from local storage first as fallback
        const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
        const localReceipts = localOrders.filter(o => o.user === username && ['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'].includes(o.status));
        
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('user', username)
          .in('status', ['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'])
          .order('date', { ascending: false });

        if (data) {
          allReceipts = [...data, ...localReceipts];
        } else {
          allReceipts = localReceipts;
        }

        // Deduplicate
        const uniqueReceipts = Array.from(new Map(allReceipts.map(item => [item.id, item])).values());
        setReceipts(uniqueReceipts.sort((a, b) => new Date(b.date) - new Date(a.date)));

      } catch (error) {
        console.error("Error fetching receipts:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReceipts();
  }, [user, navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}
    >
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <FileText size={40} color="var(--primary)" />
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
            My Receipts
          </h2>
        </div>
        <p style={{ color: 'var(--secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>View and download your past transaction receipts.</p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading receipts...</div>
        ) : receipts.length === 0 ? (
          <div style={{ background: 'white', padding: '60px 40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px dashed #cbd5e1' }}>
            <FileText size={48} style={{ opacity: 0.3, marginBottom: '20px', color: '#64748b' }} />
            <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>No receipts found</h3>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>You don't have any paid orders yet. Once you complete a purchase, your receipt will appear here.</p>
            <button onClick={() => navigate('/import-and-export')} className="btn-blue" style={{ marginTop: '20px' }}>
              Browse Catalog
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {receipts.map(receipt => (
              <div key={receipt.id} style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', borderLeft: '4px solid #10b981' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '1.2rem' }}>Order #{receipt.id.slice(0, 8).toUpperCase()}...</h3>
                  <div style={{ color: '#64748b', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span>Date: {new Date(receipt.date).toLocaleDateString()} at {new Date(receipt.date).toLocaleTimeString()}</span>
                    <span>Total Amount: <strong style={{ color: '#0f172a' }}>${receipt.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</strong></span>
                  </div>
                </div>
                
                <Link to={`/receipt/${receipt.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#f8fafc', color: 'var(--primary)', fontWeight: '700', borderRadius: '10px', textDecoration: 'none', border: '1px solid #e2e8f0', transition: '0.2s' }} onMouseEnter={(e) => { e.target.style.background = '#f1f5f9'; e.target.style.borderColor = '#cbd5e1'; }} onMouseLeave={(e) => { e.target.style.background = '#f8fafc'; e.target.style.borderColor = '#e2e8f0'; }}>
                  View Full Receipt <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyReceiptsPage;
