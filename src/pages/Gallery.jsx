import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageCache, setImageCache] = useState(new Set());

  const totalImages = galleryData.length;
  const currentImage = galleryData[currentIndex];

  // Memoized navigation functions
  const nextImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Keyboard navigation with proper dependencies
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage]);

  // Preload only adjacent images for performance
  useEffect(() => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;

    [prevIndex, nextIndex].forEach((index) => {
      const filename = galleryData[index].filename;
      if (!imageCache.has(filename)) {
        const img = new Image();
        img.src = `/${filename}`;
        img.onload = () => {
          setImageCache((prev) => new Set(prev).add(filename));
        };
      }
    });
  }, [currentIndex, totalImages, imageCache]);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!touchStart) return;

      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
      setTouchStart(null);
    },
    [touchStart, nextImage, prevImage]
  );

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Lightweight Container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Image Display */}
          <div
            className="relative bg-black"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-3 border-olchi-red border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <img
                key={currentImage.filename}
                src={`/${currentImage.filename}`}
                alt={currentImage.title}
                className="w-full h-full object-contain"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? "none" : "block" }}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
              {currentIndex + 1} / {totalImages}
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6">
              <h2 className="text-white text-lg md:text-2xl font-semibold text-center">
                {currentImage.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Simple Instructions */}
        <p className="text-center mt-4 text-gray-500 text-sm">
          Use arrow keys or swipe to navigate
        </p>
      </div>
    </div>
  );
}
