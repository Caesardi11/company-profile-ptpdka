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

const ProjectCard = () => {
  return (
    <section className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <img src={project.img} alt={project.name} className='rounded-tl-md rounded-tr-md' />
          </CardHeader>
          <CardContent>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.location}</CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/{project.path}" className='bg-slate-400 p-2 rounded-full'>
              Selengkapnya →
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}

export default ProjectCard

//id, img, path, name, location, type, year, tombol detail