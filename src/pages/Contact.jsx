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
              Call us for reservations or takeout orders
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
              <div>
                <div className="flex justify-between mb-1">
                  <span>Mon - Thu (월~목)</span>
                </div>
                <div className="text-sm text-stone-600 pl-4">
                  <div>11:00 AM - 2:30 PM</div>
                  <div>4:00 PM - 9:30 PM</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Fri - Sat (금~토)</span>
                </div>
                <div className="text-sm text-stone-600 pl-4">
                  <div>11:00 AM - 9:30 PM</div>
                </div>
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
              info@olchirestaurant.com
            </p>
            <p className="text-stone-600 text-sm">
              Questions? Special requests? Send us an email
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-200 rounded-lg overflow-hidden border border-stone-300 h-64 md:h-80 flex items-center justify-center">
            <div className="text-center text-stone-500">
              <MapPin className="w-12 h-12 mx-auto mb-3" />
              <p>Map placeholder</p>
              <p className="text-sm">4068 San Pablo Dam Rd, El Sobrante, CA</p>
            </div>
          </div>
        </div>

        {/* Order Online Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-[#B13613] text-white p-6 md:p-8 rounded-lg text-center">
          <h2 className="tracking-[0.3em] mb-4">ORDER ONLINE</h2>
          <p className="mb-6">Order delivery or pickup through your favorite platform</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="bg-white text-[#B13613] py-3 rounded hover:bg-stone-100 transition-colors">
              DoorDash
            </button>
            <button className="bg-white text-[#B13613] py-3 rounded hover:bg-stone-100 transition-colors">
              Uber Eats
            </button>
            <button className="bg-white text-[#B13613] py-3 rounded hover:bg-stone-100 transition-colors">
              Grubhub
            </button>
            <button className="bg-white text-[#B13613] py-3 rounded hover:bg-stone-100 transition-colors">
              Direct Pickup
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
