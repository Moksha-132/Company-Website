import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import INITIAL_KNOWLEDGE_BASE from '../data/chatbotKnowledgeBase.json';
import './Chatbot.css';

const getKnowledgeBase = () => {
  const stored = localStorage.getItem('shnoor_chatbot_kb_v9');
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem('shnoor_chatbot_kb_v9', JSON.stringify(INITIAL_KNOWLEDGE_BASE));
  return INITIAL_KNOWLEDGE_BASE;
};

const getLocalAIResponse = (input) => {
  const normalizedInput = input.toLowerCase().replace(/[^\w\s.]/gi, '');
  const userWords = normalizedInput.split(/\s+/);
  
  const knowledgeBase = getKnowledgeBase();
  
  let bestMatch = null;
  let maxScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        score += keyword.length;
      } else {
        for (const word of userWords) {
          if (word === keyword.toLowerCase()) {
            score += 2;
          }
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = {
        text: entry.response,
        route: entry.route,
        actionText: entry.actionText
      };
    }
  }

  if (maxScore > 0) {
    return bestMatch;
  }
  
  try {
    const unanswered = JSON.parse(localStorage.getItem('shnoor_unanswered') || '[]');
    if (!unanswered.some(q => q.query.toLowerCase() === input.toLowerCase())) {
      unanswered.push({ 
        id: Date.now().toString(), 
        query: input, 
        date: new Date().toISOString() 
      });
      localStorage.setItem('shnoor_unanswered', JSON.stringify(unanswered));
    }
  } catch (e) {
    console.error("Could not save unanswered query", e);
  }

  return {
    text: "I don't have the answer to that right now. Your query has been logged and forwarded to our admin team. They will train me on this soon. You can check back later, or contact admin@shnoor.com directly.",
    route: "mailto:admin@shnoor.com",
    actionText: "Email Admin"
  };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hello! I am your Shnoor AI Assistant. I can help you navigate our services, careers, portals, and more. How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setTimeout(() => {
      const responseData = getLocalAIResponse(userMsg.text);
      const botResponse = { 
        text: responseData.text, 
        sender: "bot", 
        route: responseData.route,
        actionText: responseData.actionText 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-title">
            <div className="chatbot-header-icon">
              <Bot size={20} />
            </div>
            <div>
              <h3>Shnoor AI</h3>
              <p>Online & Ready to Help</p>
            </div>
          </div>
          <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-message ${msg.sender}`}>
              <div className="chatbot-message-avatar">
                {msg.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="chatbot-message-content">
                <p>{msg.text}</p>
                {msg.route && msg.actionText && (
                  <button 
                    className="chatbot-nav-btn" 
                    onClick={() => {
                      if (msg.route.startsWith('http')) {
                        window.open(msg.route, '_blank', 'noopener,noreferrer');
                      } else {
                        navigate(msg.route);
                      }
                      setIsOpen(false);
                    }}
                  >
                    {msg.actionText} <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Ask about our services or platforms..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" disabled={!inputValue.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>
      <button 
        className={`chatbot-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
