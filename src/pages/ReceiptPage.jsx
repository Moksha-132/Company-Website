import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../supabase';

const ReceiptPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        let orderData = null;
        
        const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
        const localOrder = localOrders.find(o => o.id === orderId);
        
        if (localOrder) {
          orderData = localOrder;
        } else {
          const { data, error } = await supabase.from('orders').select('*').eq('id', orderId).single();
          if (data) {
            orderData = data;
          }
        }
        
        if (orderData) {
          setOrder(orderData);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  const handleDownloadReceipt = () => {
    window.print();
  };

  // Static suggested items (in a real app, these could be fetched based on category)
  const suggestedItems = [
    { id: 'cereals', name: 'Healthy Organic Cereals', image: '/cereals.png' },
    { id: 'mineraloil', name: 'Mineral Oil (Food Grade)', image: '/mineraloil.png' },
    { id: 'taro', name: 'Fresh Taro Root', image: '/taro root.png' }
  ];

  if (loading) {
    return <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Receipt...</div>;
  }

  if (!order) {
    return <div style={{ minHeight: '60vh', textAlign: 'center', paddingTop: '150px' }}>Order not found.</div>;
  }

  const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Printable Area */}
        <div id="receipt-area" style={{ background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <CheckCircle size={60} color="#10b981" style={{ marginBottom: '20px' }} />
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>Payment Successful!</h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>Thank you for your purchase.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '2px dashed #e2e8f0' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '15px' }}>Order Details</h3>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Status:</strong> <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{order.status}</span></p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '15px' }}>Delivery Address</h3>
              {order.deliveryDetails ? (
                <>
                  <p><strong>{order.deliveryDetails.fullName}</strong></p>
                  <p>{order.deliveryDetails.address}</p>
                  <p>{order.deliveryDetails.city}, {order.deliveryDetails.zip}</p>
                  <p>{order.deliveryDetails.country}</p>
                </>
              ) : (
                <p>No delivery details found.</p>
              )}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '20px' }}>Purchased Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {order.items.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#f8fafc', padding: '15px', borderRadius: '10px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0', color: '#0f172a' }}>{item.name}</h4>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Quantity: {item.quantity}</p>
                  </div>
                  <div style={{ fontWeight: 'bold', color: '#0f172a' }}>
                    ${Number(item.price || 0).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px', textAlign: 'right', fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>
              <span style={{ marginRight: '20px' }}>Total Items: {totalQuantity}</span>
              Total Amount: ${order.items.reduce((s, i) => s + (Number(i.price || 0) * (i.quantity || 1)), 0).toFixed(2)}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="no-print">
          <button 
            onClick={handleDownloadReceipt}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: '#0f172a',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            <Download size={20} /> Download Receipt
          </button>
        </div>

        {/* Suggested Items Section */}
        <div className="no-print">
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '30px', textAlign: 'center' }}>
            You might also like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="suggested-grid">
            {suggestedItems.map(item => (
              <Link 
                to={`/product/${item.id}`} 
                key={item.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: '0.3s' }} className="suggested-card">
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '1rem', color: '#0f172a' }}>{item.name}</h4>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt-area, #receipt-area * {
            visibility: visible;
          }
          #receipt-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
          }
          .no-print {
            display: none !important;
          }
        }
        .suggested-grid {
          @media (max-width: 768px) {
            grid-template-columns: 1fr !important;
          }
        }
        .suggested-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default ReceiptPage;
