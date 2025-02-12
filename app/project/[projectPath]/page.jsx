import React from 'react';
import projects from '@/data/projects.json';

const getProjectByPath = (projectPath) => {
    return projects.find((project) => project.path === projectPath);
};

export async function generateMetadata({ params }) {
    const project = getProjectByPath(params.projectPath);

    if (!project) return { title: "Proyek Tidak Ditemukan" };

    return {
        title: `${project.name} - pancadutakaryaabadi.com`,
        description: `Proyek ${project.name} berada di ${project.location}. Proyek tersebut berada dibawah ${project.client} dan selesai pada Tahun ${project.year}. Lihat detailnya di sini.`,
        icons: {
            icon: '/logo-pdka.png',
        },
    };
}

export default function ProjectDetails({ params }) {
    const project = getProjectByPath(params.projectPath);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <section className='bg-[#a37700] h-[50vh] lg:h-[75vh] mx-auto'>
                <img src={project.thumbnail} alt={project.name} className='w-full h-full bg-center object-cover' />
            </section>
            <section className='project-detail-container'>
                <h1 className='heading font-black text-3xl mb-4 tracking-wider lg:text-4xl lg:mb-6'>{project.name}</h1>
                <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
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
