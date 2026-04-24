"use client";

import { Bars2Icon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/80"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 py-4 flex items-center justify-between max-w-[1200px]">
        {/* Left - Logo */}
        <div>
          <Link href="/home" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="GTS Group Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl sm:text-2xl font-bold">GTS Group</span>
          </Link>
        </div>

        {/* Middle - Navigation - Desktop */}
        <div className="hidden md:flex justify-center">
          <div className="flex gap-6">
            <Link
              href="/home"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/home"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Trang chủ
              {pathname === "/home" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/real-estate"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/real-estate"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Bất động sản
              {pathname === "/real-estate" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/tourism"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/tourism"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Du lịch
              {pathname === "/tourism" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/about"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/about"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Logistic
              {pathname === "/about" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/news"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/news"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Tin tức
              {pathname === "/news" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/contact"
              className={`relative flex items-center px-4 py-2 whitespace-nowrap font-medium transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Liên hệ
              {pathname === "/contact" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              )}
            </Link>
          </div>
        </div>

        {/* Right - Menu Toggle */}
        <div className="flex justify-end items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon width={24} height={24} className="text-gray-800" />
            ) : (
              <Bars3Icon width={24} height={24} className="text-gray-800" />
            )}
          </button>
          <div className="hidden md:flex items-center gap-4">
            <span
              className="text-blue-600 hover:text-blue-700 cursor-pointer hover:underline px-4 py-2 rounded-lg"
              onClick={() =>
                window.open("https://zalo.me/0988534245", "_blank")
              }
            >
              Hotline: 0869038582
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden h-screen bg-white/90">
          <div className="flex flex-col p-4 space-y-4 justify-center items-center h-full gap-5">
            <Link
              href="/home"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Trang chủ
            </Link>
            <Link
              href="/real-estate"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bất động sản
            </Link>
            <Link
              href="/tourism"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Du lịch
            </Link>
            <Link
              href="/about"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Logistic
            </Link>
            <Link
              href="/news"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tin tức
            </Link>
            <Link
              href="/contact"
              className="py-2 px-4 hover:bg-gray-100 font-medium text-3xl border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
