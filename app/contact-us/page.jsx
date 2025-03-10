import React from 'react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { IoIosMail } from "react-icons/io";
import { PiPhoneFill } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";
import ContactForm from '@/components/contact-us/ContactForm';

export const metadata = {
    title: 'Kontak Kami - pancadutakaryaabadi.com',
    description: 'Hubungi kami untuk informasi lebih lanjut.',
    icons: {
        icon: '/logo-pdka.webp',
    },
};

const locations = [
    {
        title: "KANTOR PUSAT JAYAPURA",
        phone: "+62967 - 537 776",
    },
    {
        title: "KANTOR CABANG SORONG",
        phone: "+62951 - 325 904",
    },
    {
        title: "KANTOR CABANG MANOKWARI",
        phone: "+62986 - 215 307 / 215 308",
    },
    {
        title: "KANTOR CABANG SURABAYA",
        phone: "+6231 - 355 2121",
    },
    {
        title: "KANTOR CABANG TIMIKA",
        phone: "",
    },
];

const ContactPage = () => {
    return (
        <>
            <section className='relative'>
                <div className='header-bg' style={{ backgroundImage: "url('/contact-bg-2.webp')" }}>
                    <div className='header-bg-overlay'></div>
                </div>
                <div className='header-container'>
                    <p className='header-p-txt'>
                        BERSAMA ANDA, KAPAN PUN
                    </p>
                    <h1 className='header-h1-txt'>
                        Tanya Kami, Kami Siap Membantu 
                    </h1>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>KONTAK KAMI</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className='gap-10 my-5 mx-auto px-8 text-justify md:px-16 lg:px-28 xl:grid-cols-2 xl:mt-16 xl:my-10 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                <h2 className='heading font-semibold text-[#DAA520] text-3xl tracking-wider mb-7 md:text-3xl lg:text-4xl'>
                    Hubungi Kami
                </h2>
                <p className='text-sm md:text-base'>
                    Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda.
                </p>
                <div className='grid grid-cols-1 gap-10 mt-10 lg:gap-16 xl:gap-20 lg:mt-20 lg:grid-cols-3'>
                    <div className='text-sm md:text-base lg:col-span-2'>
                        <ContactForm />
                    </div>
                    <div>
                        <div>
                            <h2 className='contact-h2'>Kontak Kami</h2>
                            <a href="mailto:ptpdka@persero.co.id">
                                <div className='contact-mail-display'>
                                    <IoIosMail className='contact-mail-icon' />
                                    <p className='contact-mail-text'>ptpdka@persero.co.id</p>
                                </div>
                            </a>
                            <div className='contact-phonenumber-content-display'>
                                {locations.filter(location => location.phone).map((location, index) => (
                                    <div key={index}>
                                        <div className=' transition-transform duration-300 hover:translate-x-2'>
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
                            <a href="https://youtube.com/@pancadutakaryaabadi?si=15UhlKS5XaRAdLd-" target="_blank" rel="noopener noreferrer">
                                <div className='contact-yt-display'>
                                    <ImYoutube className='contact-yt-icon' />
                                    <p className='contact-yt-text'>Panca Duta Karya Abadi</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;

//re_NESAsiqJ_JNwFj2qgFRbVuHEQFLPdCzrg (API RESEND YANG MAU DIPAKAI)
//re_T9FDDE85_AUpFyvpCYuwfRmi7xfNtwzx3 (API RESEND ONBOARDING)