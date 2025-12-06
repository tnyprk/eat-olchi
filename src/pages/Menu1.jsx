import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf, Flame } from "lucide-react";
import { menuData } from "../data/menuData";

export default function Menu1() {
  return (
    <div className="min-h-screen bg-gray-100 md:py-12 font-body">
      <div className="w-full md:w-[210mm] min-h-screen md:min-h-[297mm] mx-auto bg-olchi-bg px-6 md:px-16 pt-6 md:pt-8 pb-10 md:pb-16 flex flex-col md:shadow-lg">
        {/* Minimal Header - Logo Centered */}
        <div className="flex items-start justify-center mb-6 md:mb-2">
          <img
            src="/olchi_cropped_0.jpg"
            alt="Olchi"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* Single Column - Meal Boxes */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em] mb-1">
            MEAL BOXES
          </h2>
          <p className="font-body text-olchi-muted text-sm md:text-base italic mb-5 md:mb-7 leading-relaxed">
            {menuData.mealBoxesNote}
          </p>
          <div className="space-y-4">
            {menuData.mealBoxes.map((item, index) => (
              <div key={index}>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-body text-olchi-text text-base font-medium">
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
                  <span className="flex-1 border-b border-dotted border-olchi-rule mx-4 mb-1" />
                  <span className="font-body text-olchi-text text-base">{item.price}</span>
                </div>
                <p className="font-body text-olchi-muted text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-10">
            {/* Specialty */}
            <section>
              <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em] mb-1">
                HOTPOT
              </h2>
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-body text-olchi-text text-base font-medium">
                        {menuData.specialty.name}
                      </h3>
                      {menuData.specialty.isBest && (
                        <Star className="w-3 h-3 text-olchi-red fill-olchi-red" />
                      )}
                      {menuData.specialty.isSpicy && (
                        <Flame className="w-3 h-3 text-olchi-red" />
                      )}
                    </div>
                    {menuData.specialty.subtitle && (
                      <p className="font-body text-olchi-muted text-sm">
                        ({menuData.specialty.subtitle})
                      </p>
                    )}
                  </div>
                  <span className="flex-shrink-0 border-b border-dotted border-olchi-rule w-16 mx-2 mb-1" />
                  <span className="font-body text-olchi-text text-base">
                    {menuData.specialty.price}
                  </span>
                </div>
                {menuData.specialty.description && (
                  <p className="font-body text-olchi-muted text-sm mt-1 leading-relaxed">
                    {menuData.specialty.description}
                  </p>
                )}
              </div>
            </section>

            {/* Appetizers */}
            <section>
              <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em] mb-1">
                APPETIZERS
              </h2>
              <div className="space-y-3">
                {menuData.appetizers.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-baseline justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-body text-olchi-text text-base font-medium">
                            {item.name}
                          </h3>
                          {item.isVegetarian && (
                            <Leaf className="w-3 h-3 text-green-600 fill-green-600" />
                          )}
                        </div>
                        {item.subtitle && (
                          <p className="font-body text-olchi-muted text-sm">
                            ({item.subtitle})
                          </p>
                        )}
                      </div>
                      <span className="flex-shrink-0 border-b border-dotted border-olchi-rule w-16 mx-2 mb-1" />
                      <span className="font-body text-olchi-text text-base">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-10">
            {/* Kimbap */}
            <section>
              <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em] mb-1">
                KIMBAP
              </h2>
              <p className="font-body text-olchi-muted text-xs md:text-sm italic mb-3 leading-relaxed">
                {menuData.kimbapNote}
              </p>
              <div className="space-y-2">
                {menuData.kimbap.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-baseline justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-body text-olchi-text text-base font-medium">
                            {item.name}
                          </h3>
                          {item.isRecommended && (
                            <Star className="w-3 h-3 text-olchi-red fill-olchi-red" />
                          )}
                          {item.isVegetarian && (
                            <Leaf className="w-3 h-3 text-green-600 fill-green-600" />
                          )}
                        </div>
                        {item.subtitle && (
                          <p className="font-body text-olchi-muted text-sm">
                            ({item.subtitle})
                          </p>
                        )}
                      </div>
                      <span className="flex-shrink-0 border-b border-dotted border-olchi-rule w-16 mx-2 mb-1" />
                      <span className="font-body text-olchi-text text-base">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Soondubu */}
            <section>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em]">
                  SOONDUBU
                </h2>
                <Flame className="w-4 h-4 md:w-5 md:h-5 text-olchi-red" />
              </div>
              <p className="font-body text-olchi-muted text-xs md:text-sm italic mb-3 leading-relaxed">
                {menuData.soondubu.description}
              </p>
              <div className="space-y-1">
                {menuData.soondubu.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-baseline justify-between text-base"
                  >
                    <h3 className="font-body text-olchi-text text-base font-medium">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-2 mb-1" />
                    <span className="font-body text-olchi-text">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-olchi-muted text-sm mt-1 leading-relaxed">
                {menuData.soondubu.ingredients}
              </p>
              <p className="font-body text-olchi-muted text-xs italic mt-2">
                {menuData.soondubu.note}
              </p>
            </section>

            {/* Drinks */}
            <section>
              <h2 className="text-olchi-red text-base md:text-xl tracking-[0.3em] mb-1">
                DRINKS
              </h2>
              <div className="space-y-2">
                {menuData.drinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-baseline justify-between"
                  >
                    <h3 className="font-body text-olchi-text text-base font-medium">
                      {item.name}
                    </h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-2 mb-1" />
                    <span className="font-body text-olchi-text text-base">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-start gap-4 font-body text-olchi-muted text-sm mt-8 mb-6">
          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-olchi-red fill-olchi-red" />
            <span>recommended</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5 text-green-600 fill-green-600" />
            <span>vegetarian</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-olchi-red" />
            <span>spicy</span>
          </div>
        </div>

        {/* Footer */}
        <MenuFooter />
      </div>
    </div>
  );
}
