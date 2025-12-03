import { MenuFooter } from "../components/MenuFooter";

export default function Home() {
  const deliveryPlatforms = [
    {
      name: "DoorDash",
      color: "bg-gray-300",
      icon: "🛵",
      available: false
    },
    {
      name: "Uber Eats",
      color: "bg-gray-300",
      icon: "🍴",
      available: false
    },
    {
      name: "Grubhub",
      color: "bg-gray-300",
      icon: "🍔",
      available: false
    },
    {
      name: "Direct Pickup",
      url: "tel:5102835007",
      color: "bg-[#B13613] hover:bg-[#8a2a0f]",
      icon: "📞",
      available: true
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
                platform.available ? (
                  <a
                    key={index}
                    href={platform.url}
                    className={`${platform.color} text-white px-8 py-6 md:py-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 text-xl md:text-2xl font-medium`}
                  >
                    <span className="text-3xl">{platform.icon}</span>
                    {platform.name}
                  </a>
                ) : (
                  <div
                    key={index}
                    className={`${platform.color} text-gray-500 px-8 py-6 md:py-8 rounded-lg shadow flex flex-col items-center justify-center gap-2 cursor-not-allowed opacity-60`}
                  >
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
                      <span className="text-3xl">{platform.icon}</span>
                      {platform.name}
                    </div>
                    <span className="text-sm">Coming Soon</span>
                  </div>
                )
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
