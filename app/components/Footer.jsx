import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Main Footer Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">
              Về chúng tôi
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Công ty
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white transition-colors">
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Sản phẩm</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Dự án
                </a>
              </li>
              <li>
                <a
                  href="/calculator"
                  className="hover:text-white transition-colors"
                >
                  Tính toán đầu tư
                </a>
              </li>
              <li>
                <a
                  href="/stories"
                  className="hover:text-white transition-colors"
                >
                  Câu chuyện thành công
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="hover:text-white transition-colors"
                >
                  Đánh giá
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Pháp lý</h3>
            <ul className="space-y-3">
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="/safety"
                  className="hover:text-white transition-colors"
                >
                  An toàn thông tin
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Đối tác</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/agents"
                  className="hover:text-white transition-colors"
                >
                  Môi giới
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className="hover:text-white transition-colors"
                >
                  Chủ đầu tư
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="hover:text-white transition-colors"
                >
                  Đối tác
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 GTS.</p>
            <div className="flex items-center gap-4">
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              GST cam kết cải thiện khả năng tiếp cận của trang web và coi đây
              là một nỗ lực liên tục. Vui lòng liên hệ với chúng tôi tại{" "}
              <a
                href="https://zalo.me/0988534245"
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Zalo{" "}
              </a>
              để được hỗ trợ hoặc đóng góp ý kiến.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
