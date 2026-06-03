import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, CreditCard, XCircle } from 'lucide-react';

const UserRequestsPage = () => {
  const { user } = useAppContext();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      navigate('/login');
      return;
    }

    if ("Notification" in window) {
      Notification.requestPermission();
    }

    const username = user ? (user.username || user.email || (typeof user === 'string' ? user : 'Guest')) : 'Guest';
    
    // Initial fetch
    const fetchOrders = async () => {
      const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
      const userLocal = localOrders.filter(o => o.user === username);

      const { data } = await supabase
        .from('orders')
        .select('*')
        .eq('user', username);

      const allOrders = data ? [...data, ...userLocal] : userLocal;
      const uniqueOrders = Array.from(new Map(allOrders.map(item => [item.id, item])).values());
      setOrders(uniqueOrders.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };
    
    fetchOrders();

    const subscription = supabase
      .channel(`user_orders_${Date.now()}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
        if (payload.eventType === 'UPDATE' && payload.new.user === username) {
          if (payload.new.status === 'Approved' && payload.old?.status === 'Requested') {
            if ("Notification" in window && Notification.permission === "granted") {
              new Notification("Order Approved!", {
                body: `Your order is approved. You can now proceed to payment.`
              });
            }
          } else if (payload.new.status === 'Rejected' && payload.old?.status === 'Requested') {
            if ("Notification" in window && Notification.permission === "granted") {
              new Notification("Order Rejected", {
                body: `Your order was rejected. Reason: ${payload.new.rejectionNote || 'No reason provided'}.`
              });
            }
          }
        }
        // Simple reload on any change
        fetchOrders();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [user, navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '30px' }}>
          My Requests & Orders
        </h2>

        {orders.length === 0 ? (
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>You don't have any purchase requests yet.</p>
            <button onClick={() => navigate('/import-and-export')} className="btn-blue" style={{ marginTop: '20px' }}>
              Browse Catalog
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {orders.map(order => (
              <div key={order.id} style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Order #{order.id.slice(0, 8)}...</h3>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{new Date(order.date).toLocaleString()}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {order.status === 'Requested' && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px', background: '#fef3c7', color: '#d97706', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <Clock size={16} /> Pending Approval
                      </span>
                    )}
                    {order.status === 'Approved' && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px', background: '#dcfce7', color: '#16a34a', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <CheckCircle size={16} /> Approved - Ready to Pay
                      </span>
                    )}
                    {['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'].includes(order.status) && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <CheckCircle size={16} /> {order.status}
                      </span>
                    )}
                    {order.status === 'Rejected' && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px', background: '#fef2f2', color: '#ef4444', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <XCircle size={16} /> Rejected
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#475569', fontSize: '1rem' }}>Requested Items:</h4>
                  <ul style={{ margin: 0, padding: '0 0 0 20px', color: '#334155' }}>
                    {order.items.map(item => (
                      <li key={item.id} style={{ marginBottom: '5px' }}>
                        {item.name} <span style={{ color: '#64748b' }}>x{item.quantity}</span> - <span style={{ fontWeight: 'bold' }}>${Number(item.price || 0).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', fontWeight: '800', fontSize: '1.2rem', color: '#0f172a' }}>
                    Total: ${order.items.reduce((s, i) => s + (Number(i.price || 0) * (i.quantity || 1)), 0).toFixed(2)}
                  </div>
                </div>

                {order.status === 'Rejected' && order.rejectionNote && (
                  <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #ef4444' }}>
                    <h4 style={{ margin: '0 0 5px 0', color: '#991b1b', fontSize: '1rem' }}>Rejection Reason:</h4>
                    <p style={{ margin: 0, color: '#7f1d1d' }}>{order.rejectionNote}</p>
                  </div>
                )}

                {order.status === 'Approved' && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => navigate(`/checkout/${order.id}`)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 25px',
                        background: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      <CreditCard size={18} /> Proceed to Checkout
                    </button>
                  </div>
                )}
                
                {order.status === 'Paid' && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => navigate(`/receipt/${order.id}`)}
                      style={{
                        padding: '10px 20px',
                        background: '#e2e8f0',
                        color: '#475569',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      View Receipt
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserRequestsPage;
