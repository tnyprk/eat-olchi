import { MenuFooter } from "../components/MenuFooter";
import { Package, ExternalLink } from "lucide-react";

export default function Home() {
  const deliveryPlatforms = [
    {
      name: "DoorDash",
      url: "#",
      color: "bg-red-600 hover:bg-red-700",
      icon: "🛵"
    },
    {
      name: "Uber Eats",
      url: "#",
      color: "bg-green-600 hover:bg-green-700",
      icon: "🍴"
    },
    {
      name: "Grubhub",
      url: "#",
      color: "bg-orange-600 hover:bg-orange-700",
      icon: "🍔"
    },
    {
      name: "Direct Pickup",
      url: "tel:5102835007",
      color: "bg-[#B13613] hover:bg-[#8a2a0f]",
      icon: "📞"
    }
  ];

  return (
    <div className="h-screen bg-[#F7EDDA] overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full -mt-16">
          {/* Logo & Welcome */}
          <div className="flex flex-col items-center space-y-6">
            <img
              src="/olchi_logo.png"
              alt="Olchi Korean Restaurant"
              className="w-60 h-60 md:w-56 md:h-56 object-contain"
            />
            {/* Delivery Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl">
              {deliveryPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target={platform.url.startsWith('http') ? "_blank" : undefined}
                  rel={platform.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`${platform.color} text-white px-8 py-6 md:py-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 text-xl md:text-2xl font-medium`}
                >
                  <span className="text-3xl">{platform.icon}</span>
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <MenuFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
