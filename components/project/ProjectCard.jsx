import React from 'react'
import projects from '@/data/projects.json';
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

const ProjectCard = () => {
  return (
    <section className='project-card-display'>
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <Image src={project.thumbnail} alt={project.name} className='rounded-tl-md rounded-tr-md' height={50} width={700}/>
          </CardHeader>
          <CardContent>
            <CardTitle>
              <p className=' pb-2'>
                {project.name}
              </p>
            </CardTitle>
            <CardDescription>
              <div className="project-card-description-display">
                <span className="font-semibold">Lokasi </span><span> : </span><span>{project.location}</span>
                <span className="font-semibold">Jenis </span><span> : </span><span>{project.type}</span>
                <span className="font-semibold">Tahun Selesai </span><span> : </span><span>{project.year}</span>
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={`/project/${project.path}`}>
              <Button variant='default' size='default'>
                Selengkapnya →
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}

export default ProjectCard

//id, img, path, name, location, type, year, tombol detail