import React from 'react'
import { SocialIcon } from "react-social-icons"

import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center">
        <motion.div
        initial={{
            y: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            y: 0,
            opacity: 100,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Socials */}
            <SocialIcon className='' fgColor='gold' bgColor="transparent" network="github" />
            <SocialIcon className='' fgColor='gold' bgColor="#222" network="discord" />
            <SocialIcon className='' fgColor='gold' bgColor="transparent" network="google" />
        </motion.div>


        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 100,
            scale: 1
        }}
        transition={{
            duration: 1.5,
            delay: 0.5
        }} className="flex flex-row items-center cursor-pointer">
            {/* Mail */}
            <SocialIcon fgColor='gold' bgColor="transparent" network="email" />            
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch!</p>
        </motion.div>

    </header>
  )
}