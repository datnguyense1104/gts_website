import Image from "next/image";
import { Room } from "@/app/types/tourism";

interface AccommodationSectionProps {
  rooms: Room[];
}

const AccommodationSection = ({ rooms }: AccommodationSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nghỉ dưỡng</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lưu trú đẳng cấp với không gian riêng tư và tầm nhìn tuyệt đẹp ra
            biển
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => {
            const isSignature = room.title === "Phòng Đơn View Biển";
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                  isSignature
                    ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 shadow-amber-200 hover:shadow-amber-300 transform hover:scale-105"
                    : "bg-white"
                }`}
              >
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                  {isSignature && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      👑 Signature Room
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`text-xl font-semibold mb-2 ${isSignature ? "text-amber-800" : ""}`}>
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{room.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
                    <div>👥 {room.capacity}</div>
                    <div>🛏️ {room.beds}</div>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <div className={`text-xl font-bold ${isSignature ? "text-amber-600" : "text-blue-600"}`}>
                      {room.price}
                    </div>
                    <button
                      className={`cursor-pointer px-4 py-2 rounded-lg transition-colors font-semibold ${
                        isSignature
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-lg"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      onClick={() =>
                        window.open("https://zalo.me/0869038582", "_blank")
                      }
                    >
                      Đặt ngay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
