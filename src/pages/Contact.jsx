import { MenuFooter } from "../components/MenuFooter";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { storeData } from "../data/storeData";
import { formatPhone, groupHours } from "../utils/formatters";

const { address, phone, email, hours, delivery } = storeData;
const hoursGroups = groupHours(hours);
const addressQuery = encodeURIComponent(`${address.street},${address.city},${address.state}`);

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7EDDA] flex flex-col">
      <div className="flex-1 px-4 md:px-12 py-6 md:py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#B13613] tracking-[0.3em] mb-2">CONTACT US</h1>
          <p className="text-stone-600">We'd love to hear from you</p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Location */}
          <div className="bg-white/50 p-6 rounded-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#B13613] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#B13613] tracking-wider">LOCATION</h2>
            </div>
            <p className="text-stone-700 leading-relaxed mb-3">
              {address.street}<br />
              {address.city}, {address.state} {address.zip}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B13613] text-sm hover:underline"
              >
                Get Directions (Google Maps) →
              </a>
              <a
                href={`https://maps.apple.com/?daddr=${addressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B13613] text-sm hover:underline"
              >
                Get Directions (Apple Maps) →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/50 p-6 rounded-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#B13613] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#B13613] tracking-wider">PHONE</h2>
            </div>
            <p className="text-stone-700 mb-3">
              {formatPhone(phone)}
            </p>
            <p className="text-stone-600 text-sm">
              Call us for reservations or pickup orders
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white/50 p-6 rounded-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#B13613] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#B13613] tracking-wider">HOURS</h2>
            </div>
            <div className="space-y-2 text-stone-700">
              {hoursGroups.map((group) => (
                <div key={group.label} className="flex justify-between">
                  <span>{group.label}</span>
                  {group.hours?.break ? (
                    <div className="text-right">
                      {group.formatted.split(", ").map((part, i) => (
                        <div key={i}>{part}</div>
                      ))}
                    </div>
                  ) : (
                    <span className={!group.hours ? "text-stone-500" : ""}>{group.formatted}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="bg-white/50 p-6 rounded-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#B13613] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#B13613] tracking-wider">EMAIL</h2>
            </div>
            <p className="text-stone-700 mb-3">
              {email}
            </p>
            <p className="text-stone-600 text-sm">
              Questions? Catering inquiries? Send us an email
            </p>
          </div>
        </div>

        {/* Order Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-[#B13613] tracking-[0.3em] text-center mb-6 text-xl">ORDER OPTIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Active Buttons */}
            <a
              href={`tel:${phone}`}
              className="bg-[#B13613] text-white py-3 rounded hover:bg-[#8a2a0f] transition-colors font-medium text-center flex flex-col items-center justify-center"
            >
              <div className="text-sm font-medium">Direct Pickup</div>
              <div className="text-xs">Call Now</div>
            </a>
            <a
              href={delivery.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF3008] text-white py-3 rounded hover:bg-[#d92907] transition-colors font-medium text-center flex flex-col items-center justify-center"
            >
              <div className="text-sm font-medium">DoorDash</div>
              <div className="text-xs">Order Online</div>
            </a>
            <a
              href={delivery.grubhub}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC6200] text-white py-3 rounded hover:bg-[#d65200] transition-colors font-medium text-center flex flex-col items-center justify-center"
            >
              <div className="text-sm font-medium">Grubhub</div>
              <div className="text-xs">Order Online</div>
            </a>
            {/* Disabled Button */}
            <button disabled className="bg-gray-300 text-gray-500 py-3 rounded cursor-not-allowed opacity-60 relative">
              <div className="text-sm font-medium">Uber Eats</div>
              <div className="text-xs">Coming Soon</div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-12 pb-8">
        <MenuFooter />
      </div>
    </div>
  );
}
