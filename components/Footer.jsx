import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import Image from 'next/image';

const locations = [
  {
    title: "KANTOR PUSAT JAYAPURA",
    address: "Jl. Ardipura, No. 56 A, <br /> Ardipura, Mandala, Jayapura Utara, <br /> Kota Jayapura, Papua 99222",
    phone: "+62967-537 776",
    iconClass: "center-icon-main",
    titleClass: "center-h3-main",
    addressClass: "mt-1 text-xs text-gray-400"
  },
  {
    title: "KANTOR CABANG SORONG",
    address: "Jl. A. Yani, Klademak III C, <br /> Klademak, Sorong Manoi, <br /> Kota Sorong, Papua Barat Daya 98414",
    phone: "+62951-325 904",
    iconClass: "center-icon-submain",
    titleClass: "center-h3-submain",
    addressClass: "center-p"
  },
  {
    title: "KANTOR CABANG MANOKWARI",
    address: "Jl. Drs Esau Sesa (Samping Hotel Papua Forest), <br /> Wosi, Manokwari Barat <br /> Kabupaten Manokwari, Papua Barat 98312",
    phone: "+62986-215 307 / 215 308",
    iconClass: "center-icon-submain",
    titleClass: "center-h3-submain",
    addressClass: "center-p"
  },
  {
    title: "KANTOR CABANG SURABAYA",
    address: "Jl. Merak No.4 - 6, <br /> Krembangan Selatan, Krembangan, <br /> Surabaya, Jawa Timur 60175",
    phone: "+6231-355 2121",
    iconClass: "center-icon-submain",
    titleClass: "center-h3-submain",
    addressClass: "center-p"
  },
  {
    title: "KANTOR CABANG TIMIKA",
    address: "Jl. Caritas SP 2 - SP 5, <br /> Timika Jaya, Mimika Baru, <br /> Kabupaten Mimika, Papua 99963",
    phone: "",
    iconClass: "center-icon-submain",
    titleClass: "center-h3-submain",
    addressClass: "center-p"
  }
];

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-bg'></div>
      <div className='footer-bg-overlay'></div>
      <div className='footer-content'>
        <div className='border-b-2 border-gray-700'>
          <a href="/" className='left-content-link'>
            <Image src="/icon-navbar-2.webp" alt="Logo PDKA" width={800} height={200} className='left-content-img' />
          </a>
        </div>
        <div className='border-b-2 border-gray-700 center-container'>
          <div className='center-main-display'>
            {locations.map((location, index) => (
              <div className='center-content' key={index}>
                <FaLocationDot className={location.iconClass} />
                <div>
                  <h3 className={location.titleClass} dangerouslySetInnerHTML={{ __html: location.title }}></h3>
                  <p className={location.addressClass} dangerouslySetInnerHTML={{ __html: location.address }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='border-b-2 border-gray-700'>
          <div>
            <h2 className='right-h2'>Hubungi Kami</h2>
            <a href="mailto:ptpdka@persero.co.id">
              <div className='right-mail-display'>
                <IoIosMail className='right-mail-icon' />
                <p className='right-mail-text'>ptpdka@persero.co.id</p>
              </div>
            </a>
            <div className='right-phonenumber-content-display'>
              {locations.filter(location => location.phone).map((location, index) => (
                <div key={index}>
                  <h3 className='right-h3'>{location.title.split(' ')[2]}</h3>
                  <div className='right-phonenumber-content'>
                    <PiPhoneFill className='right-phonenumber-icon' />
                    <p className='right-phonenumber-text'>{location.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-3 md:mt-0 lg:mt-4'>
            <h2 className='right-h2'>Ikuti Kami</h2>
            <a href="https://youtube.com/@pancadutakaryaabadi?si=15UhlKS5XaRAdLd-" target="_blank" rel="noopener noreferrer">
              <div className='right-yt-display'>
                <ImYoutube className='right-yt-icon' />
                <p className='right-yt-text'>Panca Duta Karya Abadi</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className='cpy-text'>
        Copyright © 2025 PT. Panca Duta Karya Abadi. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
