import { MenuFooter } from "../components/MenuFooter";
import { storeData } from "../data/storeData";

const { phone, delivery } = storeData;

const deliveryPlatforms = [
  {
    name: "Uber Eats",
    url: delivery.ubereats,
    color: "bg-[#7B8F5C] hover:bg-[#657548]",
    icon: "/icons/ubereats.svg",
    subtitle: "No pickup fee",
    available: true
  },
  {
    name: "DoorDash",
    url: delivery.doordash,
    color: "bg-[#A85045] hover:bg-[#7C3A31]",
    icon: "/icons/doordash.svg",
    available: true
  },
  {
    name: "Grubhub",
    url: delivery.grubhub,
    color: "bg-[#9C4A50] hover:bg-[#723A40]",
    icon: "/icons/grubhub.svg",
    available: true
  },
  {
    name: "Direct Pickup",
    url: `tel:${phone}`,
    color: "bg-[#6B6058] hover:bg-[#4A413A]",
    icon: "/icons/phone.svg",
    available: true
  }
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F7EDDA] flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-8 md:mb-12">
            <img
              src="/olchi_logo.png"
              alt="Olchi Korean Restaurant"
              className="w-[27rem] h-[27rem] md:w-[31.5rem] md:h-[31.5rem] object-contain"
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
                    className={`${platform.color} text-white px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex flex-col items-center justify-center gap-1 text-xl md:text-2xl font-medium h-32 w-full`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={platform.icon}
                        alt=""
                        className="w-8 h-8 invert"
                      />
                      {platform.name}
                    </div>
                    {platform.subtitle && (
                      <span className="text-sm font-normal opacity-90">{platform.subtitle}</span>
                    )}
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
      </div>

      {/* Footer */}
      <div className="py-4 px-4">
        <MenuFooter />
      </div>
    </div>
  );
}
