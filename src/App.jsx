import { MenuFooter } from "./components/MenuFooter";
import { Star, Leaf } from "lucide-react";

export default function App() {
  const drinks = [
    { name: "Soft Drinks & Water", price: "2.95" },
    { name: "Soju", price: "13.00" },
    { name: "Beer", price: "9.00" }
  ];

  const mealBoxes = [
    { name: "Beef Bulgogi", price: "20.50", description: "Marinated beef grilled in sweet soy", isSpecial: false },
    { name: "Spicy Pork Bulgogi", price: "20.50", description: "Stir-fried pork in spicy gochujang sauce", isSpecial: true },
    { name: "Chicken Teriyaki", price: "20.50", description: "Grilled chicken glazed in house teriyaki", isSpecial: false },
    { name: "Donkatsu", price: "22.50", description: "Crispy pork cutlet with savory brown sauce", isSpecial: false },
    { name: "Spicy Crispy Tofu", price: "14.50", description: "Fried tofu coated in sweet-spicy glaze", isSpecial: false }
  ];

  const appetizers = [
    { name: "Gunmandu", subtitle: "Pan-Fried Dumplings, Beef", price: "9.50" },
    { name: "Japchae", price: "15.95", description: "Glass noodles with bell peppers, onion, green onion, and wood ear mushrooms" },
    { name: "Haemul Pajeon", subtitle: "Seafood Pancake", price: "16.95", description: "Savory pancake with squid, clams, mussels, and shrimp" },
    { name: "Dakgangjeong", price: "14.95", description: "Crispy chicken in a sticky sweet-spicy sauce" }
  ];

  const kimbap = [
    { name: "Yubu", subtitle: "Tofu Pocket", price: "13.50", isSpecial: false },
    { name: "Tuna Mayo", price: "13.50", isSpecial: true },
    { name: "Spicy Pork", price: "15.00", isSpecial: false }
  ];

  const bibimbap = [
    { name: "Beef or Spicy Pork", price: "17.50", isVegan: false },
    { name: "Dubu", price: "16.50", isVegan: true }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-[#F7EDDA] px-12 pt-6 pb-14 flex flex-col shadow-lg">
        {/* Minimal Header - Logo Centered */}
        <div className="flex items-start justify-center mb-8">
          <img src="/olchi_cropped.jpg" alt="Olchi" className="w-40 h-40 object-contain" />
        </div>

        {/* Single Column - Meal Boxes */}
        <section className="mb-10">
          <h2 className="text-[#B13613] text-2xl tracking-[0.3em] mb-2">MEAL BOXES</h2>
          <p className="text-stone-500 text-base italic mb-6">Served with rice, 3 side dishes • 'ssam' set available for +$5.00</p>
          <div className="space-y-3">
            {mealBoxes.map((item, index) => (
              <div key={index}>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-stone-900 text-base">{item.name}</h3>
                    {item.isSpecial && <Star className="w-3 h-3 text-[#B13613] fill-[#B13613]" />}
                  </div>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-4 mb-1"></span>
                  <span className="text-stone-900 text-base">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm ml-4">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Appetizers */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-4">APPETIZERS</h2>
              <div className="space-y-3">
                {appetizers.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-baseline justify-between">
                      <div className="flex-1">
                        <h3 className="text-stone-900 text-base">{item.name}</h3>
                        {item.subtitle && <p className="text-stone-500 text-sm">({item.subtitle})</p>}
                      </div>
                      <span className="flex-shrink-0 border-b border-dotted border-stone-300 w-16 mx-2 mb-1"></span>
                      <span className="text-stone-900 text-base">{item.price}</span>
                    </div>
                    {item.description && <p className="text-stone-600 text-sm mt-0.5">{item.description}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Kimbap */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-2">KIMBAP</h2>
              <p className="text-stone-500 text-sm italic mb-3">Contains pickled radish, burdock root, egg, cucumber, fish cake, carrot, and sesseme oil</p>
              <div className="space-y-2">
                {kimbap.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-stone-900 text-base">{item.name}</h3>
                      {item.isSpecial && <Star className="w-3 h-3 text-[#B13613] fill-[#B13613]" />}
                    </div>
                    {item.subtitle && <span className="text-stone-500 text-sm">({item.subtitle})</span>}
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                    <span className="text-stone-900 text-base">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Bibimbap */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-2">BIBIMBAP</h2>
              <p className="text-stone-500 text-sm italic mb-3">Contains zucchini, carrot, onion, shiitake mushroom, and bean sprouts</p>
              <div className="space-y-2">
                {bibimbap.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-stone-900 text-base">{item.name}</h3>
                      {item.isVegan && <Leaf className="w-3 h-3 text-green-600 fill-green-600" />}
                    </div>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                    <span className="text-stone-900 text-base">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Legend */}
            <div className="flex items-center gap-4 text-stone-500 text-sm mt-4">
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#B13613] fill-[#B13613]" />
                <span>recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-green-600 fill-green-600" />
                <span>vegan</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Specialty */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-4">SPECIALTY</h2>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-stone-900 text-base">
                    Budae Jjigae <span className="text-stone-500 text-base">(Army Stew)</span>
                  </h3>
                  <span className="bg-[#B13613] text-white px-2 py-1 rounded-full text-xs tracking-wider">
                    BEST
                  </span>
                </div>
                <p className="text-stone-600 text-base mb-1">
                  Hearty, spicy army stew with sausage, ham, cheese, and tofu — made to share.
                </p>
                <div className="flex items-baseline justify-between text-base mt-2">
                  <span className="text-stone-700">For Two</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                  <span className="text-[#B13613] text-lg">35.50</span>
                </div>
                <p className="text-stone-600 text-sm mt-1">
                  Ingredients: napa cabbage, zucchini, onion, ham, sausage, cheese, tofu
                </p>
              </div>
            </section>

            {/* Soondoobu */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-2">SOONDOOBU</h2>
              <p className="text-stone-500 text-sm italic mb-3">
                Spicy soft tofu stew served with rice
              </p>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-base">
                  <span className="text-stone-700">Beef</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                  <span className="text-stone-900">17.95</span>
                </div>
                <div className="flex items-baseline justify-between text-base">
                  <span className="text-stone-700">Seafood</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                  <span className="text-stone-900">18.95</span>
                </div>
                <div className="flex items-baseline justify-between text-base">
                  <span className="text-stone-700">Combo</span>
                  <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                  <span className="text-stone-900">18.95</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm mt-1">
                Ingredients: zucchini, onion, scallions in a rich spicy broth
              </p>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-[#B13613] text-xl tracking-[0.3em] mb-4">DRINKS</h2>
              <div className="space-y-2">
                {drinks.map((item, index) => (
                  <div key={index} className="flex items-baseline justify-between">
                    <h3 className="text-stone-900 text-base">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-stone-300 mx-2 mb-1"></span>
                    <span className="text-stone-900 text-base">{item.price}</span>
                  </div>
                ))}
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
