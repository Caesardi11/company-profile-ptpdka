"use client";
import { useState, useEffect } from "react";

const images = [
    "/carousel-1.png",
    "/carousel-2.png",
    "/carousel-3.png",
    "/carousel-4.png",
    "/carousel-5.png",
    "/carousel-6.png",
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
            ))}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
                <h1 className="text-5xl font-bold">PT. PANCA DUTA KARYA ABADI</h1>
                <p className="text-lg mt-4 text-[#DAA520]">Engineering Bureau & General Contractor</p>
            </div>
        </div>
    );
};

export default Carousel;
