import { MapPin, Globe, Phone } from "lucide-react";

export function MenuFooter({ compact = false }) {
  return (
    <footer className={`${compact ? 'mt-2 pt-2' : 'mt-4 md:mt-6 pt-3 md:pt-4'} border-t border-[#B13613]/30`}>
      <div className={`text-center ${compact ? 'space-y-1' : 'space-y-2 md:space-y-3'}`}>
        {/* Decorative Divider */}
        <div className={`flex items-center justify-center gap-2 ${compact ? 'mb-1' : 'mb-2 md:mb-4'}`}>
          <div className={`h-px bg-gradient-to-r from-transparent to-[#B13613]/30 ${compact ? 'w-8' : 'w-12 md:w-20'}`}></div>
          <div className={`flex ${compact ? 'gap-1' : 'gap-1.5 md:gap-2'}`}>
            <div className={`bg-[#B13613] rounded-full ${compact ? 'w-1 h-1' : 'w-1.5 h-1.5 md:w-2 md:h-2'}`}></div>
            <div className={`bg-[#B13613]/70 rounded-full ${compact ? 'w-1 h-1' : 'w-1.5 h-1.5 md:w-2 md:h-2'}`}></div>
            <div className={`bg-[#B13613] rounded-full ${compact ? 'w-1 h-1' : 'w-1.5 h-1.5 md:w-2 md:h-2'}`}></div>
          </div>
          <div className={`h-px bg-gradient-to-l from-transparent to-[#B13613]/30 ${compact ? 'w-8' : 'w-12 md:w-20'}`}></div>
        </div>

        {/* Contact Info */}
        <div className={`${compact ? 'space-y-0.5 text-[8px]' : 'space-y-1.5 md:space-y-2 text-stone-700 text-xs md:text-base'}`}>
          <div className={`flex items-center justify-center ${compact ? 'gap-1' : 'gap-1.5 md:gap-2'}`}>
            <MapPin className={`text-[#B13613] ${compact ? 'w-2 h-2' : 'w-3 h-3 md:w-4 md:h-4'}`} />
            <p>4068 San Pablo Dam Rd • El Sobrante, CA</p>
          </div>

          <div className={`flex flex-col md:flex-row items-center justify-center ${compact ? 'gap-1 text-[8px]' : 'gap-2 md:gap-6 text-xs md:text-base'}`}>
            <a
              href="https://eat-olchi.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${compact ? 'gap-0.5' : 'gap-1 md:gap-1.5'} hover:text-[#B13613] transition-colors`}
            >
              <Globe className={`${compact ? 'w-2 h-2' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span>eat-olchi.com</span>
            </a>

            <a
              href="tel:5102835007"
              className={`flex items-center ${compact ? 'gap-0.5' : 'gap-1 md:gap-1.5'} hover:text-[#B13613] transition-colors`}
            >
              <Phone className={`${compact ? 'w-2 h-2' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span>(510) 283-5007</span>
            </a>

            <a
              href="https://instagram.com/eat_olchi"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${compact ? 'gap-0.5' : 'gap-1 md:gap-1.5'} hover:text-[#B13613] transition-colors`}
            >
              <svg className={`${compact ? 'w-2 h-2' : 'w-3 h-3 md:w-4 md:h-4'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@eat_olchi</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
