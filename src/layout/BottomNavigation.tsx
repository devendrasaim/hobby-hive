import { Home, Compass, Plus, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Hive", path: "/" },
  { icon: Compass, label: "Discover", path: "/discover" },
  { icon: Plus, label: "Create", path: "/create", isCreate: true },
  { icon: Users, label: "Guilds", path: "/guilds" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          if (item.isCreate) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative -mt-6"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-honey-gold to-honey-amber shadow-honey transition-transform hover:scale-105 active:scale-95">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "w-6 h-6 transition-all duration-200",
                  isActive && "scale-110"
                )}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};


