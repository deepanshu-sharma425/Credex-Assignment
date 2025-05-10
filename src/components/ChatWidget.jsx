import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Define suggested questions for quick selection
const suggestedQuestions = [
  'How do I sell my license?',
  'What types of licenses can I sell?',
  'How much is my license worth?',
  'How long does the process take?',
  'Is selling my license legal?'
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "👋 Hi there! I'm SoftSell's AI assistant. How can I help you today?",
          isUser: false,
          timestamp: new Date()
        }
      ]);
      setShowSuggestions(true);
    }
  }, [isOpen, messages.length]);

  const handleSend = async (text = inputValue) => {
    if (text.trim() === '') return;
    
    // Add user message
    const userMessage = {
      text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false); // Hide suggestions after user sends a message
    
    try {
      // Get response from Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const prompt = `You are a helpful AI assistant for SoftSell, a software license resale platform. 
        Answer the following question about software license resale: ${text}
        Keep responses concise and focused on software licensing and resale.`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();
      
      const botMessage = {
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our support team.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (question) => {
    handleSend(question);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
      
      {/* Chat Widget */}
      {isOpen && (
        <div 
          className={`fixed z-50 bottom-6 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 flex flex-col w-full max-w-sm ${
            isMinimized ? 'h-16' : 'h-[32rem]'
          }`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-full text-white mr-3">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">SoftSell Assistant</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isTyping ? 'Typing...' : 'Online'}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={toggleMinimize}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={toggleChat}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.isUser 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
                      }`}
                    >
                      {message.isUser ? (
                        <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br>') }} />
                      ) : (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Suggested Questions */}
                {showSuggestions && messages.length === 1 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">You can ask me about:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(question)}
                          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm py-1.5 px-3 rounded-full transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg rounded-bl-none max-w-[80%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef}></div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t dark:border-gray-700">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex space-x-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 py-2 px-4 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
                  />
                  <button
                    type="submit"
                    disabled={inputValue.trim() === ''}
                    className={`p-3 rounded-full ${
                      inputValue.trim() === '' 
                        ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition-colors`}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;