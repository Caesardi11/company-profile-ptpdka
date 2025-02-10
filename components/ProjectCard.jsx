import React from 'react'
import projects from '../data/projects.json'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import {Button, buttonVariants} from '@/components/ui/button'

const ProjectCard = () => {
  return (
    <section className='grid grid-cols-1 gap-7 mt-10 md:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <img src={project.img} alt={project.name} className='rounded-tl-md rounded-tr-md' />
          </CardHeader>
          <CardContent>
            <CardTitle>
              <p className=' pb-2'>
                {project.name}
              </p>
            </CardTitle>
            <CardDescription>
              <div className="grid grid-cols-[auto_4px_1fr] gap-x-3 gap-y-1 mt-5">
                <span className="font-semibold">Lokasi </span><span> :</span><span>{project.location}</span>
                <span className="font-semibold">Jenis </span><span> :</span><span>{project.type}</span>
                <span className="font-semibold">Tahun Selesai </span><span> :</span><span>{project.year}</span>
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant='default' size='default'>
              <Link href={`/${project.path}`}>
                Selengkapnya →
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}

export default ProjectCard

//id, img, path, name, location, type, year, tombol detail