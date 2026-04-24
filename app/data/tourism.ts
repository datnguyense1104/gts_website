import {
  Room,
  Restaurant,
  Amenity,
  Experience,
  TourItinerary,
  Testimonial,
} from "../types/tourism";

export const accommodationData: Room[] = [
  {
    title: "Phòng Đơn View Biển",
    description:
      "Không gian lãng mạn phong cách châu Âu với tầm nhìn ra biển tuyệt đẹp, lý tưởng cho các cặp đôi.",
    area: "",
    capacity: "1 - 2 khách",
    beds: "1 giường đôi",
    bathrooms: "",
    price: "Liên hệ để nhận ưu đãi",
    image:
      "/KSHonSon/beach view room/z6727762578419_6868aa8c1f046a741da2507c5cdd201c.jpg",
    features: [],
  },
  {
    title: "Phòng Đơn",
    description:
      "Không gian yên tĩnh với thiết kế châu Âu tinh tế, phù hợp cho những ai tìm kiếm sự riêng tư và thư giãn.",
    area: "",
    capacity: "1 - 2 khách",
    beds: "1 giường đôi",
    bathrooms: "",
    price: "Liên hệ để nhận ưu đãi",
    image:
      "/KSHonSon/single room/z6710623562009_79ef326fb7a13fb44e252717f322d90b.jpg",
    features: [],
  },
  {
    title: "Phòng Đôi",
    description:
      "Thiết kế rộng rãi, thoáng mát với đầy đủ tiện nghi, lựa chọn hoàn hảo cho nhóm bạn.",
    area: "",
    capacity: "2 - 4 khách",
    beds: "2 giường đôi",
    bathrooms: "",
    price: "Liên hệ để nhận ưu đãi",
    image:
      "/KSHonSon/couple room/z6710623204712_f2b3123e3b33a46773b7461eaa70556d.jpg",
    features: [],
  },
  {
    title: "Phòng tập thể",
    description:
      "Không gian rộng rãi với 3 giường đôi, phù hợp cho nhóm đông. Thiết kế thoải mái cho chuyến nghỉ dưỡng vui vẻ.",
    area: "",
    capacity: "3 - 8 khách",
    beds: "3 giường đôi",
    bathrooms: "",
    price: "Liên hệ để nhận ưu đãi",
    image:
      "/KSHonSon/3 beds room/z6710623523524_d77a0cdaa025d305f1ef43120bb44118.jpg",
    features: [],
  },
  
];

export const restaurantData: Restaurant[] = [
  {
    title: "Nhà Hàng Cấp Hiên & Nồi Đất View Biển",
    description:
      "Thưởng thức hải sản tươi ngon với tầm nhìn tuyệt đẹp ra biển, được chế biến từ nguyên liệu cao cấp, sạch với nguồn nước tinh khiết tại đảo Hòn Sơn",
    image:
      "/KSHonSon/restaurant/z6710623751542_5f40c5b16ef442163eb3d1b4b5666b6b.jpg",
    specialty:
      "Hải sản nướng lò ngoài trời, Món nồi đất đặc sắc, View biển tuyệt đẹp",
  },
  {
    title: "Nhà Hàng View Biển",
    description:
      "Không gian thư giãn lý tưởng với đồ uống chất lượng và chương trình hát cho nhau nghe",
    image:
      "/KSHonSon/restaurant/z6710623703639_b72d61f1db48afdc7ad4a7356148d6b3.jpg",
    specialty: "Cà phê sạch, Giải trí âm nhạc, Không gian sân thượng",
  },
  {
    title: "Quán Ăn Biển Xanh - Hương Vị Từ Làng Chài",
    description:
      "Thưởng thức bữa ăn đúng chất Hòn Sơn với tôm, mực, cá tươi rói, đậm đà hương vị biển.",
    image:
      "/KSHonSon/restaurant/z6710623643785_0109c8272746ad6f6457ab2961237535.jpg",
    specialty: "Mâm hải sản dân dã, Tươi ngon từ ghe cá vào bờ",
  },
  {
    title: "Khu Nướng Ngoài Trời - Đêm Hải Sản Rực Lửa",
    description:
      "Trải nghiệm không khí sôi động với bếp nướng ngoài trời và các món hải sản hấp dẫn vừa chế biến xong.",
    image: "/KSHonSon/restaurant/amthuc1.jpg",
    specialty: "Không gian mở, Bếp lửa hồng, Hải sản nướng tại chỗ",
  },
  {
    title: "Mâm Quê Miền Biển - Gỏi, Cháo, Lẩu, Cá Kho",
    description:
      "Bữa cơm trọn vị với các món ăn quen thuộc nhưng mang màu sắc riêng của Hòn Sơn.",
    image: "/KSHonSon/restaurant/amthuc2.jpg",
    specialty: "Ẩm thực truyền thống - Ngon, lành, thân quen",
  },
  {
    title: "Tiệc Nhóm Hải Sản - Combo Đầy Đặn, Giá Hợp Lý",
    description:
      "Từ lẩu, nướng, chiên, xào đến tráng miệng, set menu phong phú cho nhóm 4-6 người.",
    image: "/KSHonSon/restaurant/amthuc3.jpg",
    specialty: "Món ngon cho nhóm đông - Đa dạng và dễ chọn",
  },
  {
    title: "Góc Quán Nhà - Ấm Cúng, Đủ Món, Đậm Đà",
    description:
      "Bữa ăn với đầy đủ món chính, canh, rau, nước chấm - phù hợp cho nhóm nhỏ hoặc gia đình.",
    image: "/KSHonSon/restaurant/amthuc4.jpg",
    specialty: "Không gian giản dị như bữa cơm gia đình",
  },
];

