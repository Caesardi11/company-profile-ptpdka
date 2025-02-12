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
            <section className='bg-[#a37700]'>
                <div className='header-container'>
                    <p className='header-p-txt'>
                        PROJECT
                    </p>
                    <h1 className='header-h1-txt'>
                        Proyek Kami
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
                <h3 className='subheading-porto'>
                    PROYEK TERBARU
                </h3>
                <h2 className='heading-porto-text'>
                    Proyek Unggulan Kami
                </h2>
                <ProjectCard />
            </section>
            <Collaboration />
        </div>
    )
}

export default ProjectPage
