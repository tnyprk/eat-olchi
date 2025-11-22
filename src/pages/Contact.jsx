import { MenuFooter } from "../components/MenuFooter";
import { MapPin, Clock, Phone, Globe } from "lucide-react";

export default function Contact() {
  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 8:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 9:00 PM" },
    { day: "Sunday", time: "12:00 PM - 7:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-screen md:h-auto md:min-h-[90vh] mx-auto bg-[#F7EDDA] px-6 md:px-12 py-8 md:py-12 flex flex-col justify-between md:shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <img
            src="/olchi_cropped.jpg"
            alt="Olchi Korean Restaurant"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light text-[#B13613] tracking-wider mb-6 md:mb-8">
              Visit Us
            </h1>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Location */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-3">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#B13613]" />
                <h2 className="text-xl md:text-2xl text-[#B13613] tracking-wide">Location</h2>
              </div>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                4068 San Pablo Dam Rd<br />
                El Sobrante, CA 94803
              </p>
              <a
                href="https://maps.google.com/?q=4068+San+Pablo+Dam+Rd+El+Sobrante+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#B13613] hover:underline text-sm md:text-base"
              >
                Get Directions →
              </a>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-3">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-[#B13613]" />
                <h2 className="text-xl md:text-2xl text-[#B13613] tracking-wide">Contact</h2>
              </div>
              <a
                href="tel:5102835007"
                className="text-stone-700 hover:text-[#B13613] text-base md:text-lg block mb-2"
              >
                (510) 283-5007
              </a>
              <a
                href="https://eat-olchi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-[#B13613] text-base md:text-lg block mb-2"
              >
                eat-olchi.com
              </a>
              <a
                href="https://instagram.com/olchikorean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-[#B13613] text-base md:text-lg block"
              >
                @olchikorean
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-[#B13613]" />
              <h2 className="text-xl md:text-2xl text-[#B13613] tracking-wide">Hours</h2>
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-stone-700 text-base md:text-lg">
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}
