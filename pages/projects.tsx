import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
  return (
    <div className="p-4">
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-slate-200 rounded-xl"
          >
            <ProjectCard project={project} key={project.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
