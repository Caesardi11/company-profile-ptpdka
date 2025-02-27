import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import Image from 'next/image';
import locations from '@/data/locations.json';

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='footer-bg'></div>
        <div className='footer-bg-overlay'></div>
        <div className='footer-content'>
          <div className='border-b-2 border-gray-700'>
            <a href="/" className='left-content-link'>
              <Image src="/icon-navbar-2.webp" alt="Logo PDKA" width={800} height={200} className='left-content-img'/>
            </a>
          </div>
          <div className='border-b-2 border-gray-700 center-container'>
            <div className='center-main-display'>
              {locations.map((location, index) => (
                <div className='center-content' key={index}>
                  <FaLocationDot className={location.iconClass}/>
                  <div>
                    <h3 className={location.titleClass}>
                      {location.title}
                    </h3>
                    <p className={location.addressClass} dangerouslySetInnerHTML={{ __html: location.address }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-700'>
            <div>
              <h2 className='right-h2'>
                Hubungi Kami
              </h2>
              <a href="mailto:ptpdka@persero.co.id">
                <div className='right-mail-display'>
                  <IoIosMail className='right-mail-icon'/>
                  <p className='right-mail-text'>
                    ptpdka@persero.co.id
                  </p>
                </div>
              </a>
              <div className='right-phonenumber-content-display'>
                {locations.filter(location => location.phone).map((location, index) => (
                  <div key={index}>
                    <h3 className='right-h3'>
                      {location.title.split(' ')[2]}
                    </h3>
                    <div className='right-phonenumber-content'>
                      <PiPhoneFill className='right-phonenumber-icon'/>
                      <p className='right-phonenumber-text'>
                        {location.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-3 md:mt-0 lg:mt-4'>
              <h2 className='right-h2'>
                Ikuti Kami
              </h2>
              <a href="https://youtube.com/@pancadutakaryaabadi?si=15UhlKS5XaRAdLd-" target="_blank" rel="noopener noreferrer">
                <div className='right-yt-display'>
                  <ImYoutube className='right-yt-icon'/>
                  <p className='right-yt-text'>
                    Panca Duta Karya Abadi
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className='cpy-text'>
          Copyright © 2025 PT. Panca Duta Karya Abadi. All Rights Reserved.
        </p>
    </section>
  )
}

export default Footer
