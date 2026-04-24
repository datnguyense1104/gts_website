import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface GallerySectionProps {
  images: string[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % images.length;
      });
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => {
        if (prev === null) return images.length - 1;
        return (prev - 1 + images.length) % images.length;
      });
    }
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  };

  // Add keyboard event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Thư viện ảnh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá vẻ đẹp của resort qua từng khoảnh khắc
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className="cursor-pointer relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-5xl aspect-[4/3]">
                <Image
                  src={images[selectedImageIndex]}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  quality={95}
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
