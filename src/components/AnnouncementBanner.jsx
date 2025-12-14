import { Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="bg-amber-600 text-white py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-lg">
            We're OPEN! Visit us for our grand opening specials
          </span>
        </div>
      </div>
    </div>
  );
}
