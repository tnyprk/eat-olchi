import { Link } from "react-router-dom";
import { Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import { galleryData } from "../data/galleryData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  return (
    <div className="fixed inset-0 bg-black z-50 font-minimal">
      {/* Floating Action Button - Back to Menu */}
      <Link
        to="/menu"
        className="fixed bottom-6 right-6 z-50 bg-olchi-red text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2"
        aria-label="Back to Menu"
      >
        <Utensils className="w-5 h-5" />
        <span className="font-light tracking-wide">Back to Menu</span>
      </Link>

      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        loop={true}
        className="h-full w-full"
        style={{
          "--swiper-theme-color": "#B13613",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
        }}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index} className="relative h-full w-full bg-black">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={`/${item.filename}`}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
              {/* Title Overlay - Gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-12 pointer-events-none pb-24 md:pb-12">
                <h2 className="text-white text-xl md:text-3xl text-center font-light uppercase tracking-widest">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev-button absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-3 md:p-4 rounded-full transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        className="custom-next-button absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-3 md:p-4 rounded-full transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Instructions Overlay (fades out) */}
      <div className="absolute top-4 inset-x-0 text-center z-40 pointer-events-none opacity-60">
        <p className="text-white text-xs md:text-sm shadow-sm inline-block px-3 py-1 bg-black/20 rounded-full backdrop-blur-sm">
          Swipe to navigate
        </p>
      </div>
    </div>
  );
}
