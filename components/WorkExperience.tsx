import React from 'react'
import { motion } from "framer-motion"
import ExperienceCards from './ExperienceCards'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 3.3,
    }}
    className="relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">Experience</h1>

        <div className="scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[gold]/80 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            {/* Experiences Cards */}
            {experiences?.map((experience => (
                <ExperienceCards key={experience._id} experience={experience} />               
            )))}
        </div>
    </motion.div>
  )
}