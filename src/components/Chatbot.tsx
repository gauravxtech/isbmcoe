
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Gaurav, your ISBM College assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const collegeData = {
    basic: {
      name: "ISBM College of Engineering (ISBM COE)",
      established: "2010",
      affiliation: "Savitribai Phule Pune University (SPPU)",
      accreditation: "NAAC B++",
      code: "6622",
      location: "Survey No. 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115, Maharashtra, India"
    },
    contact: {
      phone: "+91-7410769206, 020-35012011/2012",
      email: "admissionscoe@isbm.ac.in",
      website: "https://www.isbmcoe.org/"
    },
    programs: {
      "Computer Engineering": "180 seats",
      "Artificial Intelligence & Machine Learning": "120 seats", 
      "Artificial Intelligence & Data Science": "120 seats",
      "Electronics & Telecommunication Engineering": "30 seats",
      "Mechanical Engineering": "60 seats",
      "Computer Science Engineering": "60 seats"
    },
    approvals: ["AICTE", "DTE Maharashtra", "Government of Maharashtra"],
    facilities: ["State-of-art laboratories", "Library", "Hostel", "Sports facilities", "Clubs & Societies"]
  };

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you with information about ISBM College of Engineering. What would you like to know?";
    }
    
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) {
      return `For admissions to ISBM COE, you can contact us at ${collegeData.contact.phone} or email ${collegeData.contact.email}. We offer programs in Computer Engineering (180 seats), AI & ML (120 seats), AI & Data Science (120 seats), Electronics & Telecom (30 seats), Mechanical (60 seats), and Computer Science (60 seats).`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return `You can contact ISBM College of Engineering at:
Phone: ${collegeData.contact.phone}
Email: ${collegeData.contact.email}
Address: ${collegeData.basic.location}`;
    }
    
    if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('branch')) {
      return `ISBM COE offers the following B.E. programs:
• Computer Engineering (180 seats)
• Artificial Intelligence & Machine Learning (120 seats)
• Artificial Intelligence & Data Science (120 seats)
• Electronics & Telecommunication Engineering (30 seats)
• Mechanical Engineering (60 seats)
• Computer Science Engineering (60 seats)`;
    }
    
    if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
      return "For detailed fee structure information, please contact our admissions office at 7410769206 or visit our campus. Fee details vary by program and category.";
    }
    
    if (lowerMessage.includes('naac') || lowerMessage.includes('accreditation')) {
      return `ISBM College of Engineering is accredited by NAAC with B++ grade. We are also approved by AICTE, DTE Maharashtra, and recognized by the Government of Maharashtra.`;
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return `ISBM College of Engineering is located at: ${collegeData.basic.location}. We are situated in Nande Village, ahead of Pashan Sus Road, Pune.`;
    }
    
    if (lowerMessage.includes('placement') || lowerMessage.includes('job')) {
      return "ISBM COE has a dedicated Training & Placement Cell with strong industry connections. Our graduates are placed in leading companies. For specific placement statistics, please contact our placement cell.";
    }
    
    if (lowerMessage.includes('facility') || lowerMessage.includes('infrastructure')) {
      return `ISBM COE offers excellent facilities including:
• State-of-the-art laboratories
• Comprehensive library
• Hostel accommodation
• Sports & recreation facilities
• Various student clubs & societies
• Modern classrooms and equipment`;
    }
    
    if (lowerMessage.includes('principal') || lowerMessage.includes('hod')) {
      return "Our Principal is Dr. P. K. Srivastava. We have experienced faculty members with Ph.D. and industry experience across all departments.";
    }
    
    if (lowerMessage.includes('affiliation') || lowerMessage.includes('university')) {
      return `ISBM College of Engineering is affiliated to Savitribai Phule Pune University (SPPU) and was established in ${collegeData.basic.established}.`;
    }
    
    return "I'd be happy to help you with information about ISBM College of Engineering. You can ask me about admissions, courses, contact details, facilities, accreditation, or any other college-related queries!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(inputMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-college-accent hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-college-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-college-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <h3 className="font-semibold">Gaurav</h3>
                <p className="text-xs text-gray-300">ISBM Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-college-accent text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me about ISBM COE..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-college-accent hover:bg-orange-600 text-white p-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
