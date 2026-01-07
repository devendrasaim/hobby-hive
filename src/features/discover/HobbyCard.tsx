import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface HobbyCardProps {
  name: string;
  imageUrl: string;
  memberCount: number;
  isPopular?: boolean;
}

export const HobbyCard = ({
  name,
  imageUrl,
  memberCount,
  isPopular = false,
}: HobbyCardProps) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-hive-card">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
          🔥 Trending
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <Users className="w-4 h-4" />
          <span>{memberCount.toLocaleString()} bees</span>
        </div>
      </div>
    </div>
  );
};


