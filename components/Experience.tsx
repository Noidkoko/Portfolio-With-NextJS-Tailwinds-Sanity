import React from 'react'
import { motion } from "framer-motion"
import ExperienceCards from './ExperienceCards'
type Props = {}

export default function Experience({}: Props) {
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
    className="relative flex h-screen overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">Experience</h1>

        <div>
            {/* Experiences Cards */}
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
        </div>
    </motion.div>
  )
}