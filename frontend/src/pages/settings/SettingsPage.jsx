import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Moon, 
  Sun, 
  Monitor,
  Eye,
  Globe,
  Database
} from 'lucide-react';
import Button from '../../components/common/Button';
import { useTheme } from '../../context/ThemeContext';

const SettingsSection = ({ title, icon: Icon, children }) => (
  <div className="bg-card border border-border rounded-3xl p-6 mb-6 shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary/10 rounded-xl">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const SettingItem = ({ label, description, action }) => (
  <div className="flex items-center justify-between py-4 border-b border-border last:border-none">
    <div>
      <p className="font-bold text-sm">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
    <div>{action}</div>
  </div>
);

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your neural network profile and preferences.</p>
      </div>

      <SettingsSection title="Appearance" icon={Monitor}>
        <SettingItem 
          label="Interface Theme" 
          description="Customize how Synapse looks on your device."
          action={
            <div className="flex bg-accent/50 p-1 rounded-xl border border-border">
              <button 
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${theme === 'light' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Sun className="w-4 h-4" /> Light
              </button>
              <button 
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${theme === 'dark' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Moon className="w-4 h-4" /> Dark
              </button>
            </div>
          }
        />
        <SettingItem 
          label="Glassmorphism Effects" 
          description="Enable or disable transparency and blur effects."
          action={<div className="w-12 h-6 bg-primary rounded-full relative shadow-inner"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>}
        />
      </SettingsSection>

      <SettingsSection title="Account Security" icon={Shield}>
        <SettingItem 
          label="Two-Factor Authentication" 
          description="Add an extra layer of security to your account."
          action={<Button variant="outline" size="sm">Enable</Button>}
        />
        <SettingItem 
          label="Password" 
          description="Last changed 3 months ago."
          action={<Button variant="outline" size="sm">Update</Button>}
        />
      </SettingsSection>

      <SettingsSection title="AI Preferences" icon={Globe}>
        <SettingItem 
          label="Generative Content" 
          description="Allow AI to suggest captions and hashtags for your posts."
          action={<div className="w-12 h-6 bg-primary rounded-full relative shadow-inner"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>}
        />
        <SettingItem 
          label="Data Training" 
          description="Contribute anonymous interaction data to improve neural models."
          action={<div className="w-12 h-6 bg-accent rounded-full relative shadow-inner"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" /></div>}
        />
      </SettingsSection>

      <div className="flex justify-end gap-4 py-8">
        <Button variant="ghost">Reset Defaults</Button>
        <Button variant="gradient" className="px-10">Save All Changes</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
