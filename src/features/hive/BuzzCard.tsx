import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BuzzCardProps {
  id: string;
  username: string;
  avatar: string;
  videoUrl: string;
  caption: string;
  hobbyTag: string;
  nectarCount: number;
  buzzCount: number;
  isStashed?: boolean;
}

export const BuzzCard = ({
  username,
  avatar,
  videoUrl,
  caption,
  hobbyTag,
  nectarCount: initialNectar,
  buzzCount,
  isStashed: initialStashed = false,
}: BuzzCardProps) => {
  const [nectarCount, setNectarCount] = useState(initialNectar);
  const [hasNectared, setHasNectared] = useState(false);
  const [isStashed, setIsStashed] = useState(initialStashed);

  const handleNectar = () => {
    if (!hasNectared) {
      setNectarCount((prev) => prev + 1);
      setHasNectared(true);
    } else {
      setNectarCount((prev) => prev - 1);
      setHasNectared(false);
    }
  };

  const handleStash = () => {
    setIsStashed(!isStashed);
  };

  return (
    <div className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${videoUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex">
        {/* Left side - Caption & Info */}
        <div className="flex-1 flex flex-col justify-end p-4 pb-24">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-3">
            <img
              src={avatar}
              alt={username}
              className="w-12 h-12 rounded-full border-2 border-primary object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">@{username}</p>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                {hobbyTag}
              </span>
            </div>
          </div>

          {/* Caption */}
          <p className="text-sm text-foreground/90 line-clamp-3 mb-4">
            {caption}
          </p>

          {/* Try This Hobby Button */}
          <Button variant="honey" size="lg" className="w-full max-w-xs">
            <Sparkles className="w-5 h-5" />
            Try This Hobby
          </Button>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-col items-center justify-end gap-5 p-4 pb-28">
          {/* Nectar (Like) */}
          <button
            onClick={handleNectar}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                hasNectared
                  ? "bg-nectar text-white nectar-fill"
                  : "bg-hive-card/80 backdrop-blur text-foreground"
              )}
            >
              <Heart
                className={cn("w-6 h-6", hasNectared && "fill-current")}
              />
            </div>
            <span className="text-xs font-medium text-foreground">
              {nectarCount}
            </span>
          </button>

          {/* Buzz (Comment) */}
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-hive-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-buzz hover:text-white transition-all duration-300">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-foreground">
              {buzzCount}
            </span>
          </button>

          {/* Pollinate (Share) */}
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-hive-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-pollinate hover:text-white transition-all duration-300">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-foreground">Share</span>
          </button>

          {/* Stash (Save) */}
          <button
            onClick={handleStash}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                isStashed
                  ? "bg-stash text-white"
                  : "bg-hive-card/80 backdrop-blur text-foreground"
              )}
            >
              <Bookmark
                className={cn("w-6 h-6", isStashed && "fill-current")}
              />
            </div>
            <span className="text-xs font-medium text-foreground">Stash</span>
          </button>
        </div>
      </div>
    </div>
  );
};


