import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send } from "lucide-react";

interface Message {
  id: number;
  role: "bot" | "user";
  content: string;
}

const demoMessages: Message[] = [
  { id: 1, role: "user", content: "Hi! I need help with my order #12345" },
  { id: 2, role: "bot", content: "Hello! I'd be happy to help you with order #12345. I can see it was shipped yesterday and is currently in transit. Would you like the tracking link?" },
  { id: 3, role: "user", content: "Yes please, when will it arrive?" },
  { id: 4, role: "bot", content: "Here's your tracking link: track.7fs.ai/12345. Based on the current status, your order is expected to arrive by Thursday, March 28th. Is there anything else I can help you with?" },
];

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= demoMessages.length) {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    const message = demoMessages[currentIndex];
    
    if (message.role === "bot") {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, message]);
        setCurrentIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(typingTimer);
    } else {
      const userTimer = setTimeout(() => {
        setMessages((prev) => [...prev, message]);
        setCurrentIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(userTimer);
    }
  }, [currentIndex]);

  return (
    <div className="glass rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">7FS AI Assistant</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-white/80">Online • Responds instantly</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 p-4 space-y-4 overflow-hidden bg-background/50">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.role === "bot"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {message.role === "bot" ? (
                  <Bot className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.role === "bot"
                    ? "bg-muted"
                    : "gradient-bg text-primary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-muted rounded-full px-4 py-3">
            <p className="text-sm text-muted-foreground">Type your message...</p>
          </div>
          <button className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
