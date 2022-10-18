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
    <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] items-center snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">SUPERBOSS & Agent Marketing</p>
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
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-60 overflow-y-scroll scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[gold]/80">
          <li>PHP</li>
          <li>Gestionnaire MySQL/Navicat</li>
          <li>VB.NET</li>
          <li>CMS Joomla/Wordpress</li>
          <li>Agent Marketing/Communication</li>
        </ul>
      </div>
    </article>
  )
}