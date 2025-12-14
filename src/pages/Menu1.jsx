import { Link } from "react-router-dom";
import { MenuFooter } from "../components/MenuFooter";
import { Star, Leaf, Flame, Image } from "lucide-react";
import { menuData } from "../data/menuData";

export default function Menu1() {
  return (
    <div className="min-h-screen bg-gray-100 md:py-12 font-body relative">
      {/* Floating Action Button for All Screens */}
      <Link
        to="/gallery"
        className="fixed bottom-6 right-6 z-50 bg-olchi-red text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2"
        aria-label="View Food Photos"
      >
        <Image className="w-5 h-5" />
        <span className="font-medium">View Photos</span>
      </Link>

      <div className="w-full md:w-[210mm] min-h-screen md:min-h-[297mm] mx-auto bg-olchi-bg px-6 md:px-16 pt-6 md:pt-8 pb-10 md:pb-16 flex flex-col md:shadow-lg">
        {/* Minimal Header - Logo Centered */}
        <div className="flex flex-col items-center justify-center mb-6 md:mb-2 gap-4">
          <img
            src="/olchi_cropped_0.jpg"
            alt="Olchi"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* Single Column - Meal Boxes */}
        <section className="mb-10 md:mb-14">
          <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em] mb-1">
            MEAL BOXES
          </h2>
          <p className="font-body text-olchi-muted text-base md:text-lg italic mb-5 md:mb-7 leading-relaxed">
            {menuData.mealBoxesNote}
          </p>
          <div className="space-y-5">
            {menuData.mealBoxes.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-body text-olchi-text text-lg font-medium">
                      {item.name}
                    </h3>
                    {item.isRecommended && (
                      <Star className="w-4 h-4 text-olchi-red fill-olchi-red" />
                    )}
                    {item.isVegetarian && (
                      <Leaf className="w-4 h-4 text-green-600 fill-green-600" />
                    )}
                    {item.isSpicy && (
                      <Flame className="w-4 h-4 text-olchi-red" />
                    )}
                  </div>
                  <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                  <span className="font-body text-olchi-text text-lg">{item.price}</span>
                </div>
                <p className="font-body text-olchi-muted text-base mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 flex-1">
          {/* Left Column */}
          <div className="contents md:flex md:flex-col md:space-y-6 md:space-y-10">
            {/* Specialty */}
            <section className="order-1 md:order-none mb-6 md:mb-0">
              <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em] mb-1">
                HOTPOT
              </h2>
              <div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-body text-olchi-text text-lg font-medium">
                        {menuData.specialty.name}
                      </h3>
                      {menuData.specialty.isBest && (
                        <Star className="w-4 h-4 text-olchi-red fill-olchi-red" />
                      )}
                      {menuData.specialty.isSpicy && (
                        <Flame className="w-4 h-4 text-olchi-red" />
                      )}
                    </div>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                    <span className="font-body text-olchi-text text-lg">
                      {menuData.specialty.price}
                    </span>
                  </div>
                  {menuData.specialty.subtitle && (
                    <div className="flex items-baseline justify-between mt-0.5">
                      <p className="font-body text-olchi-muted text-base flex-1 whitespace-nowrap">
                        ({menuData.specialty.subtitle})
                      </p>
                      <span className="flex-1 mx-4" />
                      <span className="font-body text-olchi-text text-lg flex-shrink-0 opacity-0">
                        {menuData.specialty.price}
                      </span>
                    </div>
                  )}
                </div>
                {menuData.specialty.description && (
                  <p className="font-body text-olchi-muted text-base mt-1 leading-relaxed">
                    {menuData.specialty.description}
                  </p>
                )}
              </div>
            </section>

            {/* Appetizers */}
            <section className="order-2 md:order-none mb-6 md:mb-0">
              <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em] mb-1">
                APPETIZERS
              </h2>
              <div className="space-y-5">
                {menuData.appetizers.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="font-body text-olchi-text text-lg font-medium">
                            {item.name}
                          </h3>
                          {item.isVegetarian && (
                            <Leaf className="w-4 h-4 text-green-600 fill-green-600" />
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                        <span className="font-body text-olchi-text text-lg">
                          {item.price}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="font-body text-olchi-muted text-base flex-1 whitespace-nowrap">
                            ({item.subtitle})
                          </p>
                          <span className="flex-1 mx-4" />
                          <span className="font-body text-olchi-text text-lg flex-shrink-0 opacity-0">
                            {item.price}
                          </span>
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-base mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Spacer to push legend to bottom */}
            <div className="hidden md:block flex-1" />

            {/* Legend and Allergy Warning */}
            <div className="space-y-2 order-6 md:order-none mb-6 md:mb-0">
              {/* Legend */}
              <div className="flex items-center justify-start gap-3 font-body text-olchi-muted text-base">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-5 h-5 text-olchi-red fill-olchi-red" />
                  <span>chef's pick</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Leaf className="w-5 h-5 text-green-600 fill-green-600" />
                  <span>vegetarian</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Flame className="w-5 h-5 text-olchi-red" />
                  <span>spicy</span>
                </div>
              </div>

              {/* Allergy Warning */}
              <p className="font-body text-olchi-muted text-base leading-relaxed">
                Please inform us of any allergies!
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="contents md:flex md:flex-col md:space-y-6 md:space-y-10">
            {/* Soondubu */}
            <section className="order-3 md:order-none mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em]">
                  SOONDUBU
                </h2>
                <Flame className="w-5 h-5 md:w-6 md:h-6 text-olchi-red" />
              </div>
              <p className="font-body text-olchi-muted text-sm md:text-base italic mb-3 leading-relaxed">
                {menuData.soondubu.description}
              </p>
              <div className="space-y-3">
                {menuData.soondubu.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-base"
                  >
                    <h3 className="font-body text-olchi-text text-lg font-medium">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                    <span className="font-body text-olchi-text text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-olchi-muted text-sm italic mt-2">
                {menuData.soondubu.note}
              </p>
            </section>

            {/* Kimbap */}
            <section className="order-4 md:order-none mb-6 md:mb-0">
              <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em] mb-1">
                KIMBAP
              </h2>
              <p className="font-body text-olchi-muted text-sm md:text-base italic mb-3 leading-relaxed">
                {menuData.kimbapNote}
              </p>
              <div className="space-y-4">
                {menuData.kimbap.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <h3 className="font-body text-olchi-text text-lg font-medium whitespace-nowrap">
                            {item.name}
                          </h3>
                          {item.isRecommended && (
                            <Star className="w-4 h-4 text-olchi-red fill-olchi-red flex-shrink-0" />
                          )}
                          {item.isVegetarian && (
                            <Leaf className="w-4 h-4 text-green-600 fill-green-600 flex-shrink-0" />
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                        <span className="font-body text-olchi-text text-lg flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="font-body text-olchi-muted text-base flex-1 whitespace-nowrap">
                            ({item.subtitle})
                          </p>
                          <span className="flex-1 mx-4" />
                          <span className="font-body text-olchi-text text-lg flex-shrink-0 opacity-0">
                            {item.price}
                          </span>
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="font-body text-olchi-muted text-base mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Drinks */}
            <section className="order-5 md:order-none mb-6 md:mb-0">
              <h2 className="text-olchi-red text-lg md:text-2xl tracking-[0.3em] mb-1">
                DRINKS
              </h2>
              <div className="space-y-4">
                {menuData.drinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <h3 className="font-body text-olchi-text text-lg font-medium">
                      {item.name}
                    </h3>
                    <span className="flex-1 border-b border-dotted border-olchi-rule mx-4" />
                    <span className="font-body text-olchi-text text-lg">
                      {item.price}
                    </span>
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
