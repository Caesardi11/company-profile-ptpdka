"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar = ({ variant }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Check scroll position on initial render
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                    <img
                        src={
                            variant === "homepage" && !isScrolled
                                ? "/icon-navbar-2.png"
                                : "/icon-navbar.png"
                        }
                        alt="Logo PT.PDKA"
                        className="navbar-icon"
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
                    <Link href="/" className="navbar-font">
                        Beranda
                    </Link>
                    <Link href="/project" className="navbar-font">
                        Proyek Kami
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="navbar-font">Profil Perusahaan <IoIosArrowDown className="inline" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-white opacity-90">
                            <DropdownMenuItem className="dropdown-menu-item">
                                <Link href="/" >
                                    Tentang Kami
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="dropdown-menu-item">
                                <Link href="/" >
                                    Layanan
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/contact-us" className="navbar-font">
                        Kontak
                    </Link>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
