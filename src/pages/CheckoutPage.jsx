import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppContext } from '../AppContext';
import { supabase } from '../supabase';

const CheckoutPage = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const { orderId } = useParams();
  
  const [formData, setFormData] = useState({
    fullName: user ? user.username : '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);

  React.useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }
      try {
        let orderData = null;
        
        // Try local storage first
        const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]');
        const localOrder = localOrders.find(o => o.id === orderId);
        
        if (localOrder) {
          orderData = localOrder;
        } else {
          // Try Supabase
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

  if (loading) {
    return <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Order...</div>;
  }

  if (!order || order.status !== 'Approved') {
    return (
      <div style={{ textAlign: 'center', paddingTop: '150px', minHeight: '60vh' }}>
        <h2>Invalid Order or Not Approved Yet</h2>
        <button className="btn-blue" onClick={() => navigate('/user-requests')} style={{ marginTop: '20px' }}>
          Back to Requests
        </button>
      </div>
    );
  }

  const totalAmount = order.items.reduce((s, i) => s + (Number(i.price || 0) * (i.quantity || 1)), 0).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(async () => {
      try {
        const deliveryDetails = {
          fullName: formData.fullName,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          zip: formData.zip,
          country: formData.country,
          paymentMethod: paymentMethod
        };
        
        let finalStatus = 'Paid';
        if (paymentMethod === 'cod') finalStatus = 'Cash on Delivery';
        if (paymentMethod === 'bank') finalStatus = 'Awaiting Bank Transfer';

        // Update local storage
        const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
        const updatedLocal = localOrders.map(o => o.id === orderId ? { ...o, deliveryDetails, status: finalStatus } : o);
        localStorage.setItem('fallback_orders', JSON.stringify(updatedLocal));
        window.dispatchEvent(new Event('local_orders_updated'));
        
        // Update Supabase
        supabase.from('orders').update({
          deliveryDetails: deliveryDetails,
          status: finalStatus
        }).eq('id', orderId)
        .then(({ error }) => {
          if (error) console.log('Supabase sync failed', error);
        });
        
        navigate(`/receipt/${orderId}`);
      } catch (err) {
        console.error("Payment error:", err);
        alert("Payment failed: " + (err.message || err.toString()));
      } finally {
        setIsProcessing(false);
      }
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '30px' }}>
          Checkout
        </h2>

        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          
          {/* Order Summary */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1e293b' }}>Order Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
              {order.items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.95rem' }}>
                  <span>{item.name} <span style={{ color: '#94a3b8' }}>x{item.quantity}</span></span>
                  <span style={{ fontWeight: '600' }}>${(Number(item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '2px dashed #cbd5e1', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>Total Amount</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>${totalAmount}</span>
            </div>
          </div>

          <form onSubmit={handlePayment}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>Delivery Details</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Full Name</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Address</label>
              <input required type="text" name="address" value={formData.address} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>City</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>ZIP Code</label>
                <input required type="text" name="zip" value={formData.zip} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Country</label>
                <input required type="text" name="country" value={formData.country} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>Payment Information</h3>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
              {['card', 'paypal', 'bank', 'cod'].map((method) => (
                <label key={method} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: paymentMethod === method ? '#eff6ff' : '#f8fafc', padding: '10px 20px', borderRadius: '10px', border: `1px solid ${paymentMethod === method ? '#3b82f6' : '#e2e8f0'}` }}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value={method} 
                    checked={paymentMethod === method} 
                    onChange={(e) => setPaymentMethod(e.target.value)} 
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontWeight: '600', color: paymentMethod === method ? '#1e40af' : '#475569', textTransform: method === 'cod' ? 'uppercase' : 'capitalize' }}>
                    {method === 'card' ? 'Credit / Debit Card' : method === 'paypal' ? 'PayPal' : method === 'bank' ? 'Bank Transfer' : 'Cash on Delivery'}
                  </span>
                </label>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Card Number</label>
                  <input required type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="XXXX XXXX XXXX XXXX" style={inputStyle} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Expiry Date</label>
                    <input required type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>CVV</label>
                    <input required type="password" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="XXX" style={inputStyle} />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === 'paypal' && (
              <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '10px', marginBottom: '40px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <p style={{ color: '#475569', fontWeight: '600' }}>You will be redirected to PayPal to complete your purchase securely.</p>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '10px', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
                <p style={{ color: '#475569', fontWeight: '600', marginBottom: '10px' }}>Please transfer the total amount to the following bank account:</p>
                <ul style={{ color: '#64748b', listStyleType: 'none', padding: 0 }}>
                  <li><strong>Bank Name:</strong> Global Bank Intl.</li>
                  <li><strong>Account Name:</strong> Shnoor International LLC</li>
                  <li><strong>IBAN:</strong> AE12 3456 7890 1234 5678 90</li>
                  <li><strong>SWIFT/BIC:</strong> GBIAEAEM</li>
                </ul>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '10px', marginBottom: '40px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <p style={{ color: '#475569', fontWeight: '600' }}>Pay with cash or card directly to the delivery agent upon receiving your order.</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isProcessing}
              style={{
                width: '100%',
                padding: '18px',
                background: isProcessing ? '#94a3b8' : '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                transition: '0.3s'
              }}
            >
              {isProcessing ? 'Processing Payment...' : `Pay $${totalAmount} Now`}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  outline: 'none',
  fontSize: '1rem',
  backgroundColor: '#f8fafc'
};

export default CheckoutPage;
