import Image from "next/image";
import { Amenity } from "@/app/types/tourism";

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tiện ích</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Đầy đủ tiện nghi hiện đại cho kỳ nghỉ hoàn hảo
          </p>
        </div>

        <div className="space-y-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{amenity.title}</h3>
                <p className="text-gray-600 mb-6">{amenity.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {amenity.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {amenity.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative h-48 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${amenity.title} ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
