import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '../typings'


type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
export default function Contact({ pageInfo }: Props) {
    const { 
        register,
         handleSubmit,
        } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

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
                        <p className="text-2xl">{pageInfo.phoneNumber}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[gold] h-7 w-7 animate-pulse' />
                        <p className="text-2xl">{pageInfo.address}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[gold] h-7 w-7 animate-pulse' />
                        <p className="text-2xl">{pageInfo.email}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='name' className='contactInput'  type="text" />
                        <input {...register('email')} placeholder='email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder="your message" className='contactInput' />
                    <button type="submit" className='bg-[gold] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>


        </div>
  )
}