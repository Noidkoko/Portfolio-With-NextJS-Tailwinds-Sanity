import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {
  experience: Experience
}

export default function ExperienceCards({ experience }: Props) {
  console.log(experience.companyImage)
  return (
    <article className="flex flex-col rounded-lg space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] items-center snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
      initial={{
          y: -100,
          opacity: 0,
      }}
      whileInView={{
          y: 0,
          opacity: 1,
      }}
      transition={{
          duration: 1.2,
      }}
      className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src={urlFor(experience?.companyImage).url()} />
      <div className="px-0 md:px-10">
        <h4 className='text-3xl font-light'>{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {/* {experience.technologies.map((technology) => (
          <img
            key={technology._id}
            className="h-10 w-10 rounded-full"
            src={urlFor(technology.image).url()}
            alt="techno" />
          ))} */}

          {/* Techno Used */}
        </div>
        <div className="flex flex-col">
          <p className="uppercase py-1 text-gray-300">
          From {" "}{new Date(experience.dateStarted).toDateString()}
          </p>
        <p className="uppercase pb-5 text-gray-300">
            To {" "}{new Date(experience.dateEnded).toDateString()}
        </p>
          </div>
            


        <ul className="list-disc space-y-4 ml-5 text-lg h-60 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[gold]/80">
          {experience.points.map(point => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}