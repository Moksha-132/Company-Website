import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabase';
import { collection, setDoc, doc } from 'firebase/firestore';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username) => {
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updatedData) => {
    setUser((prev) => {
      const newUser = { ...prev, ...updatedData };
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    });
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const requestToBuy = async () => {
    console.log("requestToBuy invoked inside AppContext");
    if (cart.length === 0) {
      console.log("Cart is empty, aborting requestToBuy");
      return null;
    }
    try {
      console.log("Preparing to save to Supabase...");
      const newOrderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      
      const orderPayload = {
        id: newOrderId,
        user: user ? (user.username || user.email || (typeof user === 'string' ? user : 'Guest')) : 'Guest',
        date: new Date().toISOString(),
        status: 'Requested',
        items: cart
      };
      console.log("Order payload:", orderPayload);
      
      const sanitizedPayload = JSON.parse(JSON.stringify(orderPayload));
      
      // Fallback: Save to localStorage for instant local demo capability
      const existingOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
      existingOrders.push(sanitizedPayload);
      localStorage.setItem('fallback_orders', JSON.stringify(existingOrders));
      window.dispatchEvent(new Event('local_orders_updated'));
      
      supabase
        .from('orders')
        .insert([sanitizedPayload])
        .then(({ error }) => {
          if (error) console.error("Supabase sync failed for order:", error);
        });
      
      console.log("Supabase insert triggered! Document ID:", newOrderId);
      
      setCart([]);
      console.log("Cart cleared.");
      return newOrderId;
    } catch (error) {
      console.error("Error during request to buy in AppContext:", error);
      throw error;
    }
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, requestToBuy, user, login, logout, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};
