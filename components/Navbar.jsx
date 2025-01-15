"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Jika menggunakan shadcn/ui untuk class merging

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
                        ? "bg-white shadow-xl opacity-90"
                        : "bg-transparent"
                    : "bg-white shadow-xl opacity-90"
            )}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
                        "md:flex gap-6 text-lg absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto transition-all duration-300",
                        isOpen ? "block" : "hidden",
                        variant === "homepage" && !isScrolled ? "bg-yellow-500 text-white" : "text-black"
                    )} 
                >
                    <a href="/" className="block  hover:text-blue-500">
                        Home
                    </a>
                    <a href="/about" className="block  hover:text-blue-500">
                        About Us
                    </a>
                    <a href="/projects" className="block  hover:text-blue-500">
                        Projects
                    </a>
                    <a href="/contact" className="block  hover:text-blue-500">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
