import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import { galleryData } from "../data/galleryData";
import { StickyCategoryNav, MenuSection, MenuItemCard } from "../components/Menu3Components"; // Reusable components
import { MenuFooter } from "../components/MenuFooter";
import { Image } from "lucide-react";

// Helper to find image for menu item
// Uses sloppy matching or exact matches based on manually verified gallery titles
const getImageForItem = (itemName) => {
    // Normalize item name for comparison
    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const nItemName = normalize(itemName);

    // Manual overrides/priorities
    if (itemName.includes("Budae Jjigae")) return galleryData.find(i => i.filename === "OLCHI-27.jpg")?.filename; // Specific nice shot
    if (itemName.includes("Beef Bulgogi")) return galleryData.find(i => i.filename === "OLCHI-20.jpg")?.filename;
    if (itemName.includes("Pork Bulgogi")) return galleryData.find(i => i.filename === "OLCHI-19.jpg")?.filename;

    // User requested mappings
    if (itemName.includes("Plum Sparkling Ade")) return "OLCHI-7.jpg"; // Same as Yuzu
    if (itemName.includes("Bling Booster")) return "bling_booster_yogurt_sparkling.jpg";
    if (itemName.includes("Seafood Soondubu")) return "OLCHI-14.jpg"; // Seafood Tofu Soup
    if (itemName.includes("Combo Soondubu")) return "OLCHI-16.jpg";   // Using Beef Tofu Soup (closest/richer image) as proxy for Combo if specific "Combo" image isn't found in data
    if (itemName.includes("Beef Soondubu")) return "OLCHI-16.jpg";    // Beef Tofu Soup

    // Fuzzy search through gallery titles
    const match = galleryData.find(img => {
        if (!img.title) return false;
        const nTitle = normalize(img.title);
        // Check if menu item name is contained in gallery title or vice versa
        return nTitle.includes(nItemName) || (nItemName.includes(nTitle) && nTitle.length > 5);
    });

    return match ? match.filename : null;
};

export default function Menu3() {
    const [activeCategory, setActiveCategory] = useState("appetizers"); // Default to first section

    // Data Normalization with Image Injection
    const injectImages = (items) => items.map(item => ({
        ...item,
        image: getImageForItem(item.name)
    }));

    const categories = [
        { id: "appetizers", label: "Appetizers", items: injectImages(menuData.appetizers) },
        {
            id: "entrees",
            label: "Entrees",
            items: [
                ...injectImages(menuData.mealBoxes)
            ],
            note: menuData.mealBoxesNote
        },
        { id: "kimbap", label: "Kimbap", items: injectImages(menuData.kimbap), note: menuData.kimbapNote },
        {
            id: "hotpot",
            label: "Hotpot",
            items: [{
                ...menuData.budaeJjigae,
                description: "Army Stew (made to share)",
                image: getImageForItem("Budae Jjigae")
            }]
        },
        {
            id: "tofu_soup",
            label: "Tofu Soup",
            items: injectImages(menuData.soondubuSimple).map(i => ({ ...i, description: i.description || "Served with rice & side dishes" }))
        },
        { id: "drinks", label: "Drinks", items: injectImages(menuData.drinks) },
    ];

    // Scroll to section
    const handleSelectCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky header
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveCategory(id);
        }
    };

    // Scroll Spy
    useEffect(() => {
        const observers = [];
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is near top
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.id);
                }
            });
        }, observerOptions);

        categories.forEach((cat) => {
            const element = document.getElementById(cat.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Floating Action Button for All Screens */}
            <Link
                to="/gallery"
                className="fixed bottom-6 right-6 z-50 bg-[#B13613] text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                aria-label="View Food Photos"
            >
                <Image className="w-5 h-5" />
                <span className="font-medium">View Photos</span>
            </Link>

            {/* Header */}
            <div className="bg-[#B13613] text-white py-12 px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Our Menu</h1>
                <p className="text-white/80 max-w-2xl mx-auto">
                    Authentic flavors from Mom's home recipes, made with care.
                </p>
            </div>

            {/* Sticky Nav */}
            <StickyCategoryNav
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
            />

            {/* Menu Content */}
            <main className="max-w-7xl mx-auto pb-20">
                {categories.map((category) => (
                    <MenuSection key={category.id} id={category.id} title={category.label} note={category.note}>
                        {category.items.map((item, index) => (
                            <MenuItemCard key={index} item={item} />
                        ))}
                    </MenuSection>
                ))}
            </main>

            <MenuFooter />
        </div>
    );
}
