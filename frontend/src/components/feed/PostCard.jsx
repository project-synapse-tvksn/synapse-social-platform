import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal
} from 'lucide-react';
import Button from '../common/Button';

const PostCard = ({ user, content, time, likes, comments, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl overflow-hidden mb-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div>
              <p className="font-bold text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground">{time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-foreground leading-relaxed mb-4">
          {content}
        </p>

        {image && (
          <div className="rounded-xl overflow-hidden mb-4 border border-border">
            <img src={image} alt="Post" className="w-full h-auto" />
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 text-sm transition-colors ${liked ? 'text-rose-500' : 'text-muted-foreground hover:text-rose-500'}`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span>{likes + (liked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-500 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-1">
             <div className="w-2 h-2 bg-emerald-500 rounded-full" />
             <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">AI Moderated</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