export const amenityData: Amenity[] = [
  {
    title: "Dịch Vụ Lễ Tân & Hỗ Trợ",
    description:
      "Dịch vụ chăm sóc khách hàng 24/7 với đội ngũ nhân viên chuyên nghiệp",
    images: [
      "/KSHonSon/mainview/z6710623635305_e24faf8d11ce4836a5b5b057a24921de.jpg",
      "/KSHonSon/mainview/z6710623687011_f86d523fce9a051c3da6d80effa68b70.jpg",
    ],
    facilities: [
      "Quầy lễ tân 24h",
      "Giữ hành lý",
      "Dịch vụ du lịch",
      "Đặt vé phương tiện",
    ],
  },
  {
    title: "Dịch Vụ Tiện Ích",
    description: "Các dịch vụ tiện ích đầy đủ phục vụ nhu cầu của khách hàng",
    images: [
      "/KSHonSon/single room/z6710623571494_0079183de5c3f37e37516427d760da3d.jpg",
      "/KSHonSon/couple room/z6710623519582_a2fb2013bca71e1d4e0c1a31e48eff24.jpg",
    ],
    facilities: [
      "Dịch vụ giặt ủi",
      "Wifi miễn phí",
      "Máy lạnh",
      "Vòi tắm nóng lạnh",
    ],
  },
  {
    title: "Ẩm Thực & Giải Trí",
    description: "Trải nghiệm ẩm thực và giải trí đa dạng tại khách sạn",
    images: [
      "/KSHonSon/restaurant/z6710623668873_66f87a0617e26b663a133d2ad971094b.jpg",
      "/KSHonSon/restaurant/z6710623670087_9da1b4d742592098dd64c97ab000b49f.jpg",
    ],
    facilities: [
      "Nhà hàng view biển",
      "Coffee sân thượng",
      "Quầy bán đồ lưu niệm",
      "Không gian thư giãn",
    ],
  },
  {
    title: "Vị Trí Thuận Lợi",
    description:
      "Tọa lạc tại vị trí đẹp nhất của đảo Hòn Sơn với nhiều tiện ích xung quanh",
    images: [
      "/KSHonSon/beach view room/z6727762578894_868d51eb2b92fec8568f502327fc8437.jpg",
      "/KSHonSon/beach view room/z6727762587940_ce4e3cf3fe2f578a4f0e8b755e99d4c5.jpg",
    ],
    facilities: [
      "Gần bãi biển",
      "Trung tâm đảo",
      "Giao thông thuận lợi",
      "Tham quan dễ dàng",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    title: "Combo Tour 1 Ngày Thường",
    description:
      "Tour trọn gói với vé tàu khứ hồi, phòng khách sạn mặt tiền biển và xe máy tham quan",
    image:
      "/tourist/z6768691494215_7e31feeedbe6fff3a23710189aad3a1a.jpg",
    duration: "1 ngày",
    price: "Liên hệ để biết giá",
    highlights: [
      "Vé tàu khứ hồi",
      "Phòng khách sạn mặt tiền biển",
      "Xe máy tham quan",
      "Tham quan các điểm đẹp trên đảo",
    ],
  },
  {
    title: "Combo Tour 2 Ngày Thường",
    description:
      "Tour 2 ngày bao gồm tour lặn ngắm san hô và tham quan làng bè",
    image:
      "/tourist/z6768691494147_7bd4a46098e218b83dae296624ce95ef.jpg",
    duration: "2 ngày 1 đêm",
    price: "Liên hệ để biết giá",
    highlights: [
      "Vé tàu khứ hồi",
      "Phòng khách sạn",
      "Xe máy tham quan",
      "Tour lặn ngắm san hô",
      "Tham quan làng bè",
      "Chèo SUP",
      "Câu cá trên tàu",
    ],
  },
  {
    title: "Combo Tour Cuối Tuần",
    description:
      "Tour cuối tuần cao cấp với đầy đủ dịch vụ và tour lặn ngắm san hô",
    image:
      "/tourist/z6768691494149_431d821fe7aece544388ccd1bee9b38e.jpg",
    duration: "1 ngày cuối tuần",
    price: "Liên hệ để biết giá",
    highlights: [
      "Vé tàu khứ hồi",
      "Phòng khách sạn mặt tiền biển",
      "Xe máy tham quan",
      "Tour lặn ngắm san hô đầy đủ",
      "Hướng dẫn viên suốt hành trình",
    ],
  },
  {
    title: "Combo Tour 3 Ngày 2 Đêm",
    description:
      "Tour dài ngày trọn vẹn nhất với mọi trải nghiệm tuyệt vời tại đảo Hòn Sơn",
    image:
      "/tourist/z6768691494162_a5f507bcc4df753d6c6094b9ff14d370.jpg",
    duration: "3 ngày 2 đêm",
    price: "Liên hệ để biết giá",
    highlights: [
      "Vé tàu khứ hồi",
      "Phòng khách sạn mặt tiền biển",
      "Xe máy tham quan",
      "Tour lặn ngắm san hô",
      "Tham quan làng bè",
      "Chèo SUP",
      "Câu cá",
      "Hướng dẫn viên",
    ],
  },
  {
    title: "Tour Trọn Gói Đặc Biệt",
    description:
      "Tour trọn gói với 1 bữa ăn sáng, 2 bữa trưa, 1 bữa tối hải sản và tham quan toàn đảo",
    image:
      "/tourist/z6768691494231_83a10d29bcc6f5ce41ca0941965cfe26.jpg",
    duration: "2 ngày 1 đêm",
    price: "Liên hệ để biết giá",
    highlights: [
      "Vé tàu khứ hồi",
      "Phòng nghỉ khách sạn",
      "Xe tham quan",
      "Hướng dẫn bản địa",
      "3 bữa ăn + 1 tiệc hải sản",
      "Tham quan toàn đảo",
    ],
  },
  {
    title: "Tour Lặn Ngắm San Hô",
    description:
      "Trải nghiệm lặn ngắm san hô với đầy đủ thiết bị an toàn và hướng dẫn viên chuyên nghiệp",
    image:
      "/tourist/z6768691494208_65c98f3f9cd050548a1acf40461d93cf.jpg",
    duration: "Nửa ngày",
    price: "Bao gồm trong combo",
    highlights: [
      "Kính lặn, áo phao, giày bảo hộ",
      "Tham quan làng bè",
      "Chèo SUP",
      "Hỗ trợ chụp ảnh và quay video",
      "Câu cá trên tàu",
      "Hướng dẫn viên suốt hành trình",
    ],
  },
];

export const tourItinerary: TourItinerary = {
  day1: {
    title: "Ngày 1 - Khám phá đảo Lại Sơn",
    schedule: [
      {
        time: "Sáng",
        activity: "Nhận phòng và xe, tham quan đường quanh đảo",
        details:
          "Cục Đá Nhàn, Khu nhà Hoang, Bãi Đá Chài, Bãi Xếp với cây dừa nghiêng huyền thoại",
      },
      {
        time: "11:30",
        activity: "Cơm trưa 8 món",
        details:
          "Lẩu cá xanh xương, Cá chiên, Cá kho, Tôm chiên bột, Mực nẻ, Trứng chiên, Cơm trắng, Trái cây",
      },
      {
        time: "14:30",
        activity: "Tham quan đường Xuyên Đảo",
        details:
          "Thác Nước, Đỉnh Yên Ngựa, ngắm toàn cảnh Bãi Bấc với vườn dừa nghìn cây, làng bè",
      },
      {
        time: "Chiều",
        activity: "Tắm biển tại Bãi Bàng",
        details:
          "Bãi cát dài nhất đảo, cây dừa nghiêng, có thể lặn ngắm san hô",
      },
      {
        time: "18:30",
        activity: "Tiệc hải sản 10 món",
        details:
          "Lẩu hải sản, Mực nướng satế, Sò dẹo nướng, Gỏi cá trích, Cá nướng, Cơm chiên hải sản, Ghẹ hấp, Hàu sữa, Nhum nướng, Tôm hấp/nướng",
      },
    ],
  },
  day2: {
    title: "Ngày 2 - Khám phá văn hóa và ẩm thực",
    schedule: [
      {
        time: "7:30",
        activity: "Điểm tâm sáng tự chọn",
        details:
          "Hủ tiếu hải sản, Bánh canh hải sản, Mì hải sản, Cà phê, Trà đá",
      },
      {
        time: "8:00",
        activity: "Tham quan văn hóa",
        details:
          "Thánh Thất Cao Đài, Chợ Bãi Nhà, Đình Thần, mua đặc sản Hòn Sơn",
      },
      {
        time: "10:00",
        activity: "Trả phòng",
      },
      {
        time: "10:30",
        activity: "Cơm trưa 7 món",
        details:
          "Lẩu ngọt chả cá, Tôm rim thịt, Cá chiên tươi xoài bằm, Cá hấp, Bạch tuộc xào dưa leo, Rau luộc, Trái cây",
      },
      {
        time: "11:30",
        activity: "Di chuyển xuống tàu về Rạch Giá",
      },
    ],
  },
};

export const testimonials: Testimonial[] = [
  {
    name: "Như Nguyễn",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    comment:
      "Chủ ks thân thiện chu đáo, take care nhiệt tình 24/7. Hướng dẫn viên dắt tour tạo không khí tốt, vui, chụp hình đẹp. Mình sẽ quay lại Hòn Sơn lần 2",
    avatar: "/Avatar/girl 0.png",
  },
  {
    name: "Uyên Nguyễn",
    location: "Bình Định",
    rating: 5,
    comment:
      "Phòng view đẹp đồ ăn siêu ngon rẻ. Chủ siêu nhiệt tình dễ thương. Đã đi 4 lần và ở đây 4 lần chưa có ý định ở chỗ khác luôn 🫶🫶🫶",
    avatar: "/Avatar/girl 1.png",
  },
  {
    name: "Trung Khang Huynh",
    location: "Bắc Giang",
    rating: 5,
    comment:
      "Chị chủ nhiệt tình dễ thương phòng view đẹp sạch sẽ giá cả phải chăng, vừa lên đảo là được hỗ trợ nhận phòng liền và đến khi về không cần trả phòng đúng giờ khi nào đến giờ về thì trả thật sự rất cảm ơn tuor bên khách sạn vì mình đã có 1 chuyến đi thú vị",
    avatar: "/Avatar/boy 0.png",
  },
];

export const galleryImages = [
  "/KSHonSon/mainview/z6710623619162_9dc01b0a1d76bad0f04b7c79b8d1cdd1.jpg",
  "/KSHonSon/mainview/z6710623705274_7684d3c5e18423936ecd22d94159e1d8.jpg",
  "/KSHonSon/mainview/z6710623635305_e24faf8d11ce4836a5b5b057a24921de.jpg",
  "/KSHonSon/mainview/z6710623707454_45fc1bf00abae174c265cfb10afa9470.jpg",
  "/KSHonSon/mainview/z6710623696173_c703158f9837852129959c4a9d0d9fe7.jpg",
  "/KSHonSon/mainview/z6710623687011_f86d523fce9a051c3da6d80effa68b70.jpg",
  "/KSHonSon/beach view room/z6727762570348_66eea1ba1c2cd9b8f22b956e5c3524c4.jpg",
  "/KSHonSon/beach view room/z6727762578659_90f2d677e0d0a63ffaa32fba917a91b1.jpg",
  "/tourist/z6768691494231_83a10d29bcc6f5ce41ca0941965cfe26.jpg",
  "/tourist/z6768691494150_a3f2ce8fcff3e82ebec57989322740b0.jpg",
  "/tourist/z6768691494145_45c31fc47e880ded9925e012c968d1f6.jpg",
  "/tourist/z6768691494188_08fea94f5744d3428a5a0b5e289d8956.jpg",
  "/tourist/z6768691494154_d2232d871d54bbee2d191aca9e4d6f68.jpg",
  "/tourist/z6768691494157_6f02fe06df6abcc35074542903a15558.jpg",
  "/tourist/z6768691494162_a5f507bcc4df753d6c6094b9ff14d370.jpg",
  "/tourist/z6768691494196_eda5915a29ac3b64d778f0e83693fd84.jpg",
  "/tourist/z6768691494149_431d821fe7aece544388ccd1bee9b38e.jpg",
  "/tourist/z6768691494209_de92b93a3f715e2485bacbfc9325b428.jpg",
  "/tourist/z6768691494182_7737bc5f7ff9e88703f2db7e2675e4f7.jpg",
  "/tourist/z6768691494147_7bd4a46098e218b83dae296624ce95ef.jpg",
  "/tourist/z6768691494239_5320e483c11d25699d0cf959158c96d3.jpg",
  "/tourist/z6768691494153_48be92dfac923d8084730407fe99818c.jpg",
  "/tourist/z6768691494156_27d23c7356044af8af9859cc8ec458ff.jpg",
  "/tourist/z6768691494210_27615d789336145449980b51eb85cf98.jpg",
  "/tourist/z6768691494161_4fa0802e7eee541c3f7a9e765a209f33.jpg",
  "/tourist/z6768691494240_49a68afb06a2544ae796b8a6a86b69b6.jpg",
  "/tourist/z6768691494187_ca4361bf05ede3e8a83f9b5526cd4e7b.jpg",
  "/tourist/z6768691494177_c0e7dc72d72c26714e3923e5dd94aef1.jpg",
  "/tourist/z6768691494186_6cff6aec566020aa7aedb2ed6cc0044d.jpg",
  "/tourist/z6768691494189_3601fe6d0c7c5dc50decb6e15de9877a.jpg",
  "/tourist/z6768691494159_7b8ce354f6780af2a286b0c352125e4b.jpg",
  "/tourist/z6768691494183_cf852430641cbd3b825d283598ec5e60.jpg",
  "/tourist/z6768691494224_c9c8eae892c8a6bc64323dd07f25174b.jpg",
  "/tourist/z6768691494194_8a8839b6b0be1179aa45804533e1f275.jpg",
  "/tourist/z6768691494230_8d2c1fabdb4143bb3e75c90d9cbfb3f2.jpg",
  "/tourist/z6768691494185_d51d780a2beff6a831338cc60357ca0a.jpg",
  "/tourist/z6768691494217_6078d9d2be47b7bb64117728a597bd90.jpg",
  "/tourist/z6768691494155_2b1b73b2083c6962c5f34347955fed96.jpg",
  "/tourist/z6768691494179_69771c7005454060ddc8fd288a8c0c19.jpg",
  "/tourist/z6768691494163_8bc57677f46698a65d61c76a6d474047.jpg",
  "/tourist/z6768691494192_f3cf37ad271ddb9d254ead351780d24b.jpg",
  "/tourist/z6768691494215_7e31feeedbe6fff3a23710189aad3a1a.jpg",
  "/tourist/z6768691494216_9afe2795fda7d140e43c100e1411da5e.jpg",
  "/tourist/z6768691550958_d01a2a44e1bb9ea636381fc04d0fa8c1.jpg",
  "/tourist/z6768691494178_210dabf9032aa8997260cc24458a5eac.jpg",
  "/tourist/z6768691494226_aeefdc0bfa32836790f568c2569cff4a.jpg",
  "/tourist/z6768691494208_65c98f3f9cd050548a1acf40461d93cf.jpg",
  "/tourist/z6768691494223_495877437ef306b0d61e0ee9ff713a22.jpg",
  "/tourist/z6768691494227_9c26bef4697260d1e99140f08218b714.jpg",
  "/tourist/z6768691494181_902f8c2918c17e8df08b68dfc846aa6b.jpg",
  "/tourist/z6768691494219_e4b504b3ce2f8ecea4f88855eeb87b6a.jpg",
  "/tourist/z6768691494220_aa00e66544b2c62a2fb94f593b493049.jpg",
  "/tourist/z6768691494171_159cea97a5827094fba3065a50625dd5.jpg",
];
