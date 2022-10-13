import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1,
            x: 0,
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        className="rounded-full border border-gray-400 object-cover w-20 h-20 md:h-23 md:w-23 xl:w-26 xl:h-26 filter group-hover:gray-scale transition duration-300 ease-in-out"
         />
         <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:h-23 md:w-23 xl:w-26 xl:h-26 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
         </div>
    </div>
  )
}

export default Skill