import React from 'react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ContactForm from '@/components/contact-us/ContactForm';
import ContactDetail from '@/components/contact-us/ContactDetail';

export const metadata = {
    title: 'Kontak Kami - pancadutakaryaabadi.com',
    description: 'Hubungi kami untuk informasi lebih lanjut.',
    icons: {
        icon: '/logo-pdka.webp',
    },
};

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
            <section className='gap-10 my-7 mx-auto px-8 text-justify md:px-16 lg:px-28 xl:grid-cols-2 xl:my-16 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                <h2 className='heading font-semibold text-[#DAA520] text-3xl tracking-wider mb-7 md:text-3xl lg:text-4xl'>
                    Hubungi Kami
                </h2>
                <p className='text-sm md:text-base'>
                    Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda.
                </p>
                <div className='grid grid-cols-1 gap-10 mt-10 lg:gap-16 xl:gap-20 lg:mt-16 lg:grid-cols-3'>
                    <div className='lg:col-span-2'>
                        <ContactForm />
                    </div>
                    <ContactDetail/>
                </div>
            </section>
        </>
    );
};

export default ContactPage;