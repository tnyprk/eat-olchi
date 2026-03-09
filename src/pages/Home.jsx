import { MenuFooter } from "../components/MenuFooter";
import { storeData } from "../data/storeData";

const { phone, delivery } = storeData;

const deliveryPlatforms = [
  {
    name: "Direct Pickup",
    url: `tel:${phone}`,
    color: "bg-[#4A5568] hover:bg-[#2D3748]",
    icon: "/icons/phone.svg",
    available: true
  },
  {
    name: "DoorDash",
    url: delivery.doordash,
    color: "bg-[#FF3008] hover:bg-[#E02B07]",
    icon: "/icons/doordash.svg",
    available: true
  },
  {
    name: "Grubhub",
    url: delivery.grubhub,
    color: "bg-[#F63440] hover:bg-[#D92D38]",
    icon: "/icons/grubhub.svg",
    available: true
  },
  {
    name: "Uber Eats",
    color: "bg-[#06C167] hover:bg-[#05A055]",
    icon: "/icons/ubereats.svg",
    available: false
  }
];

export default function Home() {
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
                    className={`${platform.color} text-white px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 text-xl md:text-2xl font-medium h-32 w-full`}
                  >
                    <img
                      src={platform.icon}
                      alt=""
                      className="w-8 h-8 invert"
                    />
                    {platform.name}
                  </a>
                ) : (
                  <div
                    key={index}
                    className={`${platform.color} text-gray-500 px-4 rounded-lg shadow flex flex-col items-center justify-center gap-2 cursor-not-allowed opacity-60 h-32 w-full`}
                  >
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
                      <img
                        src={platform.icon}
                        alt=""
                        className="w-8 h-8 opacity-50"
                      />
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
