import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Link as LinkIcon, 
  Calendar, 
  Edit3, 
  Grid, 
  FileText, 
  Users,
  Settings
} from 'lucide-react';
import Button from '../../components/common/Button';
import PostCard from '../../components/feed/PostCard'; 

const ProfilePage = () => {
  const user = {
    name: 'Alex Rivera',
    username: 'arivera_dev',
    bio: 'Building the future of social networks with AI. Senior Architect @ Synapse. Coffee lover & Open Source enthusiast.',
    location: 'San Francisco, CA',
    website: 'alexrivera.dev',
    joined: 'Joined May 2024',
    followers: '12.4k',
    following: '482',
    posts: 156
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Profile Header Card */}
      <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm mb-8">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 synapse-gradient relative">
           <div className="absolute inset-0 bg-black/20" />
           <Button variant="glass" size="sm" className="absolute bottom-4 right-4 gap-2">
             <Edit3 className="w-4 h-4" /> Edit Cover
           </Button>
        </div>

        {/* Profile Info */}
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 -mt-16 md:-mt-20 mb-6">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-slate-200 dark:bg-slate-800 border-4 border-card shadow-xl overflow-hidden">
                {/* Profile Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                   <Users className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-card rounded-full" />
            </div>
            
            <div className="flex gap-3 pb-2">
              <Button variant="outline" size="md" className="rounded-xl gap-2">
                <Settings className="w-4 h-4" /> Settings
              </Button>
              <Button variant="gradient" size="md" className="rounded-xl gap-2 px-8">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">@{user.username}</p>
            </div>

            <p className="text-lg leading-relaxed max-w-2xl">
              {user.bio}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {user.location}
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" /> 
                <a href="#" className="text-primary hover:underline">{user.website}</a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {user.joined}
              </div>
            </div>

            <div className="flex gap-8 pt-4 border-t border-border">
              <div className="flex gap-2 items-baseline">
                <span className="font-bold text-lg">{user.followers}</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Followers</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <span className="font-bold text-lg">{user.following}</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Following</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <span className="font-bold text-lg">{user.posts}</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Posts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content Tabs */}
      <div className="space-y-8">
        <div className="flex gap-8 border-b border-border pb-px">
          <button className="flex items-center gap-2 px-4 py-4 border-b-2 border-primary text-primary font-bold text-sm">
            <Grid className="w-4 h-4" /> POSTS
          </button>
          <button className="flex items-center gap-2 px-4 py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm transition-all">
            <FileText className="w-4 h-4" /> REPLIES
          </button>
          <button className="flex items-center gap-2 px-4 py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm transition-all">
            <Users className="w-4 h-4" /> MEDIA
          </button>
        </div>

        {/* Reusing Dashboard layout for posts */}
        <div className="grid grid-cols-1 gap-6">
           <div className="max-w-2xl">
             <p className="text-muted-foreground text-center py-12 bg-card rounded-2xl border border-dashed border-border">
               User's posts will appear here.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
