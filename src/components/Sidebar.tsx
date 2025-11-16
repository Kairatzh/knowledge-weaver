import { NavLink } from "@/components/NavLink";
import { Home, BookOpen, Users, UserCircle, Settings as SettingsIcon, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { to: "/dashboard", icon: Home, label: "Dashboard" },
    { to: "/library", icon: BookOpen, label: "Library" },
    { to: "/community", icon: Users, label: "Community" },
  ];

  const socialItems = [
    { to: "/friends", icon: MessageSquare, label: "Friends" },
  ];

  const bottomItems = [
    { to: "/profile", icon: UserCircle, label: "Profile" },
    { to: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col p-5">
      {/* Logo */}
      <div className="mb-10">
        <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground font-light text-sm">
          F.AI
        </div>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all font-light text-sm"
            )}
            activeClassName="bg-sidebar-accent text-sidebar-foreground font-normal"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}

        {/* Section: Social */}
        <div className="pt-6">
          <div className="text-xs text-sidebar-foreground/40 uppercase tracking-wider mb-3 px-4 font-light">
            Social
          </div>
          {socialItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all font-light text-sm"
              )}
              activeClassName="bg-sidebar-accent text-sidebar-foreground font-normal"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="space-y-2 pt-4 border-t border-sidebar-border">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all font-light text-sm"
            )}
            activeClassName="bg-sidebar-accent text-sidebar-foreground font-normal"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
