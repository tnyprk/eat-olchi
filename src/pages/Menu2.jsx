import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf } from "lucide-react";
import { menuData } from "../data/menuData";

export default function Menu2() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 md:p-4">
      <div className="w-full max-w-7xl h-screen overflow-hidden mx-auto bg-[#F7EDDA] px-3 md:px-8 py-3 md:py-6 flex flex-col md:shadow-lg">
        {/* Compact Header */}
        <div className="flex items-center justify-center mb-2 md:mb-4">
          <img src="/olchi_cropped.jpg" alt="Olchi" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
        </div>

        {/* Three Column Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 flex-1 overflow-hidden text-xs md:text-sm">
          {/* Column 1 */}
          <div className="space-y-2 md:space-y-4">
            {/* Appetizers */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">APPETIZERS</h2>
              <div className="space-y-1">
                {menuData.appetizers.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isVegetarian && <Leaf className="w-2 h-2 text-green-600 fill-green-600" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specials */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">SPECIALS</h2>
              <p className="text-stone-500 text-[10px] md:text-xs italic mb-1 md:mb-2">Rice + side dishes</p>
              <div className="space-y-1">
                {menuData.specials.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isRecommended && <Star className="w-2 h-2 text-[#B13613] fill-[#B13613]" />}
                      {item.isVegetarian && <Leaf className="w-2 h-2 text-green-600 fill-green-600" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 text-[10px] md:text-xs mt-1">{menuData.specialsNote}</p>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-2 md:space-y-4">
            {/* Kimbap */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">KIMBAP</h2>
              <div className="space-y-0.5">
                {menuData.kimbap.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isRecommended && <Star className="w-2 h-2 text-[#B13613] fill-[#B13613]" />}
                      {item.isVegetarian && <Leaf className="w-2 h-2 text-green-600 fill-green-600" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Stews */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">STEWS</h2>
              <div className="space-y-2">
                {menuData.soondubuSimple.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                      <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-stone-500 text-[10px] md:text-xs italic">{item.description}</p>
                    )}
                  </div>
                ))}
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-stone-900 text-xs md:text-sm">{menuData.budaeJjigae.name}</span>
                    {menuData.budaeJjigae.isBest && (
                      <span className="bg-[#B13613] text-white px-1 py-0.5 rounded text-[8px] md:text-xs">BEST</span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-stone-700 text-xs md:text-sm">{menuData.budaeJjigae.description}</span>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-[#B13613] text-sm md:text-base font-medium">{menuData.budaeJjigae.price}</span>
                  </div>
                  <p className="text-stone-600 text-[10px] md:text-xs">{menuData.budaeJjigae.addOn}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 md:space-y-4">
            {/* Drinks */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">DRINKS</h2>
              <div className="space-y-0.5">
                {menuData.drinks.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Legend */}
            <div className="flex flex-col gap-1 text-stone-500 text-[10px] md:text-xs pt-2">
              <div className="flex items-center gap-1">
                <Star className="w-2 h-2 text-[#B13613] fill-[#B13613]" />
                <span>recommended</span>
              </div>
              <div className="flex items-center gap-1">
                <Leaf className="w-2 h-2 text-green-600 fill-green-600" />
                <span>vegetarian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Footer */}
        <div className="mt-2 md:mt-4 pt-2 border-t border-[#B13613]/30">
          <div className="text-center text-[10px] md:text-xs text-stone-700 space-y-0.5">
            <p className="font-medium">4068 San Pablo Dam Rd • El Sobrante, CA</p>
            <p>(510) 283-5007 • eat-olchi.com • @eat_olchi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
