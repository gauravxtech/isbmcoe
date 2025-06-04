
import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Gaurav, your virtual assistant for ISBM College of Engineering. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const collegeData = {
    name: "ISBM College of Engineering (ISBM COE)",
    established: "2010",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    accreditation: "NAAC B++",
    institutionCode: "6622",
    address: "Survey No. 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115, Maharashtra, India",
    phone: "+91-7410769206, 020-35012011/2012",
    email: "admissionscoe@isbm.ac.in",
    website: "https://www.isbmcoe.org/",
    programs: {
      "Computer Engineering": "180 seats",
      "Artificial Intelligence & Machine Learning": "120 seats", 
      "Artificial Intelligence & Data Science": "120 seats",
      "Electronics & Telecommunication Engineering": "30 seats",
      "Mechanical Engineering": "60 seats",
      "Computer Science Engineering": "60 seats"
    },
    placement: {
      highest: "16 Lakhs",
      average: "5.5 Lakhs",
      rate: "75%",
      companies: "130+"
    },
    principal: "Dr. P. K. Srivastava",
    founder: "Dr. Pramod Kumar",
    campusSize: "17 acre"
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm Gaurav from ISBM COE. I can help you with information about our college, admissions, courses, placements, and more. What would you like to know?";
    }
    
    if (lowerMessage.includes('name') || lowerMessage.includes('college name')) {
      return `Our college is ${collegeData.name}, established in ${collegeData.established}.`;
    }
    
    if (lowerMessage.includes('address') || lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return `ISBM College of Engineering is located at ${collegeData.address}`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
      return `You can contact us at:\nPhone: ${collegeData.phone}\nEmail: ${collegeData.email}`;
    }
    
    if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('degree') || lowerMessage.includes('branch')) {
      const programs = Object.entries(collegeData.programs)
        .map(([program, seats]) => `• ${program}: ${seats}`)
        .join('\n');
      return `We offer the following undergraduate engineering programs:\n${programs}`;
    }
    
    if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('salary')) {
      return `Our placement statistics:\n• Highest Package: ₹${collegeData.placement.highest}\n• Average Package: ₹${collegeData.placement.average}\n• Placement Rate: ${collegeData.placement.rate}\n• Partner Companies: ${collegeData.placement.companies}`;
    }
    
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply') || lowerMessage.includes('eligibility')) {
      return "For admissions:\n• Online registration through official portal\n• Document verification at Facilitation Centers\n• Merit-based selection through CAP rounds\n• Contact: 7410769206 for admission queries";
    }
    
    if (lowerMessage.includes('naac') || lowerMessage.includes('accreditation') || lowerMessage.includes('grade')) {
      return `ISBM COE is accredited by NAAC with grade ${collegeData.accreditation}. We are also approved by AICTE and affiliated to ${collegeData.affiliation}.`;
    }
    
    if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('fees')) {
      return "For detailed fee structure, please contact our admissions office at 7410769206 or email admissionscoe@isbm.ac.in. Fee varies by program and category.";
    }
    
    if (lowerMessage.includes('facility') || lowerMessage.includes('infrastructure') || lowerMessage.includes('lab')) {
      return `Our ${collegeData.campusSize} campus features:\n• State-of-the-art laboratories\n• Modern classrooms\n• Comprehensive library\n• Separate hostel facilities\n• Sports & recreation facilities\n• Various student clubs`;
    }
    
    if (lowerMessage.includes('principal') || lowerMessage.includes('head') || lowerMessage.includes('management')) {
      return `Our Principal is ${collegeData.principal}. The college was founded by ${collegeData.founder} and is part of People's Empowerment Group.`;
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('story') || lowerMessage.includes('history')) {
      return `ISBM College of Engineering is a NAAC B++ accredited institution, part of People's Empowerment Group. Founded in ${collegeData.established} by ${collegeData.founder}, we maintain high educational standards and focus on creating industry-ready engineers. We're pioneers of extended library hours & laboratory access in Pune!`;
    }
    
    return "I can help you with information about ISBM COE including admissions, courses, placements, facilities, contact details, and more. Could you please be more specific about what you'd like to know?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(inputMessage),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-college-primary to-college-secondary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-college-accent rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Gaurav</h3>
                <p className="text-xs opacity-80">ISBM COE Assistant</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-transparent hover:bg-white/20 p-1 rounded"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-college-accent text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 mt-1 text-college-primary" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-1" />
                    )}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about ISBM COE..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-college-accent hover:bg-orange-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
