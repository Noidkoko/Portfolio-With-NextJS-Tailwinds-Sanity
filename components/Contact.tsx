import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Contact</h3>
        
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Ive got just what you need ! Lets talk
            </h4>

            <div className='space-y-10 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[gold] h-7 w-7 animate-pulse' />
                    <p className="text-2xl">+337 77 91 60 61</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[gold] h-7 w-7 animate-pulse' />
                    <p className="text-2xl">FRANCE | Toulon (83)</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[gold] h-7 w-7 animate-pulse' />
                    <p className="text-2xl">marvinguillot@hotmail.fr</p>
                </div>
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder='name' className='contactInput'  type="text" />
                    <input placeholder='email' className='contactInput' type="email" />
                </div>
                <input placeholder='subject' className='contactInput' type="text" />
                <textarea placeholder="your message" className='contactInput' />
                <button className='bg-[gold] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>


    </div>
  )
}