import React from 'react'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata = {
    title: 'Kontak Kami - pancadutakaryaabadi.com',
    description: 'Hubungi kami untuk informasi lebih lanjut.',
    icons: {
        icon: '/logo-pdka.webp',
    },
}

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
                        Jangkau Kami Dengan Mudah 
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
            <section >

            </section>
        </>
    );
};

export default ContactPage;