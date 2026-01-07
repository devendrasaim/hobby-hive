import { Sprout, Flower2, TreeDeciduous } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillLevel = "seed" | "sprout" | "bloom";

interface SkillBadgeProps {
  hobby: string;
  level: SkillLevel;
  size?: "sm" | "md" | "lg";
}

const levelConfig = {
  seed: {
    icon: Sprout,
    label: "Seed",
    color: "text-pollinate",
    bgColor: "bg-pollinate/20",
    borderColor: "border-pollinate/30",
  },
  sprout: {
    icon: Flower2,
    label: "Sprout",
    color: "text-buzz",
    bgColor: "bg-buzz/20",
    borderColor: "border-buzz/30",
  },
  bloom: {
    icon: TreeDeciduous,
    label: "Bloom",
    color: "text-primary",
    bgColor: "bg-primary/20",
    borderColor: "border-primary/30",
  },
};

export const SkillBadge = ({ hobby, level, size = "md" }: SkillBadgeProps) => {
  const config = levelConfig[level];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        config.bgColor,
        config.borderColor,
        sizeClasses[size]
      )}
    >
      <Icon className={cn(iconSizes[size], config.color)} />
      <span className={config.color}>{hobby}</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-muted-foreground">{config.label}</span>
    </div>
  );
};


