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
    title: 'Profil Perusahaan - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.png',
    },
}

const ProfilePage = () => {
return (
    <div>
        <section className='relative'>
            <div className='header-bg' style={{ backgroundImage: "url('/kantor-pdka.png')" }}>
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
            hsvgdjbhvajgvjad
        </section>
    </div>
)
}

export default ProfilePage