import { MenuFooter } from "../components/MenuFooter";
import { Award, Sprout, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Authentic",
      description: "Traditional Korean recipes passed down through generations, prepared with care and respect for heritage."
    },
    {
      icon: Sprout,
      title: "Fresh",
      description: "Locally sourced ingredients prepared daily. We believe fresh ingredients make the best comfort food."
    },
    {
      icon: Heart,
      title: "Community",
      description: "More than a restaurant, OLCHI is a gathering place where neighbors become family over shared meals."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7EDDA] flex flex-col">
      <div className="flex-1 px-4 md:px-12 py-6 md:py-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[#B13613] tracking-[0.3em] mb-4">ABOUT OLCHI</h1>
          <div className="max-w-2xl mx-auto text-stone-600 leading-relaxed space-y-4">
            <p>
              Welcome to OLCHI, your neighborhood destination for authentic Korean comfort food.
              Since opening our doors in El Sobrante, we've been dedicated to bringing the warmth
              and flavors of Korean home cooking to our community.
            </p>
            <p>
              Every dish at OLCHI is prepared with the same care and attention we'd give to meals
              for our own family. From our signature Budae Jjigae to our carefully crafted meal boxes,
              each recipe tells a story of tradition, flavor, and love.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-[#B13613] text-center tracking-[0.3em] mb-8 md:mb-12">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md mb-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#B13613]" />
                  </div>
                  <h3 className="text-stone-900 tracking-wider mb-3">{value.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-2xl mx-auto bg-white/50 p-6 md:p-8 rounded-lg border border-stone-200">
          <h2 className="text-[#B13613] tracking-[0.2em] mb-4 text-center">OUR STORY</h2>
          <div className="text-stone-600 text-sm leading-relaxed space-y-3">
            <p>
              OLCHI began with a simple dream: to share the comforting flavors of Korean home cooking
              with the El Sobrante community. Our name, inspired by the Korean word for "friendship,"
              reflects our belief that food brings people together.
            </p>
            <p>
              We source our ingredients carefully, partnering with local suppliers whenever possible
              while staying true to authentic Korean flavors. Our banchan (side dishes) are made fresh
              daily, and our stews simmer for hours to develop deep, complex flavors.
            </p>
            <p>
              Whether you're a longtime lover of Korean cuisine or trying it for the first time,
              we invite you to experience the warmth and hospitality that makes OLCHI special.
              Come hungry, leave happy, and come back soon.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-12 pb-8">
        <MenuFooter />
      </div>
    </div>
  );
}
