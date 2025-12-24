import { MenuFooter } from "../components/MenuFooter";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
              4068 San Pablo Dam Rd<br />
              El Sobrante, CA 94803
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=4068+San+Pablo+Dam+Rd,El+Sobrante,CA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B13613] text-sm hover:underline"
              >
                Get Directions (Google Maps) →
              </a>
              <a
                href="https://maps.apple.com/?daddr=4068+San+Pablo+Dam+Rd,El+Sobrante,CA"
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
              (510) 283-5007
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
              <div className="flex justify-between">
                <span>Mon - Thu (월~목)</span>
                <div className="text-right">
                  <div>11:00 AM - 2:30 PM</div>
                  <div>4:00 PM - 8:30 PM</div>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat (금~토)</span>
                <span>11:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-stone-500">Closed</span>
              </div>
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
              info@eat-olchi.com
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
              href="tel:5102835007"
              className="bg-[#B13613] text-white py-3 rounded hover:bg-[#8a2a0f] transition-colors font-medium text-center flex flex-col items-center justify-center"
            >
              <div className="text-sm font-medium">Direct Pickup</div>
              <div className="text-xs">Call Now</div>
            </a>
            <a
              href="https://www.doordash.com/store/olchi-el-sobrante-38482084/87548586/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF3008] text-white py-3 rounded hover:bg-[#d92907] transition-colors font-medium text-center flex flex-col items-center justify-center"
            >
              <div className="text-sm font-medium">DoorDash</div>
              <div className="text-xs">Order Online</div>
            </a>
            <a
              href="https://grubhub.com/restaurant/olchi-4068-san-pablo-dam-rd-el-sobrante/13406424?classicAffiliateId=%2Fr%2Fw%2F13406424%2F&utm_source=restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=13406424"
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
