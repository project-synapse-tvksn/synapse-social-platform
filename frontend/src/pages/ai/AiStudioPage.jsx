import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, Type, Hash, Wand2, Download, RefreshCw, Send } from 'lucide-react';
import Button from '../../components/common/Button';

const AiStudioPage = () => {
  const [activeTab, setActiveTab] = useState('image');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const tabs = [
    { id: 'image', label: 'Image Generation', icon: ImageIcon },
    { id: 'post', label: 'Post Writer', icon: Type },
    { id: 'hashtags', label: 'Smart Hashtags', icon: Hash },
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      if (activeTab === 'image') {
        setResult('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000');
      } else if (activeTab === 'post') {
        setResult(`Just explored the cutting-edge features of Synapse AI! 🚀 The way it integrates neural creativity directly into the social fabric is mind-blowing. Can't wait to see what the community builds with this. #Synapse #AI #FutureOfSocial`);
      } else {
        setResult('#SynapseAI #NeuralNetwork #Web3Social #CreativeTech #FutureIsNow #Innovation');
      }
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 synapse-gradient rounded-xl flex items-center justify-center">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            AI Studio
          </h1>
          <p className="text-muted-foreground mt-2">Generate incredible content with the Synapse Neural Engine.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 p-1 bg-accent/30 rounded-2xl w-fit border border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setResult(null);
                setPrompt('');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-background shadow-sm text-foreground border border-border'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass dark:glass-dark rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-indigo-500" />
              Your Prompt
            </h3>
            
            <textarea
              className="w-full h-40 bg-accent/50 border border-border rounded-xl p-4 resize-none focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder={
                activeTab === 'image' ? "Describe the image you want to generate (e.g., 'A futuristic cyberpunk city at sunset...')" :
                activeTab === 'post' ? "What do you want to talk about? (e.g., 'Write a post about my new AI project...')" :
                "Enter your post topic to generate viral hashtags..."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <Button 
              variant="gradient" 
              className="w-full mt-4" 
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate {activeTab === 'image' ? 'Image' : activeTab === 'post' ? 'Post' : 'Hashtags'}
                </>
              )}
            </Button>
          </div>

          {/* Quick Prompts */}
          <div className="glass dark:glass-dark rounded-2xl p-6 shadow-sm border border-border">
             <h3 className="font-bold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Inspiration</h3>
             <div className="space-y-2">
                {['Cyberpunk street', 'Minimalist logo', 'Abstract digital art'].map((suggestion, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setPrompt(suggestion)}
                    className="block w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-border text-muted-foreground hover:text-foreground"
                  >
                    "{suggestion}"
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-2">
          <div className="glass dark:glass-dark rounded-2xl p-6 shadow-sm border border-border h-full min-h-[500px] flex flex-col">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              Generated Result
            </h3>
            
            <div className="flex-1 flex items-center justify-center bg-accent/20 rounded-xl border border-border/50 p-6 relative overflow-hidden">
              {isGenerating ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border-4 border-indigo-500 border-t-cyan-500 rounded-full animate-spin" />
                  <p className="text-muted-foreground animate-pulse font-medium">Neural engine is processing...</p>
                </div>
              ) : result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col"
                >
                  {activeTab === 'image' ? (
                    <div className="relative group w-full h-full rounded-xl overflow-hidden shadow-lg">
                      <img src={result} alt="Generated" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 glass">
                          <Download className="w-4 h-4 mr-2" /> Download
                        </Button>
                        <Button variant="gradient">
                          <Send className="w-4 h-4 mr-2" /> Share to Feed
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-card rounded-xl p-8 border border-border shadow-sm flex flex-col">
                      <div className="flex-1 text-lg leading-relaxed whitespace-pre-wrap">
                        {result}
                      </div>
                      <div className="mt-8 flex justify-end gap-4">
                        <Button variant="outline">Copy to Clipboard</Button>
                        <Button variant="gradient">
                          <Send className="w-4 h-4 mr-2" /> Create Post
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="text-center text-muted-foreground max-w-sm">
                  <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Your generated content will appear here. Enter a prompt and harness the power of Synapse AI.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiStudioPage;
