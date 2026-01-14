import { Search, TrendingUp, MapPin } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
import { HobbyCard } from "@/features/discover/HobbyCard";
import { Input } from "@/components/ui/input";

const trendingHobbies = [
  {
    name: "Pottery",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=500&fit=crop",
    memberCount: 12453,
    isPopular: true,
  },
  {
    name: "Urban Sketching",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=500&fit=crop",
    memberCount: 8921,
    isPopular: true,
  },
  {
    name: "Rock Climbing",
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&h=500&fit=crop",
    memberCount: 15632,
    isPopular: false,
  },
  {
    name: "Drone Photography",
    imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=500&fit=crop",
    memberCount: 6789,
    isPopular: false,
  },
  {
    name: "Candle Making",
    imageUrl: "https://images.unsplash.com/photo-1602607434359-12d86117e6f2?w=400&h=500&fit=crop",
    memberCount: 4521,
    isPopular: false,
  },
  {
    name: "Calligraphy",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=500&fit=crop",
    memberCount: 9876,
    isPopular: false,
  },
];

const categories = [
  { name: "Creative", emoji: "🎨" },
  { name: "Sports", emoji: "⚽" },
  { name: "Music", emoji: "🎵" },
  { name: "Outdoors", emoji: "🏕️" },
  { name: "Tech", emoji: "💻" },
  { name: "Wellness", emoji: "🧘" },
];

const Discover = () => {
  return (
    <AppLayout>
      <div className="safe-top px-4 py-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Discover</h1>
          <p className="text-muted-foreground">Find your next passion</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search hobbies, guilds, or bees..."
            className="pl-12 h-12 rounded-2xl bg-hive-card border-border"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-hive-card border border-border hover:border-primary hover:bg-hive-elevated transition-all duration-200 whitespace-nowrap"
            >
              <span className="text-lg">{category.emoji}</span>
              <span className="text-sm font-medium text-foreground">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-honey-gold/20 to-honey-amber/10 border border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Daily Pollen</p>
              <p className="text-xs text-muted-foreground">Today's challenge</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 rounded-2xl bg-hive-card border border-border hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-buzz/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-buzz" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Near You</p>
              <p className="text-xs text-muted-foreground">Local events</p>
            </div>
          </button>
        </div>

        {/* Trending Hobbies */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Trending Hobbies</h2>
            <button className="text-primary text-sm font-medium">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingHobbies.map((hobby) => (
              <HobbyCard key={hobby.name} {...hobby} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Discover;
