import { Inter, Urbanist } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Estatein Real Estate",
  description: "Buy Your Dream Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Nav />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
