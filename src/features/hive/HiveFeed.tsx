import { BuzzCard } from "./BuzzCard";

// Mock data for demo
const mockBuzzes = [
  {
    id: "1",
    username: "paintmaster",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    videoUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1200&fit=crop",
    caption: "Just finished this sunset piece! 🎨 Oil on canvas, took about 6 hours. What do you think?",
    hobbyTag: "Painting",
    nectarCount: 1243,
    buzzCount: 89,
  },
  {
    id: "2",
    username: "guitarjam",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    videoUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=1200&fit=crop",
    caption: "Learning fingerpicking for 30 days straight! Day 15 progress 🎸✨",
    hobbyTag: "Guitar",
    nectarCount: 892,
    buzzCount: 56,
  },
  {
    id: "3",
    username: "hikequeen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    videoUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1200&fit=crop",
    caption: "Summit reached! 🏔️ 14,000 ft and the view was absolutely worth every step",
    hobbyTag: "Hiking",
    nectarCount: 2156,
    buzzCount: 134,
  },
  {
    id: "4",
    username: "bakingbliss",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    videoUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=1200&fit=crop",
    caption: "My first sourdough after 3 months of practice! The crumb is finally right 🍞",
    hobbyTag: "Baking",
    nectarCount: 1567,
    buzzCount: 98,
  },
];

export const HiveFeed = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y-mandatory scrollbar-hide">
      {mockBuzzes.map((buzz) => (
        <BuzzCard key={buzz.id} {...buzz} />
      ))}
    </div>
  );
};


