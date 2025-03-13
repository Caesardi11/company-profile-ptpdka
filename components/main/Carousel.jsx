"use client";
import { useState, useEffect } from "react";

const images = [
    "/project/project-10.webp",
    "/project/project-15.webp",
    "/project/project-5.webp",
    "/project/project-13.webp",
    "/project/project-4.webp",
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-img ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
            ))}
            <div className="carousel-container">
                <h1 className="carousel-heading pointer-events-none">PT. PANCA DUTA KARYA ABADI</h1>
                <h2 className="carousel-subheading pointer-events-none">Engineering Bureau & General Contractor</h2>
            </div>
        </section>
    );
};

export default Carousel;
