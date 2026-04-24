import React, { useState } from "react";

const Milestone = () => {
  const [activeTab, setActiveTab] = useState("2025");

  const milestones = {
    2014: {
      title: "Mở rộng chi nhánh toàn quốc",
      description:
        "Sau ngày 01 tháng 4 năm 2014, thuận tiện cho việc tàu vào ra cảng dễ dàng hơn, Ban quản lý của GTS quyết định mở rộng các chi nhánh ở Hồ Chí Minh, Đà Nẵng, Vũng Tàu, Hà Nội, Hải Phòng.",
      achievements: [
        "Mở rộng mạng lưới chi nhánh tại 5 thành phố lớn",
        "Tối ưu hóa quy trình hỗ trợ tàu vào ra cảng",
        "Tăng cường phục vụ khách hàng trên toàn quốc",
      ],
    },
    2017: {
      title: "Chuyển văn phòng mới tại TP.HCM",
      description:
        "Năm 2017, công ty mở văn phòng mới và chuyển đến địa chỉ mới tại Thành phố Hồ Chí Minh - trung tâm phát triển kinh tế của cả nước - để thích nghi với xu hướng phát triển chung ở Việt Nam.",
      achievements: [
        "Khai trương trụ sở mới tại trung tâm kinh tế",
        "Nâng cấp cơ sở vật chất, trang thiết bị hiện đại",
        "Mở rộng quy mô hoạt động kinh doanh",
      ],
    },
    2025: {
      title: "Hơn 10 năm phát triển",
      description:
        "Hơn 10 năm kể từ khi công ty được thành lập và phát triển mạnh mẽ với danh hiệu là một trong những tập đoàn hàng đầu về dịch vụ hàng hải, logistics và các hoạt động thương mại khác tại Việt Nam với mạng lưới rộng lớn bao gồm 4 văn phòng đại diện và gần 300 nhân viên cung cấp sự tận tụy tối đa cho khách hàng trong và ngoài nước.",
      achievements: [
        "Trở thành tập đoàn hàng đầu về dịch vụ hàng hải và logistics",
        "Mạng lưới 4 văn phòng đại diện trên toàn quốc",
        "Đội ngũ gần 300 nhân viên chuyên nghiệp, tận tụy",
      ],
    },
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-blue-600 after:bottom-0 after:left-1/2 after:-translate-x-1/2 pb-4">
          Cột mốc phát triển
        </span>
      </h2>

      <div className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Hành trình phát triển của GTS qua những cột mốc quan trọng trên con
        đường trở thành tập đoàn hàng đầu về dịch vụ hàng hải và logistics tại
        Việt Nam.
      </div>

      <div className="lg:flex lg:flex-row lg:space-x-8 lg:items-start">
        {/* Milestone Tabs - Horizontal on mobile, Vertical on lg screens */}
        <div className="flex justify-center mb-12 lg:mb-0 lg:flex-col lg:justify-start lg:flex-shrink-0">
          <div
            className="inline-flex rounded-lg shadow-md overflow-hidden lg:flex-col lg:w-48"
            role="group"
          >
            {Object.keys(milestones).map((year, index) => (
              <button
                key={year}
                type="button"
                className={`px-8 py-4 text-xl font-medium transition-all duration-300 ease-in-out
                ${
                  activeTab === year
                    ? "bg-blue-600 text-white scale-105 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 cursor-pointer "
                } 
                border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-gray-200
                ${index === 0 ? "lg:rounded-t-lg lg:rounded-bl-none" : ""}
                ${
                  index === Object.keys(milestones).length - 1
                    ? "lg:rounded-b-lg lg:rounded-tr-none"
                    : ""
                }
                `}
                onClick={() => setActiveTab(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Content */}
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10 transition-all duration-500 transform hover:shadow-2xl lg:flex-grow">
          <div className="border-l-4 border-blue-600 pl-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              {milestones[activeTab].title}
            </h3>
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {activeTab}
            </div>
          </div>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {milestones[activeTab].description}
          </p>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Thành tựu nổi bật
            </h4>
            <ul className="space-y-4 pl-12">
              {milestones[activeTab].achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
