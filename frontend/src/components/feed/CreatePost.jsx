import React, { useState } from 'react';
import { 
  Image, 
  Video, 
  Smile, 
  Sparkles
} from 'lucide-react';
import Button from '../common/Button';

const CreatePost = () => {
  const [content, setContent] = useState('');

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-sm">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
        <div className="flex-1">
          <textarea 
            placeholder="What's on your neural network?"
            className="w-full bg-transparent border-none resize-none text-lg focus:ring-0 outline-none placeholder:text-muted-foreground min-h-[100px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-indigo-500">
                <Image className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cyan-500">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-yellow-500">
                <Smile className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-purple-500 gap-2 font-bold px-3">
                <Sparkles className="w-4 h-4" />
                AI Generate
              </Button>
            </div>
            <Button variant="gradient" disabled={!content.trim()} className="px-8 rounded-full">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
