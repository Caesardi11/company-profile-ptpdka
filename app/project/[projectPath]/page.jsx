import React from 'react';
import projects from '@/data/projects.json';
import ProjectDetailCard from '@/components/ProjectDetailCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const getProjectByPath = (projectPath) => {
    return projects.find((project) => project.path === projectPath);
};

// Metadata for SEO
export async function generateMetadata({ params }) {
    const { projectPath } = await params;
    const project = getProjectByPath(projectPath);

    if (!project) return { title: "Proyek Tidak Ditemukan" };

    return {
        title: `${project.name} - pancadutakaryaabadi.com`,
        description: `Proyek ${project.name} berada di ${project.location}. Proyek tersebut berada dibawah ${project.client} dan selesai pada Tahun ${project.year}. Lihat detailnya di sini.`,
        icons: {
            icon: '/logo-pdka.png',
        },
    };
}

export default async function ProjectDetails({ params }) {
    // Get the project path from the URL
    const { projectPath } = await params;
    const project = getProjectByPath(projectPath);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <section className='project-detail-thumbnail-container'>
                <img src={project.thumbnail} alt={project.name} className='project-detail-thumbnail' />
                <div className='project-detail-thumbnail-overlay'></div>
            </section>
            <section className='project-detail-container'>
                <h1 className='project-detail-title'>{project.name}</h1>
                <ProjectDetailCard project={project} />
                <div className='flex justify-end mt-5'>
                    <Link href='/project'>
                        <Button variant='default' size='default'>
                            Kembali ke Proyek
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
