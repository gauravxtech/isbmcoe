import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, User, Bot, Download, Trash2, ThumbsUp, ThumbsDown } from 'lucide-react';
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
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Compact Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-72 h-[400px] bg-card rounded-2xl shadow-2xl border border-border z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base">
                    Gaurav
                  </h3>
                  <p className="text-xs opacity-90">
                    Your AI Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  onClick={clearConversation}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-6 w-6 p-0"
                  title="Clear chat"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-muted/30">
            {messages.length === 0 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">
                  Hi! I'm Gaurav 👋
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Your friendly AI assistant for ISBM COE
                </p>
                <div className="text-xs text-muted-foreground">
                  Ask me anything about admissions, courses, or campus life!
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
                    "max-w-[85%] p-2 rounded-xl shadow-sm text-sm",
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground border border-border',
                    message.isTyping && 'animate-pulse'
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs whitespace-pre-line break-words">
                        {message.text}
                      </p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                  
                  {message.sender === 'bot' && !message.isTyping && (
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-5 w-5 p-0 hover:bg-green-100 rounded-full"
                        onClick={() => handleFeedback(message.id, true)}
                      >
                        <ThumbsUp className="h-2 w-2" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-5 w-5 p-0 hover:bg-red-100 rounded-full"
                        onClick={() => handleFeedback(message.id, false)}
                      >
                        <ThumbsDown className="h-2 w-2" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Compact Input Area */}
          <div className="p-3 border-t border-border bg-card">
            <div className="flex space-x-2 items-center">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full text-sm border-input focus:ring-ring rounded-full"
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-8 w-8 p-0"
              >
                {isLoading ? (
                  <div className="w-3 h-3 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="h-3 w-3" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;