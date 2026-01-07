import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Bell,
  Eye,
  EyeOff,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Moon,
  Globe,
  Lock,
  MessageSquare,
  Heart,
  Users,
  Bug,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsSheet = ({ open, onOpenChange }: SettingsSheetProps) => {
  const [ghostMode, setGhostMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    followers: true,
    mentions: true,
    challenges: true,
  });

  const SettingsItem = ({
    icon: Icon,
    label,
    description,
    action,
    danger,
  }: {
    icon: React.ElementType;
    label: string;
    description?: string;
    action?: React.ReactNode;
    danger?: boolean;
  }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center",
            danger ? "bg-destructive/10" : "bg-muted"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5",
              danger ? "text-destructive" : "text-foreground"
            )}
          />
        </div>
        <div>
          <p
            className={cn(
              "font-medium text-sm",
              danger && "text-destructive"
            )}
          >
            {label}
          </p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {action || <ChevronRight className="w-5 h-5 text-muted-foreground" />}
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-xl">Settings</SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Account Section */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Account
            </h3>
            <div className="bg-muted/30 rounded-2xl px-4">
              <SettingsItem
                icon={User}
                label="Account Information"
                description="Username, email, phone"
              />
              <Separator />
              <SettingsItem
                icon={Lock}
                label="Password & Security"
                description="Password, 2FA, login activity"
              />
              <Separator />
              <SettingsItem icon={Globe} label="Language" description="English" />
            </div>
          </div>

          {/* Privacy Section */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Privacy
            </h3>
            <div className="bg-muted/30 rounded-2xl px-4">
              <SettingsItem
                icon={ghostMode ? EyeOff : Eye}
                label="Ghost Mode"
                description="Hide your online status & location"
                action={
                  <Switch
                    checked={ghostMode}
                    onCheckedChange={setGhostMode}
                  />
                }
              />
              <Separator />
              <SettingsItem
                icon={Shield}
                label="Blocked Accounts"
                description="Manage blocked users"
              />
              <Separator />
              <SettingsItem
                icon={Users}
                label="Close Friends"
                description="Manage your inner circle"
              />
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Signals (Notifications)
            </h3>
            <div className="bg-muted/30 rounded-2xl px-4">
              <SettingsItem
                icon={Heart}
                label="Nectar Alerts"
                description="When someone likes your buzz"
                action={
                  <Switch
                    checked={notifications.likes}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, likes: checked }))
                    }
                  />
                }
              />
              <Separator />
              <SettingsItem
                icon={MessageSquare}
                label="Buzz Replies"
                description="When someone comments"
                action={
                  <Switch
                    checked={notifications.comments}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, comments: checked }))
                    }
                  />
                }
              />
              <Separator />
              <SettingsItem
                icon={Users}
                label="New Swarms"
                description="New followers & invites"
                action={
                  <Switch
                    checked={notifications.followers}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, followers: checked }))
                    }
                  />
                }
              />
              <Separator />
              <SettingsItem
                icon={Bell}
                label="Daily Buzz"
                description="Challenge reminders"
                action={
                  <Switch
                    checked={notifications.challenges}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, challenges: checked }))
                    }
                  />
                }
              />
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Appearance
            </h3>
            <div className="bg-muted/30 rounded-2xl px-4">
              <SettingsItem
                icon={Moon}
                label="Dark Mode"
                description="Switch to dark theme"
                action={
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                }
              />
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Support
            </h3>
            <div className="bg-muted/30 rounded-2xl px-4">
              <SettingsItem
                icon={HelpCircle}
                label="Help Center"
                description="FAQs and guides"
              />
              <Separator />
              <SettingsItem
                icon={Bug}
                label="Stung by a Bug?"
                description="Report an issue"
              />
            </div>
          </div>

          {/* Logout */}
          <div className="pt-2 pb-8">
            <Button
              variant="ghost"
              className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Log Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};


