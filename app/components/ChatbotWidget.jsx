"use client";

import Image from "next/image";

const ChatbotWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <div
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={() => window.open("https://zalo.me/0869038582", "_blank")}
      >
        <Image src="/zaloimg.jpg" alt="Zalo" width={50} height={50} className="rounded-full shadow-lg" />
      </div>
      <div
        className="cursor-pointer hover:scale-110 transition-transform bg-blue-600 rounded-full p-2 shadow-lg"
        onClick={() => window.open("https://www.facebook.com/share/19P9YT7NUN/?mibextid=wwXIfr", "_blank")}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChatbotWidget;
