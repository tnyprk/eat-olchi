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
        <div className="max-w-3xl mx-auto bg-white/50 p-6 md:p-8 rounded-lg border border-stone-200">
          <h2 className="text-[#B13613] tracking-[0.2em] mb-6 text-center">OUR STORY</h2>
          <div className="text-stone-600 text-sm leading-relaxed space-y-6">
            <p className="font-medium text-base text-stone-800">
              Olchi is a family story that started long before this location.
            </p>

            <p>
              From 2002–2008, our parents owned and operated a Korean BBQ restaurant on Rodeo Street in Apgujeong, Seoul. Their specialty was charcoal-grilled galbisal and a deeply comforting budae jjigae—recipes built from repetition, instinct, and feeding the same customers again and again. Like many businesses at the time, the restaurant eventually closed due to the economic downturn.
            </p>

            <p>
              After immigrating to the U.S., our family settled in the Bay Area. My mom worked across many Korean restaurants as a waitress, always carrying the same dream: to one day own a restaurant again. As an immigrant family, starting a business isn’t easy—but when this opportunity came up, we knew it was now or never.
            </p>

            <div className="bg-white/60 p-6 rounded border-l-4 border-[#B13613] my-6">
              <p className="font-bold text-[#B13613] mb-2">Olchi is fully family-run.</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Our mom creates every recipe.</li>
                <li>Our dad rebuilt the space—floors, walls, everything.</li>
                <li>Tony handled the menu and website.</li>
                <li>Olivia oversees the operation and menu composition.</li>
              </ul>
            </div>

            <p>
              Olchi (올치) means “that’s right.” And that’s exactly what we aim for—doing things the right way. Good ingredients, honest cooking, and food made the same way our mom cooks for family.
            </p>

            <p className="text-center font-medium text-lg text-[#B13613] pt-2 tracking-wide">
              Come try us out. We think you’ll feel it.
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
