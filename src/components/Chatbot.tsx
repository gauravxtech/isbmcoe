import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Send, User, Bot, Brain, Download, Trash2, ThumbsUp, ThumbsDown, Globe, Zap } from 'lucide-react';
import { useAdvancedChatbot } from '@/hooks/useAdvancedChatbot';
import { cn } from '@/lib/utils';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    isLoading,
    sendMessage,
    giveFeedback,
    clearConversation,
    exportConversation,
    sessionId
  } = useAdvancedChatbot({
    enableLearning: true,
    enableWebData: true,
    maxMessages: 100
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '' || isLoading) return;
    
    await sendMessage(inputMessage);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    giveFeedback(messageId, isPositive ? 5 : 1);
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 relative"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <Badge className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs px-1">
            AI
          </Badge>
        </Button>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    AI Assistant
                    <Zap className="h-4 w-4 text-yellow-300" />
                  </h3>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    Smart • Learning • Real-time
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  onClick={exportConversation}
                  className="bg-transparent hover:bg-white/20 p-1 rounded"
                  size="sm"
                  title="Export conversation"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  onClick={clearConversation}
                  className="bg-transparent hover:bg-white/20 p-1 rounded"
                  size="sm"
                  title="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/20 p-1 rounded"
                  size="sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Status Indicators */}
            <div className="flex justify-between items-center mt-2 text-xs">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px] bg-white/20">
                  Session: {sessionId.slice(-8)}
                </Badge>
                <Badge variant="secondary" className="text-[10px] bg-green-500/20">
                  Learning: ON
                </Badge>
              </div>
              <div className="text-white/70">
                {messages.length} messages
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <Brain className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  AI-Powered Assistant
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  I'm your intelligent assistant for ISBM College of Engineering. I can:
                </p>
                <div className="text-xs text-left space-y-1 bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span>Learn from our conversations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-3 w-3 text-green-500" />
                    <span>Fetch real-time web data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-3 w-3 text-yellow-500" />
                    <span>Provide contextual responses</span>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={cn(
                    "max-w-[85%] p-3 rounded-lg shadow-sm",
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200',
                    message.isTyping && 'animate-pulse'
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                    )}
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm whitespace-pre-line break-words">
                        {message.text}
                      </p>
                      {message.hasLearned && (
                        <Badge className="mt-2 bg-green-100 text-green-800 text-xs">
                          <Brain className="h-3 w-3 mr-1" />
                          Learned
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                    
                    {message.sender === 'bot' && !message.isTyping && (
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 hover:bg-green-100"
                          onClick={() => handleFeedback(message.id, true)}
                        >
                          <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 hover:bg-red-100"
                          onClick={() => handleFeedback(message.id, false)}
                        >
                          <ThumbsDown className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Area */}
          <div className="p-4 border-t bg-white dark:bg-gray-900">
            <div className="flex space-x-2 items-end">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about ISBM COE..."
                  className="w-full resize-none min-h-[40px] max-h-[120px]"
                  disabled={isLoading}
                />
                <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                  <span>Press Enter to send</span>
                  {isLoading && (
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </span>
                  )}
                </div>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className={cn(
                  "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
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