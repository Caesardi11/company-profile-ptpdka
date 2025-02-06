"use client";
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const icons = [
  "/partner/logo-pupr.png",
  "/partner/logo-dephub.png",
  "/partner/logo-kemkes.png",
  "/partner/logo-kemenpora.png",
  "/partner/logo-papua-barat.png",
  "/partner/logo-papua.png",
  "/partner/logo-kota-sorong.png",
  "/partner/logo-kab-sorong.png",
  "/partner/logo-kab-sorsel.png",
  "/partner/logo-kab-manokwari.png",
  "/partner/logo-kab-mansel.png",
  "/partner/logo-kota-jayapura.png",
  "/partner/logo-kab-jayapura.png",
  "/partner/logo-kab-mimika.png",
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