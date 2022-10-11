import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceCards({}: Props) {
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
      src="https://cdn-icons-png.flaticon.com/512/2913/2913185.png" />
      <div className="px-0 md:px-10">
        <h4 className='text-4xl font-light'>Serveur privé DOFUS</h4>
        <p className="font-bold text-2xl mt-1">SUPERBOSS & Agent Marketing</p>
        <div className="flex space-x-2 my-2">
          <img
          className="h-10 w-10 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="techno" />
          <img
          className="h-10 w-10 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="techno" />
          <img
          className="h-10 w-10 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          alt="techno" />
          {/* Techno Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work 2010 - Ended 2012</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
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