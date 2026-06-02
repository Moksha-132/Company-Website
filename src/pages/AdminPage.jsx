import React, { useState, useEffect } from 'react';
import { Save, Plus, Edit2, Trash2, Search, X } from 'lucide-react';
import INITIAL_KNOWLEDGE_BASE from '../data/chatbotKnowledgeBase.json';
import { db } from '../firebase';
import { collection, onSnapshot, setDoc, doc, deleteDoc } from 'firebase/firestore';
import './AdminPage.css';

const AdminPage = () => {
  const [knowledgeBase, setKnowledgeBase] = useState([]);
  const [unansweredQueries, setUnansweredQueries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ keywords: '', response: '', route: '', actionText: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }

    const kbRef = collection(db, 'knowledge_base');
    const unsubscribeKb = onSnapshot(kbRef, (snapshot) => {
      if (!snapshot.empty) {
        setKnowledgeBase(snapshot.docs.map(docSnap => docSnap.data()));
      } else {
        setKnowledgeBase(INITIAL_KNOWLEDGE_BASE);
      }
    });

    const unRef = collection(db, 'unanswered_queries');
    const unsubscribeUn = onSnapshot(unRef, (snapshot) => {
      const newQueries = snapshot.docs.map(docSnap => docSnap.data());
      
      setUnansweredQueries(prevQueries => {
        if (newQueries.length > prevQueries.length && prevQueries.length > 0) {
          const latestQuery = newQueries[newQueries.length - 1];
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Shnoor AI: New Unanswered Query", {
              body: `User asked: "${latestQuery.query}"\nPlease answer it in the Admin Dashboard.`
            });
          }
        }
        return newQueries;
      });
    });

    return () => {
      unsubscribeKb();
      unsubscribeUn();
    };
  }, []);

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
      await deleteDoc(doc(db, 'knowledge_base', id));
    }
  };

  const handleDeleteUnanswered = async (id) => {
    await deleteDoc(doc(db, 'unanswered_queries', id));
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
        actionText: editForm.actionText || null
      };
      await setDoc(doc(db, 'knowledge_base', newEntry.id), newEntry);
      setIsAdding(false);
    } else {
      const updatedEntry = {
        id: editingId,
        keywords: keywordArray,
        response: editForm.response,
        route: editForm.route || null,
        actionText: editForm.actionText || null
      };
      await setDoc(doc(db, 'knowledge_base', editingId), updatedEntry);
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

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Chatbot Knowledge Base</h1>
        <p>Manage the data the chatbot uses to answer user queries.</p>
        <button className="btn-blue" onClick={startAdd}>
          <Plus size={18} /> Add New Entry
        </button>
      </div>

      <div className="admin-content">
        {(isAdding || editingId) && (
          <div className="admin-form-card fade-in">
            <h2>{isAdding ? 'Add New Knowledge Entry' : 'Edit Entry'}</h2>
            <div className="form-group">
              <label>Keywords (comma separated)</label>
              <input 
                type="text" 
                value={editForm.keywords} 
                onChange={(e) => setEditForm({...editForm, keywords: e.target.value})}
                placeholder="e.g. cloud, services, azure"
              />
            </div>
            <div className="form-group">
              <label>Bot Response</label>
              <textarea 
                value={editForm.response} 
                onChange={(e) => setEditForm({...editForm, response: e.target.value})}
                placeholder="Type the response the bot should give when it detects these keywords..."
                rows={4}
              />
            </div>
            <div className="form-group">
              <label>Navigation Route (Optional)</label>
              <input 
                type="text" 
                value={editForm.route} 
                onChange={(e) => setEditForm({...editForm, route: e.target.value})}
                placeholder="e.g. /about or /services/cloud"
              />
            </div>
            <div className="form-group">
              <label>Action Button Text (Optional)</label>
              <input 
                type="text" 
                value={editForm.actionText} 
                onChange={(e) => setEditForm({...editForm, actionText: e.target.value})}
                placeholder="e.g. Go to About Page"
              />
            </div>
            <div className="form-actions">
              <button className="btn-save" onClick={handleSave}>
                <Save size={16} /> Save
              </button>
              <button className="btn-cancel" onClick={cancelEdit}>
                <X size={16} /> Cancel
              </button>
            </div>
          </div>
        )}

        {unansweredQueries.length > 0 && (
          <div className="unanswered-section">
            <h2>Inbox: Unanswered User Queries</h2>
            <p>Users asked these questions but the Chatbot didn't know the answer. Add them to the Knowledge Base!</p>
            <div className="kb-list">
              {unansweredQueries.map(queryObj => (
                <div key={queryObj.id} className="kb-card unanswered-card" style={{ borderLeft: '4px solid #f39c12' }}>
                  <div className="kb-card-content">
                    <div className="kb-keywords">
                      <strong>User Asked:</strong> "{queryObj.query}"
                    </div>
                    <div className="kb-response" style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
                      <strong>Date:</strong> {new Date(queryObj.date).toLocaleString()}
                    </div>
                  </div>
                  <div className="kb-card-actions">
                    <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '0.9rem', marginRight: '8px' }} onClick={() => handleAnswerQuery(queryObj)}>
                      Answer
                    </button>
                    <button className="btn-icon delete" onClick={() => handleDeleteUnanswered(queryObj.id)} title="Dismiss">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr style={{ margin: '2rem 0', borderColor: '#ecf0f1' }}/>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '15px' }}>
          <h2 style={{ margin: 0 }}>Current Knowledge Base</h2>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#95a5a6' }} />
            <input 
              type="text" 
              placeholder="Search keywords, responses, or routes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '12px 15px 12px 40px', borderRadius: '8px', border: '1px solid #bdc3c7', fontSize: '0.95rem', outline: 'none' }}
            />
          </div>
        </div>
        
        {filteredKnowledgeBase.length === 0 && searchQuery && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#7f8c8d', background: 'white', borderRadius: '12px', border: '1px dashed #bdc3c7' }}>
            <p>No matches found for "{searchQuery}". Try a different term or add a new entry.</p>
          </div>
        )}

        <div className="kb-list">
          {filteredKnowledgeBase.map(entry => (
            <div key={entry.id} className="kb-card">
              <div className="kb-card-content">
                <div className="kb-keywords">
                  <strong>Keywords:</strong> 
                  <div className="keyword-tags">
                    {entry.keywords.map((kw, i) => (
                      <span key={i} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                </div>
                <div className="kb-response">
                  <strong>Response:</strong>
                  <p>{entry.response}</p>
                </div>
                {entry.route && (
                  <div className="kb-route">
                    <strong>Route Action:</strong>
                    <span className="route-badge">{entry.actionText} ➔ {entry.route}</span>
                  </div>
                )}
              </div>
              <div className="kb-card-actions">
                <button className="btn-icon edit" onClick={() => handleEdit(entry)} title="Edit">
                  <Edit2 size={18} />
                </button>
                <button className="btn-icon delete" onClick={() => handleDelete(entry.id)} title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
