import { MenuFooter } from "../components/MenuFooter";

export default function Home() {
  const deliveryPlatforms = [
    {
      name: "Direct Pickup",
      url: "tel:5102835007",
      color: "bg-[#B13613] hover:bg-[#8a2a0f]",
      icon: "📞",
      available: true
    },
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
    }
  ];

  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#F7EDDA] flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-8 md:mb-12">
            <img
              src="/olchi_logo.png"
              alt="Olchi Korean Restaurant"
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>

          {/* Delivery Buttons Section */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
        </div>

        {/* Footer - Separate Section */}
        <div className="py-4">
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}
