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
            <section className='contact-container'>
                <h2 className='contact-heading'>
                    Hubungi Kami
                </h2>
                <p className='contact-subheading'>
                    Harap isi formulir di bawah ini dan Tim kami akan dengan senang hati menjawab pertanyaan Anda.
                </p>
                <div className='contact-content-display'>
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