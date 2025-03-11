import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { PiPhoneFill } from 'react-icons/pi';
import { ImYoutube } from 'react-icons/im';

const locations = [
    {
        title: 'KANTOR PUSAT JAYAPURA',
        phone: '+62967 - 537 776',
    },
    {
        title: 'KANTOR CABANG SORONG',
        phone: '+62951 - 325 904',
    },
    {
        title: 'KANTOR CABANG MANOKWARI',
        phone: '+62986 - 215 307 / 215 308',
    },
    {
        title: 'KANTOR CABANG SURABAYA',
        phone: '+6231 - 355 2121',
    },
    {
        title: 'KANTOR CABANG TIMIKA',
        phone: '',
    },
];

const ContactDetail = () => {
    return (
        <div>
            <div>
                <h2 className='contact-h2'>Kontak Kami</h2>
                <a href='mailto:ptpdka@persero.co.id'>
                    <div className='contact-mail-display'>
                        <IoIosMail className='contact-mail-icon' />
                        <p className='contact-mail-text'>ptpdka@persero.co.id</p>
                    </div>
                </a>
                <div className='contact-phonenumber-content-display'>
                    {locations
                        .filter((location) => location.phone)
                        .map((location, index) => (
                            <div key={index}>
                                <div className='transition-transform duration-300 hover:translate-x-2'>
                                    <h3 className='contact-h3'>{location.title}</h3>
                                    <div className='contact-phonenumber-content'>
                                        <PiPhoneFill className='contact-phonenumber-icon' />
                                        <p className='contact-phonenumber-text'>{location.phone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className='mt-3 md:mt-0 lg:mt-4'>
                <h2 className='contact-h2'>Ikuti Kami</h2>
                <a
                    href='https://youtube.com/@pancadutakaryaabadi?si=15UhlKS5XaRAdLd-'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='contact-yt-display'>
                        <ImYoutube className='contact-yt-icon' />
                        <p className='contact-yt-text'>Panca Duta Karya Abadi</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactDetail;