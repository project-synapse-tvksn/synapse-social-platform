import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sparkles, Brain, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side: Branding & Features */}
      <div className="hidden lg:flex flex-col justify-between p-12 synapse-gradient text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px]" />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
              <Sparkles className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-bold tracking-tight">Synapse</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold leading-tight"
          >
            The Future of <br />
            Social is <span className="text-cyan-300 italic">Neural.</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              { icon: Brain, title: "AI-Powered Suggestions", desc: "Never run out of creative ideas for your next post." },
              { icon: Shield, title: "Neural Moderation", desc: "A safe space protected by advanced AI analysis." },
              { icon: Zap, title: "Blazing Performance", desc: "Real-time interactions with zero latency." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 max-w-md"
              >
                <div className="mt-1 p-2 bg-white/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-sm text-white/50">
          © 2026 Synapse AI Platforms. Empowering global connectivity.
        </div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
