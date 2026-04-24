import Image from "next/image";
import { Restaurant } from "@/app/types/tourism";

interface DiningSectionProps {
  restaurants: Restaurant[];
}

const DiningSection = ({ restaurants }: DiningSectionProps) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ẩm thực</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hành trình khám phá hương vị với các nhà hàng đẳng cấp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={restaurant.image}
                  alt={restaurant.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {restaurant.title}
                  </h3>
                  <p className="text-sm opacity-90">{restaurant.specialty}</p>
                </div>
              </div>
              <p className="text-gray-600">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
