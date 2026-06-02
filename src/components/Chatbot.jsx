import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import INITIAL_KNOWLEDGE_BASE from '../data/chatbotKnowledgeBase.json';
import './Chatbot.css';

const getKnowledgeBase = () => {
  const stored = localStorage.getItem('shnoor_chatbot_kb_v47');
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem('shnoor_chatbot_kb_v47', JSON.stringify(INITIAL_KNOWLEDGE_BASE));
  return INITIAL_KNOWLEDGE_BASE;
};

const getLocalAIResponse = (input, currentMode) => {
  const normalizedInput = input.toLowerCase().replace(/[^\w\s.]/gi, '');

  const knowledgeBase = getKnowledgeBase();

  let bestMatch = null;
  let maxScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      const escapedKw = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp('\\b' + escapedKw + '\\b');
      if (regex.test(normalizedInput)) {
        score += keyword.length;
      }
    }
    let isAllowed = false;
    if (!currentMode || currentMode === 'Global') {
      isAllowed = true;
    } else {
      if (!entry.route || entry.route.startsWith('/')) isAllowed = true;
      else if (currentMode === 'HRM' && entry.route.includes('hrm.shnoor.com')) isAllowed = true;
      else if (currentMode === 'LMS' && entry.route.includes('lms.shnoor.com')) isAllowed = true;
      else if (currentMode === 'Assessments' && entry.route.includes('assessments.shnoor.com')) isAllowed = true;
      else if (currentMode === 'InvoiceCloud' && entry.route.includes('invoicecloud.in')) isAllowed = true;
      const switchKeywords = [
        "tell me about hrm", "hrm platform",
        "tell me about lms", "lms platform",
        "tell me about assessments", "assessment portal",
        "tell me about invoicecloud", "invoicecloud", "invoice cloud", "invoice cloud platform",
        "explore all platforms"
      ];
      if (switchKeywords.some(sw => normalizedInput.includes(sw))) {
        isAllowed = true;
      }
    }

    if (!isAllowed) continue;

    if (score > 0 && currentMode && currentMode !== 'Global' && entry.route) {
      if (currentMode === 'HRM' && entry.route.includes('hrm.shnoor.com')) score += 1000;
      else if (currentMode === 'LMS' && entry.route.includes('lms.shnoor.com')) score += 1000;
      else if (currentMode === 'Assessments' && entry.route.includes('assessments.shnoor.com')) score += 1000;
      else if (currentMode === 'InvoiceCloud' && entry.route.includes('invoicecloud.in')) score += 1000;
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

  const fallbackText = currentMode && currentMode !== 'Global'
    ? `I am currently focused on answering questions specifically about the ${currentMode} platform. However, your query has been logged and forwarded to our admin team. If you are asking about another platform, please click 'Explore all platforms' below.`
    : "I don't have the answer to that right now. Your query has been logged and forwarded to our admin team. They will train me on this soon. You can check back later, or contact admin@shnoor.com directly.";

  return {
    text: fallbackText,
    route: "mailto:admin@shnoor.com",
    actionText: "Email Admin"
  };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAssistantMode('Global');
  }, [location.pathname]);
  const [assistantMode, setAssistantMode] = useState('Global');
  const [messages, setMessages] = useState([
    { text: "Hello! I am your Shnoor AI Assistant. I can help you navigate our services, careers, portals, and more. How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [pendingQueries, setPendingQueries] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'shnoor_chatbot_kb_v47' && e.newValue) {
        if (pendingQueries.length > 0) {
          const newKb = JSON.parse(e.newValue);

          const stillPending = [];
          const resolvedMessages = [];

          pendingQueries.forEach(query => {
            const normalizedInput = query.toLowerCase().replace(/[^\w\s.]/gi, '');

            let bestMatch = null;
            let maxScore = 0;
            for (const entry of newKb) {
              let score = 0;
              for (const keyword of entry.keywords) {
                const kw = keyword.toLowerCase();
                const escapedKw = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp('\\b' + escapedKw + '\\b');
                if (regex.test(normalizedInput)) {
                  score += keyword.length;
                }
              }
              if (score > maxScore) {
                maxScore = score;
                bestMatch = entry;
              }
            }

            if (maxScore > 0 && bestMatch) {
              resolvedMessages.push({
                text: `Good news! The admin just answered your question about "${query}":\n\n${bestMatch.response}`,
                sender: "bot",
                route: bestMatch.route,
                actionText: bestMatch.actionText
              });
            } else {
              stillPending.push(query);
            }
          });

          if (resolvedMessages.length > 0) {
            setMessages(prev => [...prev, ...resolvedMessages]);
            setPendingQueries(stillPending);
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [pendingQueries]);

  const sendQuery = (text) => {
    if (!text.trim()) return;

    const userMsg = { text: text, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const responseData = getLocalAIResponse(text, assistantMode);
      const botResponse = {
        text: responseData.text,
        sender: "bot",
        route: responseData.route,
        actionText: responseData.actionText
      };
      if (responseData.text.includes("forwarded to our admin team")) {
        setPendingQueries(prev => {
          if (!prev.includes(text)) {
            return [...prev, text];
          }
          return prev;
        });
      }

      if (botResponse.route) {
        if (botResponse.route.includes('hrm.shnoor.com')) setAssistantMode('HRM');
        else if (botResponse.route.includes('lms.shnoor.com')) setAssistantMode('LMS');
        else if (botResponse.route.includes('assessments.shnoor.com')) setAssistantMode('Assessments');
        else if (botResponse.route.includes('invoicecloud.in')) setAssistantMode('InvoiceCloud');
        else if (botResponse.route.startsWith('/')) setAssistantMode('Global');
      } else if (text.toLowerCase().includes('explore') || text.toLowerCase().includes('all platforms') || text.toLowerCase().includes('services') || text.toLowerCase().includes('global')) {
        setAssistantMode('Global');
      }

      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    sendQuery(inputValue);
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion) => {
    sendQuery(suggestion);
  };

  const getSuggestions = () => {
    switch (assistantMode) {
      case 'HRM':
        return [
          "What is One Click Payroll?", "Tell me about Shift Management",
          "What are Appreciations?", "How to track attendance?",
          "Explain company policy", "Explore all platforms"
        ];
      case 'LMS':
        return [
          "What are the 8 core capabilities?", "Tell me about Live Instruction",
          "How do certifications work?", "What are Practice Labs?",
          "Explain Structured Cohorts", "Explore all platforms"
        ];
      case 'Assessments':
        return [
          "How does the exam process work?", "What are the security features?",
          "Is the exam auto-saved?", "Can I retake an exam?",
          "What is tab switch detection?", "Explore all platforms"
        ];
      case 'InvoiceCloud':
        return [
          "What is Smart Invoice Creation?", "How to automate payment reminders?",
          "Is there a free plan?", "Tell me about the dashboard",
          "How much is the business plan?", "Explore all platforms"
        ];
      default:
        return [
          "Tell me about HRM platform", "How does the LMS work?",
          "Tell me about Assessments", "Tell me about InvoiceCloud",
          "What IT services do you offer?", "Are there any job openings?",
          "Explore all platforms"
        ];
    }
  };

  return (
    <div className={`chatbot-wrapper mode-${assistantMode.toLowerCase()}`}>
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-title">
            <div className="chatbot-header-icon">
              <Bot size={20} />
            </div>
            <div>
              <h3>Shnoor AI {assistantMode !== 'Global' ? `- ${assistantMode}` : ''}</h3>
              <p>{assistantMode !== 'Global' ? `${assistantMode} Mode Active` : 'Online & Ready to Help'}</p>
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
                <p dangerouslySetInnerHTML={{
                  __html: msg.text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/\n/g, '<br/>')
                }}></p>
                {msg.route && msg.actionText && (
                  <button
                    className="chatbot-nav-btn"
                    onClick={() => {
                      if (msg.route.startsWith('http')) {
                        window.open(msg.route, '_blank', 'noopener,noreferrer');
                      } else if (msg.route.startsWith('mailto:') || msg.route.startsWith('tel:')) {
                        window.location.href = msg.route;
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

        <div className="chatbot-suggestions">
          {getSuggestions().map((suggestion, i) => (
            <button
              key={i}
              type="button"
              className="suggestion-pill"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
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
