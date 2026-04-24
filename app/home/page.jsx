"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Infographic from "../components/Infographic";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Chào mừng đến với <span className="text-blue-600">GTS Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tập đoàn đa ngành hàng đầu Việt Nam - vận tải quốc tế Logistics,
              Bất động sản, Du lịch, Sức khỏe, Giáo dục & Công nghệ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/tourism")}
                className="cursor-pointer px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Khám phá ngay
              </button>
              <button
                onClick={() =>
                  window.open("https://zalo.me/0988534245", "_blank")
                }
                className="cursor-pointer px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all"
              >
                Liên hệ tư vấn
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Infographic />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white text-sm p-2 bg-black/50">
              Đây chỉ là nội dung tham khảo
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Về chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GTS Group là tập đoàn đa ngành hàng đầu tại Việt Nam, hoạt động
              trong các lĩnh vực Logistics, Bất động sản, Du lịch, Hợp tác phát
              triển Giáo dục và Công nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Uy tín
              </h3>
              <p className="text-gray-600">
                Hơn 10 năm kinh nghiệm phát triển đa ngành nghề
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chất lượng
              </h3>
              <p className="text-gray-600">
                Cam kết mang đến những sản phẩm và dịch vụ tốt nhất
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tận tâm
              </h3>
              <p className="text-gray-600">
                Đội ngũ chuyên nghiệp, tư vấn tận tình 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lĩnh vực hoạt động
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GTS Group phát triển toàn diện trên 5 lĩnh vực chính: Logistics,
              Bất động sản, Du lịch, Giáo dục và Công nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1H5V3.89181L7.99999 2.89182L11 3.89182V1Z" />
                    <path d="M8 5L2 7L3 13H1V15H3.19258L5.5 14.077L8 15.077L10.5 14.077L12.8074 15H15V13H13L14 7L8 5Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Logistics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ vận tải, kho bãi và chuỗi cung ứng toàn diện, phục
                    vụ nhu cầu logistics đa dạng
                  </p>
                  <a
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Tìm hiểu →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bất động sản
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Phát triển và đầu tư bất động sản nghỉ dưỡng, biệt thự và
                    căn hộ cao cấp tại các vị trí đắc địa
                  </p>
                  <a
                    href="/real-estate"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Xem thêm →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M556.19584 720.05632l-150.50752-29.55264c2.17088-16.71168 3.76832-32.84992 4.64896-48.31232l103.17824-69.28384a1307.648 1307.648 0 0 1 42.68032 147.1488z m-123.57632-314.38848l-50.8928 34.16064c4.64896 11.71456 9.05216 24.064 12.82048 37.45792l86.87616 17.05984c-13.90592-29.81888-29.42976-58.44992-46.87872-84.80768a82.7392 82.7392 0 0 1-1.92512-3.87072z m76.02176 153.82528a917.0944 917.0944 0 0 0-20.21376-49.68448l-90.19392-17.7152c9.23648 37.74464 14.4384 81.73568 12.9024 132.85376l97.50528-65.45408zM248.99584 324.77184a42.27072 42.27072 0 0 0-2.7648 14.72512c0 16.56832 9.46176 30.78144 23.22432 38.01088-1.45408 4.9152-2.47808 10.01472-2.47808 15.36a54.8864 54.8864 0 0 0 54.86592 54.8864 54.72256 54.72256 0 0 0 49.52064-31.62112c1.67936 3.4816 3.39968 6.94272 5.0176 10.6496l50.46272-33.93536a212.74624 212.74624 0 0 0-2.3552-5.18144 178.50368 178.50368 0 0 1-8.23296-19.90656c6.28736 3.584 13.45536 5.81632 21.21728 5.81632a43.008 43.008 0 1 0-30.57664-73.216c4.64896-62.83264 46.36672-119.25504 111.3088-150.9376a189.48096 189.48096 0 0 1 181.06368 8.13056c-52.87936-73.80992-152.71936-101.13024-237.1584-59.92448a188.928 188.928 0 0 0-98.28352 115.65056c-0.2048-36.51584 9.78944-68.38272 37.888-98.03776a189.39904 189.39904 0 0 1 191.32416-51.4048C523.10016 5.81632 419.59424 4.77184 348.38528 66.02752a188.88704 188.88704 0 0 0-65.67936 133.95968c-33.62816-50.36032-96.01024-77.18912-158.33088-62.27968-71.63904 17.1008-118.55872 83.37408-113.80736 154.46016a148.5824 148.5824 0 0 1 105.6768-95.15008 148.74624 148.74624 0 0 1 157.40928 60.928 188.96896 188.96896 0 0 0-153.27232 6.32832c-84.21376 41.59488-123.71968 137.216-97.66912 224.256a189.17376 189.17376 0 0 1 226.28352-163.75808z m378.59328 517.50912l69.79584-13.7216c-1.024-7.76192-1.76128-15.23712-2.17088-22.40512l-47.86176-32.13312a609.8944 609.8944 0 0 0-19.7632 68.25984z m80.95744-130.048l-23.63392-15.85152c-0.43008 0.88064-0.73728 1.536-0.90112 1.78176a304.90624 304.90624 0 0 0-21.77024 39.36256l40.28416-7.94624c1.78176-6.16448 3.7888-11.8784 6.02112-17.34656z m-49.5616 32.52224c-3.33824 7.55712-6.43072 15.29856-9.35936 23.08096l45.21984 30.33088c-0.7168-23.71584 1.65888-44.09344 6.00064-61.66528l-41.86112 8.25344z m-48.51712-206.88896a88.04352 88.04352 0 0 1 88.7808 23.87968c13.0048 13.74208 17.65376 28.48768 17.55136 45.42464a87.77728 87.77728 0 0 0-45.60896-53.6576 88.08448 88.08448 0 0 0-110.08 27.81184 88.02304 88.02304 0 0 1 84.04992-3.76832c30.14656 14.68416 49.52064 40.87808 51.63008 70.02112a19.98848 19.98848 0 1 0-14.19264 33.97632c3.584 0 6.90176-1.024 9.80992-2.6624-1.06496 3.072-2.29376 6.16448-3.80928 9.23648a31.86688 31.86688 0 0 1-1.10592 2.41664l23.4496 15.70816c0.73728-1.65888 1.536-3.29728 2.31424-4.9152a25.37472 25.37472 0 0 0 48.41472-10.77248c0-2.4576-0.45056-4.87424-1.1264-7.14752a19.84512 19.84512 0 0 0 10.79296-17.6128 19.43552 19.43552 0 0 0-1.29024-6.84032 87.73632 87.73632 0 0 1 56.58624 7.24992 88.02304 88.02304 0 0 1 48.41472 68.7104 87.9616 87.9616 0 0 0-45.32224-104.01792 87.63392 87.63392 0 0 0-71.12704-2.92864 69.12 69.12 0 0 1 73.0112-28.32384 69.0176 69.0176 0 0 1 49.00864 44.15488 68.99712 68.99712 0 0 0-126.27968-42.76224 87.49056 87.49056 0 0 0-30.43328-62.1568 87.79776 87.79776 0 0 0-113.43872-1.024z m109.34272 379.74016c-10.89536-30.53568-17.92-58.12224-21.6064-82.65728l-72.17152 14.21312c-1.6384 7.35232-3.09248 14.39744-4.42368 21.25824l68.77184 46.20288-11.96032-0.32768-58.10176-39.05536c-2.60096 14.336-4.52608 27.09504-5.98016 37.888-8.25344-0.12288-16.65024-0.12288-24.9856-0.16384a1742.5408 1742.5408 0 0 0-17.59232-119.48032l-183.17312 123.02336c-9.07264 0.4096-17.89952 0.83968-26.66496 1.29024l207.0528-139.01824a1662.8736 1662.8736 0 0 0-9.4208-45.91616l-155.66848-30.57664c-9.46176 63.11936-28.7744 135.12704-60.88704 216.53504-134.22592 7.68-224.82944 22.03648-224.82944 38.5024 0 24.55552 200.4992 44.48256 447.7952 44.48256 247.31648 0 447.77472-19.92704 447.77472-44.48256 0.02048-19.21024-122.53184-35.5328-293.92896-41.71776z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Du lịch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ du lịch nghỉ dưỡng cao cấp, tour trọn gói tại các
                    điểm đến hàng đầu Việt Nam
                  </p>
                  <a
                    href="/tourism"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Khám phá →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.691406 0L11.564453 2.3320312L9 2.6386719L10.949219 4.3613281L10.435547 7L12.691406 5.6816406L14.949219 7L14.435547 4.3613281L16.384766 2.6386719L13.820312 2.3320312L12.691406 0 z M 14.949219 7L10.435547 7L9.3007812 7C6.3307812 7 4 9.3307812 4 12.300781L4 45C4 45.55 4.45 46 5 46L22 46L22 36L28 36L28 46L45 46C45.55 46 46 45.55 46 45L46 12.300781C46 9.3307812 43.669219 7 40.699219 7L39.564453 7L35.050781 7L31.359375 7L26.845703 7L23.154297 7L18.640625 7L14.949219 7 z M 18.640625 7L20.896484 5.6816406L23.154297 7L22.640625 4.3613281L24.589844 2.6386719L22.025391 2.3320312L20.896484 0L19.769531 2.3320312L17.205078 2.6386719L19.154297 4.3613281L18.640625 7 z M 26.845703 7L29.103516 5.6816406L31.359375 7L30.845703 4.3613281L32.794922 2.6386719L30.230469 2.3320312L29.103516 0L27.974609 2.3320312L25.410156 2.6386719L27.359375 4.3613281L26.845703 7 z M 35.050781 7L37.308594 5.6816406L39.564453 7L39.050781 4.3613281L41 2.6386719L38.435547 2.3320312L37.308594 0L36.179688 2.3320312L33.615234 2.6386719L35.564453 4.3613281L35.050781 7 z M 10 12L16 12L16 16L10 16L10 12 z M 22 12L28 12L28 16L22 16L22 12 z M 34 12L40 12L40 16L34 16L34 12 z M 10 20L16 20L16 24L10 24L10 20 z M 22 20L28 20L28 24L22 24L22 20 z M 34 20L40 20L40 24L34 24L34 20 z M 10 28L16 28L16 32L10 32L10 28 z M 22 28L28 28L28 32L22 32L22 28 z M 34 28L40 28L40 32L34 32L34 28 z M 10 36L16 36L16 40L10 40L10 36 z M 34 36L40 36L40 40L34 40L34 36 z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nghỉ dưỡng
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Khám phá những điểm đến tuyệt vời, trải nghiệm dịch vụ nghỉ
                    dưỡng cao cấp tại các resort và khách sạn sang trọng
                  </p>
                  <a
                    href="/tourism"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Khám phá →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Công nghệ
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Phát triển và ứng dụng công nghệ tiên tiến, số hóa quy trình
                    kinh doanh và dịch vụ
                  </p>
                  <a
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Khám phá →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hỗ trợ 24/7
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Đội ngũ chuyên viên hỗ trợ khách hàng 24/7, sẵn sàng giải
                    đáp mọi thắc mắc và nhu cầu
                  </p>
                  <a
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Liên hệ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng hợp tác cùng GTS Group?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về các
            dịch vụ Logistics, Bất động sản, Du lịch, Giáo dục và Công nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open("https://zalo.me/0988534245", "_blank")
              }
              className="cursor-pointer px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              Tư vấn miễn phí
            </button>
            <button
              onClick={() => router.push("/about")}
              className="cursor-pointer px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Xem dự án
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
