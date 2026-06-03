import React, { useState, useEffect } from 'react';
import { Save, Plus, Edit2, Trash2, Search, X, LogOut, CheckCircle, Clock, Package, User, DollarSign, FileText, MessageSquare, Database } from 'lucide-react';
import INITIAL_KNOWLEDGE_BASE from '../data/chatbotKnowledgeBase.json';
import { supabase } from '../supabase';
import './AdminPage.css';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(INITIAL_KNOWLEDGE_BASE);
  const [unansweredQueries, setUnansweredQueries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ keywords: '', response: '', route: '', actionText: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({ name: '', tagline: '', description: '', badge: '', image: '', category: '', footerText: '', price: '' });
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [activeTab, setActiveTab] = useState('kb');

  useEffect(() => {
    if (!isAuthenticated) return;
    if ("Notification" in window) {
      Notification.requestPermission();
    }

    let latestFirebaseOrders = [];
    const loadAdminOrders = (firebaseDocs = []) => {
      const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
      const allOrders = [...firebaseDocs, ...localOrders];
      const uniqueOrders = Array.from(new Map(allOrders.map(item => [item.id, item])).values());
      setOrders(uniqueOrders.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    const fetchInitialData = async () => {
      const [kbRes, unRes, ordRes, prodRes] = await Promise.all([
        supabase.from('knowledge_base').select('*'),
        supabase.from('unanswered_queries').select('*'),
        supabase.from('orders').select('*'),
        supabase.from('products').select('*')
      ]);

      if (kbRes.data && kbRes.data.length > 0) {
        setKnowledgeBase(kbRes.data);
      } else {
        setKnowledgeBase(INITIAL_KNOWLEDGE_BASE);
      }

      if (unRes.data) {
        setUnansweredQueries(unRes.data);
      }

      if (ordRes.data) {
        latestFirebaseOrders = ordRes.data;
        loadAdminOrders(latestFirebaseOrders);
      }
      
      if (prodRes.data && prodRes.data.length > 0) {
        setProducts(prodRes.data);
      } else {
        // Fallback to auto-seed if products table is empty
        import('./ImportExportPage').then(module => {
          if (module.INITIAL_PRODUCTS) {
            supabase.from('products').insert(module.INITIAL_PRODUCTS).then(() => {
              setProducts(module.INITIAL_PRODUCTS);
            });
          }
        });
      }
    };

    fetchInitialData();

    // Supabase Realtime Subscriptions
    const kbSubscription = supabase
      .channel('admin_kb_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'knowledge_base' }, payload => {
        supabase.from('knowledge_base').select('*').then(({ data }) => {
          if (data && data.length > 0) {
            // Map actiontext back to actionText for UI consistency
            const formattedData = data.map(item => ({
              ...item,
              actionText: item.actiontext || item.actionText
            }));
            setKnowledgeBase(formattedData);
          } else {
            setKnowledgeBase(INITIAL_KNOWLEDGE_BASE);
          }
        });
      })
      .subscribe();

    const unSubscription = supabase
      .channel('admin_unanswered_channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'unanswered_queries' }, payload => {
        supabase.from('unanswered_queries').select('*').then(({ data }) => {
          if (data) setUnansweredQueries(data);
        });
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Shnoor AI: New Unanswered Query", {
            body: `User asked: "${payload.new.query}"\nPlease answer it in the Admin Dashboard.`
          });
        }
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'unanswered_queries' }, payload => {
        supabase.from('unanswered_queries').select('*').then(({ data }) => {
          if (data) setUnansweredQueries(data);
        });
      })
      .subscribe();

    const orderSubscription = supabase
      .channel('admin_orders_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
        if (payload.eventType === 'INSERT' && payload.new.status === 'Requested') {
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Shnoor AI: New Order Request", {
              body: `User ${payload.new.user || 'Customer'} submitted a new order request.\nPlease review it in the Admin Dashboard.`
            });
          }
        }
        supabase.from('orders').select('*').then(({ data }) => {
          if (data) {
            latestFirebaseOrders = data;
            loadAdminOrders(latestFirebaseOrders);
          }
        });
      })
      .subscribe();

    // Initial fetch for products
    supabase.from('products').select('*').then(({ data }) => {
      if (data && data.length > 0) {
        const formatted = data.map(p => ({...p, footerText: p.footertext || p.footerText}));
        setProducts(formatted);
      }
    });

    const productSubscription = supabase
      .channel('admin_products_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, payload => {
        supabase.from('products').select('*').then(({ data }) => {
          if (data) {
            const formatted = data.map(p => ({...p, footerText: p.footertext || p.footerText}));
            setProducts(formatted);
          }
        });
      })
      .subscribe();

    const handleLocalAdminUpdate = () => loadAdminOrders(latestFirebaseOrders);
    window.addEventListener('local_orders_updated', handleLocalAdminUpdate);
    window.addEventListener('storage', handleLocalAdminUpdate);
    loadAdminOrders([]);

    return () => {
      supabase.removeChannel(kbSubscription);
      supabase.removeChannel(unSubscription);
      supabase.removeChannel(orderSubscription);
      supabase.removeChannel(productSubscription);
      window.removeEventListener('local_orders_updated', handleLocalAdminUpdate);
      window.removeEventListener('storage', handleLocalAdminUpdate);
    };
  }, [isAuthenticated]);

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setEditForm({
      keywords: entry.keywords.join(', '),
      response: entry.response,
      route: entry.route || '',
      actionText: entry.actionText || ''
    });
    setIsAdding(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const { error } = await supabase.from('knowledge_base').delete().eq('id', id);
      if (error) {
        console.error("Delete error:", error);
        alert("Failed to delete entry: " + error.message);
      } else {
        // Fallback update in case realtime subscription is delayed
        setKnowledgeBase(prev => prev.filter(entry => entry.id !== id));
      }
    }
  };

  const handleDeleteUnanswered = async (id) => {
    await supabase.from('unanswered_queries').delete().eq('id', id);
  };

  const handleAnswerQuery = (queryObj) => {
    setIsAdding(true);
    setEditingId(null);
    setEditForm({ keywords: queryObj.query, response: '', route: '', actionText: '' });
    handleDeleteUnanswered(queryObj.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = async () => {
    if (!editForm.keywords.trim() || !editForm.response.trim()) {
      alert("Keywords and Response cannot be empty.");
      return;
    }

    const keywordArray = editForm.keywords.split(',').map(k => k.trim()).filter(k => k);

    if (isAdding) {
      const newEntry = {
        id: Date.now().toString(),
        keywords: keywordArray,
        response: editForm.response,
        route: editForm.route || null,
        actiontext: editForm.actionText || null
      };
      const { error, data } = await supabase.from('knowledge_base').insert([newEntry]).select();
      if (error) {
        console.error("Insert KB error:", error);
        return alert("Failed to add KB entry: " + error.message);
      }
      if (data) setKnowledgeBase(prev => [...prev, ...data]);
      setIsAdding(false);
    } else {
      const updatedEntry = {
        keywords: keywordArray,
        response: editForm.response,
        route: editForm.route || null,
        actiontext: editForm.actionText || null
      };
      const { error } = await supabase.from('knowledge_base').update(updatedEntry).eq('id', editingId);
      if (error) {
        console.error("Update KB error:", error);
        return alert("Failed to update KB entry: " + error.message);
      }
      setKnowledgeBase(prev => prev.map(entry => entry.id === editingId ? { ...entry, ...updatedEntry } : entry));
      setEditingId(null);
    }
    
    setEditForm({ keywords: '', response: '', route: '', actionText: '' });
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setEditForm({ keywords: '', response: '', route: '', actionText: '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setIsAdding(false);
    setEditingId(null);
    setEditForm({ keywords: '', response: '', route: '', actionText: '' });
  };

  const filteredKnowledgeBase = knowledgeBase.filter(entry => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    const inResponse = entry.response.toLowerCase().includes(q);
    const inKeywords = entry.keywords.some(kw => kw.toLowerCase().includes(q));
    const inRoute = entry.route && entry.route.toLowerCase().includes(q);
    return inResponse || inKeywords || inRoute;
  });

  const tabStyle = (active) => ({
    padding: '15px 20px',
    background: active ? '#f5f3ff' : 'transparent',
    color: active ? '#4f46e5' : '#475569',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: '0.2s',
    textAlign: 'left'
  });

  const handleApproveOrder = async (orderId) => {
    try {
      // Update local storage first
      const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]');
      const updatedLocal = localOrders.map(o => o.id === orderId ? { ...o, status: 'Approved' } : o);
      localStorage.setItem('fallback_orders', JSON.stringify(updatedLocal));
      window.dispatchEvent(new Event('local_orders_updated'));

      // Try Supabase
      supabase.from('orders').update({ status: 'Approved' }).eq('id', orderId)
        .then(({ error }) => { if (error) console.log('Supabase sync failed', error) });
      
      alert("Order approved. The user can now proceed to checkout and pay.");
    } catch (error) {
      console.error("Error approving order:", error);
    }
  };

  const handleRejectOrder = async (orderId) => {
    try {
      const note = window.prompt("Optional: Leave a reason for rejection for the user to see.");
      const finalNote = note ? note.trim() : null;

      // Update local storage first
      const localOrders = JSON.parse(localStorage.getItem('fallback_orders') || '[]') || [];
      const updatedLocal = localOrders.map(o => o.id === orderId ? { ...o, status: 'Rejected', rejectionNote: finalNote } : o);
      localStorage.setItem('fallback_orders', JSON.stringify(updatedLocal));
      window.dispatchEvent(new Event('local_orders_updated'));

      // Try Supabase
      supabase.from('orders').update({ status: 'Rejected', rejectionNote: finalNote }).eq('id', orderId)
        .then(({ error }) => { if (error) console.log('Supabase sync failed', error) });
      
      alert("Order rejected.");
    } catch (error) {
      console.error("Error rejecting order:", error);
    }
  };

  const handleSaveProduct = async () => {
    if (!productForm.name || !productForm.price) return alert('Name and Price are required');
    
    // Map footerText to footertext for PostgreSQL
    const { footerText, ...rest } = productForm;
    const payload = { ...rest, footertext: footerText, price: parseFloat(productForm.price) };
    
    if (!payload.id) payload.id = Date.now().toString();

    if (isAddingProduct) {
      const { error } = await supabase.from('products').insert([payload]);
      if (error) {
        console.error("Insert error:", error);
        return alert("Failed to add product: " + error.message);
      }
    } else {
      const { error } = await supabase.from('products').update(payload).eq('id', editingProductId);
      if (error) {
        console.error("Update error:", error);
        return alert("Failed to update product: " + error.message);
      }
    }
    
    setIsAddingProduct(false);
    setEditingProductId(null);
    setProductForm({ name: '', tagline: '', description: '', badge: '', image: '', category: '', footerText: '', price: '' });
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      await supabase.from('products').delete().eq('id', id);
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (Number(item.price || 0) * (item.quantity || 1)), 0).toFixed(2);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="admin-form-card fade-in" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2>Admin Login</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Enter the master password to access the knowledge base.</p>
          <div className="form-group">
            <input 
              type="password" 
              value={passwordInput} 
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password..."
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #bdc3c7', marginBottom: '15px' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (passwordInput === import.meta.env.VITE_ADMIN_PASSWORD) {
                    setIsAuthenticated(true);
                  } else {
                    alert('Incorrect password!');
                  }
                }
              }}
            />
          </div>
          <button 
            className="btn-blue" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              if (passwordInput === import.meta.env.VITE_ADMIN_PASSWORD) {
                setIsAuthenticated(true);
              } else {
                alert('Incorrect password!');
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Admin Navbar */}
      <nav style={{ 
        background: 'rgba(255, 255, 255, 0.98)', 
        padding: '15px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 10px 40px rgba(15, 23, 42, 0.08)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(15, 23, 42, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src="/logo.png" alt="SHNOOR Logo" style={{ height: '50px', width: 'auto' }} />
          <div style={{ height: '30px', width: '2px', background: '#e2e8f0' }}></div>
          <h2 style={{ margin: 0, color: '#0f172a', fontWeight: '800', fontSize: '1.4rem' }}>Control Panel</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#64748b', fontWeight: '700' }}>Hello, Admin</span>
          <button 
            onClick={() => setIsAuthenticated(false)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: '#fef2f2', 
              color: '#ef4444', 
              border: '1px solid #fca5a5', 
              padding: '10px 20px', 
              borderRadius: '10px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.target.style.background = '#fee2e2'; }}
            onMouseLeave={(e) => { e.target.style.background = '#fef2f2'; }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <aside style={{ width: '280px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
          <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '800', letterSpacing: '1px', marginBottom: '10px', paddingLeft: '10px' }}>Menu</h3>
          <button onClick={() => setActiveTab('kb')} style={tabStyle(activeTab === 'kb')}><MessageSquare size={20} /> Knowledge Base</button>
          <button onClick={() => setActiveTab('products')} style={tabStyle(activeTab === 'products')}><Database size={20} /> Products</button>
          
          <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '800', letterSpacing: '1px', marginTop: '20px', marginBottom: '10px', paddingLeft: '10px' }}>Orders</h3>
          <button onClick={() => setActiveTab('requests')} style={tabStyle(activeTab === 'requests')}><Clock size={20} /> Pending ({orders.filter(o => o.status === 'Requested').length})</button>
          <button onClick={() => setActiveTab('approved')} style={tabStyle(activeTab === 'approved')}><CheckCircle size={20} /> Approved ({orders.filter(o => o.status === 'Approved').length})</button>
          <button onClick={() => setActiveTab('paid')} style={tabStyle(activeTab === 'paid')}><DollarSign size={20} /> Paid Orders ({orders.filter(o => ['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'].includes(o.status)).length})</button>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '40px', overflowY: 'auto', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="admin-content">
              {activeTab === 'kb' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0 }}>Chatbot Knowledge Base</h2>
              <button className="btn-blue" onClick={startAdd}><Plus size={18} /> Add New Entry</button>
            </div>

            {(isAdding || editingId) && (
              <div className="admin-form-card fade-in">
                <h2>{isAdding ? 'Add New Knowledge Entry' : 'Edit Entry'}</h2>
                <div className="form-group">
                  <label>Keywords (comma separated)</label>
                  <input type="text" value={editForm.keywords} onChange={(e) => setEditForm({...editForm, keywords: e.target.value})} placeholder="e.g. cloud, services, azure" />
                </div>
                <div className="form-group">
                  <label>Bot Response</label>
                  <textarea value={editForm.response} onChange={(e) => setEditForm({...editForm, response: e.target.value})} placeholder="Type response..." rows={4} />
                </div>
                <div className="form-group">
                  <label>Navigation Route (Optional)</label>
                  <input type="text" value={editForm.route} onChange={(e) => setEditForm({...editForm, route: e.target.value})} placeholder="e.g. /about" />
                </div>
                <div className="form-group">
                  <label>Action Button Text (Optional)</label>
                  <input type="text" value={editForm.actionText} onChange={(e) => setEditForm({...editForm, actionText: e.target.value})} placeholder="e.g. Go to About Page" />
                </div>
                <div className="form-actions">
                  <button className="btn-save" onClick={handleSave}><Save size={16} /> Save</button>
                  <button className="btn-cancel" onClick={cancelEdit}><X size={16} /> Cancel</button>
                </div>
              </div>
            )}

            {unansweredQueries.length > 0 && (
              <div className="unanswered-section">
                <h2>Inbox: Unanswered User Queries</h2>
                <div className="kb-list">
                  {unansweredQueries.map(queryObj => (
                    <div key={queryObj.id} className="kb-card unanswered-card" style={{ borderLeft: '4px solid #f39c12' }}>
                      <div className="kb-card-content">
                        <div className="kb-keywords"><strong>Query:</strong> "{queryObj.query}"</div>
                        <div className="kb-response">Asked on: {new Date(queryObj.timestamp).toLocaleString()}</div>
                      </div>
                      <div className="kb-card-actions">
                        <button className="btn-blue" onClick={() => handleAnswerQuery(queryObj)}><Plus size={18} /> Resolve</button>
                        <button className="btn-icon delete" onClick={() => handleDeleteUnanswered(queryObj.id)}><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '15px' }}>
              <h2 style={{ margin: 0 }}>Current Knowledge Base</h2>
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#95a5a6' }} />
                <input type="text" placeholder="Search keywords or responses..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '8px', border: '1px solid #bdc3c7', outline: 'none' }} />
              </div>
            </div>

            <div className="kb-list">
              {filteredKnowledgeBase.map((entry) => (
                <div key={entry.id} className="kb-card">
                  <div className="kb-card-content">
                    <div className="kb-keywords"><strong>Keywords:</strong> {entry.keywords.join(', ')}</div>
                    <div className="kb-response"><strong>Response:</strong> {entry.response}</div>
                    {entry.route && <div className="kb-route"><strong>Route:</strong> {entry.route}</div>}
                    {entry.actionText && <div className="kb-action-text"><strong>Action Text:</strong> {entry.actionText}</div>}
                  </div>
                  <div className="kb-card-actions">
                    <button className="btn-icon edit" onClick={() => handleEdit(entry)}><Edit2 size={18} /></button>
                    <button className="btn-icon delete" onClick={() => handleDelete(entry.id)}><Trash2 size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'products' && (
          <div className="orders-section fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
              <h2 style={{ margin: 0 }}>Product Catalog</h2>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                  <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#95a5a6' }} />
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={productSearchQuery} 
                    onChange={(e) => setProductSearchQuery(e.target.value)} 
                    style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '8px', border: '1px solid #bdc3c7', outline: 'none' }} 
                  />
                </div>
                <button className="btn-blue" onClick={() => {
                  setIsAddingProduct(true);
                  setEditingProductId(null);
                  setProductForm({ name: '', tagline: '', description: '', badge: '', image: '', category: '', footerText: '', price: '' });
                }}><Plus size={18} /> Add New Product</button>
              </div>
            </div>

            {(isAddingProduct || editingProductId) && (
              <div className="admin-form-card fade-in">
                <h2>{isAddingProduct ? 'Add New Product' : 'Edit Product'}</h2>
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" value={productForm.name} onChange={(e) => setProductForm({...productForm, name: e.target.value})} placeholder="e.g. Organic Oats" />
                </div>
                <div className="form-group">
                  <label>Price ($)</label>
                  <input type="number" step="0.01" value={productForm.price} onChange={(e) => setProductForm({...productForm, price: e.target.value})} placeholder="e.g. 19.99" />
                </div>
                <div className="form-group">
                  <label>Product Image</label>
                  <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                    {productForm.image && (
                      <div style={{ width: '120px', height: '120px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#f8fafc', flexShrink: 0 }}>
                        <img src={productForm.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input 
                        type="text" 
                        value={productForm.image?.length > 200 ? '(Local File Attached)' : productForm.image} 
                        onChange={(e) => setProductForm({...productForm, image: e.target.value})} 
                        placeholder="Image URL (e.g., /oats.png)" 
                        style={{ flex: 1 }}
                      />
                      <label style={{
                        background: '#0f172a', border: 'none', padding: '10px 20px', 
                        borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap'
                      }}>
                        Upload Pic
                        <input 
                          type="file" 
                          accept="image/*" 
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              if (file.size > 2 * 1024 * 1024) {
                                alert('Please upload an image smaller than 2MB.');
                                return;
                              }
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setProductForm({...productForm, image: reader.result});
                              };
                              reader.readAsDataURL(file);
                            }
                          }} 
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea value={productForm.description} onChange={(e) => setProductForm({...productForm, description: e.target.value})} rows={3}></textarea>
                </div>
                <div className="form-actions">
                  <button className="btn-save" onClick={handleSaveProduct}><Save size={16} /> Save Product</button>
                  <button className="btn-cancel" onClick={() => { setIsAddingProduct(false); setEditingProductId(null); }}><X size={16} /> Cancel</button>
                </div>
              </div>
            )}

            <div className="kb-list">
              {products.filter(prod => 
                !productSearchQuery || 
                prod.name.toLowerCase().includes(productSearchQuery.toLowerCase()) || 
                prod.description?.toLowerCase().includes(productSearchQuery.toLowerCase())
              ).map(prod => (
                <div key={prod.id} className="kb-card">
                  <div className="kb-card-content">
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0f172a' }}>{prod.name} - ${prod.price}</div>
                    <div style={{ color: '#64748b' }}>{prod.description}</div>
                  </div>
                  <div className="kb-card-actions">
                    <button className="btn-icon edit" onClick={() => {
                      setEditingProductId(prod.id);
                      setProductForm(prod);
                      setIsAddingProduct(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}><Edit2 size={18} /></button>
                    <button className="btn-icon delete" onClick={() => handleDeleteProduct(prod.id)}><Trash2 size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="orders-section fade-in">
            <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b' }}><Clock color="#f59e0b" /> Pending Approvals</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
              {orders.filter(o => o.status === 'Requested').map(order => (
                <div key={order.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>
                        <User size={18} color="#3b82f6" /> {order.user}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>ID: {order.id}</div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{new Date(order.date).toLocaleString()}</div>
                    </div>
                    <div style={{ background: '#fef3c7', color: '#d97706', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>
                      Pending
                    </div>
                  </div>
                  
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontWeight: '600', marginBottom: '10px' }}>
                      <Package size={16} /> Order Items
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {order.items.map(item => (
                        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                          <span style={{ color: '#334155' }}>{item.name} <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>x{item.quantity}</span></span>
                          <span style={{ fontWeight: '600', color: '#0f172a' }}>${Number(item.price || 0).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.1rem', color: '#0f172a' }}>
                      <span>Total:</span>
                      <span>${calculateTotal(order.items)}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <button onClick={() => handleRejectOrder(order.id)} style={{ flex: 1, padding: '10px', background: '#fff', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#fef2f2'} onMouseLeave={(e) => e.target.style.background = '#fff'}>
                      Reject
                    </button>
                    <button onClick={() => handleApproveOrder(order.id)} style={{ flex: 1, padding: '10px', background: '#0f172a', border: 'none', color: '#fff', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#1e293b'} onMouseLeave={(e) => e.target.style.background = '#0f172a'}>
                      Approve Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {orders.filter(o => o.status === 'Requested').length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#fff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                <CheckCircle size={48} style={{ opacity: 0.5, marginBottom: '15px' }} />
                <h3>No pending requests</h3>
                <p>All caught up! Excellent work.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'approved' && (
          <div className="orders-section fade-in">
            <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b' }}><DollarSign color="#3b82f6" /> Waiting For Payment</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
              {orders.filter(o => o.status === 'Approved').map(order => (
                <div key={order.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>
                        <User size={18} color="#3b82f6" /> {order.user}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>ID: {order.id}</div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{new Date(order.date).toLocaleString()}</div>
                    </div>
                    <div style={{ background: '#eff6ff', color: '#2563eb', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>
                      Approved
                    </div>
                  </div>
                  
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontWeight: '600', marginBottom: '10px' }}>
                      <Package size={16} /> Order Items
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {order.items.map(item => (
                        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                          <span style={{ color: '#334155' }}>{item.name} <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>x{item.quantity}</span></span>
                          <span style={{ fontWeight: '600', color: '#0f172a' }}>${Number(item.price || 0).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.1rem', color: '#0f172a' }}>
                      <span>Total:</span>
                      <span>${calculateTotal(order.items)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {orders.filter(o => o.status === 'Approved').length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#fff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                <CheckCircle size={48} style={{ opacity: 0.5, marginBottom: '15px' }} />
                <h3>No approved requests</h3>
                <p>Approve some requests from the pending tab.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'paid' && (
          <div className="orders-section fade-in">
            <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b' }}><CheckCircle color="#10b981" /> Paid & Ready for Fulfillment</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
              {orders.filter(o => ['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'].includes(o.status)).map(order => (
                <div key={order.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>
                        <User size={18} color="#3b82f6" /> {order.user}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>ID: {order.id}</div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{new Date(order.date).toLocaleString()}</div>
                    </div>
                    <div style={{ background: '#ecfdf5', color: '#10b981', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontWeight: '600', marginBottom: '10px' }}>
                      <Package size={16} /> Order Items
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {order.items.map(item => (
                        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                          <span style={{ color: '#334155' }}>{item.name} <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>x{item.quantity}</span></span>
                          <span style={{ fontWeight: '600', color: '#0f172a' }}>${Number(item.price || 0).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.1rem', color: '#0f172a' }}>
                      <span>Total:</span>
                      <span>${calculateTotal(order.items)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.open(`/receipt/${order.id}`, '_blank')}
                    style={{ width: '100%', padding: '12px', background: '#e0e7ff', color: '#4f46e5', border: '1px solid #c7d2fe', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', transition: '0.2s' }}
                    onMouseEnter={(e) => { e.target.style.background = '#c7d2fe'; }}
                    onMouseLeave={(e) => { e.target.style.background = '#e0e7ff'; }}
                  >
                    <FileText size={18} /> View Receipt Preview
                  </button>
                </div>
              ))}
            </div>
            {orders.filter(o => ['Paid', 'Cash on Delivery', 'Awaiting Bank Transfer'].includes(o.status)).length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#fff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                <CheckCircle size={48} style={{ opacity: 0.5, marginBottom: '15px' }} />
                <h3>No paid orders yet</h3>
                <p>Orders will appear here once customers complete their payments.</p>
              </div>
            )}
          </div>
        )}
      </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const tabStyle = (isActive) => ({
  padding: '12px 24px',
  background: isActive ? '#0f172a' : 'transparent',
  color: isActive ? 'white' : '#64748b',
  border: isActive ? 'none' : '1px solid #cbd5e1',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s'
});

export default AdminPage;
