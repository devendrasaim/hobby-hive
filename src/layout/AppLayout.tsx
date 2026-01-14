import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export const AppLayout = ({ children, hideNav = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background honeycomb-bg">
      <main className={hideNav ? "" : "pb-20"}>{children}</main>
      {!hideNav && <BottomNavigation />}
    </div>
  );
};

