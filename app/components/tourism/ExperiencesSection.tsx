import Image from "next/image";
import { Experience, TourItinerary } from "@/app/types/tourism";

interface ExperiencesSectionProps {
  experiences: Experience[];
  tourItinerary: TourItinerary;
}

const ExperiencesSection = ({
  experiences,
  tourItinerary,
}: ExperiencesSectionProps) => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trải nghiệm
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những hoạt động độc đáo tạo nên kỷ niệm đáng nhớ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    {experience.duration}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  <div className="space-y-2 flex-grow">
                    <h4 className="font-medium text-gray-900">Điểm nổi bật:</h4>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="text-lg font-bold text-blue-600">
                      {experience.price}
                    </div>
                    <button
                      className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() =>
                        window.open("https://zalo.me/0869038582", "_blank")
                      }
                    >
                      Đặt tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lịch Trình Tour Chi Tiết
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá trọn vẹn đảo Lại Sơn qua lịch trình được thiết kế đặc
              biệt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                {tourItinerary.day1.title}
              </h3>
              <div className="space-y-4">
                {tourItinerary.day1.schedule.map((item, index) => (
                  <div key={index} className="border-l-3 border-blue-200 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                        {item.time}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {item.activity}
                      </h4>
                    </div>
                    {item.details && (
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                {tourItinerary.day2.title}
              </h3>
              <div className="space-y-4">
                {tourItinerary.day2.schedule.map((item, index) => (
                  <div key={index} className="border-l-3 border-blue-200 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                        {item.time}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {item.activity}
                      </h4>
                    </div>
                    {item.details && (
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour không bao gồm */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-4">
              🚫 Tour không bao gồm:
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-yellow-700">
              <li>• Thuế VAT</li>
              <li>• Chi phí ăn uống ngoài chương trình</li>
              <li>• Phí thuê tàu câu cá, mực vào ban đêm</li>
              <li>• Chi phí cá nhân khác</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencesSection;
