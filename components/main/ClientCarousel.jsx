"use client";
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const icons = [
  "/partner/logo-pupr.webp",
  "/partner/logo-dephub.webp",
  "/partner/logo-kemkes.webp",
  "/partner/logo-kemenpora.webp",
  "/partner/logo-papua-barat.webp",
  "/partner/logo-papua.webp",
  "/partner/logo-kota-sorong.webp",
  "/partner/logo-kab-sorong.webp",
  "/partner/logo-kab-sorsel.webp",
  "/partner/logo-kab-manokwari.webp",
  "/partner/logo-kab-mansel.webp",
  "/partner/logo-kota-jayapura.webp",
  "/partner/logo-kab-jayapura.webp",
  "/partner/logo-kab-mimika.webp",
]

const ClientCarousel = () => {
  const autoplay = Autoplay({ delay: 3000 });

  return (
    <div>
        <section className='content-container-client'>
            <h1 className='heading-client'>Klien Kami</h1>
            <h2 className='subheading-client'>Bekerja sama dengan berbagai instansi pemerintahan, kami berkomitmen untuk memberikan hasil terbaik yang mendukung pembangunan dan pelayanan publik yang berkualitas.</h2>
            <Carousel className='mt-10' opts={{ align: 'start', loop: true }} plugins={[autoplay]}>
                <CarouselContent>
                    {icons.map((src, index) => (
                        <CarouselItem key={index} className='basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6'>
                            <Image 
                                src={src} 
                                alt={`Client Logo ${index + 1}`} 
                                className='w-full h-1/2 object-contain'
                                width={250}
                                height={250}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    </div>
  )
}

export default ClientCarousel