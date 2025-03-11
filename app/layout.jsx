"use client";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "@/data/projects.json";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const allowedPaths = ["/", "/project", ...projects.map(p => `/project/${p.path}`), "/company-profile", "/contact-us"]; // Tambahkan path yang diizinkan di sini

  const showNavbarAndFooter = allowedPaths.includes(pathname);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (isLoading) return <Loading />;

  return (
    <html lang="en">
      <body className="font-primary antialiased">
        {showNavbarAndFooter && <Navbar variant={isHomepage ? "homepage" : ""} />}
        <main>
          <div className={showNavbarAndFooter && !isHomepage ? "mt-14 lg:mt-16" : ""}>
            {children}
          </div>
        </main>
        {showNavbarAndFooter && <Footer />}
      </body>
    </html>
  );
}
