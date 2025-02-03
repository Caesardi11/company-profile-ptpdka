import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='footer-bg'></div>
        <div className='footer-bg-overlay'></div>
        <div className='relative z-10 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='border-b-2 border-gray-700'>
            <a href="/" className='flex justify-center pb-5'>
              <img src="/icon-navbar-2.png" alt="Logo PDKA" className='w-3/4'/>
            </a>
          </div>
          <div className='text-warmWhite2 border-b-2 border-gray-700'>
            <div>
              <div className='flex flex-row gap-2 mb-5'>
                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                <div>
                  <h3 className='text-[#DAA520] font-semibold tracking-wide heading'>
                    KANTOR PUSAT JAYAPURA
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    Jl. Ardipura, No. 56 A, <br /> Ardipura, Mandala, Jayapura Utara, <br /> Kota Jayapura, Papua 99222
                  </p>
                </div>
              </div>
              <div className='flex flex-row gap-2 mb-5'>
                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                <div>
                  <h3 className='text-[#DAA520] font-semibold tracking-wide heading'>
                    KANTOR CABANG SORONG
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    Jl. A. Yani, Klademak III C, <br /> Klademak, Sorong Manoi, <br /> Kota Sorong, Papua Barat Daya 98414
                  </p>
                </div>
              </div>
              <div className='flex flex-row gap-2 mb-5'>
                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                <div>
                  <h3 className='text-[#DAA520] font-semibold tracking-wide heading'>
                    KANTOR CABANG TIMIKA
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    Jl. Caritas SP 2 - SP 5, <br /> Timika Jaya, Mimika Baru, <br /> Kabupaten Mimika, Papua 99963
                  </p>
                </div>
              </div>
              <div className='flex flex-row gap-2 mb-5'>
                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                <div>
                  <h3 className='text-[#DAA520] font-semibold tracking-wide heading'>
                    KANTOR CABANG MANOKWARI
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    Jl. Drs Esau Sesa (Samping Hotel Papua Forest), <br /> Wosi, Manokwari Barat <br /> Kabupaten Manokwari, Papua Barat 98312
                  </p>
                </div>
              </div>
              <div className='flex flex-row gap-2 mb-5'>
                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                <div>
                  <h3 className='text-[#DAA520] font-semibold tracking-wide heading'>
                    KANTOR CABANG SURABAYA
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    Jl. Merak No.4 - 6, <br /> Krembangan Selatan, Krembangan, <br /> Surabaya, Jawa Timur 60175
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            asdasd
          </div>
        </div>
    </section>
  )
}

export default Footer