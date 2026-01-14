import { Search, Plus, Users, Lock, Globe } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mockGuilds = [
  {
    id: "1",
    name: "Ames Photographers",
    description: "Local photography enthusiasts capturing the beauty of Iowa",
    memberCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=200&fit=crop",
    isPrivate: false,
    isMember: true,
  },
  {
    id: "2",
    name: "Sunset Painters",
    description: "We paint sunsets every weekend. Join our virtual sessions!",
    memberCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=200&fit=crop",
    isPrivate: false,
    isMember: true,
  },
  {
    id: "3",
    name: "Secret Bakers Club",
    description: "Exclusive recipes and techniques for serious bakers",
    memberCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1486427944544-d2c6128c1f69?w=400&h=200&fit=crop",
    isPrivate: true,
    isMember: false,
  },
  {
    id: "4",
    name: "Trail Runners United",
    description: "From 5K to ultramarathons - we run it all",
    memberCount: 234,
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop",
    isPrivate: false,
    isMember: false,
  },
];

const Guilds = () => {
  return (
    <AppLayout>
      <div className="safe-top px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Guilds</h1>
            <p className="text-muted-foreground">Your hobby communities</p>
          </div>
          <Button variant="honey" size="icon" className="rounded-xl">
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search guilds..."
            className="pl-12 h-12 rounded-2xl bg-hive-card border-border"
          />
        </div>

        {/* My Guilds */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-4">My Guilds</h2>
          <div className="space-y-4">
            {mockGuilds
              .filter((g) => g.isMember)
              .map((guild) => (
                <GuildCard key={guild.id} {...guild} />
              ))}
          </div>
        </div>

        {/* Discover Guilds */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-4">Discover</h2>
          <div className="space-y-4">
            {mockGuilds
              .filter((g) => !g.isMember)
              .map((guild) => (
                <GuildCard key={guild.id} {...guild} />
              ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

interface GuildCardProps {
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
  isPrivate: boolean;
  isMember: boolean;
}

const GuildCard = ({
  name,
  description,
  memberCount,
  imageUrl,
  isPrivate,
  isMember,
}: GuildCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-hive-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer group">
      {/* Image */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hive-card to-transparent" />
        
        {/* Privacy Badge */}
        <div className="absolute top-3 right-3">
          <div
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
              isPrivate
                ? "bg-stash/80 text-white"
                : "bg-pollinate/80 text-white"
            )}
          >
            {isPrivate ? (
              <>
                <Lock className="w-3 h-3" />
                Private
              </>
            ) : (
              <>
                <Globe className="w-3 h-3" />
                Public
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Users className="w-4 h-4" />
            <span>{memberCount} members</span>
          </div>
          {!isMember && (
            <Button variant="honey" size="sm">
              Join
            </Button>
          )}
          {isMember && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              Member
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guilds;
