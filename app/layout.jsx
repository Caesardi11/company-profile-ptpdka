"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <html lang="en">
      <body className="font-primary antialiased">
        <Navbar variant={isHomepage ? "homepage" : ""} />
        <div className={!isHomepage ? "mt-14 lg:mt-16 2xl:mt-20" : ""}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
