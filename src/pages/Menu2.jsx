import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf, Flame } from "lucide-react";
import { menuData } from "../data/menuData";

export default function Menu2() {
  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex items-start justify-center p-0 md:p-8 font-body print:p-0 print:bg-white">
      {/* Half Page Container (5.5" x 8.5") */}
      <div className="w-[5.5in] h-[8.5in] mx-auto bg-olchi-bg px-5 py-8 flex flex-col shadow-none md:shadow-xl print:shadow-none print:w-[5.5in] print:h-[8.5in] print:m-0 overflow-hidden relative">

        {/* Minimal Header - Logo Centered */}
        <div className="flex flex-col items-center justify-center mb-6 gap-3">
          <img
            src="/olchi_cropped_0.jpg"
            alt="Olchi"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 flex-1 items-start w-full">

          {/* Left Column */}
          <div className="space-y-5">
            {/* Appetizers */}
            <section>
              <h2 className="text-olchi-red text-xs tracking-[0.3em] mb-2 font-semibold">
                APPETIZERS
              </h2>
              <div className="space-y-2">
                {menuData.appetizers.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                            {item.name}
                          </h3>
                          {item.isVegetarian && (
                            <Leaf className="w-3 h-3 text-green-600 fill-green-600" />
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                        <span className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                          {item.price}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="font-body text-olchi-muted text-[10px] flex-1 whitespace-nowrap">
                            ({item.subtitle})
                          </p>
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-[10px] mt-0.5 leading-tight">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Kimbap */}
            <section>
              <h2 className="text-olchi-red text-xs tracking-[0.3em] mb-2 font-semibold">
                KIMBAP
              </h2>
              <p className="font-body text-olchi-muted text-[10px] italic mb-2 leading-tight">{menuData.kimbapNote}</p>
              <div className="space-y-2">
                {menuData.kimbap.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <h3 className="font-body text-olchi-text text-[10px] font-medium whitespace-nowrap leading-tight">
                            {item.name}
                          </h3>
                          {item.isRecommended && (
                            <Star className="w-3 h-3 text-olchi-red fill-olchi-red flex-shrink-0" />
                          )}
                          {item.isVegetarian && (
                            <Leaf className="w-3 h-3 text-green-600 fill-green-600 flex-shrink-0" />
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                        <span className="font-body text-olchi-text text-[10px] font-medium flex-shrink-0 leading-tight">
                          {item.price}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="font-body text-olchi-muted text-[10px] flex-1 whitespace-nowrap">
                            ({item.subtitle})
                          </p>
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-[10px] mt-0.5 leading-tight">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-olchi-red text-xs tracking-[0.3em] mb-2 font-semibold">
                DRINKS
              </h2>
              <div className="space-y-2">
                {menuData.drinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <h3 className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                      {item.name}
                    </h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                    <span className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Entrees (Meal Boxes) */}
            <section>
              <h2 className="text-olchi-red text-xs tracking-[0.3em] mb-2 font-semibold">
                MEAL BOXES
              </h2>
              <p className="font-body text-olchi-muted text-[10px] italic mb-2 leading-tight">{menuData.mealBoxesNote}</p>
              <div className="space-y-2">
                {menuData.mealBoxes.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                          {item.name}
                        </h3>
                        {item.isRecommended && (
                          <Star className="w-3 h-3 text-olchi-red fill-olchi-red" />
                        )}
                        {item.isVegetarian && (
                          <Leaf className="w-3 h-3 text-green-600 fill-green-600" />
                        )}
                        {item.isSpicy && (
                          <Flame className="w-3 h-3 text-olchi-red" />
                        )}
                      </div>
                      <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                      <span className="font-body text-olchi-text text-[10px] font-medium leading-tight">{item.price}</span>
                    </div>
                    <p className="font-body text-olchi-muted text-[10px] mt-0.5 leading-tight">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotpot */}
            <section>
              <h2 className="text-olchi-red text-xs tracking-[0.3em] mb-2 font-semibold">
                HOTPOT
              </h2>
              <div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                        {menuData.specialty.name}
                      </h3>
                      {menuData.specialty.isBest && (
                        <Star className="w-3 h-3 text-olchi-red fill-olchi-red" />
                      )}
                      {menuData.specialty.isSpicy && (
                        <Flame className="w-3 h-3 text-olchi-red" />
                      )}
                    </div>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                    <span className="font-body text-olchi-text text-[10px] font-medium leading-tight">
                      {menuData.specialty.price}
                    </span>
                  </div>
                  {menuData.specialty.subtitle && (
                    <div className="flex items-baseline justify-between mt-0.5">
                      <p className="font-body text-olchi-muted text-[10px] flex-1 whitespace-nowrap">
                        ({menuData.specialty.subtitle})
                      </p>
                    </div>
                  )}
                </div>
                {menuData.specialty.description && (
                  <p className="font-body text-olchi-muted text-[10px] mt-0.5 leading-tight">
                    {menuData.specialty.description}
                  </p>
                )}
              </div>
            </section>

            {/* Tofu Soup */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-olchi-red text-xs tracking-[0.3em] font-semibold">
                  SOONDUBU
                </h2>
                <Flame className="w-3 h-3 text-olchi-red" />
              </div>
              <p className="font-body text-olchi-muted text-[10px] italic mb-2 leading-tight">
                {menuData.soondubu.description}
              </p>
              <div className="space-y-1.5">
                {menuData.soondubu.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <h3 className="font-body text-olchi-text text-[10px] font-medium leading-tight">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-1" />
                    <span className="font-body text-olchi-text text-[10px] font-medium leading-tight">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-olchi-muted text-[10px] italic mt-2">
                {menuData.soondubu.note}
              </p>
            </section>

            {/* Legend and Allergy Warning */}
            <div className="space-y-1.5 pt-3">
              {/* Legend */}
              <div className="flex items-center justify-start gap-3 font-body text-olchi-muted text-[10px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3 h-3 text-olchi-red fill-olchi-red" />
                  <span>chef's pick</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Leaf className="w-3 h-3 text-green-600 fill-green-600" />
                  <span>vegetarian</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Flame className="w-3 h-3 text-olchi-red" />
                  <span>spicy</span>
                </div>
              </div>

              {/* Allergy Warning */}
              <p className="font-body text-olchi-muted text-[10px] leading-tight">
                Please inform us of any allergies!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 w-full">
          <MenuFooter compact={true} />
        </div>
      </div>
    </div>
  );
}
