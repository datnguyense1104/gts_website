"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/KSHonSon/mainview/z6710623696173_c703158f9837852129959c4a9d0d9fe7.jpg"
          alt="Du lịch Đảo Hòn Sơn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hotel Lại Sơn - GTS Group
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Khách sạn 2 sao sạch sẽ view biển với dịch vụ trọn gói - Trải nghiệm
          ẩm thực hải sản tươi ngon và không gian giải trí độc đáo tại đảo Hòn
          Sơn
        </p>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Ngày nhận phòng
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Ngày trả phòng
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Số khách
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
                <option>2 khách</option>
                <option>4 khách</option>
                <option>6 khách</option>
                <option>8+ khách</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
