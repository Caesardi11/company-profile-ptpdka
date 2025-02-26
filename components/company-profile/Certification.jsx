import React from 'react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Certification = () => {
    const certifications = [
        {
            src: "/certification/iso-9001.webp",
            title: "ISO 9001 : 2015",
            description: "Sistem Manajemen Mutu"
        },
        {
            src: "/certification/iso-14001.webp",
            title: "ISO 14001 : 2015",
            description: "Sistem Manajemen Lingkungan"
        },
        {
            src: "/certification/iso-45001.webp",
            title: "ISO 45001 : 2018",
            description: "Sistem Manajemen Kesehatan dan Keselamatan Kerja"
        },
        {
            src: "/certification/iso-37001.webp",
            title: "ISO 37001 : 2016",
            description: "Sistem Manajemen Anti Penyuapan"
        },
        {
            src: "/certification/bpjs.webp",
            title: "BPJS Ketenagakerjaan",
            description: ""
        },
        {
            src: "/certification/smk3.webp",
            title: "SMK3",
            description: "Sistem Manajemen Keselamatan dan Kesehatan Kerja"
        },
    ];

    return (
        <section className="certif-bg" style={{ backgroundImage: "url('/bg-certif.webp')" }}>
            <div className="certif-bg-overlay"></div>
            <div className='certif-display'>
                <div className="certif-txt-container">
                    <h2 className="certif-heading">Sertifikasi Kami</h2>
                    <p className="certif-subheading">
                        Kami telah mendapatkan berbagai sertifikasi sebagai bukti kredibilitas dan kualitas layanan kami.
                    </p>
                </div>

                <div className="certif-card-container">
                    {certifications.map((certification, index) => (
                        <div key={index} className="certif-card-bg">
                            <Dialog>
                                <DialogTrigger className='flex justify-center'>
                                    <Image 
                                        src={certification.src} 
                                        alt={`Sertifikat ${certification.title}`}
                                        width={400}
                                        height={600}
                                        className={`rounded-lg border-2 border-[#FFCC00] shadow-md hover:scale-105 transition-transform duration-150 ${certification.title === "BPJS Ketenagakerjaan" ? 'w-full' : 'w-3/4 md:w-full'}`}
                                    />
                                </DialogTrigger>
                                <DialogContent>
                                    <Image
                                        src={certification.src}
                                        alt={`Sertifikat ${certification.title}`}
                                        width={2479}
                                        height={3504}
                                        className={`rounded-lg shadow-lg ${certification.title === "BPJS Ketenagakerjaan" ? 'w-full md:w-3/4' : 'w-4/5 md:w-1/2 lg:w-2/3'}`}
                                        style={{ filter: 'brightness(0.9) contrast(1.2)' }}
                                    />
                                    <div className="flex flex-col items-center md:items-start">
                                        <DialogTitle>{certification.title}</DialogTitle>
                                        <DialogDescription>{certification.description}</DialogDescription>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certification;
