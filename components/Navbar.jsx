"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Jika menggunakan shadcn/ui untuk class merging
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ variant }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Navbar berubah setelah scroll 50px
        };

        // Check scroll position on initial render
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                variant === "homepage"
                    ? isScrolled
                        ? "bg-coolWhite shadow-xl opacity-90"
                        : "bg-transparent"
                    : "bg-coolWhite shadow-xl opacity-90"
            )}
        >
            <section className="navbar-container">
                <a href="/">
                    <img
                        src={
                            variant === "homepage" && !isScrolled
                                ? "/icon-navbar-2.png"
                                : "/icon-navbar.png"
                        }
                        alt="Logo PT.PDKA"
                        className="navbar-icon"
                    />
                </a>

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
                    <a href="/" className="navbar-font">
                        Beranda
                    </a>
                    <a href="/" className="navbar-font">
                        Proyek Kami
                    </a>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="navbar-font">Profil Perusahaan <IoIosArrowDown className="inline" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-white opacity-90">
                            <DropdownMenuItem className="dropdown-menu-item">
                                <a href="/" >
                                    Tentang Kami
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="dropdown-menu-item">
                                <a href="/" >
                                    Layanan
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <a href="/" className="navbar-font">
                        Kontak
                    </a>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
