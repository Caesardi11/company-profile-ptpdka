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
        phone: "+62967-537 776",
    },
    {
        title: "KANTOR CABANG SORONG",
        phone: "+62951-325 904",
    },
    {
        title: "KANTOR CABANG MANOKWARI",
        phone: "+62986-215 307 / 215 308",
    },
    {
        title: "KANTOR CABANG SURABAYA",
        phone: "+6231-355 2121",
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam urna, feugiat non urna vitae, fermentum pretium felis. Sed ac tempus urna, quis accumsan metus. Nunc sit amet dictum orci, nec ultrices magna. In sed est quis nulla fringilla gravida vel porta velit. Sed a porttitor lorem. Aliquam id sapien et leo feugiat feugiat eget a nibh. Sed congue semper lacus ut tincidunt. Mauris placerat ultricies nisl in tempor.
                        <br />
                        Donec feugiat lacus ut tincidunt dapibus. Suspendisse vel ultricies nunc. Nam efficitur nisl ac diam gravida, sed vulputate turpis varius. Morbi sagittis egestas felis, at porttitor tortor ullamcorper vel. Maecenas nec elit ut ante ultricies maximus sed sed odio. Ut quis nisl et felis accumsan malesuada. Donec consectetur convallis sagittis. Proin pharetra lacinia ante in commodo. Proin nec justo ut augue varius pellentesque. Vivamus malesuada lorem a mauris scelerisque molestie. Pellentesque posuere sem vitae justo bibendum sagittis.
                        <br />
                        Cras facilisis nisl non porta commodo. Fusce posuere purus id sapien egestas blandit. In sed hendrerit orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et libero neque. Suspendisse potenti. Aliquam sit amet tortor dui. Duis quis sem vitae sapien efficitur fringilla non sit amet enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eleifend augue felis, in sollicitudin elit tempor eu.
                        <br />
                        Maecenas eget euismod lectus, quis rhoncus orci. Etiam semper lorem sed nisl accumsan vulputate. Donec sed finibus augue. Sed hendrerit lacinia sapien et vestibulum. Aenean ac gravida magna, id pulvinar ante. Maecenas vel sagittis purus. Morbi eleifend mauris purus, eget ullamcorper ipsum scelerisque ac. Morbi mollis nibh sapien, eu venenatis mi tristique vitae. Aenean sit amet placerat sem, id posuere odio. Sed mattis sed ante sit amet laoreet. Nam rhoncus, ligula tincidunt sollicitudin congue, libero diam scelerisque leo, id tristique augue massa iaculis dolor. Vivamus tempor maximus arcu. Ut id tellus pretium, venenatis ligula ut, tempor tortor. Curabitur eget massa non purus aliquet pharetra. Nullam molestie felis ut elit porttitor, vitae malesuada erat condimentum.
                        <br />
                        Mauris in eros neque. Suspendisse ac varius sem. Quisque consectetur sollicitudin odio, at ultricies augue finibus et. Phasellus commodo a libero in condimentum. Aliquam erat volutpat. Curabitur consectetur laoreet diam eu varius. Fusce in augue quis eros faucibus malesuada id vel neque. Curabitur enim nisi, egestas vel tincidunt at, condimentum quis ipsum. Nullam efficitur felis quis aliquam gravida. Integer a dolor dignissim, faucibus nunc vel, sodales velit.
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