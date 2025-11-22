import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf } from "lucide-react";

export default function Menu2() {
  const drinks = [
    { name: "Soft Drinks & Water", price: "2.95" },
    { name: "Soju", price: "13.00" },
    { name: "Beer", price: "9.00" }
  ];

  const mealBoxes = [
    { name: "Beef Bulgogi", price: "20.50", isRecommended: false },
    { name: "Spicy Pork Bulgogi", price: "20.50", isRecommended: true },
    { name: "Chicken Teriyaki", price: "20.50", isRecommended: false },
    { name: "Donkatsu", price: "22.50", isRecommended: false },
    { name: "Spicy Crispy Tofu", price: "14.50", isRecommended: false }
  ];

  const appetizers = [
    { name: "Gunmandu", subtitle: "Pan-Fried Dumplings", price: "9.50" },
    { name: "Japchae", price: "15.95" },
    { name: "Haemul Pajeon", subtitle: "Seafood Pancake", price: "16.95" },
    { name: "Dakgangjeong", price: "14.95" }
  ];

  const kimbap = [
    { name: "Yubu", subtitle: "Tofu Pocket", price: "13.50", isRecommended: false },
    { name: "Tuna Mayo", price: "13.50", isRecommended: true },
    { name: "Spicy Pork", price: "15.00", isRecommended: false }
  ];

  const bibimbap = [
    { name: "Beef or Spicy Pork", price: "17.50", isVegan: false },
    { name: "Dubu", price: "16.50", isVegan: true }
  ];

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
            {/* Meal Boxes */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">MEAL BOXES</h2>
              <p className="text-stone-500 text-[10px] md:text-xs italic mb-1 md:mb-2">w/ rice & sides</p>
              <div className="space-y-1">
                {mealBoxes.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isRecommended && <Star className="w-2 h-2 text-[#B13613] fill-[#B13613]" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Appetizers */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">APPETIZERS</h2>
              <div className="space-y-1">
                {appetizers.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.subtitle && <span className="text-stone-500 text-[10px] md:text-xs"> ({item.subtitle})</span>}
                    </div>
                    <span className="flex-shrink-0 border-b border-dotted border-stone-300 w-8 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-2 md:space-y-4">
            {/* Specialty */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">SPECIALTY</h2>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <h3 className="text-stone-900 text-xs md:text-sm">Budae Jjigae</h3>
                  <span className="bg-[#B13613] text-white px-1 py-0.5 rounded text-[8px] md:text-xs">BEST</span>
                </div>
                <p className="text-stone-600 text-[10px] md:text-xs mb-1">Army stew for two</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-stone-700 text-xs md:text-sm">For Two</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                  <span className="text-[#B13613] text-sm md:text-base font-medium">35.50</span>
                </div>
              </div>
            </section>

            {/* Soondubu */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">SOONDUBU</h2>
              <p className="text-stone-500 text-[10px] md:text-xs italic mb-1">Soft tofu stew w/ rice</p>
              <div className="space-y-0.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-stone-700 text-xs md:text-sm">Beef</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                  <span className="text-stone-900 text-xs md:text-sm">17.95</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-stone-700 text-xs md:text-sm">Seafood</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                  <span className="text-stone-900 text-xs md:text-sm">18.95</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-stone-700 text-xs md:text-sm">Combo</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                  <span className="text-stone-900 text-xs md:text-sm">18.95</span>
                </div>
              </div>
            </section>

            {/* Kimbap */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">KIMBAP</h2>
              <div className="space-y-0.5">
                {kimbap.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isRecommended && <Star className="w-2 h-2 text-[#B13613] fill-[#B13613]" />}
                    </div>
                    {item.subtitle && <span className="text-stone-500 text-[10px] md:text-xs">({item.subtitle})</span>}
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 md:space-y-4">
            {/* Bibimbap */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">BIBIMBAP</h2>
              <div className="space-y-0.5">
                {bibimbap.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900 text-xs md:text-sm">{item.name}</span>
                      {item.isVegan && <Leaf className="w-2 h-2 text-green-600 fill-green-600" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-1 mb-0.5"></span>
                    <span className="text-stone-900 text-xs md:text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-[#B13613] text-sm md:text-lg tracking-[0.2em] mb-1 md:mb-2">DRINKS</h2>
              <div className="space-y-0.5">
                {drinks.map((item, index) => (
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
                <span>vegan</span>
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
