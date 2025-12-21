import { Star, Leaf, Flame, MapPin, Globe, Phone } from "lucide-react";
import { menuData } from "../data/menuData";

// Helper component for robust alignment
const MenuItem = ({ name, price, icons, image, subtitle, description, className = "" }) => {
    // Split name to glue icons to the last word
    const words = name.split(" ");
    const lastWord = words.pop();
    const mainText = words.join(" ");

    return (
        <div className={`relative group ${className}`}>
            <div className="relative flex justify-between items-start mb-1">
                {/* Dotted Line - Absolute Layer */}
                <div className="absolute top-[0.75em] left-0 w-full border-b-2 border-dotted border-olchi-rule z-0" />

                {/* Name - Text Layer with Background Mask */}
                <div className="relative z-10 box-decoration-clone pr-[6px]">
                    <span className="text-olchi-text text-lg font-medium bg-olchi-bg box-decoration-clone leading-snug">
                        {mainText} <span className="whitespace-nowrap">{lastWord}{icons}</span>
                    </span>
                </div>

                {/* Price - Text Layer with Background Mask */}
                <span className="text-olchi-text text-lg relative z-10 bg-olchi-bg pl-[6px] font-medium leading-snug whitespace-nowrap">
                    {price}
                </span>
            </div>

            {/* Description / Subtitle */}
            {(subtitle || description) && (
                <div className="mb-2">
                    {subtitle && (
                        <p className="text-olchi-muted text-sm italic">({subtitle})</p>
                    )}
                    {description && (
                        <p className="text-olchi-muted text-sm leading-tight">{description}</p>
                    )}
                </div>
            )}

            {/* Image - Moved to bottom */}
            {image && (
                <div className="mb-2 overflow-hidden rounded-lg shadow-sm">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                    />
                </div>
            )}
        </div>
    );
};

// Simplified version for Drinks
const DrinkItem = ({ name, price }) => (
    <div className="relative flex justify-between items-center group mb-2 break-inside-avoid">
        <div className="absolute top-1/2 left-0 w-full border-b-2 border-dotted border-olchi-rule z-0 -translate-y-1/2" />
        <span className="text-olchi-text text-lg font-medium bg-olchi-bg pr-[6px] relative z-10 whitespace-nowrap">
            {name}
        </span>
        <span className="text-olchi-text text-lg bg-olchi-bg pl-[6px] relative z-10 whitespace-nowrap">
            {price}
        </span>
    </div>
);

