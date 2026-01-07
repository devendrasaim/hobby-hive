import { Camera, Video, Image, Sparkles, X } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const options = [
    {
      icon: Video,
      title: "Record Buzz",
      description: "Create a new short video",
      color: "from-nectar to-nectar/80",
    },
    {
      icon: Image,
      title: "Upload Media",
      description: "Share photos or videos from gallery",
      color: "from-buzz to-buzz/80",
    },
    {
      icon: Camera,
      title: "Time Capsule",
      description: "Record your progress for the future",
      color: "from-stash to-stash/80",
    },
    {
      icon: Sparkles,
      title: "Daily Pollen",
      description: "Complete today's hobby challenge",
      color: "from-honey-gold to-honey-amber",
    },
  ];

  return (
    <AppLayout hideNav>
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <div className="flex items-center justify-between p-4 safe-top">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <X className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-bold text-foreground">Create</h1>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6 space-y-4">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block animate-float">🐝</span>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Share Your Buzz
            </h2>
            <p className="text-muted-foreground">
              What did you create or learn today?
            </p>
          </div>

          <div className="space-y-3">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.title}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-hive-card border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom padding */}
        <div className="h-8 safe-bottom" />
      </div>
    </AppLayout>
  );
};

export default Create;
