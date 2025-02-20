"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ variant }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Check scroll position on initial render
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => pathname === path;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ",
                variant === "homepage"
                    ? isScrolled
                        ? "bg-coolWhite/85 shadow-xl backdrop-blur-sm"
                        : "bg-transparent"
                    : "bg-coolWhite/85 shadow-xl backdrop-blur-sm"
            )}
        >
            <section className="navbar-container">
                <Link href="/">
                    <Image
                        src={
                            variant === "homepage" && !isScrolled
                                ? "/icon-navbar-2.webp"
                                : "/icon-navbar.webp"
                        }
                        alt="Logo PT.PDKA"
                        className="navbar-icon"
                        width={800}
                        height={200}
                    />
                </Link>

                {/* Burger Menu Button (Mobile) */}
                <button
                    className={cn(
                        "md:hidden text-2xl",
                        variant === "homepage" && !isScrolled ? "text-white" : "text-black"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Menu Items */}
                <div
                    className={cn(
                        "burger-menu-items",
                        isOpen ? "block" : "hidden",
                        variant === "homepage" && !isScrolled
                            ? "text-black md:text-white"
                            : "text-black"
                    )}
                >
                    <Link href="/" className={cn("navbar-font", isActive("/") && "navbar-font")}>
                        Beranda
                    </Link>
                    <Link href="/project" className={cn("navbar-font", isActive("/project") && "text-[#DAA520]")}>
                        Proyek Kami
                    </Link>
                    <Link href="/company-profile" className={cn("navbar-font", isActive("/company-profile") && "text-[#DAA520]")}>
                        Profil Perusahaan
                    </Link>
                    <Link href="/contact-us" className={cn("navbar-font", isActive("/contact-us") && "text-[#DAA520]")}>
                        Kontak
                    </Link>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