export default function Menu4() {
    return (
        <div className="min-h-screen bg-olchi-bg overflow-hidden print:overflow-visible">
            {/* Print Landscape Force */}
            <style>{`
                @media print {
                    @page { size: landscape; margin: 0.5cm; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .print-break-inside-avoid { break-inside: avoid; }
                }
            `}</style>

            <div className="h-full w-full max-w-[1800px] mx-auto px-6 py-6 overflow-y-auto print:overflow-visible print:h-auto">
                {/* Four Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-4 print:gap-8">

                    {/* Column 1: Appetizers */}
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">Appetizers</h2>
                            <div>
                                {menuData.appetizers.map((item, index) => (
                                    <div key={index} className="mb-6 break-inside-avoid">
                                        <MenuItem
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            subtitle={item.subtitle}
                                            description={item.description}
                                            icons={
                                                item.isVegetarian &&
                                                <Leaf className="inline-block w-4 h-4 ml-1.5 text-green-600 fill-green-600 align-middle mb-1" />
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Column 2: Entrées */}
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">Entrées</h2>
                            {menuData.mealBoxesImage && (
                                <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
                                    <img src={menuData.mealBoxesImage} alt="Entrees" className="w-full h-48 object-cover" />
                                </div>
                            )}
                            <p className="text-olchi-muted text-sm italic mb-4">{menuData.mealBoxesNote}</p>
                            <div>
                                {menuData.mealBoxes.map((item, index) => (
                                    <div key={index} className="mb-6 break-inside-avoid">
                                        <MenuItem
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            description={item.description}
                                            icons={
                                                <>
                                                    {item.isRecommended && <Star className="inline-block w-4 h-4 ml-1.5 text-olchi-red fill-olchi-red align-middle mb-1" />}
                                                    {item.isVegetarian && <Leaf className="inline-block w-4 h-4 ml-1.5 text-green-600 fill-green-600 align-middle mb-1" />}
                                                    {item.isSpicy && <Flame className="inline-block w-4 h-4 ml-1.5 text-olchi-red align-middle mb-1" />}
                                                </>
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Column 3: Kimbap & Soondubu */}
                    <div className="space-y-8">
                        {/* Kimbap */}
                        <section>
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">Kimbap</h2>
                            <p className="text-olchi-muted text-sm italic mb-4 leading-tight">{menuData.kimbapNote}</p>
                            <div>
                                {menuData.kimbap.map((item, index) => (
                                    <div key={index} className="mb-6 break-inside-avoid">
                                        <MenuItem
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            subtitle={item.subtitle}
                                            description={item.description}
                                            icons={
                                                <>
                                                    {item.isRecommended && <Star className="inline-block w-4 h-4 ml-1.5 text-olchi-red fill-olchi-red align-middle mb-1" />}
                                                    {item.isVegetarian && <Leaf className="inline-block w-4 h-4 ml-1.5 text-green-600 fill-green-600 align-middle mb-1" />}
                                                </>
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Soondubu */}
                        <section>
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">
                                <div className="flex items-center gap-2">
                                    <span>Soondubu</span>
                                    <Flame className="w-5 h-5 text-olchi-red" />
                                </div>
                            </h2>
                            <p className="text-olchi-muted text-sm italic mb-4 leading-tight">{menuData.soondubu.description}</p>
                            {menuData.soondubu.image && (
                                <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
                                    <img src={menuData.soondubu.image} alt="Soondubu" className="w-full h-48 object-cover" />
                                </div>
                            )}
                            <div className="space-y-2">
                                {menuData.soondubu.items.map((item, index) => (
                                    <div key={index} className="mb-1">
                                        <MenuItem name={item.name} price={item.price} className="mb-2" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-olchi-muted text-xs italic mt-2">{menuData.soondubu.note}</p>
                        </section>
                    </div>

                    {/* Column 4: Hotpot & Drinks */}
                    <div className="space-y-8 flex flex-col h-full">
                        {/* Logo */}
                        <div className="mt-10 flex justify-center">
                            <img
                                src="/olchi_cropped.jpeg"
                                alt="Olchi"
                                className="h-48 object-contain"
                            />
                        </div>

                        {/* Hotpot */}
                        <section>
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">Hotpot</h2>
                            <div className="mb-6 break-inside-avoid">
                                <MenuItem
                                    name={menuData.specialty.name}
                                    price={menuData.specialty.price}
                                    image={menuData.specialty.image}
                                    subtitle={menuData.specialty.subtitle}
                                    description={menuData.specialty.description}
                                    icons={
                                        <>
                                            {menuData.specialty.isBest && (
                                                <Star className="inline-block w-4 h-4 ml-1.5 text-olchi-red fill-olchi-red align-middle mb-1" />
                                            )}
                                            {menuData.specialty.isSpicy && (
                                                <Flame className="inline-block w-4 h-4 ml-1.5 text-olchi-red align-middle mb-1" />
                                            )}
                                        </>
                                    }
                                />
                            </div>
                        </section>

                        {/* Drinks */}
                        <section className="flex-grow">
                            <h2 className="text-olchi-red text-xl md:text-2xl tracking-[0.2em] mb-4 pb-2 border-b-2 border-olchi-red uppercase font-bold">Drinks</h2>
                            <div className="space-y-2">
                                {menuData.drinks.map((item, index) => (
                                    <DrinkItem key={index} name={item.name} price={item.price} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Section - Compact for Landscape */}
                <div className="border-t border-stone-200 flex flex-row justify-between items-center gap-6 print:mt-auto">
                    {/* Legend */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-olchi-red fill-olchi-red" />
                            <span className="text-olchi-muted text-sm">Staff's Pick</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Leaf className="w-4 h-4 text-green-600 fill-green-600" />
                            <span className="text-olchi-muted text-sm">Vegetarian</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Flame className="w-4 h-4 text-olchi-red" />
                            <span className="text-olchi-muted text-sm">Spicy</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-row items-center gap-6 text-stone-700 text-sm">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#B13613]" />
                            <p>El Sobrante, CA</p>
                        </div>
                        <a href="https://eat-olchi.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B13613] transition-colors">
                            <Globe className="w-4 h-4" />
                            <span>eat-olchi.com</span>
                        </a>
                        <a href="tel:5102835007" className="flex items-center gap-1.5 hover:text-[#B13613] transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>(510) 283-5007</span>
                        </a>
                        <a href="https://instagram.com/eat_olchi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B13613] transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>@eat_olchi</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
