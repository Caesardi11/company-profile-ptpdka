import React from 'react';
import projects from '@/data/projects.json';
import ProjectDetailCard from '@/components/ProjectDetailCard';

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
            <section className='bg-[#a37700] h-[65vh] md:h-[75vh] lg:h-[60vh] mx-auto relative'>
                <img src={project.thumbnail} alt={project.name} className='w-full h-full bg-center object-cover' />
                <div className='absolute inset-0 bg-black opacity-40'></div>
            </section>
            <section className='project-detail-container'>
                <h1 className='heading font-black text-start text-3xl tracking-wider mb-10 md:min-h-[4rem] lg:min-h-[0rem] lg:text-4xl'>{project.name}</h1>
                <ProjectDetailCard project={project} />
            </section>
        </div>
    );
}
