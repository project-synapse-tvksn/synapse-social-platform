import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageCircle, 
  Bell, 
  User, 
  Settings, 
  Sparkles, 
  LogOut, 
  Menu, 
  X,
  Search,
  TrendingUp,
  Brain,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/common/Button';

const SidebarItem = ({ icon: Icon, label, to, active, collapsed }) => (
  <Link to={to}>
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
          : 'hover:bg-accent text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className="w-6 h-6 shrink-0" />
      {!collapsed && <span className="font-medium">{label}</span>}
    </motion.div>
  </Link>
);

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: 'Feed', to: '/dashboard' },
    { icon: MessageCircle, label: 'Messages', to: '/chat' },
    { icon: Bell, label: 'Notifications', to: '/notifications' },
    { icon: User, label: 'Profile', to: `/profile/${user?.username || 'me'}` },
    { icon: Sparkles, label: 'AI Studio', to: '/ai' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-background transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside 
        className={`hidden md:flex flex-col border-r border-border fixed h-full transition-all duration-300 z-40 bg-card/50 backdrop-blur-md ${
          collapsed ? 'w-20' : 'w-72'
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 synapse-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold synapse-text-gradient">Synapse</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.to} 
              {...item} 
              active={location.pathname === item.to}
              collapsed={collapsed}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-border space-y-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-4 px-4"
            onClick={toggleTheme}
          >
            <Brain className="w-6 h-6 text-cyan-500" />
            {!collapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-4 px-4 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={logout}
          >
            <LogOut className="w-6 h-6" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${collapsed ? 'md:ml-20' : 'md:ml-72'}`}>
        {/* Header (Search & Mobile Toggle) */}
        <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-md px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="md:hidden">
               <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
                 <Menu className="w-6 h-6" />
               </Button>
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search Synapse..." 
                className="w-full pl-10 pr-4 py-2 bg-accent/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-indigo-500 uppercase tracking-wider">AI Online</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="text-primary w-5 h-5" />
                )}
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Right Sidebar (Trending/Suggestions) - Hidden on smaller screens */}
      <aside className="hidden xl:flex flex-col w-80 border-l border-border p-6 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            <h3 className="font-bold text-lg">Trending Topics</h3>
          </div>
          {['#AIFuture', '#SynapseDev', '#Web3Social', '#NeuralArt'].map((tag) => (
            <div key={tag} className="p-4 rounded-2xl bg-accent/30 hover:bg-accent/50 cursor-pointer transition-colors border border-transparent hover:border-border">
              <p className="font-bold text-sm text-primary">{tag}</p>
              <p className="text-xs text-muted-foreground mt-1">2.4k posts this hour</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-cyan-500" />
            <h3 className="font-bold text-lg">Who to Follow</h3>
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">User {i}</p>
                <p className="text-xs text-muted-foreground truncate">@username{i}</p>
              </div>
              <Button size="sm" variant="outline" className="h-8 text-xs">Follow</Button>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 p-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold synapse-text-gradient">Synapse</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <SidebarItem 
                    key={item.to} 
                    {...item} 
                    active={location.pathname === item.to}
                    collapsed={false}
                  />
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
