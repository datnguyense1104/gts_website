import React from "react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from a database or API
const newsPosts = [
  {
    slug: "hotel-lai-son-nang-tam-trai-nghiem-luu-tru-tai-dao-hon-son",
    title: "Hotel Lại Sơn – Nâng tầm trải nghiệm lưu trú tại Đảo Hòn Sơn",
    date: "2024-12-22",
    image:
      "/KSHonSon/mainview/z6710623619162_9dc01b0a1d76bad0f04b7c79b8d1cdd1.jpg",
    excerpt:
      "Hotel Lại Sơn tự hào mang đến tiêu chuẩn lưu trú 2 sao với dịch vụ chuyên nghiệp, đáp ứng đa dạng nhu cầu của du khách khi ghé thăm Hòn Sơn.",
    content: `Hotel Lại Sơn tự hào mang đến tiêu chuẩn lưu trú 2 sao với dịch vụ chuyên nghiệp, đáp ứng đa dạng nhu cầu của du khách khi ghé thăm Hòn Sơn. Tọa lạc tại vị trí lý tưởng trên đảo, chúng tôi cam kết cung cấp một không gian nghỉ dưỡng tiện nghi, sạch sẽ và thoải mái, là khởi điểm hoàn hảo cho hành trình khám phá vẻ đẹp tự nhiên và văn hóa địa phương.

Khách sạn được thiết kế để phục vụ mọi đối tượng khách hàng, từ du khách cá nhân, cặp đôi, gia đình đến các đoàn thể. Chúng tôi không chỉ cung cấp các phòng nghỉ chất lượng mà còn tích hợp nhiều dịch vụ trọn gói, đảm bảo một kỳ nghỉ tiện lợi và đáng nhớ.

Với vị trí đắc địa và tiêu chuẩn dịch vụ 2 sao, Hotel Lại Sơn là lựa chọn hoàn hảo cho những ai muốn tận hưởng kỳ nghỉ tại Hòn Sơn một cách thoải mái và chuyên nghiệp nhất.`,
  },
  {
    slug: "tien-ich-noi-bat-tai-hotel-lai-son-su-lua-chon-hoan-hao",
    title:
      "Tiện ích nổi bật tại Hotel Lại Sơn – Sự lựa chọn hoàn hảo cho kỳ nghỉ của bạn",
    date: "2024-12-22",
    image:
      "/KSHonSon/single room/z6710623530637_b6f800cc67ee9912efc7da9ebea7fe6e.jpg",
    excerpt:
      "Tại Hotel Lại Sơn, chúng tôi chú trọng vào việc nâng cao trải nghiệm của quý khách thông qua hệ thống tiện ích đa dạng và chất lượng.",
    content: `Tại Hotel Lại Sơn, chúng tôi chú trọng vào việc nâng cao trải nghiệm của quý khách thông qua hệ thống tiện ích đa dạng và chất lượng. Các dịch vụ được thiết kế để mang lại sự thư giãn, giải trí và thuận tiện tối đa trong suốt thời gian lưu trú.

Khách sạn cung cấp các phòng nghỉ tiêu chuẩn 2 sao, luôn được duy trì vệ sinh sạch sẽ và trang bị đầy đủ tiện nghi thiết yếu. Quý khách có thể tận hưởng không gian riêng tư, yên tĩnh và thoải mái sau những giờ phút tham quan.

Điểm nhấn của Hotel Lại Sơn bao gồm:
• Nhà hàng: Phục vụ đa dạng món ăn đặc sắc.
• Cafe sân thượng: Lý tưởng để ngắm cảnh và thư giãn.
• Chương trình hát cho nhau nghe: Mang đến không gian giải trí thân mật.
• Khu quà lưu niệm (Mốc Hòn Sơn thú vị): Cung cấp các sản phẩm đặc trưng địa phương.
• Khu vực lò nướng hải sản ngoài trời: Trải nghiệm ẩm thực độc đáo trong không gian thoáng đãng.

Với hệ thống tiện ích hoàn chỉnh này, Hotel Lại Sơn cam kết mang đến cho quý khách một trải nghiệm nghỉ dưỡng trọn vẹn và đáng nhớ.`,
  },
  {
    slug: "trai-nghiem-am-thuc-tinh-hoa-tai-nha-hang-hotel-lai-son",
    title: "Trải nghiệm ẩm thực tinh hoa tại Nhà hàng Hotel Lại Sơn",
    date: "2024-12-22",
    image:
      "/KSHonSon/restaurant/z6710623643785_0109c8272746ad6f6457ab2961237535.jpg",
    excerpt:
      "Ẩm thực là một phần không thể thiếu trong hành trình khám phá, và tại Hotel Lại Sơn, quý khách sẽ được thưởng thức những món ăn tinh túy.",
    content: `Ẩm thực là một phần không thể thiếu trong hành trình khám phá, và tại Hotel Lại Sơn, quý khách sẽ được thưởng thức những món ăn tinh túy, được chế biến từ các nguyên liệu tươi ngon nhất.

Nhà hàng Hotel Lại Sơn tự hào giới thiệu thực đơn phong phú, đa dạng từ các món đặc sản địa phương đến các món ăn quen thuộc, được chế biến bởi đội ngũ đầu bếp chuyên nghiệp. Đặc biệt, chúng tôi cam kết sử dụng nguyên liệu cao cấp, tươi sống và nguồn nước sạch tinh khiết từ đảo Hòn Sơn, đảm bảo chất lượng và hương vị tuyệt hảo.

Quý khách có thể trải nghiệm các món ăn được chế biến theo phong cách cấp hiên và nồi đất, mang đậm nét truyền thống và độc đáo. Ngoài ra, khu vực lò nướng hải sản ngoài trời là lựa chọn lý tưởng để thưởng thức hải sản tươi sống do chính quý khách lựa chọn, trong một không gian lý tưởng, thoáng đãng.

Mỗi bữa ăn tại Hotel Lại Sơn không chỉ là trải nghiệm ẩm thực mà còn là hành trình khám phá hương vị đặc trưng của vùng biển Hòn Sơn.`,
  },
  {
    slug: "kham-pha-qua-tang-va-ky-niem-doc-dao-tai-hotel-lai-son",
    title: "Khám phá quà tặng và kỷ niệm độc đáo tại Hotel Lại Sơn",
    date: "2024-12-22",
    image:
      "/KSHonSon/mainview/z6710623705274_7684d3c5e18423936ecd22d94159e1d8.jpg",
    excerpt:
      "Để hoàn thiện trải nghiệm tại Hòn Sơn và mang về những kỷ niệm đáng nhớ, Hotel Lại Sơn cung cấp Khu quà lưu niệm độc đáo.",
    content: `Để hoàn thiện trải nghiệm tại Hòn Sơn và mang về những kỷ niệm đáng nhớ, Hotel Lại Sơn cung cấp Khu quà lưu niệm (Mốc Hòn Sơn thú vị), nơi quý khách có thể tìm thấy những món quà độc đáo và ý nghĩa.

Khu quà lưu niệm của chúng tôi trưng bày và bán đa dạng các sản phẩm thủ công mỹ nghệ tinh xảo, đặc sản địa phương, và các vật phẩm lưu niệm mang đậm dấu ấn văn hóa của đảo Hòn Sơn. Mỗi sản phẩm không chỉ là một món quà mà còn là biểu tượng cho vẻ đẹp và tinh thần của vùng đất này.

Việc lựa chọn một món quà tại đây sẽ giúp quý khách lưu giữ những khoảnh khắc đẹp của chuyến đi, đồng thời chia sẻ một phần của Hòn Sơn với bạn bè và người thân.

Từ những món đồ thủ công tinh xảo đến các đặc sản địa phương được đóng gói cẩn thận, mọi sản phẩm tại đây đều được lựa chọn kỹ lưỡng để đảm bảo chất lượng và tính độc đáo, xứng đáng làm kỷ niệm cho chuyến du lịch đáng nhớ của bạn.`,
  },
  {
    slug: "dat-phong-tai-hotel-lai-son-trai-nghiem-nghi-duong-dang-cap",
    title:
      "Đặt phòng tại Hotel Lại Sơn – Trải nghiệm nghỉ dưỡng đẳng cấp tại Hòn Sơn",
    date: "2024-12-22",
    image:
      "/KSHonSon/beach view room/z6727762578659_90f2d677e0d0a63ffaa32fba917a91b1.jpg",
    excerpt:
      "Nếu quý vị đang tìm kiếm một điểm dừng chân lý tưởng tại Hòn Sơn với dịch vụ chuyên nghiệp và tiện ích vượt trội, Hotel Lại Sơn chính là sự lựa chọn hàng đầu.",
    content: `Nếu quý vị đang tìm kiếm một điểm dừng chân lý tưởng tại Hòn Sơn với dịch vụ chuyên nghiệp và tiện ích vượt trội, Hotel Lại Sơn chính là sự lựa chọn hàng đầu. Chúng tôi cam kết mang đến một kỳ nghỉ dưỡng thoải mái, tiện nghi và đáng nhớ cho mọi du khách.

Để thuận tiện cho việc đặt phòng và nhận tư vấn chi tiết, quý khách vui lòng truy cập website chính thức của chúng tôi tại: https://gtsgroup.com.vn/ hoặc liên hệ trực tiếp qua số hotline: 0869038582.

Với đội ngũ nhân viên chuyên nghiệp, luôn sẵn sàng phục vụ 24/7, chúng tôi cam kết đáp ứng mọi nhu cầu của quý khách từ khâu đặt phòng, check-in cho đến các dịch vụ hỗ trợ trong suốt thời gian lưu trú.

Hotel Lại Sơn không chỉ là nơi nghỉ ngơi mà còn là điểm khởi đầu cho những trải nghiệm tuyệt vời tại Hòn Sơn. Từ việc tư vấn lịch trình tham quan, đặt dịch vụ vận chuyển đến hỗ trợ các hoạt động giải trí, chúng tôi luôn đồng hành cùng quý khách.

Hotel Lại Sơn hân hạnh được chào đón và phục vụ quý khách!`,
  },
  {
    slug: "3-ngay-kham-pha-hon-son-voi-2-trieu-dong",
    title: "3 ngày khám phá Hòn Sơn với 2 triệu đồng",
    date: "2024-12-21",
    image: "/news-du-lich-hon-son.webp",
    excerpt:
      "Điều khiến nam du khách cảm thấy hài hước nhất là người chủ cho thuê xe máy luôn nhắc anh để ý đến mũ bảo hiểm, vì dễ bị mất.",
    content: `Điều khiến nam du khách cảm thấy hài hước nhất là người chủ cho thuê xe máy luôn nhắc anh để ý đến mũ bảo hiểm, vì dễ bị mất.

Dưới đây là chia sẻ của Huỳnh Văn No, sống tại TP HCM, về chuyến du lịch tránh nóng hồi tháng 3 đến Hòn Sơn, Kiên Giang. Tổng chi phí cho chuyến đi hết gần 2 triệu đồng.

Từ bến xe miền Tây ở quận Bình Tân, tôi đặt vé xe khách đi Kiên Giang chuyến 23h45. Giá vé 150.000 đồng một người. Sau khi ngồi hơn 5 tiếng trên xe, tôi đến Kiên Giang, sau đó đi xe trung chuyển xuống bến tàu tầm 6h. Tại đây, tôi gặp 3 người bạn và cả nhóm cùng nhau đi du lịch. Sau khi ăn sáng, chúng tôi mua vé tàu giá 140.000 đồng một người một lượt ra đảo Hòn Sơn.

Hòn Sơn là đảo thuộc xã Lại Sơn, huyện Kiên Hải, cách trung tâm thành phố Rạch Giá 65 km.

8h15 tàu chạy. 13h10, nhóm chúng tôi đến nơi. Trước mắt chúng tôi là bến cảng với khung cảnh bình yên, biển trong xanh vẫy gọi. Khi nhận hành lý từ tàu, nhân viên nhà nghỉ đón chúng tôi trên cảng và hướng dẫn nhóm thuê xe máy làm phương tiện di chuyển. Mỗi chúng tôi phải trả 200.000 đồng cho một ngày thuê xe máy. Điều khiến chúng tôi thấy hài hước nhất là khi nhận xe máy, người chủ thay vì dặn khách giữ xe cẩn thận, lại nhắc chúng tôi nhớ giữ gìn mũ bảo hiểm, vì dễ bị mất.

Trên đường từ bến tàu về nhận phòng, 4 người hít căng lồng ngực không khí trong lành của biển cả. Chúng tôi cảm thấy tâm hồn thoải mái, thư thả vì thoát khỏi sự ngột ngạt, căng thẳng do Covid-19 mang lại ở thành phố.

Phòng chúng tôi ở có tầm nhìn ra bãi đá và bãi tắm, giá 600.000 đồng một đêm cho hai người. Nhà nghỉ tuy đơn giản nhưng tiện nghi, nhân viên thân thiện khiến chúng tôi hài lòng. Ngay sau khi cất đồ, chúng tôi lên kế hoạch tham quan các địa điểm nổi tiếng như Bãi Bàng, cây dừa nằm, đỉnh Ma Thiên Lĩnh, chợ hải sản...

Tại nhà nghỉ, khách được phục vụ đồ ăn mức giá 120.000 đồng một người. Khách có thể đi chợ hải sản cách đó không xa để mua hải sản và mang về yêu cầu nhân viên nhà nghỉ chế biến, phí tầm 50.000 đến 70.000 đồng tính theo một kg. Với mức này, khách cũng có thể chọn món và ăn ngay tại chỗ bán ngoài chợ hoặc tại số ít hàng quán ven biển.

Cả nhóm chạy xe máy một vòng quanh đảo rồi về nhà nghỉ dùng bữa trưa và nghỉ ngơi. Xế chiều, chúng tôi lại dạo một vòng xe máy tại khu vực Bãi Bàng và cây dừa nằm, sau đó đi chợ mua hải sản mang về. Trong lúc chờ nhân viên chế biến món ăn, chúng tôi đi tắm tại khu vực biển được nhà nghỉ quy định.

Vì đây là đảo nhỏ với điểm tham quan là các bãi đá hay bãi tắm cho du khách nằm liền kề nhau, chúng tôi chỉ mất 30 phút để tham quan hết các điểm.

Ngày hôm sau, chúng tôi lại tiếp tục đi dạo bằng xe máy và tắm biển tại khu vực nhà nghỉ. Điều khiến cả nhóm thích nhất là cùng ngồi uống cà phê ngắm biển, uống bia và hàn huyên cùng nhau sau bữa tối.

Trong thời gian khám phá Hòn Sơn có nhiều điều làm tôi ấn tượng. Đầu tiên là sự thân thiện, hiếu khách của người dân. Điều kiện vật chất ở đảo còn hạn chế nhưng họ biết cách làm hài lòng khách đến đảo bằng bầu không khí gần gũi, cho khách có khoảng không gian yên bình như cuộc sống thường nhật của chính mình.

Trên hòn đảo 11 km2 này, người dân rất có ý thức bảo vệ môi trường. Tôi thật sự ngạc nhiên vì điều này khi nhìn thấy quán cà phê nơi tôi đến phục vụ ống hút giấy, sản phẩm sử dụng một lần. Sau khi tìm hiểu mới biết quản lý ở đây yêu cầu nhân viên hạn chế sử dụng sản phẩm nhựa như chai lọ, ống hút, hộp xốp... để bảo vệ môi trường và gây thiện cảm với khách du lịch.

Ngày tiếp theo, chúng tôi dậy sớm đón bình minh và cùng nhau ăn sáng, dạo quanh đảo một lần nữa vì chúng tôi quá yêu khung cảnh nơi này. Sau đó, cả nhóm lên tàu chuyến 12h để về đất liền. Sau khi chia tay 3 người bạn tại Kiên Giang, tôi một mình bắt xe khách về lại thành phố.`,
  },
  {
    slug: "viet-nam-thay-doi-sau-sap-nhap-tinh-thanh",
    title: "Việt Nam thay đổi thế nào sau sáp nhập tỉnh thành",
    date: "2024-12-20",
    image: "/news-sat-nhap-tinh.webp",
    excerpt:
      "Sáp nhập giúp Việt Nam cắt giảm 46% đầu mối cấp tỉnh, đưa tổng số từ 63 xuống 34 tỉnh, thành phố, gồm 6 thành phố trực thuộc trung ương và 28 tỉnh.",
    content: `Sáp nhập giúp Việt Nam cắt giảm 46% đầu mối cấp tỉnh, đưa tổng số từ 63 xuống 34 tỉnh, thành phố, gồm 6 thành phố trực thuộc trung ương và 28 tỉnh.

Chỉ gần hai tháng từ khi Ban Chấp hành Trung ương Đảng thống nhất chủ trương sáp nhập tỉnh, thành, Quốc hội đã chính thức thông qua nghị quyết về việc sắp xếp đơn vị hành chính cấp tỉnh - mở đường cho mô hình quản trị mới.

Mô hình chính quyền địa phương hai cấp sẽ sớm đi vào hoạt động thay thế mô hình ba cấp hiện nay. Chính quyền cấp huyện sẽ khép lại vai trò khi Quốc hội thông qua dự thảo nghị quyết về sửa đổi bổ sung một số điều Hiến pháp 2013 và Luật Tổ chức chính quyền địa phương vào sáng 16/6. Bộ máy hành chính sẽ được tái cấu trúc theo ba cấp Trung ương - tỉnh/thành - xã/phường.

"Chính quyền địa phương ba cấp đã hoàn thành xuất sắc sứ mệnh lịch sử, góp phần đưa đất nước đạt được những thành tựu có ý nghĩa lớn. Giờ là lúc chuyển sang mô hình chính quyền địa phương hai cấp tinh gọn, hiệu lực, hiệu quả để đáp ứng yêu cầu của giai đoạn phát triển mới", Bộ trưởng Nội vụ Phạm Thị Thanh Trà nhấn mạnh.

Theo Phó thủ tướng Thường trực Nguyễn Hòa Bình, dự kiến ngày 30/6 các tỉnh mới sẽ đồng loạt công bố địa giới và nhân sự lãnh đạo, sẵn sàng vận hành bộ máy từ 1/7.

Tổng Bí thư Tô Lâm khẳng định việc sắp xếp, tinh gọn bộ máy nhằm quản lý, tối ưu hóa nguồn lực, tổ chức lại không gian phát triển kinh tế xã hội và thúc đẩy tăng trưởng cho cả nước với tầm nhìn đến năm 2045-2050.

"Hình hài" Việt Nam sau sáp nhập

Sau khi Quốc hội chốt sáp nhập, số tỉnh, thành của Việt Nam giảm 46% (từ 63 xuống 34). Dự kiến số phường, xã giảm 67% (từ 10.035 xuống 3.321). Toàn bộ 696 đơn vị hành chính cấp huyện cũng sắp kết thúc hoạt động.

Bộ Nội vụ ước tính quá trình sắp xếp này giúp giảm gần 250.000 biên chế, tiết kiệm 190.500 tỷ đồng chi tiền lương và chi hành chính giai đoạn 2026-2030. Bên cạnh đó, hơn 4.200 trụ sở công dôi dư sẽ được ưu tiên chuyển thành trường học, bệnh viện và cơ sở văn hoá, thể thao phục vụ cộng đồng.`,
  },
];

export default function ArticlePage({ params }) {
  const article = newsPosts.find((post) => post.slug === params.slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Bài viết không tồn tại</h1>
        <Link href="/news" className="text-blue-600 hover:underline">
          ← Quay lại trang tin tức
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 mt-10">
      <Link
        href="/news"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        ← Quay lại trang tin tức
      </Link>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-[400px] relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-6">{article.date}</p>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">{article.excerpt}</p>
            <div className="text-gray-800 whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
