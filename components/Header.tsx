import React from 'react'
import { SocialIcon } from "react-social-icons"
import Link from 'next/link'

import { motion } from 'framer-motion'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
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
            {socials.map((social) => (
                <SocialIcon
                key={social._id}
                url={social.url}
                className='' 
                fgColor='transparent' 
                bgColor="gold" />
            ))}
        </motion.div>

        <Link href="#contact">
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
        </Link>
    </header>
  )
}