import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Link from 'next/link'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`console.log('Bonjour')`, `const name = '${pageInfo?.name}'`, "let age = 26", "console.log('Bienvenue')"],
        loop: true,
        delaySpeed: 1500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center overflow-hidden text-center'>
        <BackgroundCircles />
        <div className='z-20'>
          <h2 className="uppercase tracking-[15px] text-sm pb-5 text-gray-400">FRENCH FULLSTACK DEVELOPPER</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold">
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='gold' />
          </h1>

          <div className="pt-5">
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skill">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#contact">
            <button className='heroButton'>Contact me</button>
            </Link>
          </div>
        </div>
    </div>
  )
}