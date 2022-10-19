import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
  
      <div className=" scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[gold]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projetcs */}
        {projects.map((project, i) => (
          <div
          key={project._id}
          className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen">
            <Image
              height='325'
              width='325'
              src={urlFor(project.image).url()}
              alt='projects' />
            <div className='px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'><span className='underline decoration[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span> {project?.title} </h4>
            
            <div className="flex items-center mt-5 space-x-2 justify-center">
              {project?.technologies.map((technology) => (
                <Image
                height="60" width='60'
                key={technology._id}
                src={urlFor(technology.profilePic).url()}
                alt="" />
              ))}
            </div>

            <p className='text-lg mt-5 text-center md:text-left'>{project.summary}</p>
            </div>
          </div>
          ))}
        </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
)
}

export default Projects