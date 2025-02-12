import React from 'react';
import projects from '@/data/projects.json';

const getProjectByPath = (projectPath) => {
    return projects.find((project) => project.path === projectPath);
};

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
                <h1 className='heading font-black text-start text-3xl tracking-wider mb-10 md:mb-6 md:min-h-[4rem] lg:min-h-[0rem] lg:text-4xl'>{project.name}</h1>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    <div>
                        <img src={project.thumbnail} alt={project.name} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div>
                        <p><strong>Location:</strong> {project.location}</p>
                        <p><strong>Type:</strong> {project.type}</p>
                        <p><strong>Year:</strong> {project.year}</p>
                        <p><strong>Length:</strong> {project.length}</p>
                        <p><strong>Client:</strong> {project.client}</p>
                        <p><strong>Scope:</strong> {project.scope}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
