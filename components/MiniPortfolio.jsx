"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
    "/carousel-1.png",
    "/carousel-2.png",
    "/carousel-6.png",
    "/carousel-5.png",
    "/carousel-4.png",
    "/carousel-3.png",
];

const projectNames = [
    "Bandar Udara Mozes Kilangin",
    "Interior Bandar Udara Mozes Kilangin",
    "GOR Kaimana",
    "Jembatan Iqpan",
    "Rumah Sakit Umum Daerah Provinsi Papua Barat",
    "Kantor Gubernur Papua Barat",
];

const animations = [
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "zoom-in",
    "zoom-out",
];

const MiniPortfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='bg-[#fff9dd]'>
            <section className='content-container-noTop'>
                <h2 className='subheading-porto'>PORTOFOLIO</h2>
                <div className='heading-porto'>
                    <h1 className='heading-porto-text'>Beberapa Proyek Unggulan Kami</h1>
                    <div className="heading-porto-btn">
                        <a href="/project">Lihat Portofolio Kami → </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-end mt-12 gap-4 md:grid-cols-3 xl:grid-cols-4'>
                    {images.map((src, index) => (
                        <div 
                            key={index} 
                            className={`${index === 0 ? 'col-span-2' : ''} ${index === 3 ? 'col-span-2 xl:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 xl:col-span-1' : ''} ${index === 5 ? 'col-span-1 xl:col-span-2' : ''} relative group`}
                            data-aos={animations[index % animations.length]}
                        >
                            <img 
                                src={src} 
                                alt={`Portfolio Image ${index + 1}`} 
                                className='w-full h-48 md:h-64 2xl:h-80 object-cover rounded-lg' 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                                <span className="text-white text-center text-lg p-5 pointer-events-none">{projectNames[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MiniPortfolio;