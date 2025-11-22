import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf } from "lucide-react";

export function Menu() {
  return (
    <div className="h-screen bg-[#F7EDDA] overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[#B13613] tracking-[0.3em] mb-1">OLCHI MENU</h1>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Meal Boxes */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">MEAL BOXES</h2>
              <p className="text-stone-500 text-xs italic mb-3">Rice + 3 sides • 'ssam' +$5</p>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-sm">Beef Bulgogi</span>
                    </div>
                  </div>
                  <span className="text-stone-900 text-sm ml-2">20.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-sm">Spicy Pork Bulgogi</span>
                      <Star className="w-2.5 h-2.5 text-[#B13613] fill-[#B13613]" />
                    </div>
                  </div>
                  <span className="text-stone-900 text-sm ml-2">20.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Chicken Teriyaki</span>
                  <span className="text-stone-900 text-sm ml-2">20.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Donkatsu</span>
                  <span className="text-stone-900 text-sm ml-2">22.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Spicy Crispy Tofu</span>
                  <span className="text-stone-900 text-sm ml-2">14.50</span>
                </div>
              </div>
            </section>

            {/* Appetizers */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">APPETIZERS</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Gunmandu</span>
                  <span className="text-stone-900 text-sm ml-2">9.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Japchae</span>
                  <span className="text-stone-900 text-sm ml-2">15.95</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Haemul Pajeon</span>
                  <span className="text-stone-900 text-sm ml-2">16.95</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Dakgangjeong</span>
                  <span className="text-stone-900 text-sm ml-2">14.95</span>
                </div>
              </div>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">DRINKS</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Soft Drinks & Water</span>
                  <span className="text-stone-900 text-sm ml-2">2.95</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Soju</span>
                  <span className="text-stone-900 text-sm ml-2">13.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Beer</span>
                  <span className="text-stone-900 text-sm ml-2">9.00</span>
                </div>
              </div>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Specialty */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">SPECIALTY</h2>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-stone-900 text-sm">Budae Jjigae</span>
                  <span className="bg-[#B13613] text-white px-1.5 py-0.5 rounded-full text-[10px] tracking-wider">
                    BEST
                  </span>
                </div>
                <p className="text-stone-600 text-xs mb-1">
                  Spicy army stew - made to share
                </p>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">For Two</span>
                  <span className="text-[#B13613] text-sm">35.50</span>
                </div>
              </div>
            </section>

            {/* Soondubu */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">SOONDUBU</h2>
              <p className="text-stone-500 text-xs italic mb-2">Spicy soft tofu stew + rice</p>
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">Beef</span>
                  <span className="text-stone-900 text-sm">17.95</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">Seafood</span>
                  <span className="text-stone-900 text-sm">18.95</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">Combo</span>
                  <span className="text-stone-900 text-sm">18.95</span>
                </div>
              </div>
            </section>

            {/* Kimbap */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">KIMBAP</h2>
              <p className="text-stone-500 text-xs italic mb-2">Korean rice roll</p>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Yubu (Tofu Pocket)</span>
                  <span className="text-stone-900 text-sm ml-2">13.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-stone-900 text-sm">Tuna Mayo</span>
                    <Star className="w-2.5 h-2.5 text-[#B13613] fill-[#B13613]" />
                  </div>
                  <span className="text-stone-900 text-sm ml-2">13.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Spicy Pork</span>
                  <span className="text-stone-900 text-sm ml-2">15.00</span>
                </div>
              </div>
            </section>

            {/* Bibimbap */}
            <section>
              <h2 className="text-[#B13613] tracking-[0.2em] mb-2 pb-1 border-b-2 border-[#B13613]">BIBIMBAP</h2>
              <p className="text-stone-500 text-xs italic mb-2">Mixed rice bowl</p>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-stone-900 text-sm flex-1">Beef or Spicy Pork</span>
                  <span className="text-stone-900 text-sm ml-2">17.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-stone-900 text-sm">Dubu</span>
                    <Leaf className="w-2.5 h-2.5 text-green-600 fill-green-600" />
                  </div>
                  <span className="text-stone-900 text-sm ml-2">16.50</span>
                </div>
              </div>
            </section>
          </div>

          {/* Column 3 - Info Box */}
          <div className="space-y-6">
            {/* Restaurant Info */}
            <section className="bg-white/50 p-4 rounded-lg border border-stone-200">
              <h2 className="text-[#B13613] tracking-[0.2em] mb-3 pb-2 border-b border-stone-300">HOURS</h2>
              <div className="space-y-1 text-sm text-stone-700 mb-4">
                <div className="flex justify-between">
                  <span>Mon-Fri</span>
                  <span>11am - 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>12pm - 8pm</span>
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
            <section className="bg-[#B13613] text-white p-4 rounded-lg">
              <h2 className="tracking-[0.2em] mb-3">ORDER NOW</h2>
              <div className="space-y-2 text-sm">
                <button className="w-full bg-white text-[#B13613] py-2 rounded hover:bg-stone-100 transition-colors">
                  DoorDash
                </button>
                <button className="w-full bg-white text-[#B13613] py-2 rounded hover:bg-stone-100 transition-colors">
                  Uber Eats
                </button>
                <button className="w-full bg-white text-[#B13613] py-2 rounded hover:bg-stone-100 transition-colors">
                  Grubhub
                </button>
                <button className="w-full bg-white text-[#B13613] py-2 rounded hover:bg-stone-100 transition-colors">
                  Direct Pickup
                </button>
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
