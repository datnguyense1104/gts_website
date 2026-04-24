"use client";

import { useState } from "react";
import HeroSection from "../components/tourism/HeroSection";
import BranchSection from "../components/tourism/BranchSection";
import NavigationTabs from "../components/tourism/NavigationTabs";
import AccommodationSection from "../components/tourism/AccommodationSection";
import DiningSection from "../components/tourism/DiningSection";
import AmenitiesSection from "../components/tourism/AmenitiesSection";
import ExperiencesSection from "../components/tourism/ExperiencesSection";
import GallerySection from "../components/tourism/GallerySection";
import TestimonialsSection from "../components/tourism/TestimonialsSection";
import {
  accommodationData,
  restaurantData,
  amenityData,
  experienceData,
  tourItinerary,
  testimonials,
  galleryImages,
} from "../data/tourism";

const branches = [
  {
    id: 1,
    name: "Khách sạn Lại Sơn",
    image:
      "/KSHonSon/beach view room/z6727762578659_90f2d677e0d0a63ffaa32fba917a91b1.jpg",
    address: "Lại Sơn, Kiên Hải, Kiên Giang, Việt Nam",
    phone: "0869038582",
    mapUrl: "https://maps.app.goo.gl/ytwjyXpADGPSBJzo7",
  },
  {
    id: 2,
    name: "Khách sạn Hòn Sơn",
    image:
      "/KSHonSon/beach view room/z6727762578894_868d51eb2b92fec8568f502327fc8437.jpg",
    address: "Lại Sơn, Kiên Hải, Kiên Giang, Việt Nam",
    phone: "0869038582",
    mapUrl: "https://maps.app.goo.gl/ytwjyXpADGPSBJzo7",
  },
];

const tabs = [
  { id: "accommodation", label: "Nghỉ dưỡng", icon: "🏨" },
  { id: "dining", label: "Ẩm thực", icon: "🍴" },
  { id: "amenities", label: "Tiện ích", icon: "🏊‍♂️" },
  { id: "experiences", label: "Trải nghiệm", icon: "🌊" },
  { id: "gallery", label: "Thư viện ảnh", icon: "📸" },
];

export default function Tourism() {
  const [activeTab, setActiveTab] = useState("accommodation");

  return (
    <div className="min-h-screen bg-white">
      <BranchSection branches={branches} />
      <NavigationTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {activeTab === "accommodation" && (
        <AccommodationSection rooms={accommodationData} />
      )}

      {activeTab === "dining" && <DiningSection restaurants={restaurantData} />}

      {activeTab === "amenities" && (
        <AmenitiesSection amenities={amenityData} />
      )}

      {activeTab === "experiences" && (
        <ExperiencesSection
          experiences={experienceData}
          tourItinerary={tourItinerary}
        />
      )}

      {activeTab === "gallery" && <GallerySection images={galleryImages} />}

      <TestimonialsSection testimonials={testimonials} />

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Đặt phòng ngay hôm nay</h2>
          <p className="text-xl mb-8 opacity-90">
            Liên hệ với chúng tôi để được tư vấn và đặt phòng tại Hotel Lại Sơn và Hotel Hòn Sơn
            - GTS Group
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <button
              className="cursor-pointer px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              onClick={() =>
                window.open("https://zalo.me/0869038582", "_blank")
              }
            >
              📞 Hotline: 0869038582
            </button>
          </div>

          <div className="mt-8 text-center">
            <p
              className="text-sm opacity-75 cursor-pointer hover:opacity-100 transition-opacity"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/ytwjyXpADGPSBJzo7",
                  "_blank"
                )
              }
            >
              📍 Lại Sơn, Kiên Hải, Kiên Giang, Việt Nam
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
