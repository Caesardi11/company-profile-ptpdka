"use client";
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const icons = [
  "/logo-pupr.png",
  "/logo-dephub.png",
  "/logo-kemkes.png",
  "/logo-kemenpora.png",
  "/logo-papua-barat.png",
  "/logo-papua.png",
  "/logo-kota-sorong.png",
  "/logo-kab-sorong.png",
  "/logo-kab-sorsel.png",
  "/logo-kab-manokwari.png",
  "/logo-kab-mansel.png",
  "/logo-kota-jayapura.png",
  "/logo-kab-jayapura.png",
  "/logo-kab-mimika.png",
]

const ClientCarousel = () => {
  const autoplay = Autoplay({ delay: 3000 });

  return (
    <div className='bg-[#fffcef]'>
        <section className='content-container-client'>
            <h1 className='heading-client'>Klien Kami</h1>
            <h2 className='subheading-client'>Bekerja sama dengan berbagai instansi pemerintahan, kami berkomitmen untuk memberikan hasil terbaik yang mendukung pembangunan dan pelayanan publik yang berkualitas.</h2>
            <Carousel className='mt-10' opts={{ align: 'start', loop: true }} plugins={[autoplay]}>
                <CarouselContent>
                    {icons.map((src, index) => (
                        <CarouselItem key={index} className='basis-1/3 lg:basis-1/5 xl:basis-1/6'>
                            <img 
                                src={src} 
                                alt={`Client Logo ${index + 1}`} 
                                className='w-full h-1/2 object-contain'
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