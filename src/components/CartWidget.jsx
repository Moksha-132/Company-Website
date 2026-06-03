import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useAppContext } from '../AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const CartWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, requestToBuy, user } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showWidget = location.pathname.startsWith('/import-and-export') || location.pathname.startsWith('/product');

  if (!showWidget) {
    return null;
  }

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          background: '#f59e0b',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#ef4444',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {totalItems}
          </span>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '350px',
              height: '100vh',
              background: 'white',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Your Cart</h2>
              <X size={24} cursor="pointer" onClick={() => setIsOpen(false)} />
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {cart.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#64748b', marginTop: '50px' }}>Your cart is empty.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9' }}>
                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#0f172a' }}>{item.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Qty: {item.quantity}</p>
                    </div>
                    <X size={18} cursor="pointer" color="#ef4444" onClick={() => removeFromCart(item.id)} />
                  </div>
                ))
              )}
            </div>

            <div style={{ padding: '20px', paddingBottom: '100px', borderTop: '1px solid #e2e8f0' }}>
              {!user && cart.length > 0 && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '10px' }}>Please login to checkout</p>
              )}
              <button 
                onClick={async (e) => {
                  e.preventDefault();
                  console.log("Request to Buy button clicked!");
                  console.log("Current user state:", user);
                  console.log("Current cart state:", cart);
                  try {
                    if (user && cart.length > 0) {
                      console.log("Calling requestToBuy()...");
                      const result = await requestToBuy();
                      console.log("requestToBuy() finished with result:", result);
                      console.log("Closing cart widget...");
                      setIsOpen(false);
                      console.log("Navigating to /user-requests...");
                      navigate('/user-requests');
                    } else {
                      console.log("User or cart condition not met. User:", !!user, "Cart Length:", cart.length);
                    }
                  } catch (err) {
                    console.error("FATAL ERROR in onClick:", err);
                    alert('Error: ' + err.message);
                  }
                }}
                disabled={cart.length === 0 || !user}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: cart.length === 0 || !user ? '#cbd5e1' : '#0f172a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: cart.length === 0 || !user ? 'not-allowed' : 'pointer'
                }}
              >
                Request to Buy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartWidget;
