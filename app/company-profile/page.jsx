import React from 'react'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Image from 'next/image'

export const metadata = {
    title: 'Profil Perusahaan - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.webp',
    },
}

const ProfilePage = () => {
return (
    <div className='bg-white'>
        <section className='relative'>
            <div className='header-bg' style={{ backgroundImage: "url('/kantor-pdka.webp')" }}>
                <div className='header-bg-overlay'></div>
            </div>
            <div className='header-container'>
                <p className='header-p-txt'>
                    PDKA GROUP
                </p>
                <h1 className='header-h1-txt'>
                    Lebih Dekat Dengan Kami 
                </h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>PROFIL PERUSAHAAN</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </section>
        <section className='project-container'>
            <Image src='/map-kantor.webp' alt='kantor-pdka' layout='responsive' width={500} height={500} />
            hsvgdjbhvajgvjad
        </section>
    </div>
)
}

export default ProfilePage