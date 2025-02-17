import React from 'react'
import Collaboration from '@/components/Collaboration'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
    title: 'Proyek Kami - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.png',
    },
}

const ProjectPage = () => {
    return (
        <div className='bg-[#daa52007]'>
            <section className='relative'>
                <div className='header-bg' style={{ backgroundImage: "url('/project-bg.png')" }}>
                    <div className='header-bg-overlay'></div>
                </div>
                <div className='header-container'>
                    <p className='header-p-txt'>
                        PROYEK TERBARU
                    </p>
                    <h1 className='header-h1-txt'>
                        Proyek Unggulan Kami
                    </h1>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>PROYEK</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className='project-container'>
                <ProjectCard />
            </section>
            <Collaboration />
        </div>
    )
}

export default ProjectPage
