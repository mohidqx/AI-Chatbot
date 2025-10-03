import { Sparkles } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useChat } from "@/hooks/useChat";
import botLogo from "@/assets/bot-logo.png";

const Index = () => {
  const { messages, isLoading, sendMessage, messagesEndRef } = useChat();

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <img src={botLogo} alt="AI Assistant" className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Powered by Gemini</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Online</span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-4xl">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <img src={botLogo} alt="AI Assistant" className="h-12 w-12" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Welcome to AI Assistant</h2>
                <p className="text-muted-foreground">
                  Start a conversation and experience the power of Gemini AI
                </p>
              </div>
            </div>
          ) : (
            <div className="py-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
              {isLoading && (
                <div className="flex gap-3 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <img src={botLogo} alt="AI Assistant" className="h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="container mx-auto max-w-4xl">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;
