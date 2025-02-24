import React from 'react'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import History from '@/components/company-profile/History';
import VisionMission from '@/components/company-profile/VisionMission';
import Location from '@/components/company-profile/Location';
import MiniPortfolio from '@/components/main/MiniPortfolio';
import Certification from '@/components/company-profile/Certification';

export const metadata = {
    title: 'Profil Perusahaan - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.webp',
    },
}

const ProfilePage = () => {
    return (
        <>
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
            <History/>
            <VisionMission/>
            <Location/>
            <Certification/>
            <MiniPortfolio/>
        </>
    )
}

export default ProfilePage