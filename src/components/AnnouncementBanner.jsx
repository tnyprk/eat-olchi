import { Calendar } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="bg-olchi-red text-white py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-lg">
            Soft Opening: Dec 3-6
          </span>
        </div>
        <span className="hidden sm:inline text-white/60">|</span>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-lg">
            Grand Opening: Dec 8
          </span>
        </div>
      </div>
    </div>
  );
}
