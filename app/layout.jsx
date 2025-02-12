"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isProjectPath = pathname.startsWith("/project/");

  return (
    <html lang="en">
      <body className="font-primary antialiased">
        <Navbar variant={isProjectPath ? "" : "homepage"} />
        <div className={isProjectPath ? "mt-14 lg:mt-16" : ""}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
