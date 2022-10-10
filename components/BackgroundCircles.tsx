import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      scale: [1,2,3,1],
      opacity: [0.1,0.2,0.4,0.8,0.1,0.1],
    }}
    transition={{
      duration: 1.8,
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-18 animate-ping"></div>
        <div className="absolute border border-[#5c5c5c] rounded-full h-[300px] w-[300px] mt-25"></div>
        <div className="absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-18"></div>
        <div className="border border-[gold] rounded-full h-[650px] w-[650px] opacity-20 absolute mt-18 animate-pulse"></div>
        <div className="rounded-full border border-[#333] h-[800px] w-[800px] absolute mt-18"></div>
    </motion.div>
  )
}

export default BackgroundCircles