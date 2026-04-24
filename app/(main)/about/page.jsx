"use client";

import Milestone from "@/app/components/Milestone";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const header =
  "Golden Transport Service Company Limited (GTS) trước đây được biết đến với tên Công ty Vận chuyển Đại dương ";
const subHeader =
  "là đơn vị đầu tiên về dịch vụ vận chuyển đại dương tại Việt Nam, được thành lập dưới quyết định của Cơ quan Quản lý và Đầu tư ngày 17 tháng 11 năm 2012 tại thành phố Hồ Chí Minh, thuộc sở hữu của Uy ban Nhân dân Thành phố Hồ Chí Minh.";

const companies = [
  { logo: "/partners/vosa.png", alt: "VOSA DANANG logo", name: "VOSA DANANG" },
  { logo: "/partners/hanotrans.png", alt: "HANOTRANS logo", name: "HANOTRANS" },
  { logo: "/partners/vinalink.png", alt: "VINALINK logo", name: "VINALINK" },
  {
    logo: "/partners/namsung.png",
    alt: "NAMSUNG SHIPPING CO., LTD logo",
    name: "NAMSUNG SHIPPING CO., LTD",
  },
  { logo: "/partners/mcc.jpg", alt: "MCC logo", name: "MCC" },
  { logo: "/partners/oocl_logo_1.png", alt: "OOCL logo", name: "OOCL" },
  { logo: "/partners/yangming.jpg", alt: "YANGMING logo", name: "YANGMING" },
  { logo: "/partners/CMA_CGM.png", alt: "CMA logo", name: "CMA" },
  { logo: "/partners/cosco.jpg", alt: "COSCO logo", name: "COSCO" },
  { logo: "/partners/Sinokor.jpg", alt: "SINOKOR logo", name: "SINOKOR" },
  { logo: "/partners/Evergreen.png", alt: "EVERGREEN logo", name: "EVERGREEN" },
  {
    logo: "/partners/CKline.png",
    alt: "CK LINE VIET NAM CO., LTD logo",
    name: "CK LINE VIET NAM CO., LTD",
  },
  {
    logo: "/partners/Sinotrans.webp",
    alt: "SINOTRANS CONTAINER LINES CO., LTD logo",
    name: "SINOTRANS CONTAINER LINES CO., LTD",
  },
  {
    logo: "/partners/NYK.png",
    alt: "NYK BULK & PROJECTS CARRIERS LTD., JAPAN logo",
    name: "NYK BULK & PROJECTS CARRIERS LTD., JAPAN",
  },

  {
    logo: "/partners/Fujikura.png",
    alt: "FUJIKURA COMPOSITES logo",
    name: "FUJIKURA COMPOSITES",
  },
  { logo: "/partners/phongphu.jpg", alt: "PHONG PHU logo", name: "PHONG PHU" },
  {
    logo: "/partners/lotte.png",
    alt: "LOTTE VINA INTERNATIONAL logo",
    name: "LOTTE VINA INTERNATIONAL",
  },
  {
    logo: "/partners/AmericaEfird.png",
    alt: "AMERICAN EFIRD VIETNAM THREAD LLC logo",
    name: "AMERICAN EFIRD VIETNAM THREAD LLC",
  },
  {
    logo: "/partners/maurice.png",
    alt: "MAURICE WARD NETWORK logo",
    name: "MAURICE WARD NETWORK",
  },
];

const About = () => {
  const [showAllPartners, setShowAllPartners] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const initialPartnerCount = 5;
  const [displayedPartners, setDisplayedPartners] = useState(
    companies.slice(0, initialPartnerCount)
  );

  // UseEffect to handle screen size changes and initialization
  useEffect(() => {
    // Check if we're on the client side
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setDisplayedPartners(
        window.innerWidth >= 768 || showAllPartners
          ? companies
          : companies.slice(0, initialPartnerCount)
      );
    };

    // Initial check
    checkIfMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [showAllPartners]);

  return (
    <div className="mt-25">
      {/* header section */}
      <section className="py-10 px-4 flex flex-col gap-2 md:flex-row md:gap-8 lg:max-w-[1400px] lg:mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center mb-8 text-center md:w-1/2 md:px-10 lg:text-left lg:w-1/2 lg:px-20 md:text-left md:items-start">
          <h1 className="font-bold text-gray-400">Về chúng tôi</h1>
          <p className="mb-2 text-2xl font-bold lg:text-4xl/10">
            <span className="relative text-3xl text-blue-600 lg:text-5xl group">
              Golden Transport Service Company Limited (GTS){" "}
            </span>
            trước đây được biết đến với tên{" "}
            <span className="relative text-blue-600 group">
              Công ty Vận chuyển Đại dương
            </span>
          </p>
          <p className="text-lg">{subHeader}</p>
          <Link
            className="px-4 py-2 w-full text-white bg-blue-500 rounded md:w-fit"
            href={"https://zalo.me/0988534245"}
            target="_blank"
          >
            Liên hệ ngay
          </Link>
          <p className="my-2 text-sm text-gray-600">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn!
          </p>
        </div>
        <div className="flex overflow-hidden relative justify-center mx-auto mb-8 w-full h-72 sm:h-96 md:w-1/2 lg:w-1/2">
          <Image
            src="/aboutus-header.jpg"
            alt="Description"
            width={500}
            height={300}
            className="object-cover object-center rounded-lg shadow-lg"
            loading="lazy"
            quality={75}
          />
        </div>
      </section>
      {/* Milestone section */}
      <section className="flex flex-col gap-2 px-4 py-10 text-center bg-gradient-to-b from-white to-gray-50">
        <Milestone />
      </section>
      {/* Partner section */}
      <section className="flex flex-col gap-4 px-4 py-10 text-center">
        <h1 className="mb-2 text-lg font-bold text-gray-400 sm:text-xl">
          Đối tác
        </h1>
        <p className="mb-6 text-2xl font-bold">
          Những đối tác tin cậy của chúng tôi
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:px-20">
          {displayedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex overflow-hidden flex-col justify-center items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className="relative mb-4 w-32 h-32 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 text-[12px] font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {companies.length > initialPartnerCount && isMobile && (
          <button
            onClick={() => setShowAllPartners(!showAllPartners)}
            className="flex gap-2 items-center px-6 py-2 mx-auto mt-4 rounded transition-colors duration-300 hover:bg-gray-200 md:hidden"
            aria-expanded={showAllPartners}
          >
            {showAllPartners ? (
              <>
                <span>Thu gọn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Xem tất cả đối tác</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
