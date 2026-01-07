import { Settings, Edit2, Grid3X3, Bookmark, Clock } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/features/profile/SkillBadge";
import { HoneycombGrid } from "@/features/profile/HoneycombGrid";
import { SettingsSheet } from "@/features/settings/SettingsSheet";
import { EditProfileSheet } from "@/features/profile/EditProfileSheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mockProfile = {
  username: "creativebee",
  displayName: "Sarah Chen",
  bio: "🐝 Finding joy in every hobby | Painting enthusiast | Aspiring baker | Mountain lover",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  nectarBalance: 2847,
  following: 342,
  followers: 1.2,
  skills: [
    { hobby: "Painting", level: "bloom" as const },
    { hobby: "Baking", level: "sprout" as const },
    { hobby: "Hiking", level: "seed" as const },
  ],
};

const mockHoneycomb = [
  { id: "1", imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=300&h=300&fit=crop", type: "video" as const },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop", type: "image" as const },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop", type: "image" as const },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop", type: "video" as const },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=300&fit=crop", type: "image" as const },
  { id: "6", imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=300&h=300&fit=crop", type: "video" as const },
];

type TabType = "posts" | "stashed" | "capsules";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("posts");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const tabs = [
    { id: "posts" as const, icon: Grid3X3, label: "Posts" },
    { id: "stashed" as const, icon: Bookmark, label: "Stashed" },
    { id: "capsules" as const, icon: Clock, label: "Capsules" },
  ];

  return (
    <AppLayout>
      <div className="safe-top">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">
            @{mockProfile.username}
          </h1>
          <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)}>
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="px-4 space-y-4">
          {/* Avatar & Stats */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={mockProfile.avatar}
                alt={mockProfile.displayName}
                className="w-20 h-20 rounded-full border-2 border-primary object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <span className="text-xs">🐝</span>
              </div>
            </div>

            <div className="flex-1 flex justify-around">
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{mockProfile.nectarBalance}</p>
                <p className="text-xs text-muted-foreground">Nectar</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{mockProfile.followers}K</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{mockProfile.following}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>

          {/* Name & Bio */}
          <div>
            <h2 className="font-bold text-foreground">{mockProfile.displayName}</h2>
            <p className="text-sm text-muted-foreground mt-1">{mockProfile.bio}</p>
          </div>

          {/* Edit Profile */}
          <Button variant="outline" className="w-full" onClick={() => setEditProfileOpen(true)}>
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </Button>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2">
            {mockProfile.skills.map((skill) => (
              <SkillBadge
                key={skill.hobby}
                hobby={skill.hobby}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mt-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 transition-all duration-200",
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="p-1">
          {activeTab === "posts" && <HoneycombGrid items={mockHoneycomb} />}
          {activeTab === "stashed" && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Bookmark className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your stashed buzzes will appear here</p>
            </div>
          )}
          {activeTab === "capsules" && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Clock className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Create a time capsule to track your progress</p>
              <Button variant="honey" className="mt-4">
                Create Capsule
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Settings Sheet */}
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />

      {/* Edit Profile Sheet */}
      <EditProfileSheet
        open={editProfileOpen}
        onOpenChange={setEditProfileOpen}
        profile={mockProfile}
        onSave={(updatedProfile) => {
          // TODO: Update profile state when connected to backend
        }}
      />
    </AppLayout>
  );
};

export default Profile;
