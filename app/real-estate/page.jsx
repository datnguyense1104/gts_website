"use client";

import React from "react";
import Image from "next/image";

// Add keyframes for fadeIn animation
const fadeInKeyframes = `
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
`;

// Add style tag to head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = fadeInKeyframes;
  document.head.appendChild(style);
}

const Card = ({ index }) => {
  // Sample data for cards
  const cardData = [
    {
      title: "Biệt thự biển Vũng Tàu",
      text: "Sở hữu không gian sống đẳng cấp bên bờ biển Vũng Tàu",
      primaryOption: "Đầu tư ngay",
      secondaryOption: "Tham quan dự án",
      price: "Từ 12 tỷ/căn",
      note: "Sinh lời bền vững",
    },
    {
      title: "Căn hộ ven biển",
      text: "Tận hưởng cuộc sống nghỉ dưỡng với view biển tuyệt đẹp",
      primaryOption: "Xem chi tiết",
      secondaryOption: "Đặt lịch tư vấn",
      price: "Từ 3.5 tỷ/căn",
      note: "Số lượng giới hạn",
    },
    {
      title: "Đất nền Vũng Tàu",
      text: "Vị trí đắc địa, pháp lý minh bạch, tiềm năng sinh lời cao",
      primaryOption: "Tìm hiểu thêm",
      secondaryOption: "Liên hệ tư vấn",
      price: "Từ 2.8 tỷ/nền",
      note: "Thanh khoản cao",
    },
  ];

  const data = cardData[index - 1] || cardData[0];

  return (
    <div className="min-h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#f8f7f5] w-full p-4 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-0 transform transition-all duration-300 hover:-translate-y-[5px] hover:shadow-xl">
      <div className="flex flex-col gap-4 justify-between items-start w-full md:w-1/2 sm:gap-6 md:gap-8">
        <h2 className="relative mb-2 text-xl font-semibold text-gray-900 cursor-pointer sm:text-2xl sm:mb-8 md:mb-12 group">
          {data.title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </h2>
        <p className="mb-4 max-w-md text-xl font-semibold leading-tight text-gray-800 sm:text-2xl md:text-3xl sm:mb-6">
          {data.text}
        </p>
        <div className="flex flex-wrap gap-4 mt-auto">
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg transition-all sm:px-6 sm:py-3 hover:bg-blue-700 sm:text-base">
            {data.primaryOption}
          </button>
          <button className="px-4 py-2 text-sm text-blue-600 rounded-lg border border-blue-600 transition-all sm:px-6 sm:py-3 hover:bg-blue-50 sm:text-base">
            {data.secondaryOption}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="flex relative flex-col justify-center items-center w-full h-full group">
          <div className="relative overflow-hidden rounded-2xl w-full h-[200px] sm:h-[250px] md:h-full">
            <Image
              src={`/vungtau_${index}.jpeg`}
              width={500}
              height={500}
              alt="Dự án bất động sản cao cấp tại Vũng Tàu"
              className="object-cover w-full h-full transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 transition-opacity duration-500 from-blue-600/20 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Nguyễn Văn A",
    location: "Hà Nội",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    quote: "Dịch vụ rất tốt, nhân viên nhiệt tình, chuyên nghiệp.",
    link: "#",
    rating: 5,
    purchaseValue: "2.5 tỷ",
    purchaseType: "Căn hộ",
  },
  {
    name: "Trần Thị B",
    location: "Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "Tôi rất hài lòng với căn nhà mới của mình.",
    link: "#",
    rating: 5,
    purchaseValue: "3.2 tỷ",
    purchaseType: "Biệt thự",
  },
  {
    name: "Lê Văn C",
    location: "Đà Nẵng",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    quote: "Quy trình làm việc rõ ràng, minh bạch.",
    link: "#",
    rating: 4,
    purchaseValue: "1.8 tỷ",
    purchaseType: "Nhà phố",
  },
  {
    name: "Phạm Thị D",
    location: "Nha Trang",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    quote: "Tư vấn tận tâm, giúp tôi tìm được căn nhà ưng ý.",
    link: "#",
    rating: 5,
    purchaseValue: "4.5 tỷ",
    purchaseType: "Penthouse",
  },
  {
    name: "Hoàng Văn E",
    location: "Hải Phòng",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: "Giá cả hợp lý, chất lượng dịch vụ tuyệt vời.",
    link: "#",
    rating: 5,
    purchaseValue: "2.8 tỷ",
    purchaseType: "Căn hộ",
  },
  {
    name: "Trương Thị F",
    location: "Đã mua nhà tại Quận Bình Thạnh, TP.HCM",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Tôi đánh giá cao sự minh bạch trong quy trình giao dịch. Mọi thông tin về giá cả, pháp lý đều được tư vấn rõ ràng, giúp tôi yên tâm khi đưa ra quyết định.",
    link: "/stories/truong-thi-f",
    rating: 5,
    purchaseValue: "3.5 tỷ",
    purchaseType: "Nhà phố",
  },
  {
    name: "Đặng Văn G",
    location: "Đã mua nhà tại Quận Phú Nhuận, TP.HCM",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Tôi rất ấn tượng với cách họ phân tích thị trường và tư vấn cho tôi những lựa chọn phù hợp nhất với khả năng tài chính của mình.",
    link: "/stories/dang-van-g",
    rating: 5,
    purchaseValue: "4.2 tỷ",
    purchaseType: "Nhà phố",
  },
  {
    name: "Mai Thị H",
    location: "Đã mua nhà tại Quận 3, TP.HCM",
    image:
      "https://images.unsplash.com/photo-1573497019236-17dd59b5fa20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ 24/7, giải đáp mọi thắc mắc của tôi một cách nhanh chóng và chuyên nghiệp.",
    link: "/stories/mai-thi-h",
    rating: 4.5,
    purchaseValue: "5.5 tỷ",
    purchaseType: "Căn hộ cao cấp",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "text-yellow-400"
              : star - 0.5 <= rating
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    React.useState(0);
  const [showMediaViewer, setShowMediaViewer] = React.useState(false);
  const [selectedProperty, setSelectedProperty] = React.useState(null);

  const showNextTestimonials = () => {
    setCurrentTestimonialIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const showPreviousTestimonials = () => {
    setCurrentTestimonialIndex((prev) =>
      prev - 3 < 0 ? testimonials.length - 3 : prev - 3
    );
  };

  // Sample media data for properties
  const propertyMedia = {
    BB01: {
      images: [
        "/BB01/BB01 hinh anh thuc te lo dat (2).jpg",
        "/BB01/BB01 hinh anh thuc te lo dat (3).jpg",
        "/BB01/BB01 hinh anh thuc te lo dat (4).jpg",
        "/BB01/BB01 hinh anh thuc te lo dat (5).jpg",
        "/BB01/BB01 hinh anh thuc te lo dat (6).jpg",
        "/BB01/BB01 hinh anh thuc te lo dat (7).jpg",
        "/BB01/BB01 hinh anh so hong.jpg",
        "/BB01/BB01 hinh anh quy hoạch đất trên bản đồ.jpg",
      ],
      videos: [
        {
          url: "/BB01/BB01 video  thuc te lo dat.mp4",
          title: "Video thực tế 1",
        },
        {
          url: "/BB01/BB01 video  thuc te lo dat (2).mp4",
          title: "Video thực tế 2",
        },
        {
          url: "/BB01/BB01 video  thuc te lo dat (3).mp4",
          title: "Video thực tế 3",
        },
      ],
    },
    BB02: {
      images: [
        "/BB02/BB02 hinh anh thuc te lo dat.jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (2).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (3).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (4).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (5).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (6).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (7).jpg",
        "/BB02/BB02 hinh anh thuc te lo dat (8).jpg",
        "/BB02/BB02 hinh tren ban do quy hoach.jpg",
        "/BB02/BB02 hinh tren ban do quy hoach (2).jpg",
      ],
      videos: [
        { url: "/BB02/BB02 video lodat.mp4", title: "Video lô đất 1" },
        { url: "/BB02/BB02 video lodat (2).mp4", title: "Video lô đất 2" },
      ],
    },
    BB03: {
      images: [
        "/BB03/BB03 Hinh anh thuc te 1.jpg",
        "/BB03/BB03 Hinh anh thuc te 2.jpg",
        "/BB03/BB03 Hinh anh thuc te 3.jpg",
        "/BB03/BB03 Hinh anh thuc te 4.jpg",
        "/BB03/BB03 Hinh anh thuc te 5.jpg",
        "/BB03/BB03 Hinh anh so hong 1.jpg",
        "/BB03/BB03 Hinh anh so hong 2.jpg",
      ],
      videos: [
        { url: "/BB03/BB03 Video thuc te 1.mp4", title: "Video thực tế 1" },
        { url: "/BB03/BB03 Video thuc te 2.mp4", title: "Video thực tế 2" },
      ],
    },
    BB04: {
      images: [
        "/BB04/BB04 Hinh anh thuc te 1.jpg",
        "/BB04/BB04 Hinh anh thuc te 2.jpg",
        "/BB04/BB04 Hinh anh so hong.jpg",
        "/BB04/BB04 Hinh anh quy hoach.jpg",
      ],
      videos: [
        { url: "/BB04/BB04 Video thuc te 1.mp4", title: "Video thực tế 1" },
        { url: "/BB04/BB04 Video thuc te 2.mp4", title: "Video thực tế 2" },
      ],
    },
    DB01: {
      images: ["/DB01/DB01 Hình ảnh thực tế.jpg"],
      videos: [{ url: "/DB01/DB01 video thực tế.mp4", title: "Video thực tế" }],
    },
    DB02: {
      images: [
        "/DB02/DB02 Hinh anh quy hoach 1.jpg",
        "/DB02/DB02 Hinh anh quy hoach 2.jpg",
        "/DB02/DB02 Hinh anh quy hoach 3.jpg",
        "/DB02/DB02 Hinh anh quy hoach 4.jpg",
        "/DB02/DB02 Hinh anh quy hoach 5.jpg",
        "/DB02/DB02 Hinh anh quy hoach 6.jpg",
        "/DB02/DB02 Hinh anh quy hoach 7.jpg",
        "/DB02/DB02 Hinh anh quy hoach 8.jpg",
        "/DB02/DB02 Hinh anh quy hoach 9.jpg",
        "/DB02/DB02 Hinh anh quy hoach 10.jpg",
      ],
      videos: [],
    },
    KL1: {
      images: [
        "/KL1/Hinh anh thuc te lo dat.jpg",
        "/KL1/Hinh anh thuc te lo dat (2).jpg",
        "/KL1/Hinh anh thuc te lo dat (3).jpg",
        "/KL1/hình ảnh chụp lô đất trên gg map.jpg",
        "/KL1/giấy chứng nhận quyền sử dụng đất.jpg",
      ],
      videos: [],
    },
    LL01: {
      images: [
        "/LL01/LL01 Hinh anh thuc te 1.jpg",
        "/LL01/LL01 Hinh anh thuc te 2.jpg",
        "/LL01/LL01 Hinh anh thuc te 3.jpg",
        "/LL01/LL01 Hinh anh thuc te 4.jpg",
        "/LL01/LL01 Hinh anh thuc te 5.jpg",
        "/LL01/LL01 Hinh anh thuc te 6.jpg",
        "/LL01/LL01 Hinh anh thuc te 7.jpg",
        "/LL01/LL01 Hinh anh quy hoach.jpg",
      ],
      videos: [
        {
          url: "/LL01/LL01 Video thuc te lo dat 1.mp4",
          title: "Video thực tế 1",
        },
        {
          url: "/LL01/LL01 Video thuc te lo dat 2.mp4",
          title: "Video thực tế 2",
        },
        {
          url: "/LL01/LL01 Video thưc te lo dat 3.mp4",
          title: "Video thực tế 3",
        },
        {
          url: "/LL01/LL01 Video thuc te lo dat 4.mp4",
          title: "Video thực tế 4",
        },
      ],
    },
    SN01: {
      images: [
        "/SN01/SN01 hinh anh thuc te lo dat.jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (2).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (3).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (4).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (5).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (6).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (7).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (8).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (9).jpg",
        "/SN01/SN01 hinh anh thuc te lo dat (10).jpg",
        "/SN01/SN01 hinh anh lo  dat trên bản đồ quy hoạch.jpg",
        "/SN01/SN01 ho so xac nhan quyen su dung dat.jpg",
        "/SN01/SN01 ho so xac nhan quyen su dung dat (2).jpg",
      ],
      videos: [],
    },
    SR01: {
      images: [
        "/SR01/SR01 Hinh anh thuc te 1.jpg",
        "/SR01/SR01 Hinh anh thuc te 2.jpg",
        "/SR01/SR01 Hinh anh thuc te 3.jpg",
        "/SR01/SR01 Hinh anh quy hoach.jpg",
      ],
      videos: [],
    },
    SR02: {
      images: [
        "/SR02/SR02 Hinh anh so hong.jpg",
        "/SR02/SR02 Hinh anh quy hoach.jpg",
      ],
      videos: [],
    },
    SR03: {
      images: [
        "/SR03/SR03 Hinh anh so hong.jpg",
        "/SR03/SR03 Hinh anh quy hoach.jpg",
      ],
      videos: [],
    },
    SR04: {
      images: [
        "/SR04/SR04 Hinh anh so hong.jpg",
        "/SR04/SR04 Hinh anh quy hoach.jpg",
      ],
      videos: [],
    },
    PM1: {
      images: [
        "/PM01/hinh tren ban do gg map.jpg",
        "/PM01/hinh so do4.jpg",
        "/PM01/hinh so do.jpg",
        "/PM01/hinh so do 5.jpg",
        "/PM01/hinh so do 3.jpg",
        "/PM01/hinh lo dat thuc te da dieu chinh.jpg",
        "/PM01/hinh lo dat qc.jpg",
        "/PM01/hinh anh tren ban do.jpg",
        "/PM01/hinh anh lo dat.jpg",
        "/PM01/hinh anh lo dat 7.jpg",
        "/PM01/hinh anh lo dat 6.jpg",
        "/PM01/hinh anh lo dat 5.jpg",
        "/PM01/hinh anh lo dat 4.jpg",
        "/PM01/hinh anh lo dat 3.jpg",
        "/PM01/hinh anh lo dat 2.jpg",
      ],
      videos: [],
    },
    PM2: {
      images: [
        "/PM02/hinh chup ve tinh trên app.jpg",
        "/PM02/hinh chup quy hoạch trên app (2).jpg",
        "/PM02/hinh anh thuc te cua lo dat.jpg",
        "/PM02/hinh anh thuc te cua lo dat (6).jpg",
        "/PM02/hinh anh thuc te cua lo dat (5).jpg",
        "/PM02/hinh anh thuc te cua lo dat (4).jpg",
        "/PM02/hinh anh thuc te cua lo dat (3).jpg",
        "/PM02/hinh anh thuc te cua lo dat (2).jpg",
        "/PM02/giay chung nhan quyen su dung dat.jpg",
        "/PM02/bản test quy hoạch.jpg",
        "/PM02/ban test quy hoach.jpg",
      ],
      videos: [],
    },
    PM3: {
      images: [
        "/PM03/PM03 Hình ảnh thực tế 2.jpg",
        "/PM03/PM03 Hình ảnh thực tế 1.jpg",
        "/PM03/PM03 Hình ảnh sổ hồng.jpg",
        "/PM03/PM03 Hình ảnh quy hoạch 2.jpg",
        "/PM03/PM03 Hình ảnh quy hoạch 1.jpg",
        "/PM03/PM03 Bản test quy hoạch.jpg",
      ],
      videos: [{ url: "/PM03/6519867447417.mp4", title: "Video thực tế" }],
    },
    PM4: {
      images: [
        "/PM4/hinh chup thuc te lo dat.jpg",
        "/PM4/hinh chup thuc te lo dat (6).jpg",
        "/PM4/hinh chup thuc te lo dat (5).jpg",
        "/PM4/hinh chup thuc te lo dat (4).jpg",
        "/PM4/hinh chup thuc te lo dat (3).jpg",
        "/PM4/hinh chup thuc te lo dat (2).jpg",
        "/PM4/hinh anh quy hoach lo dat chup tren app.jpg",
        "/PM4/hinh anh quy hoach lo dat chup tren app (2).jpg",
        "/PM4/giay chung nhan quyen su dung dat.jpg",
        "/PM4/giay chung nhan quyen su dung dat (2).jpg",
      ],
      videos: [],
    },
    PM5: {
      images: [
        "/PM5/hinh anh trich luc ban do dia chinh.jpg",
        "/PM5/hinh anh chup lodat quy hoach tren app.jpg",
        "/PM5/hinh anh chup lodat quy hoach tren app (2).jpg",
        "/PM5/giay chung nhan quyen su dung dat.jpg",
      ],
      videos: [],
    },
    PM6: {
      images: [
        "/PM6/hình ảnh thực tế lô đất.jpg",
        "/PM6/hình ảnh thực tế lô đất (3).jpg",
        "/PM6/hình ảnh thực tế lô đất (2).jpg",
        "/PM6/giấy chứng nhận quyền sử dụng đất (2).jpg",
      ],
      videos: [
        { url: "/PM6/video thuc te lo dat.mp4", title: "Video thực tế 1" },
        { url: "/PM6/video thuc te lo dat (2).mp4", title: "Video thực tế 2" },
      ],
    },
    PM7: {
      images: [
        "/PM7/hình ảnh thực tế lô đất.jpg",
        "/PM7/hình ảnh thực tế lô đất (3).jpg",
        "/PM7/hình ảnh thực tế lô đất (2).jpg",
        "/PM7/giấy chứng nhận quyền sử dụng đất.jpg",
      ],
      videos: [
        { url: "/PM7/video thuc te lo dat.mp4", title: "Video thực tế 1" },
        { url: "/PM7/video thuc te lo dat (2).mp4", title: "Video thực tế 2" },
      ],
    },
    MX1: {
      images: [
        "/MX1/hinh anh thuc te.jpg",
        "/MX1/hinh anh so do.jpg",
        "/MX1/hinh anh dat tren google map.jpg",
        "/MX1/hinh anh dat tren ban do.jpg",
      ],
      videos: [{ url: "/MX1/VIDEO.mp4", title: "Video thực tế" }],
    },
    MX2: {
      images: [
        "/MX2/hinh anh thuc te lo dat.jpg",
        "/MX2/hinh anh thuc te lo dat (5).jpg",
        "/MX2/hinh anh thuc te lo dat (4).jpg",
        "/MX2/hinh anh thuc te lo dat (3).jpg",
        "/MX2/hinh anh thuc te lo dat (2).jpg",
        "/MX2/hinh anh chup ban bo quy hoach tren app.jpg",
        "/MX2/hinh anh chup ban bo quy hoach tren app (2).jpg",
        "/MX2/giay chung nhan quyen su dung dat.jpg",
      ],
      videos: [
        { url: "/MX2/video thuc te lo dat.mp4", title: "Video thực tế" },
      ],
    },
    MX3: {
      images: [
        "/MX3/hinh thuc te can nha.jpg",
        "/MX3/hinh chup thuc te lo dat.jpg",
        "/MX3/hinh chup thuc te lo dat (3).jpg",
        "/MX3/hinh chup thuc te lo dat (2).jpg",
        "/MX3/hinh chup ban do quy hoach tren app.jpg",
        "/MX3/hinh chup ban do quy hoach tren app (2).jpg",
      ],
      videos: [
        { url: "/MX3/video chup thuc te lo dat.mp4", title: "Video thực tế 1" },
        {
          url: "/MX3/video chup thuc te lo dat (2).mp4",
          title: "Video thực tế 2",
        },
      ],
    },
    TP1: {
      images: [
        "/TP1/hinh anh dat ban do.jpg",
        "/TP1/hinh anh dat ban do 1.jpg",
        "/TP1/hinh anh  so do.jpg",
      ],
      videos: [],
    },
    TP2: {
      images: [
        "/TP2/hinh chup ve tinh tren app.jpg",
        "/TP2/hinh chup ve tinh tren app (2).jpg",
        "/TP2/hinh chup quy hoach tren app.jpg",
        "/TP2/hinh chup quy hoach tren app (2).jpg",
        "/TP2/hinh anh thuc te lo dat (2).jpg",
        "/TP2/hinh anh thuc te lo dat.jpg",
        "/TP2/giay chung nhan quyen su dung dat.jpg",
        "/TP2/giay chung nhan quyen su dung dat (4).jpg",
        "/TP2/giay chung nhan quyen su dung dat (3).jpg",
        "/TP2/giay chung nhan quyen su dung dat (2).jpg",
      ],
      videos: [],
    },
    TP3: {
      images: [
        "/TP3/hình chụp thực tế nhà.jpg",
        "/TP3/hình chụp thực tế nhà (3).jpg",
        "/TP3/hình chụp thực tế nhà (2).jpg",
        "/TP3/hình chụp quy hoạch trên app.jpg",
        "/TP3/hình chụp quy hoạch trên app (2).jpg",
        "/TP3/hinh chup thuc te nha dat.jpg",
        "/TP3/giấy chứng nhân quyền sử dụng đất.jpg",
      ],
      videos: [],
    },
    TP4: {
      images: [
        "/TP4/hinh anh chup tu ban do ten app.png",
        "/TP4/giấy chứng nhận quyền sử dụng đất.jpg",
        "/TP4/giấy chứng nhận quyền sử dụng đất (4).jpg",
        "/TP4/giấy chứng nhận quyền sử dụng đất (3).jpg",
        "/TP4/giấy chứng nhận quyền sử dụng đất (2).jpg",
      ],
      videos: [],
    },
    TP5: {
      images: [
        "/TP5/hình ảnh chụp lô đất quy hoạch.jpg",
        "/TP5/hình ảnh chụp lô đất quy hoạch (3).jpg",
        "/TP5/hình ảnh chụp lô đất quy hoạch (2).jpg",
        "/TP5/hình chụp lô đất quy hoạch trên app.jpg",
        "/TP5/hinh chup thuc te lo dat.jpg",
        "/TP5/hinh chup thuc te lo dat (4).jpg",
        "/TP5/hinh chup thuc te lo dat (3).jpg",
        "/TP5/hinh chup thuc te lo dat (2).jpg",
        "/TP5/giay chung nhan quyen su dung dat.jpg",
        "/TP5/giay chung nhan quyen su dung dat (2).jpg",
      ],
      videos: [],
    },
    PH01: {
      images: [
        "/PH01/PH01 ảnh thực tế.jpg",
        "/PH01/PH01 ảnh thực tế 2.jpg",
        "/PH01/PH01 ẢNH THỰC TẾ 1.jpg",
        "/PH01/PH01 bản test quy hoạch 2.jpg",
        "/PH01/PH01 bản test quy hoạch 1.jpg",
        "/PH01/PH01 Hình ảnh sổ hồng 3.jpg",
        "/PH01/PH01 Hình ảnh sổ hồng 2.jpg",
        "/PH01/PH01 Hình ảnh sổ hồng 1.jpg",
        "/PH01/PH01 Hình ảnh quy hoạch.jpg",
        "/PH01/PH01 Hình ảnh quy hoạch 1.jpg",
        "/PH01/PH01 H.A thực tế.jpg",
      ],
      videos: [
        { url: "/PH01/PH01 video thực tế.mp4", title: "Video thực tế" },
        { url: "/PH01/PH01 Video thực tế 1.mp4", title: "Video thực tế 1" },
      ],
    },
    HD01: {
      images: [
        "/HD01/HD01 Hinh anh thuc te 4.jpg",
        "/HD01/HD01 Hinh anh thuc te 3.jpg",
        "/HD01/HD01 Hinh anh thuc te 2.jpg",
        "/HD01/HD01 Hinh anh thuc te 1.jpg",
        "/HD01/HD01 Hinh anh so hong.jpg",
        "/HD01/HD01 Hinh anh quy hoach 2.jpg",
        "/HD01/HD01 Hinh anh quy hoach 1.jpg",
      ],
      videos: [{ url: "/HD01/HD01 Video thuc te.mp4", title: "Video thực tế" }],
    },
    HD02: {
      images: [
        "/HD02/HD02 Hinh anh so hong.jpg",
        "/HD02/HD02 Hinh anh quy hoach 2.jpg",
        "/HD02/HD02 Hinh anh quy hoach 1.jpg",
      ],
      videos: [],
    },
    CP01: {
      images: [
        "/CP01/CP01 Hinh anh so hong 2.jpg",
        "/CP01/CP01 Hinh anh so hong 1.jpg",
      ],
      videos: [],
    },
    CP02: {
      images: [
        "/CP02/CP02 Hinh anh so hong.jpg",
        "/CP02/CP02 Hinh anh quy hoach.jpg",
      ],
      videos: [{ url: "/CP02/CP02 Video thuc te.mp4", title: "Video thực tế" }],
    },
    CP03: {
      images: [
        "/CP03/CP03 Hinh anh so hong.jpg",
        "/CP03/CP03 Hinh anh so hong 4.jpg",
        "/CP03/CP03 Hinh anh so hong 3.jpg",
        "/CP03/CP03 Hinh anh so hong 2.jpg",
        "/CP03/CP03 Hinh anh quy hoach.jpg",
      ],
      videos: [],
    },
    SX01: {
      images: ["/SX01/hinh anh lo dat.jpg"],
      videos: [
        { url: "/SX01/video hien truong.mp4", title: "Video hiện trường 1" },
        { url: "/SX01/video hien truong 2.mp4", title: "Video hiện trường 2" },
        { url: "/SX01/video hien truong 3.mp4", title: "Video hiện trường 3" },
      ],
    },
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setShowMediaViewer(true);
  };

  const MediaViewer = ({ isOpen, onClose, property }) => {
    if (!isOpen || !property) return null;

    const media = propertyMedia[property.maLo] || { images: [], videos: [] };
    const [activeTab, setActiveTab] = React.useState("images");
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

    // Ensure we have valid images before rendering
    const validImages = media.images.filter((img) => img && img.trim() !== "");
    const hasImages = validImages.length > 0;
    const hasVideos = media.videos && media.videos.length > 0;

    return (
      <div className="overflow-y-auto fixed inset-0 z-50">
        {/* Overlay */}
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"
          aria-hidden="true"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex fixed inset-0 z-50 justify-center items-center pointer-events-none">
          <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transition-all transform pointer-events-auto sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {property.maLo} - {property.khuVuc}
                    </h3>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="mb-4 border-b border-gray-200">
                    <nav className="flex -mb-px space-x-8">
                      <button
                        onClick={() => setActiveTab("images")}
                        className={`${
                          activeTab === "images"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                      >
                        Hình ảnh
                      </button>
                      <button
                        onClick={() => setActiveTab("videos")}
                        className={`${
                          activeTab === "videos"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                      >
                        Video
                      </button>
                    </nav>
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    {activeTab === "images" && (
                      <div className="space-y-4">
                        {hasImages ? (
                          <>
                            <div className="relative aspect-video">
                              <Image
                                src={validImages[currentImageIndex]}
                                alt={`Property image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                              {validImages.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`relative aspect-video ${
                                    currentImageIndex === index
                                      ? "ring-2 ring-blue-500"
                                      : ""
                                  }`}
                                >
                                  <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover rounded-lg"
                                  />
                                </button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="py-8 text-center text-gray-500">
                            Không có hình ảnh nào
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "videos" && (
                      <div className="space-y-4">
                        {hasVideos ? (
                          <>
                            <div className="aspect-video">
                              <iframe
                                src={media.videos[currentVideoIndex].url}
                                title={media.videos[currentVideoIndex].title}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                              {media.videos.map((video, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentVideoIndex(index)}
                                  className={`relative aspect-video flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden ${
                                    currentVideoIndex === index
                                      ? "ring-2 ring-blue-500"
                                      : ""
                                  }`}
                                >
                                  <span className="absolute top-1 left-1 z-10 px-2 py-0.5 text-xs font-medium text-gray-700 rounded bg-white/80">
                                    {video.title || `Video ${index + 1}`}
                                  </span>
                                  {video.poster ? (
                                    <Image
                                      src={video.poster}
                                      alt={video.title || `Video ${index + 1}`}
                                      fill
                                      className="object-cover rounded-lg"
                                    />
                                  ) : (
                                    <svg
                                      className="w-8 h-8 text-blue-500 opacity-80"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="py-8 text-center text-gray-500">
                            Không có video nào
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [activeTab, setActiveTab] = React.useState("chau-duc");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showMap, setShowMap] = React.useState({});
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const sliderRef = React.useRef(null);

  // Sample data
  const propertyData = {
    "chau-duc": [
      {
        id: 1,
        maLo: "BC01A",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "63",
        thua: "340",
        dienTich: "149,8 m2",
        thoCu: "80 m2",
        giaBan: "790.000.000 đ",
        giaNgang: "18.000.000 đ",
        giaM2: "5.266.000 đ",
        // image: '/cd3.jpg',
      },
      {
        id: 2,
        maLo: "BC01B",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "63",
        thua: "341",
        dienTich: "149,8 m2",
        thoCu: "80 m2",
        giaBan: "790.000.000 đ",
        giaNgang: "18.000.000 đ",
        giaM2: "5.266.000 đ",
      },
      {
        id: 3,
        maLo: "BC01C",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "63",
        thua: "342",
        dienTich: "149,8 m2",
        thoCu: "80 m2",
        giaBan: "790.000.000 đ",
        giaNgang: "18.000.000 đ",
        giaM2: "5.266.000 đ",
      },
      {
        id: 4,
        maLo: "BC01D",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "63",
        thua: "343",
        dienTich: "149,8 m2",
        thoCu: "80 m2",
        giaBan: "790.000.000 đ",
        giaNgang: "18.000.000 đ",
        giaM2: "5.266.000 đ",
      },
      {
        id: 5,
        maLo: "BC02A",
        khuVuc: "Bàu Chinh",
        to: "63",
        thua: "245",
        dienTich: "216 m2",
        thoCu: "80 m2",
        giaBan: "896.000.000 đ",
        giaNgang: "24.216.000 đ",
        giaM2: "4.148.000 đ",
      },
      {
        id: 6,
        maLo: "BC02B",
        khuVuc: "Bàu Chinh",
        to: "63",
        thua: "246",
        dienTich: "155,8 m2",
        thoCu: "80 m2",
        giaBan: "784.000.000 đ",
        giaNgang: "25.290.000 đ",
        giaM2: "5.025.000 đ",
      },
      {
        id: 7,
        maLo: "BC02C",
        khuVuc: "Bàu Chinh",
        to: "63",
        thua: "247",
        dienTich: "180,5 m2",
        thoCu: "80 m2",
        giaBan: "828.000.000 đ",
        giaNgang: "22.378.000 đ",
        giaM2: "4.600.000 đ",
      },
      {
        id: 8,
        maLo: "BC02D",
        khuVuc: "Bàu Chinh",
        to: "62",
        thua: "264",
        dienTich: "180,5 m2",
        thoCu: "80 m2",
        giaBan: "828.000.000 đ",
        giaNgang: "22.378.000 đ",
        giaM2: "4.600.000 đ",
      },
      {
        id: 9,
        maLo: "BC02E",
        khuVuc: "Bàu Chinh",
        to: "62",
        thua: "265",
        dienTich: "180,5 m2",
        thoCu: "80 m2",
        giaBan: "828.000.000 đ",
        giaNgang: "22.378.000 đ",
        giaM2: "4.600.000 đ",
      },
      {
        id: 10,
        maLo: "BC03",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Bình",
        to: "45",
        thua: "96",
        dienTich: "1500 m2",
        thoCu: "800 m2",
        giaBan: "7.840.000.000 đ",
        giaNgang: "31.360.000 đ",
        giaM2: "5.226.000 đ",
      },
      {
        id: 11,
        maLo: "BC04A",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "54",
        thua: "272",
        dienTich: "117,7 m2",
        thoCu: "80 m2",
        giaBan: "716.000.000 đ",
        giaNgang: "29.217.000 đ",
        giaM2: "5.694.000 đ",
      },
      {
        id: 12,
        maLo: "BC04B",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "54",
        thua: "273",
        dienTich: "111,9 m2",
        thoCu: "80 m2",
        giaBan: "672.000.000 đ",
        giaNgang: "29.217.000 đ",
        giaM2: "5.694.000 đ",
      },
      {
        id: 13,
        maLo: "BC04C",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "54",
        thua: "268",
        dienTich: "124 m2",
        thoCu: "80 m2",
        giaBan: "672.000.000 đ",
        giaNgang: "29.217.000 đ",
        giaM2: "5.694.000 đ",
      },
      {
        id: 14,
        maLo: "BC04D",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "54",
        thua: "267",
        dienTich: "136,9 m2",
        thoCu: "80 m2",
        giaBan: "750.000.000 đ",
        giaNgang: "26.785.000 đ",
        giaM2: "5.474.000 đ",
      },
      {
        id: 15,
        maLo: "BC04E",
        khuVuc: "Bàu Chinh",
        thon: "thôn Tân Hưng",
        to: "54",
        thua: "266",
        dienTich: "150 m2",
        thoCu: "80 m2",
        giaBan: "784.000.000 đ",
        giaNgang: "26.133.000 đ",
        giaM2: "5.226.000 đ",
      },
      {
        id: 16,
        maLo: "BB01",
        khuVuc: "BÌNH BA",
        to: "61",
        thua: "511",
        dienTich: "595",
        thoCu: "0",
        giaBan: "1.120.000.000 Đ",
        giaNgang: "",
        giaM2: "1.900.000 đ",
        image: "/BB01/BB01 hinh anh thuc te lo dat (5).jpg",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580027935!2d107.1890278!3d10.6418611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2c8b3a1d9%3A0x43900f1d6b9b8c0!2sCh%C3%A2u%20%C4%90%E1%BB%A9c!5e0!3m2!1sen!2sus!4v1713536356953!5m2!1sen!2sus&z=21&maptype=satellite&markers=color:red%7Clabel:B%7C10.6418611,107.1890278&markers=color:blue%7Clabel:BB01%7C10.6418611,107.1890278",
        directionUrl:
          "https://www.google.com/maps/dir//10.6418611,107.1890278/@10.6418611,107.1890278,21z",
      },
      {
        id: 17,
        maLo: "BB02",
        khuVuc: "BÌNH BA",
        to: "61",
        thua: "209",
        dienTich: "1428",
        thoCu: "0",
        giaBan: "2.910.000.000 đ",
        giaNgang: "",
        giaM2: "2.000.000 đ",
        image: "/BB02/BB02 hinh anh thuc te lo dat (6).jpg",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580027935!2d107.1930278!3d10.6374167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2c8b3a1d9%3A0x43900f1d6b9b8c0!2sCh%C3%A2u%20%C4%90%E1%BB%A9c!5e0!3m2!1sen!2sus!4v1713536356953!5m2!1sen!2sus&z=21&maptype=satellite&markers=color:red%7Clabel:B%7C10.6374167,107.1930278&markers=color:blue%7Clabel:BB02%7C10.6374167,107.1930278",
        directionUrl:
          "https://www.google.com/maps/dir//10.6374167,107.1930278/@10.6374167,107.1930278,21z",
      },
      {
        id: 18,
        maLo: "BB03",
        khuVuc: "Bình BA",
        to: "60",
        thua: "142",
        dienTich: "1085",
        thoCu: "0",
        giaBan: "3.000.000.000 đ",
        giaNgang: "",
        giaM2: "2.765.000 đ",
        image: "/BB03/BB03 Hinh anh thuc te 2.jpg",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580027935!2d107.1807222!3d10.6387500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2c8b3a1d9%3A0x43900f1d6b9b8c0!2sCh%C3%A2u%20%C4%90%E1%BB%A9c!5e0!3m2!1sen!2sus!4v1713536356953!5m2!1sen!2sus&z=21&maptype=satellite&markers=color:red%7Clabel:B%7C10.6387500,107.1807222&markers=color:blue%7Clabel:BB03%7C10.6387500,107.1807222",
        directionUrl:
          "https://www.google.com/maps/dir//10.6387500,107.1807222/@10.6387500,107.1807222,21z",
      },
      {
        id: 19,
        maLo: "BB04",
        khuVuc: "Bình Ba",
        to: "60",
        thua: "148",
        dienTich: "3225",
        thoCu: "100",
        giaBan: "6.160.000.000 đ",
        giaNgang: "197.000.000 đ",
        giaM2: "1.910.000 đ",
        image: "/BB04/BB04 Hinh anh thuc te 2.jpg",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580027935!2d107.1802778!3d10.6338333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2c8b3a1d9%3A0x43900f1d6b9b8c0!2sCh%C3%A2u%20%C4%90%E1%BB%A9c!5e0!3m2!1sen!2sus!4v1713536356953!5m2!1sen!2sus&z=21&maptype=satellite&markers=color:red%7Clabel:B%7C10.6338333,107.1802778&markers=color:blue%7Clabel:BB04%7C10.6338333,107.1802778",
        directionUrl:
          "https://www.google.com/maps/dir//10.6338333,107.1802778/@10.6338333,107.1802778,21z",
      },
      {
        id: 20,
        maLo: "DB01",
        khuVuc: "ĐÁ BẠC",
        to: "138",
        thua: "18 thửa (427 - 444)",
        dienTich: "4900",
        thoCu: "1140",
        giaBan: "14.700.000.000 đ",
        giaNgang: "",
        giaM2: "3.000.000 đ",
        image: "/DB01/DB01 Hình ảnh thực tế.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 21,
        maLo: "DB02",
        khuVuc: "Thôn Phú Sơn",
        to: "141",
        thua: "10 thửa (784-794)",
        dienTich: "3250,2",
        thoCu: "808",
        giaBan: "12.500.000.000 đ",
        giaNgang: "",
        giaM2: "3.800.000 đ",
        image: "/DB02/DB02 Hinh anh quy hoach 9.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 22,
        maLo: "KL1",
        khuVuc: "Kim Long",
        khuPho: "khu phố Tân Long",
        to: "63",
        thua: "199",
        dienTich: "528 m2",
        thoCu: "",
        giaBan: "720.000.000 đ",
        giaNgang: "",
        giaM2: "1.360.000 đ",
        image: "/KL1/Hinh anh thuc te lo dat.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 23,
        maLo: "LL01",
        khuVuc: "Láng lớn",
        to: "27N",
        thua: "82, 83,84,92 ,93, 126, 127 ,128, 129, 160, 451, 452, 458, 491",
        dienTich: "4 mẫu 2 (15.120 m2)",
        thoCu: "600",
        giaBan: "91.840.000.000 đ",
        giaNgang: "",
        giaM2: "6.074.000 đ",
        image: "/LL01/LL01 Hinh anh thuc te 4.jpg",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580027935!2d107.1898611!3d10.6560000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2c8b3a1d9%3A0x43900f1d6b9b8c0!2sCh%C3%A2u%20%C4%90%E1%BB%A9c!5e0!3m2!1sen!2sus!4v1713536356953!5m2!1sen!2sus&z=21&maptype=satellite&markers=color:red%7Clabel:L%7C10.6560000,107.1898611&markers=color:blue%7Clabel:LL01%7C10.6560000,107.1898611",
        directionUrl:
          "https://www.google.com/maps/dir//10.6560000,107.1898611/@10.6560000,107.1898611,21z",
      },
      {
        id: 24,
        maLo: "SN01",
        khuVuc: "SUỐI NGHỆ",
        to: "24",
        thua: "135,144,154,179",
        dienTich: "4918",
        thoCu: "",
        giaBan: "6.160.000.000 đ",
        giaNgang: "",
        giaM2: "1.252.000 đ",
        image: "/SN01/SN01 hinh anh thuc te lo dat (6).jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 25,
        maLo: "SR01",
        khuVuc: "Suối Rao - Thôn 4",
        to: "85",
        thua: "8 thửa (536-543)",
        dienTich: "2898,9",
        thoCu: "600",
        giaBan: "16.000.000.000 đ",
        giaNgang: "186.000.000 đ",
        giaM2: "5.500.000 đ",
        image: "/SR01/SR01 Hinh anh thuc te 1.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 26,
        maLo: "SR02",
        khuVuc: "Thôn 4",
        to: "85",
        thua: "544",
        dienTich: "1026",
        thoCu: "160",
        giaBan: "1.800.000.000 đ",
        giaNgang: "",
        giaM2: "1.750.000 đ",
        image: "/SR02/SR02 Hinh anh quy hoach.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 27,
        maLo: "SR03",
        khuVuc: "Thôn 4",
        to: "85",
        thua: "545",
        dienTich: "1066",
        thoCu: "160",
        giaBan: "2.300.000.000 đ",
        giaNgang: "",
        giaM2: "2.150.000 đ",
        image: "/SR03/SR03 Hinh anh quy hoach.jpg",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 28,
        maLo: "SR04",
        khuVuc: "Thôn 4",
        to: "85",
        thua: "546",
        dienTich: "1033",
        thoCu: "160",
        giaBan: "2.100.000.000 đ",
        giaNgang: "",
        giaM2: "2.000.000 đ",
        image: "/SR04/SR04 Hinh anh quy hoach.jpg",
        mapUrl: "",
        directionUrl: "",
      },
    ],
    "phu-my": [
      {
        id: 1,
        maLo: "PM1",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "44",
        thua: "268",
        dienTich: "256,7",
        thoCu: "256,7",
        giaBan: "9.240.000.000 đ",
        giaNgang: "740.000.000",
        giaM2: "36.100.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 2,
        maLo: "PM2",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "43",
        thua: "559",
        dienTich: "350",
        thoCu: "60",
        giaBan: "14.400.000.000 đ",
        giaNgang: "720.000.000",
        giaM2: "41.142.857 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 3,
        maLo: "PM3",
        khuVuc: "Khu dân cư Ngọc Hà",
        thon: "",
        to: "26",
        thua: "154",
        dienTich: "350,5",
        thoCu: "120",
        giaBan: "12.300.000.000 đ",
        giaNgang: "329.000.000 đ",
        giaM2: "35.000.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 4,
        maLo: "PM4",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "20",
        thua: "834",
        dienTich: "203,1",
        thoCu: "203,1",
        giaBan: "6.160.000.000 đ",
        giaNgang: "308.000.000 đ",
        giaM2: "30.350.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 5,
        maLo: "PM5",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "68",
        thua: "447",
        dienTich: "121",
        thoCu: "121",
        giaBan: "5.150.000.000 đ",
        giaNgang: "206.000.000 đ",
        giaM2: "42.560.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 6,
        maLo: "PM6",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "11",
        thua: "2161",
        dienTich: "159 m2",
        thoCu: "100m2",
        giaBan: "5.936.000.000 đ",
        giaNgang: "185.000.000 đ",
        giaM2: "37.100.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 7,
        maLo: "PM07",
        khuVuc: "Phú Mỹ",
        thon: "",
        to: "11",
        thua: "2162",
        dienTich: "158 m2",
        thoCu: "60 m2",
        giaBan: "5.600.000.000 đ",
        giaNgang: "175.000.000 đ",
        giaM2: "35.500.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 8,
        maLo: "MX1",
        khuVuc: "Mỹ Xuân",
        thon: "",
        to: "35",
        thua: "272",
        dienTich: "100m2",
        thoCu: "80m2",
        giaBan: "2.350.000.000 đ",
        giaNgang: "470.000.000 đ",
        giaM2: "23.500.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 9,
        maLo: "MX2",
        khuVuc: "Mỹ Xuân (đường Võ Nguyên Giáp)",
        thon: "",
        to: "83",
        thua: "305",
        dienTich: "226.4m2",
        thoCu: "81m2",
        giaBan: "8.000.000.000 đ",
        giaNgang: "195.000.000 đ",
        giaM2: "35.400.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 10,
        maLo: "MX3",
        khuVuc: "Mỹ Xuân (đường Cách Mạng Tháng 8)",
        thon: "",
        to: "84",
        thua: "975",
        dienTich: "143.8m2",
        thoCu: "50m2",
        giaBan: "8.000.000.000 đ",
        giaNgang: "266.000.000 đ",
        giaM2: "55.600.0000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 11,
        maLo: "TP1",
        khuVuc: "Tân Phước",
        thon: "",
        to: "20",
        thua: "1121",
        dienTich: "134,4",
        thoCu: "100",
        giaBan: "2.070.000.000 đ",
        giaNgang: "414.400.000 đ",
        giaM2: "15.378.900 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 12,
        maLo: "TP2",
        khuVuc: "Tân Phước",
        thon: "",
        to: "4",
        thua: "578,579",
        dienTich: "150",
        thoCu: "150",
        giaBan: "8.064.000.000 đ",
        giaNgang: "806.400.000 đ",
        giaM2: "53.760.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 13,
        maLo: "TP3",
        khuVuc: "Tân Phước",
        thon: "",
        to: "4",
        thua: "552",
        dienTich: "75",
        thoCu: "75",
        giaBan: "5.000.000.000 đ",
        giaNgang: "333.000.000",
        giaM2: "67.000.000",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 14,
        maLo: "TP4",
        khuVuc: "Tân Phước",
        thon: "",
        to: "3",
        thua: "396",
        dienTich: "5682",
        thoCu: "1500",
        giaBan: "8.624.000.000 đ",
        giaNgang: "",
        giaM2: "1.500.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 15,
        maLo: "TP5",
        khuVuc: "Tân Phước",
        thon: "",
        to: "49",
        thua: "29",
        dienTich: "30000",
        thoCu: "0",
        giaBan: "86.000.000.000 đ",
        giaNgang: "289.000.000 đ",
        giaM2: "28.700.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 16,
        maLo: "PH01",
        khuVuc: "Khu phố Phước Sơn",
        thon: "",
        to: "140",
        thua: "47",
        dienTich: "1.005,8",
        thoCu: "300",
        giaBan: "9.500.000.000 đ",
        giaNgang: "463.000.000 đ",
        giaM2: "9.500.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 17,
        maLo: "HD01",
        khuVuc: "",
        thon: "",
        to: "58",
        thua: "260",
        dienTich: "102",
        thoCu: "61",
        giaBan: "1.100.000.000 đ",
        giaNgang: "220.000.000 đ",
        giaM2: "10.800.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 18,
        maLo: "HD02",
        khuVuc: "",
        thon: "",
        to: "37",
        thua: "98",
        dienTich: "982",
        thoCu: "100",
        giaBan: "4.000.000.000 đ",
        giaNgang: "160.000.000 đ",
        giaM2: "4.000.000",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 19,
        maLo: "TH01",
        khuVuc: "KDC Tân Hải Graden",
        thon: "",
        to: "",
        thua: "",
        dienTich: "",
        thoCu: "",
        giaBan: "9.450.000.000 đ",
        giaNgang: "",
        giaM2: "",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 20,
        maLo: "CP01",
        khuVuc: "",
        thon: "",
        to: "34",
        thua: "596",
        dienTich: "1029",
        thoCu: "100",
        giaBan: "4.600.000.000 đ",
        giaNgang: "",
        giaM2: "4.500.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 21,
        maLo: "CP02",
        khuVuc: "",
        thon: "",
        to: "22",
        thua: "339",
        dienTich: "761",
        thoCu: "50",
        giaBan: "3.000.000.000 đ",
        giaNgang: "",
        giaM2: "3.900.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 22,
        maLo: "CP03",
        khuVuc: "",
        thon: "",
        to: "28,29",
        thua: "717,718,719, 1077",
        dienTich: "7000",
        thoCu: "120",
        giaBan: "27.400.000.000 đ",
        giaNgang: "",
        giaM2: "3.900.000 đ",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
      {
        id: 23,
        maLo: "SX01",
        khuVuc: "SONG XOAI",
        thon: "",
        to: "7",
        thua: "187,188,189",
        dienTich: "29590",
        thoCu: "300",
        giaBan: "16.800.000.000",
        giaNgang: "",
        giaM2: "567",
        image: "",
        mapUrl: "",
        directionUrl: "",
      },
    ],
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? propertyData[activeTab].length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === propertyData[activeTab].length - 1 ? 0 : prev + 1
    );
  };

  const toggleMap = (propertyId) => {
    setShowMap((prev) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 100;
    const isRightSwipe = distance < -100;

    if (isLeftSwipe) {
      handleNextSlide();
    }
    if (isRightSwipe) {
      handlePrevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 100;
    const isRightSwipe = distance < -100;

    if (isLeftSwipe) {
      handleNextSlide();
    }
    if (isRightSwipe) {
      handlePrevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Reset slide index when changing tabs
  React.useEffect(() => {
    setCurrentSlide(0);
    setShowMap({});
  }, [activeTab]);

  return (
    <div className="h-full flex flex-col font-[var(--font-roboto)] bg-white text-gray-900">
      {/* Hero section */}
      <div className="container mt-12 mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center max-w-[1200px] min-h-[80vh] relative">
        {/* Left Section */}
        <div className="mb-10 w-full text-center lg:w-1/2 lg:pr-10 lg:mb-0 lg:text-left">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl/17 sm:mb-6 md:mb-8">
            ĐẦU TƯ THÔNG MINH
            <br />
            <span className="text-blue-600">SINH LỜI BỀN VỮNG</span>
          </h1>
          <p className="mx-auto mb-6 max-w-md text-xl text-gray-700 sm:text-2xl sm:mb-8 md:mb-10 lg:mx-0">
            Khám phá cơ hội đầu tư bất động sản
            <br className="hidden sm:block" />
            với lợi nhuận lên đến 20%/năm
          </p>
        </div>

        {/* Right Section */}
        <div className="relative mt-8 w-full lg:w-1/2 lg:mt-0">
          <div className="overflow-hidden relative bg-blue-100 shadow-2xl aspect-square shadow-gray-600/60">
            <div className="flex relative justify-center items-center w-full h-full">
              <div className="text-center">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                  <Image
                    src="/HCM_moi.png"
                    width={600}
                    height={600}
                    alt="Khu đô thị TP.HCM"
                    className="object-cover brightness-110 contrast-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center max-w-[1200px] relative">
        <div className="mb-10 lg:w-1/2 lg:pr-10 lg:mb-0">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl/8">
            TẠI SAO NÊN ĐẦU TƯ
            <br />
            <br />
            <div className="flex flex-col gap-2">
              <span className="text-left text-blue-600">BẤT ĐỘNG SẢN</span>
              <span className="text-right text-blue-600">HỒ CHÍ MINH MỚI?</span>
            </div>
          </h2>
        </div>
        <div className="mb-10 lg:w-1/2 lg:pl-10 lg:mb-0">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tăng trưởng vượt trội
                </h3>
                <p className="text-gray-600">
                  Giá đất tăng trung bình 15-20%/năm, cao hơn nhiều so với các
                  kênh đầu tư khác
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Pháp lý minh bạch
                </h3>
                <p className="text-gray-600">
                  100% sổ đỏ chính chủ, đảm bảo an toàn pháp lý cho nhà đầu tư
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Cộng đồng đầu tư uy tín
                </h3>
                <p className="text-gray-600">
                  Hơn 1000 nhà đầu tư đã tin tưởng và thành công cùng chúng tôi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Slider Section - HIDDEN FOR NOW */}
      {/* 
      <div className="container mx-auto px-4 py-16 max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            CƠ HỘI ĐẦU TƯ
            <span className="block mt-2 text-3xl text-blue-600 md:text-4xl">
              BẤT ĐỘNG SẢN VÀNG
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Sở hữu ngay những lô đất tiềm năng tại Châu Đức & Phú Mỹ - Nơi hội
            tụ đầy đủ yếu tố để trở thành điểm đến đầu tư bất động sản hàng đầu
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "chau-duc"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("chau-duc")}
            >
              Châu Đức - Vị trí chiến lược
            </button>
            <button
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "phu-my"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("phu-my")}
            >
              Phú Mỹ - Tiềm năng vượt trội
            </button>
          </div>
        </div>

        <div
          className="relative"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {propertyData[activeTab].map((property) => (
                <div key={property.id} className="flex-shrink-0 w-full">
                  <div className="overflow-hidden bg-white rounded-2xl shadow-xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                      <div className="relative w-full">
                        <div
                          className="relative w-full aspect-[4/3] sm:aspect-[16/9] cursor-pointer group"
                          onClick={() => toggleMap(property.id)}
                        >
                          {showMap[property.id] ? (
                            <div className="w-full h-full">
                              <iframe
                                src={property.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                              />
                            </div>
                          ) : (
                            <div className="overflow-hidden relative w-full h-full">
                              {property.image &&
                                property.image.trim() !== "" && (
                                  <Image
                                    src={property.image}
                                    alt={`Bất động sản ${property.maLo}`}
                                    fill
                                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={currentSlide === 0}
                                    quality={90}
                                  />
                                )}
                              <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 bg-black/20 group-hover:opacity-100" />
                            </div>
                          )}
                          <div className="absolute right-4 bottom-4 px-4 py-2 text-sm text-gray-700 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 sm:text-base hover:bg-white hover:shadow-xl">
                            {showMap[property.id]
                              ? "Xem hình ảnh"
                              : "Xem vị trí"}
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Mã Lô</p>
                              <p className="text-lg font-bold text-blue-600">
                                {property.maLo}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Khu Vực</p>
                              <p className="text-lg font-bold">
                                {property.khuVuc}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Thửa</p>
                              <p className="text-lg font-bold">
                                {property.thua}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Diện Tích</p>
                              <p className="text-lg font-bold">
                                {property.dienTich}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Thổ Cư</p>
                              <p className="text-lg font-bold">
                                {property.thoCu}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Giá Bán</p>
                              <p className="text-lg font-bold text-red-600">
                                {property.giaBan}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all transform hover:bg-blue-700 sm:text-base hover:shadow-xl hover:-translate-y-1">
                              Đăng ký xem đất ngay
                            </button>
                            <button
                              onClick={() => handleViewDetails(property)}
                              className="px-6 py-3 text-sm font-semibold text-blue-600 rounded-lg border-2 border-blue-600 transition-all hover:bg-blue-50 sm:text-base"
                            >
                              Xem chi tiết
                            </button>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-sm text-yellow-800">
                              ⚡️{" "}
                              <span className="font-semibold">
                                Liên hệ ngay để được tư vấn, chăm sóc tận tình,
                                chu đáo.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 z-10 p-2 bg-white rounded-full shadow-lg transition-colors duration-300 transform -translate-y-1/2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 z-10 p-2 bg-white rounded-full shadow-lg transition-colors duration-300 transform -translate-y-1/2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      */}

      {/* Map Section with Contact */}
      <div className="container mx-auto px-4 py-16 mb-16 max-w-[1200px]">
        <div className="overflow-hidden bg-white rounded-2xl shadow-xl transition-colors duration-300 dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 bg-gray-50 dark:bg-gray-900">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Liên hệ với chúng tôi
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2 font-semibold">Địa chỉ:</span>
                  S102 0206 01S07 Vinhomes Grand Park, TP. Thủ Đức, TP.HCM
                </p>
                <p className="flex items-center">
                  <span className="mr-2 font-semibold">Email:</span>
                  contact@gts.vn
                </p>
                <p className="flex items-center">
                  <span className="mr-2 font-semibold">Hotline:</span>
                  0908 738 224 - 0988 534 245
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6546200423604!2d106.8301145!3d10.8377211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752100622e3a17%3A0x804c2a839a9bc985!2sT%C3%B2a%20S1.02%20Vinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1752647291147!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Văn phòng tại S1.02 Vinhomes Grand Park, TP. Thủ Đức"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Home Insights Section */}
      <div className="py-12 bg-gradient-to-b from-gray-50 to-white transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white dark:bg-gray-800 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col justify-between items-center p-6 lg:flex-row sm:p-8 md:p-12 lg:p-16">
              {/* Content */}
              <div className="z-10 w-full lg:w-1/2">
                <div className="inline-flex items-center px-3 py-1 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full animate-pulse sm:px-4 sm:py-2 dark:bg-blue-900/30 dark:text-blue-400 sm:mb-6 sm:text-base">
                  <svg
                    className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="font-semibold">Thông tin độc quyền</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-600 transition-transform duration-300 transform sm:text-2xl dark:text-gray-400 sm:mb-4 hover:translate-x-2">
                  Chưa sẵn sàng để mua bán?
                </h3>

                <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-gray-100 sm:mb-8">
                  Khám phá thông tin bất động sản
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    độc quyền{" "}
                  </span>
                  từ chúng tôi
                </h2>

                <div className="mb-6 space-y-3 sm:space-y-4 sm:mb-8">
                  {[
                    "Phân tích thị trường chuyên sâu",
                    "Dự báo xu hướng giá",
                    "Thông tin quy hoạch mới nhất",
                    "Cơ hội đầu tư tiềm năng",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="flex flex-shrink-0 justify-center items-center w-5 h-5 bg-green-100 rounded-full transition-colors duration-300 sm:w-6 sm:h-6 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/30">
                        <svg
                          className="w-3 h-3 text-green-500 sm:w-4 sm:h-4 dark:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 transition-colors duration-300 sm:text-base dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    onClick={() =>
                      window.open("https://zalo.me/0988534245", "_blank")
                    }
                    className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all duration-300 transform cursor-pointer sm:px-8 sm:py-4 sm:rounded-xl hover:bg-blue-700 sm:text-lg group hover:shadow-xl hover:-translate-y-1"
                  >
                    Xem ngay
                    <svg
                      className="ml-2 w-4 h-4 transition-transform transform sm:w-5 sm:h-5 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() =>
                      window.open("https://zalo.me/0988534245", "_blank")
                    }
                    className="inline-flex items-center px-5 py-3 text-base font-semibold text-blue-600 rounded-lg border-2 border-blue-600 transition-all duration-300 cursor-pointer sm:px-8 sm:py-4 dark:border-blue-500 dark:text-blue-400 sm:rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 sm:text-lg group"
                  >
                    Tìm hiểu thêm
                  </button>
                </div>

                <p className="flex items-center mt-4 text-xs text-gray-500 sm:mt-6 sm:text-sm dark:text-gray-400">
                  <svg
                    className="mr-1 w-3 h-3 sm:w-4 sm:h-4 sm:mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Thông tin của bạn luôn được bảo mật
                </p>
              </div>

              {/* Decorative Images */}
              <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] mt-6 lg:mt-0">
                <div className="flex absolute inset-0 justify-center items-center transition-transform duration-500 transform hover:scale-105">
                  {/* Main Image */}
                  <div className="relative w-[85%] h-[85%] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/vungtau_1.jpeg"
                      alt="Thông tin bất động sản Vũng Tàu"
                      fill
                      className="object-cover rounded-xl shadow-2xl sm:rounded-2xl dark:brightness-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr to-transparent rounded-xl from-blue-600/20 dark:from-blue-500/30 sm:rounded-2xl" />
                  </div>
                  {/* Decorative Background Image - Hide on smallest screens */}
                  <div className="absolute top-[5%] right-[5%] w-[70%] h-[70%] opacity-60 transform rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                    <Image
                      src="/vungtau_2.jpeg"
                      alt="Dự án bất động sản Vũng Tàu"
                      fill
                      className="object-cover rounded-xl shadow-xl sm:rounded-2xl dark:brightness-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-bl to-transparent rounded-xl from-blue-600/10 dark:from-blue-500/20 sm:rounded-2xl" />
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-3 left-3 p-3 rounded-lg shadow-lg backdrop-blur-sm transition-transform duration-300 transform sm:bottom-4 sm:left-4 bg-white/90 dark:bg-gray-800/90 sm:p-4 sm:rounded-xl hover:-translate-y-1">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="p-1 bg-blue-100 rounded-md sm:p-2 dark:bg-blue-900/30 sm:rounded-lg">
                      <svg
                        className="w-4 h-4 text-blue-600 sm:w-6 sm:h-6 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                        Tăng trưởng trung bình
                      </p>
                      <p className="text-base font-bold text-blue-600 sm:text-lg dark:text-blue-400">
                        15.7%/năm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            {/* Animated Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 dark:from-blue-500 dark:via-purple-400 dark:to-blue-500 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-gradient"></div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="container mx-auto px-4 py-24 max-w-[1200px]">
        <div className="text-.center">
          <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
            Bạn có thắc mắc?
          </h2>
          <h2 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
            Chúng tôi luôn sẵn sàng hỗ trợ.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-700">
            Hãy chia sẻ mục tiêu đầu tư của bạn. Chúng tôi sẽ giúp bạn đạt được
            điều đó.
          </p>
          <div className="flex flex-col gap-6 justify-center sm:flex-row">
            <button
              onClick={() =>
                window.open("https://zalo.me/0908738224", "_blank")
              }
              className="flex gap-2 justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0908 738 224
            </button>
            <button
              onClick={() =>
                window.open("https://zalo.me/0988534245", "_blank")
              }
              className="flex gap-2 justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0988 534 245
            </button>
            <button
              onClick={() =>
                window.open("https://zalo.me/0988534245", "_blank")
              }
              className="flex gap-2 justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Trung tâm hỗ trợ
            </button>
          </div>
        </div>
      </div>

      {/* Add MediaViewer component */}
      <MediaViewer
        isOpen={showMediaViewer}
        onClose={() => setShowMediaViewer(false)}
        property={selectedProperty}
      />

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};
export default Home;
