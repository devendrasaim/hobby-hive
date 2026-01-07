import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Camera, Link, Instagram, Twitter, Globe } from "lucide-react";

interface EditProfileSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: {
    username: string;
    displayName: string;
    bio: string;
    avatar: string;
  };
  onSave: (profile: {
    username: string;
    displayName: string;
    bio: string;
    avatar: string;
    website?: string;
    instagram?: string;
    twitter?: string;
  }) => void;
}

export const EditProfileSheet = ({
  open,
  onOpenChange,
  profile,
  onSave,
}: EditProfileSheetProps) => {
  const [formData, setFormData] = useState({
    displayName: profile.displayName,
    username: profile.username,
    bio: profile.bio,
    avatar: profile.avatar,
    website: "",
    instagram: "",
    twitter: "",
  });

  const handleSave = () => {
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl overflow-y-auto">
        <SheetHeader className="pb-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <SheetTitle className="text-lg">Edit Profile</SheetTitle>
            <Button variant="honey" size="sm" onClick={handleSave}>
              Save
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 pb-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <img
                src={formData.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-primary object-cover"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <Button variant="link" className="text-primary text-sm">
              Change Profile Photo
            </Button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={formData.displayName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, displayName: e.target.value }))
                }
                placeholder="Your display name"
                className="bg-muted/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  @
                </span>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, username: e.target.value }))
                  }
                  placeholder="username"
                  className="pl-8 bg-muted/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bio: e.target.value }))
                }
                placeholder="Tell us about yourself..."
                className="bg-muted/30 min-h-[100px] resize-none"
                maxLength={150}
              />
              <p className="text-xs text-muted-foreground text-right">
                {formData.bio.length}/150
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  value={formData.website}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, website: e.target.value }))
                  }
                  placeholder="Website URL"
                  className="flex-1 bg-muted/30"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, instagram: e.target.value }))
                  }
                  placeholder="Instagram username"
                  className="flex-1 bg-muted/30"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  value={formData.twitter}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, twitter: e.target.value }))
                  }
                  placeholder="Twitter/X username"
                  className="flex-1 bg-muted/30"
                />
              </div>
            </div>
          </div>

          {/* Hobbies Prompt */}
          <div className="bg-primary/10 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐝</span>
              <div>
                <p className="font-medium text-sm">Update Your Hobbies</p>
                <p className="text-xs text-muted-foreground">
                  Add new skills and update your levels
                </p>
              </div>
              <Button variant="honey" size="sm" className="ml-auto">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};


