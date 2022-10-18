import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
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
    className="flex flex-col text-center relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">About</h3>
        <motion.img
        className="-mb-40 md:mb-0 flex-shrink-0 w-65 h-65 rounded-full object-cover xl:w-[500px] xl:h-[600px]"
        initial={{
            scale: 0,
            opacity: 0,
        }}
        whileInView={{
            scale: 1,
            opacity: 1,
        }}
        transition={{
            duration: 0.5,
            delay: 0.1,
        }}
        src='https://shop7.webmodule.prestashop.net/pokedoge/11634-small_default/gengar.jpg'
        alt="profile-picture" />
        <div className="space-y-5 px-8 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="text-3xl font-thin underline decoration-[gold]">little</span> background</h4>
            <p>{pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}