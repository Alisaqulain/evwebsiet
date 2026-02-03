'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 Welcome to Royal Metro EV. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Default message options
  const defaultMessages = [
    'What is the price?',
    'Tell me about products',
    'Battery specifications',
    'Warranty details',
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim()

    // Greetings
    if (message.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return 'Hello! 👋 Thank you for contacting Royal Metro EV. How can I assist you today?'
    }

    // Price related
    if (message.match(/(price|cost|how much|pricing|rate|rs|rupee)/)) {
      return 'Our e-rickshaws are competitively priced with various models available. For detailed pricing information, please contact us at +91 9520587777 or visit our showroom. Would you like to know about any specific model?'
    }

    // Product/Model information
    if (message.match(/(model|product|rickshaw|vehicle|ev|electric)/)) {
      return 'Royal Metro EV offers premium electric e-rickshaws with advanced features including:\n• Long-lasting battery life\n• Eco-friendly zero emissions\n• Low maintenance cost\n• Smooth and comfortable ride\n• Modern design\n\nWould you like more details about any specific feature?'
    }

    // Battery related
    if (message.match(/(battery|charge|charging|range|km|kilometer|mileage)/)) {
      return 'Our e-rickshaws come with high-quality lithium-ion batteries that provide excellent range per charge. The exact range depends on the model and usage conditions. Typically, you can expect 80-120 km per charge. Charging time is approximately 6-8 hours. Need more details?'
    }

    // Warranty/Service
    if (message.match(/(warranty|service|maintenance|repair|support|after sales)/)) {
      return 'We provide comprehensive warranty coverage and excellent after-sales service. Our service network ensures your e-rickshaw stays in top condition. For specific warranty terms and service details, please contact our support team at +91 9520587777.'
    }

    // Booking/Purchase
    if (message.match(/(buy|purchase|book|order|buying|booking|delivery|available)/)) {
      return 'Great! We\'d love to help you get your Royal Metro EV e-rickshaw. You can:\n1. Visit our showroom for a test drive\n2. Call us at +91 9520587777\n3. Book online through our website\n\nWe offer flexible financing options and quick delivery. Would you like to schedule a test drive?'
    }

    // Location/Address
    if (message.match(/(location|address|where|showroom|office|place|city)/)) {
      return 'For showroom locations and addresses, please contact us at +91 9520587777. We have multiple service centers and showrooms. Our team will guide you to the nearest location.'
    }

    // Features/Specifications
    if (message.match(/(feature|specification|spec|capacity|load|weight|speed)/)) {
      return 'Our e-rickshaws feature:\n• High load capacity\n• Excellent speed and performance\n• Advanced safety features\n• Comfortable seating\n• Modern dashboard with digital display\n• LED lighting\n• USB charging port\n\nWant details about any specific feature?'
    }

    // Financing
    if (message.match(/(finance|loan|emi|installment|payment|down payment)/)) {
      return 'We offer flexible financing options with competitive interest rates. You can choose from various EMI plans. Our finance team will help you find the best option. Contact us at +91 9520587777 for personalized finance solutions.'
    }

    // Test drive
    if (message.match(/(test drive|test|demo|trial|try)/)) {
      return 'Absolutely! We encourage test drives so you can experience the quality of Royal Metro EV. Please call us at +91 9520587777 to schedule a convenient time. We\'ll arrange everything for you!'
    }

    // Contact information
    if (message.match(/(contact|phone|number|call|email|whatsapp)/)) {
      return 'You can reach us at:\n📞 Phone: +91 9520587777\n💬 WhatsApp: +91 9520587777\n\nOur team is available to assist you with any queries. Feel free to contact us anytime!'
    }

    // Thank you
    if (message.match(/(thank|thanks|appreciate|grateful)/)) {
      return 'You\'re welcome! 😊 Happy to help. Is there anything else you\'d like to know about Royal Metro EV?'
    }

    // Goodbye
    if (message.match(/(bye|goodbye|see you|tata|exit)/)) {
      return 'Thank you for contacting Royal Metro EV! Have a great day! 🚀 Feel free to reach out anytime. Drive safe!'
    }

    // Benefits/Advantages
    if (message.match(/(benefit|advantage|why|why should|pros|good)/)) {
      return 'Royal Metro EV e-rickshaws offer:\n✅ Zero emissions - Eco-friendly\n✅ Low running cost\n✅ Government subsidies available\n✅ Easy to drive\n✅ Low maintenance\n✅ Perfect for commercial use\n✅ High resale value\n\nReady to make the switch?'
    }

    // Comparison
    if (message.match(/(compare|comparison|vs|versus|better|difference)/)) {
      return 'Royal Metro EV stands out with:\n• Superior build quality\n• Advanced technology\n• Excellent customer service\n• Strong warranty\n• Wide service network\n• Proven track record\n\nWant to know more about how we compare?'
    }

    // Default intelligent response
    return `Thank you for your message! I understand you're asking about "${userMessage}". 

For detailed information about Royal Metro EV e-rickshaws, I recommend:
• Calling us at +91 9520587777
• Visiting our showroom for a personal consultation
• Checking our website for detailed specifications

Is there anything specific about our e-rickshaws you'd like to know? I can help with pricing, features, battery, warranty, or booking information.`
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay for more natural conversation
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // 1-2 second delay
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`fixed ${isOpen ? 'bottom-4 right-4 sm:bottom-6 sm:right-6' : 'bottom-[72px] right-4 sm:bottom-24 sm:right-6'} z-50 transition-all duration-300`}>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 text-white touch-manipulation"
          aria-label="Open chat"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-1.5rem)] sm:w-80 md:w-96 h-[calc(100vh-6rem)] sm:h-[500px] md:h-[600px] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">RM</span>
              </div>
              <div>
                <h3 className="font-semibold">Royal Metro EV</h3>
                <p className="text-xs text-blue-100">Online Support</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 hover:bg-white/20 rounded-full p-1 transition-all duration-200 flex items-center justify-center w-8 h-8"
              aria-label="Close chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Default Message Options */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 mb-2 mt-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {defaultMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(msg)
                      inputRef.current?.focus()
                    }}
                    className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 text-gray-700"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

