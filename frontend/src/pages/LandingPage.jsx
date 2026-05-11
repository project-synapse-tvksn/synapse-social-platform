import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, MessageSquare, Shield, ArrowRight, Zap, Globe, Cpu } from 'lucide-react';
import Button from '../components/common/Button';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass dark:glass-dark border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 synapse-gradient rounded-xl flex items-center justify-center">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight synapse-text-gradient">Synapse</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#ai" className="hover:text-primary transition-colors">AI Engine</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="gradient" size="sm">Join Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] -z-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] -z-10 animate-pulse delay-700" />

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" /> The future of social interaction is here
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
              Connect. Create. <br />
              <span className="synapse-text-gradient">Intelligently.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Synapse is the next-generation AI-powered social ecosystem designed for creators, thinkers, and builders. Experience seamless connectivity enhanced by neural moderation and generative creativity.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/register">
                <Button variant="gradient" size="lg" className="w-full md:w-auto px-10">
                  Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full md:w-auto px-10">
                View Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="glass dark:glass-dark rounded-2xl p-4 shadow-2xl border border-white/10">
              <div className="bg-slate-900 rounded-xl aspect-video w-full overflow-hidden flex items-center justify-center text-slate-700">
                {/* Mockup Content Placeholder */}
                <Cpu className="w-20 h-20 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Unleash the Power of AI</h2>
            <p className="text-muted-foreground">Premium features built for the modern era.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
                title: "AI Creativity",
                desc: "Generate captions, hashtags, and even image prompts directly within your feed."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-cyan-500" />,
                title: "Neural Chat",
                desc: "Real-time communication with smart suggestions and instant translation."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-500" />,
                title: "Smart Communities",
                desc: "Find your tribe with our neural-matching algorithm that connects shared interests."
              },
              {
                icon: <Shield className="w-8 h-8 text-emerald-500" />,
                title: "Auto-Moderation",
                desc: "Safe, inclusive environment powered by real-time AI content analysis."
              },
              {
                icon: <Globe className="w-8 h-8 text-orange-500" />,
                title: "Global Reach",
                desc: "Scale your presence with intelligent distribution across the entire network."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "Ultra Responsive",
                desc: "Blazing fast experience on every device, from mobile to desktop."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary w-6 h-6" />
            <span className="text-xl font-bold">Synapse</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Synapse AI Social Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">Discord</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
