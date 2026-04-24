import { Montserrat, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: {
    default: "GTS Group",
    template: "%s | GTS Group",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "We are GTS Group, a leading company in Vietnam providing real estate services.",
  keywords:
    "GTS Group, GTS, công ty GTS, BĐS GTS, BĐS, bất động sản, bất động sản GTS",
  author: "GTS Group Team",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <ChatbotWidget />
        <Footer />
      </body>
    </html>
  );
}
