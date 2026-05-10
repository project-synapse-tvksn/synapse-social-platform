import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Smile, 
  Paperclip, 
  MoreVertical, 
  Search, 
  Phone, 
  Video,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import Button from '../../components/common/Button';

const ChatList = ({ chats, activeChat, onChatSelect }) => (
  <div className="flex flex-col h-full border-r border-border">
    <div className="p-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search conversations..." 
          className="w-full pl-10 pr-4 py-2 bg-accent/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
        />
      </div>
      
      <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-250px)]">
        {chats.map((chat) => (
          <motion.div
            key={chat.id}
            whileHover={{ x: 5 }}
            onClick={() => onChatSelect(chat)}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
              activeChat?.id === chat.id 
                ? 'bg-primary/10 border-primary/20 border' 
                : 'hover:bg-accent border border-transparent'
            }`}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm truncate">{chat.name}</p>
                <span className="text-[10px] text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-1">{chat.lastMessage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ChatWindow = ({ chat }) => {
  const [message, setMessage] = useState('');

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6">
          <MessageCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Your Conversations</h3>
        <p className="text-muted-foreground max-w-xs">Select a chat from the sidebar to start messaging your neural network connections.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-background/50">
      {/* Chat Header */}
      <div className="h-16 px-6 border-b border-border flex items-center justify-between bg-card/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div>
            <p className="font-bold text-sm">{chat.name}</p>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Phone className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><Video className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><MoreVertical className="w-5 h-5" /></Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex justify-center mb-8">
          <span className="px-3 py-1 bg-accent/50 rounded-lg text-[10px] text-muted-foreground font-medium uppercase">Today</span>
        </div>

        {/* Example Messages */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 mt-1" />
          <div className="max-w-[70%] bg-card border border-border p-4 rounded-2xl rounded-tl-none">
            <p className="text-sm">Hey Alex! Did you see the new AI moderation features in Synapse? It's crazy how fast it identifies toxic content.</p>
            <span className="text-[10px] text-muted-foreground mt-2 block">10:42 AM</span>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 mt-1" />
          <div className="max-w-[70%] synapse-gradient text-white p-4 rounded-2xl rounded-tr-none shadow-lg shadow-primary/20">
            <p className="text-sm">I know, right? I'm integrating the same API into my current project. The latency is almost non-existent.</p>
            <span className="text-[10px] text-white/70 mt-2 block">10:45 AM</span>
          </div>
        </div>

        <div className="flex gap-3">
           <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mt-1 border border-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-500" />
           </div>
           <div className="max-w-[70%] bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-2xl rounded-tl-none italic">
             <p className="text-sm text-cyan-600 dark:text-cyan-400">Synapse AI Assistant: Alex is typing about the Node.js backend performance...</p>
           </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-6 bg-card/50 backdrop-blur-md">
        <div className="flex items-center gap-4 bg-accent/50 rounded-2xl p-2 border border-border">
          <Button variant="ghost" size="icon" className="shrink-0"><Paperclip className="w-5 h-5" /></Button>
          <input 
            type="text" 
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none outline-none text-sm px-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center gap-1 shrink-0">
            <Button variant="ghost" size="icon"><Smile className="w-5 h-5 text-yellow-500" /></Button>
            <Button variant="gradient" size="icon" className="rounded-xl">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatPage = () => {
  const chats = [
    { id: 1, name: 'Sarah Chen', lastMessage: 'The AI moderation is fire!', time: '2m', online: true },
    { id: 2, name: 'Alex Rivera', lastMessage: 'Check out the new repo.', time: '1h', online: false },
    { id: 3, name: 'Jordan Miller', lastMessage: 'Let\'s meet at 5?', time: '3h', online: true },
    { id: 4, name: 'Design Team', lastMessage: 'New mockups are ready.', time: '1d', online: false },
  ];

  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <div className="h-[calc(100vh-160px)] bg-card border border-border rounded-3xl overflow-hidden shadow-xl flex">
      <div className="w-80 h-full hidden lg:block">
        <ChatList chats={chats} activeChat={activeChat} onChatSelect={setActiveChat} />
      </div>
      <ChatWindow chat={activeChat} />
    </div>
  );
};


export default ChatPage;
