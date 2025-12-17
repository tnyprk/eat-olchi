import { Star, Leaf, Plus } from "lucide-react";
import { useEffect, useState } from "react";

// --- Components ---

export function StickyCategoryNav({ categories, activeCategory, onSelectCategory }) {
    return (
        <div className="sticky top-[40px] md:top-[56px] z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 overflow-x-auto no-scrollbar">
            <div className="flex px-4 md:px-8 max-w-7xl mx-auto space-x-6 min-w-max">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeCategory === category.id
                            ? "border-[#B13613] text-[#B13613]"
                            : "border-transparent text-stone-600 hover:text-[#B13613]"
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export function MenuSection({ id, title, note, children }) {
    return (
        <div id={id} className="scroll-mt-32 md:scroll-mt-36 py-8 border-b border-stone-100 last:border-0">
            <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-2 px-4 md:px-8 tracking-tight">
                {title}
            </h2>
            {note && (
                <p className="px-4 md:px-8 mb-6 text-sm text-stone-600 italic">
                    {note}
                </p>
            )}
            <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {children}
            </div>
        </div>
    );
}

export function MenuItemCard({ item }) {
    return (
        <div className="group relative bg-white border border-stone-200 rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-stone-900 leading-tight group-hover:text-[#B13613] transition-colors">
                            {item.name}
                        </h3>
                        <span className="text-stone-900 font-semibold">{item.price}</span>
                    </div>

                    {item.subtitle && (
                        <p className="text-xs font-medium text-stone-500 mt-1">{item.subtitle}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-2">
                        {item.isBest && (
                            <span className="inline-flex items-center gap-1 bg-[#B13613] text-white px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                                <Star size={10} className="fill-current" /> Best
                            </span>
                        )}
                        {item.isRecommended && (
                            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                                <Star size={10} className="fill-current" /> Staff's Pick
                            </span>
                        )}
                        {item.isSpicy && (
                            <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                                Spicy
                            </span>
                        )}
                        {item.isVegetarian && (
                            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                                <Leaf size={10} className="fill-current" /> Veggie
                            </span>
                        )}
                    </div>

                    {item.description && (
                        <p className="text-sm text-stone-600 mt-2 line-clamp-2 md:line-clamp-none">
                            {item.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Image */}
            {item.image ? (
                <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0 self-center relative">
                    <img
                        src={`/${item.image}`}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0 self-center relative">
                    <div className="text-stone-300">
                        <UtensilsIcon size={24} />
                    </div>
                </div>
            )}
        </div>
    );
}

function UtensilsIcon({ size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
    )
}
