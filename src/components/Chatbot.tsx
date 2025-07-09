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
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-background rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Professional Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    ISBM Assistant
                  </h3>
                  <p className="text-sm opacity-90">
                    How can I help you today?
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  onClick={exportConversation}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-white/10"
                  title="Export conversation"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  onClick={clearConversation}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-white/10"
                  title="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/30">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Welcome to ISBM COE
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm here to help you with admissions, courses, campus life, and more.
                </p>
                <div className="text-sm text-muted-foreground">
                  Ask me anything about the college!
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
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground border',
                    message.isTyping && 'animate-pulse'
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-3 w-3 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm whitespace-pre-line break-words">
                        {message.text}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">
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

          {/* Professional Input Area */}
          <div className="p-4 border-t bg-background">
            <div className="flex space-x-2 items-end">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about ISBM COE..."
                  className="w-full"
                  disabled={isLoading}
                />
                <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                  <span>Press Enter to send</span>
                  {isLoading && (
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </span>
                  )}
                </div>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className={cn(
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