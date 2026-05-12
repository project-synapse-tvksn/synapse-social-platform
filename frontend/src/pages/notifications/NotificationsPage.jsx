import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  UserPlus, 
  Zap, 
  Sparkles,
  MoreHorizontal
} from 'lucide-react';
import Button from '../../components/common/Button';

const NotificationCard = ({ icon: Icon, color, title, desc, time, read }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className={`p-6 rounded-2xl border ${read ? 'bg-card border-border' : 'bg-primary/5 border-primary/20'} flex gap-4 transition-all mb-4`}
  >
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-sm`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-sm">{title}</h4>
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{time}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
    <Button variant="ghost" size="icon" className="shrink-0">
      <MoreHorizontal className="w-4 h-4" />
    </Button>
  </motion.div>
);

const NotificationsPage = () => {
  const notifications = [
    {
      icon: Heart,
      color: 'bg-rose-500',
      title: 'Sarah Chen liked your post',
      desc: '"Just deployed the new Synapse AI engine! The latency is down by 40%..."',
      time: '2m ago',
      read: false
    },
    {
      icon: UserPlus,
      color: 'bg-indigo-500',
      title: 'New Neural Connection',
      desc: 'Jordan Miller followed you and added you to their "Tech Builders" circle.',
      time: '1h ago',
      read: false
    },
    {
      icon: MessageCircle,
      color: 'bg-cyan-500',
      title: 'Message Request',
      desc: 'Alex Rivera sent you a message: "Hey! Love the new UI updates you shared..."',
      time: '3h ago',
      read: true
    },
    {
      icon: Sparkles,
      color: 'synapse-gradient',
      title: 'AI Insight Available',
      desc: 'Your recent post about Web3 is trending in the San Francisco tech hub.',
      time: '1d ago',
      read: true
    },
    {
      icon: Zap,
      color: 'bg-amber-500',
      title: 'System Update',
      desc: 'Synapse Core v2.4.0 is now live. Check out the new generative AI features.',
      time: '2d ago',
      read: true
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with your neural network activity.</p>
        </div>
        <Button variant="outline" size="sm">Mark all as read</Button>
      </div>

      <div className="space-y-2">
        {notifications.map((notif, idx) => (
          <NotificationCard key={idx} {...notif} />
        ))}
      </div>

      <div className="py-12 text-center">
         <p className="text-muted-foreground text-sm">No more notifications for today.</p>
      </div>
    </div>
  );
};

export default NotificationsPage;
