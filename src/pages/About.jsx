import { MenuFooter } from "../components/MenuFooter";
import { Heart, Utensils, Users } from "lucide-react";

export default function About() {
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
        <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light text-[#B13613] tracking-wider mb-4">
              Our Story
            </h1>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Olchi brings authentic Korean comfort food to El Sobrante. Our dishes honor traditional recipes
              while creating a welcoming space for everyone to enjoy the warmth of Korean home cooking.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#B13613]" />
              </div>
              <h3 className="text-lg md:text-xl text-[#B13613] mb-2 tracking-wide">Authentic</h3>
              <p className="text-stone-600 text-sm md:text-base">
                Traditional Korean recipes prepared with care and respect for heritage
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Utensils className="w-10 h-10 md:w-12 md:h-12 text-[#B13613]" />
              </div>
              <h3 className="text-lg md:text-xl text-[#B13613] mb-2 tracking-wide">Fresh</h3>
              <p className="text-stone-600 text-sm md:text-base">
                Quality ingredients and made-to-order dishes for the best flavor
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-[#B13613]" />
              </div>
              <h3 className="text-lg md:text-xl text-[#B13613] mb-2 tracking-wide">Community</h3>
              <p className="text-stone-600 text-sm md:text-base">
                A warm, welcoming place for friends and family to gather
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-stone-600 text-base md:text-lg italic">
              "Food tastes better when shared with those you love"
            </p>
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
