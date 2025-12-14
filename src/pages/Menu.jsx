import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf } from "lucide-react";
import { menuData } from "../data/menuData";

export function Menu() {
  return (
    <div className="h-screen bg-[#F7EDDA] overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5 overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[#B13613] tracking-[0.3em] mb-1">OLCHI MENU</h1>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Appetizers */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">APPETIZERS</h2>
              <div className="space-y-2">
                {menuData.appetizers.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex items-center gap-1 flex-1">
                      <span className="text-stone-900 text-sm">{item.name}</span>
                      {item.isVegetarian && <Leaf className="w-2.5 h-2.5 text-green-600 fill-green-600" />}
                    </div>
                    <span className="text-stone-900 text-sm ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specials */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">SPECIALS</h2>
              <p className="text-stone-500 text-xs italic mb-3">Rice + side dishes</p>
              <div className="space-y-2">
                {menuData.specials.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-stone-900 text-sm">{item.name}</span>
                        {item.isRecommended && <Star className="w-2.5 h-2.5 text-[#B13613] fill-[#B13613]" />}
                        {item.isVegetarian && <Leaf className="w-2.5 h-2.5 text-green-600 fill-green-600" />}
                      </div>
                    </div>
                    <span className="text-stone-900 text-sm ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 text-xs mt-3">{menuData.specialsNote}</p>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">DRINKS</h2>
              <div className="space-y-2">
                {menuData.drinks.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-stone-900 text-sm flex-1">{item.name}</span>
                    <span className="text-stone-900 text-sm ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Kimbap */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">KIMBAP</h2>
              <p className="text-stone-500 text-xs italic mb-2">Korean rice roll</p>
              <div className="space-y-2">
                {menuData.kimbap.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex items-center gap-1 flex-1">
                      <span className="text-stone-900 text-sm">{item.name}</span>
                      {item.isRecommended && <Star className="w-2.5 h-2.5 text-[#B13613] fill-[#B13613]" />}
                      {item.isVegetarian && <Leaf className="w-2.5 h-2.5 text-green-600 fill-green-600" />}
                    </div>
                    <span className="text-stone-900 text-sm ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Soondubu & Budae Jjigae */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">STEWS</h2>
              <div className="space-y-3">
                {menuData.soondubuSimple.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-900 text-sm">{item.name}</span>
                      <span className="text-stone-900 text-sm">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-stone-500 text-xs italic mt-1">{item.description}</p>
                    )}
                  </div>
                ))}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-stone-900 text-sm">{menuData.budaeJjigae.name}</span>
                    {menuData.budaeJjigae.isBest && (
                      <span className="bg-[#B13613] text-white px-1.5 py-0.5 rounded-full text-[10px] tracking-wider">
                        BEST
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-stone-700 text-sm">{menuData.budaeJjigae.description}</span>
                    <span className="text-[#B13613] text-sm">{menuData.budaeJjigae.price}</span>
                  </div>
                  <p className="text-stone-600 text-xs">{menuData.budaeJjigae.addOn}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Column 3 - Info Box */}
          <div className="space-y-6">
            {/* Restaurant Info */}
            <section className="bg-white/50 p-4 rounded-lg border border-stone-200">
              <h2 className="text-[#B13613] tracking-[0.2em] mb-3 pb-2 border-b border-stone-300">HOURS</h2>
              <div className="space-y-2 text-sm text-stone-700 mb-4">
                <div>
                  <div className="font-medium">Mon-Thu (월~목)</div>
                  <div className="text-xs text-stone-600 pl-2">
                    <div>11am - 2:30pm</div>
                    <div>4pm - 9:30pm</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Fri-Sat (금~토)</div>
                  <div className="text-xs text-stone-600 pl-2">11am - 9:30pm</div>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-2 border-b border-stone-300">CONTACT</h2>
              <div className="space-y-2 text-sm text-stone-700">
                <p>(510) 283-5007</p>
                <p className="text-xs leading-relaxed">4068 San Pablo Dam Rd<br />El Sobrante, CA</p>
              </div>
            </section>

            {/* Dietary Info */}
            <section className="bg-white/50 p-4 rounded-lg border border-stone-200">
              <h2 className="text-[#B13613] tracking-[0.2em] mb-3 pb-2 border-b border-stone-300">NOTES</h2>
              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-[#B13613] fill-[#B13613] flex-shrink-0 mt-0.5" />
                  <p>Recommended dishes</p>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf className="w-3 h-3 text-green-600 fill-green-600 flex-shrink-0 mt-0.5" />
                  <p>Vegan options available</p>
                </div>
                <p className="pt-2 border-t border-stone-200">
                  All meal boxes include rice and 3 traditional Korean side dishes (banchan)
                </p>
              </div>
            </section>

            {/* Ordering Options */}
            <section className="bg-white/50 p-4 rounded-lg border border-stone-200">
              <h2 className="text-[#B13613] tracking-[0.2em] mb-3 text-center">ORDER</h2>
              <div className="space-y-2 text-xs">
                {/* Coming Soon Buttons */}
                <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded cursor-not-allowed opacity-60">
                  <div className="font-medium">DoorDash</div>
                  <div className="text-[10px]">Coming Soon</div>
                </button>
                <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded cursor-not-allowed opacity-60">
                  <div className="font-medium">Uber Eats</div>
                  <div className="text-[10px]">Coming Soon</div>
                </button>
                <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded cursor-not-allowed opacity-60">
                  <div className="font-medium">Grubhub</div>
                  <div className="text-[10px]">Coming Soon</div>
                </button>
                {/* Active Button */}
                <a
                  href="tel:5102835007"
                  className="block w-full bg-[#B13613] text-white py-2 rounded hover:bg-[#8a2a0f] transition-colors text-center"
                >
                  <div className="font-medium">Direct Pickup</div>
                  <div className="text-[10px]">Call Now</div>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <MenuFooter />
      </div>
    </div>
  );
}
