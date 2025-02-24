import React from 'react';
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

const Certification = () => {
    const certifications = [
        "/certification/iso-9001.webp",
        "/certification/iso-14001.webp",
        "/certification/iso-45001.webp",
        "/certification/iso-37001.webp",
        "/certification/bpjs.webp",
        "/certification/smk3.webp",
    ];

    return (
        <section className="relative text-smokyWhite bg-cover bg-center" style={{ backgroundImage: "url('/bg-2.webp')" }}>
            <div className="absolute inset-0 bg-[#121212]/65"></div>
            <div className='relative mx-auto px-8 py-12 md:pt-12 md:px-16 lg:px-28 lg:pt-14 xl:pt-16 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                <div className="max-w-6xl text-center">
                    <h2 className="text-4xl font-bold text-[#FFCC00] mb-3">Sertifikasi Kami</h2>
                    <p className="text-base text-gray-200 mb-12">
                        Kami telah mendapatkan berbagai sertifikasi sebagai bukti kredibilitas dan kualitas layanan kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 items-start justify-center">
                    {certifications.map((src, index) => (
                        <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex justify-center">
                            <img 
                                src={src} 
                                alt={`Sertifikat ${index + 1}`} 
                                className="w-3/4 md:w-full rounded-lg border-2 border-[#FFCC00] shadow-md hover:scale-105 transition-transform duration-150"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certification;