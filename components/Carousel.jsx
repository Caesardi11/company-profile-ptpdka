"use client";
import { useState, useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { RxDividerVertical } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";

const images = [
    "/project/project-1.png",
    "/project/project-1-1.png",
    "/project/project-2.png",
    "/project/project-3.png",
    "/project/project-4.png",
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
        <section className="relative w-full h-screen overflow-hidden">
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
                <p className="carousel-info">
                    <TfiEmail/> <a href="mailto:ptpdka@persero.co.id">ptpdka@persero.co.id</a>
                        <RxDividerVertical className="ml-5"/> <RxDividerVertical className="mr-5"/>
                    <BsWhatsapp /> <a href="https://wa.me/628113621253" target="_blank" rel="noopener noreferrer">+62 811-3621-253</a>
                </p>
            </div>
        </section>
    );
};

export default Carousel;
