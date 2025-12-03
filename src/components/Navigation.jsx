import { NavLink } from "react-router-dom";
import { Home, Utensils, Camera, Phone } from "lucide-react";

export function Navigation() {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Utensils },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/contact", label: "Contact", icon: Phone }
  ];

  return (
    <nav className="bg-[#B13613] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-1 md:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium transition-colors ${isActive
                      ? "bg-[#F7EDDA] text-[#B13613]"
                      : "text-white hover:bg-[#8a2a0f]"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
