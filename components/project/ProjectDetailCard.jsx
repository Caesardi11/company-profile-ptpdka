"use client";
import React from 'react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';

const ProjectDetailCard = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(project.img[0]);
    
    return (
        <div className='project-detail-content-display'>
            <div className='xl:col-span-3'>
                {/* Image Gallery */}
                <div>
                    <Image
                        src={selectedImage}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-md"
                        width={800}
                        height={600}
                    />
                    <div className="flex gap-3 mt-4">
                        {project.img.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="Thumbnail"
                                className={`w-16 h-14 md:w-20 md:h-16 cursor-pointer rounded-md object-cover border-2 ${selectedImage === img ? "border-[#FFCC00]" : "border-transparent"}`}
                                onClick={() => setSelectedImage(img)}
                                width={300}
                                height={300}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2'>
                <div className="project-detail-display">
                    <span className="font-semibold">Lokasi Pekerjaan </span><span> : </span><span>{project.location}</span>
                    <span className="font-semibold">Jenis Pekerjaan </span><span> : </span><span>{project.type}</span>
                    <span className="font-semibold">Tahun Selesai </span><span> : </span><span>{project.year}</span>
                    <span className="font-semibold">Durasi Pengerjaan </span><span> : </span><span>{project.time}</span>
                    <span className="font-semibold">Klien / Pemilik </span><span> : </span><span>{project.client}</span>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Lingkup Pekerjaan</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside">
                                {project.scope.map((scopeItem, index) => (
                                    <li key={index}>{scopeItem}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Detail Proyek</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                {project.detail.map((detailItem, index) => (
                                    <li key={index} className='project-detail-display'>
                                        <span className="font-semibold min-w-[7rem]">{detailItem.year}</span><span> : </span><span>{detailItem.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default ProjectDetailCard;
