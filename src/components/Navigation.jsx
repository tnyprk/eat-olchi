import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Utensils, Camera, Phone, Info, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Utensils },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#B13613] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop and Mobile Header */}
        <div className="flex justify-between items-center h-16 sm:justify-center">

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            {/* Spacer to push menu button to right if needed, but here we want it left or simply present. 
                 Since the original layout was centered, lets keep branding or visual focus. 
                 Actually, usually there is a logo. The original code didn't have a visible logo in navbar, 
                 just centered links. For mobile, we probably want the hamburger on the right or left.
                 Let's put it on the right for standard UX, or keep it simple.
             */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none hover:bg-[#8a2a0f] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Title (Optional, to keep space balanced if we had a logo, but here purely nav)
               We can leave empty or add a small label if requested. User didn't ask for logo in nav.
           */}
          <div className="sm:hidden text-white font-medium text-lg tracking-wide">
            OLCHI
          </div>

          {/* Placeholder for right side on mobile to balance flex if needed, or just flex-start/end.
               "justify-between" handles it.
           */}
          <div className="w-10 sm:hidden"></div>


          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-1 md:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium transition-colors rounded-md ${isActive
                      ? "bg-[#F7EDDA] text-[#B13613]"
                      : "text-white hover:bg-[#8a2a0f]"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#B13613] border-t border-[#8a2a0f]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 text-base font-medium rounded-md w-full transition-colors ${isActive
                      ? "bg-[#F7EDDA] text-[#B13613]"
                      : "text-white hover:bg-[#8a2a0f]"
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
