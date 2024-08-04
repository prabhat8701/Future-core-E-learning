'use client'

import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import {motion} from 'framer-motion'

function CourseCard({image, title, intro, amount}:{image:string, title:string, intro:string, amount:number}) {
    return (
        <motion.div 
            className='bg-white rounded-3xl lg:mx-8 md:p-6 border-4 border-primary flex-1 flex flex-col md:flex-row gap-4 md:gap-8 overflow-hidden'
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
        >
            <div className='h-[200px] md:h-[250px] md:w-[300px] aspect-[1.2/1] md:aspect-[unset] relative'>
                <Image
                    src={image}
                    fill
                    alt='Image'
                    className='md:rounded-2xl object-cover'
                />
            </div>
            <div className='flex flex-col justify-between md:gap-2 p-4 md:p-0'>
                <h5 className='font-semibold text-black/80 text-2xl mb-2'>{title}</h5>
                <p>{intro}</p>
                <div className=' text-yellow-300 flex items-center justify-between mb-2'>
                    <div className='flex gap-2 text-lg'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    <p className='font-semibold text-black/80'>$ {amount}</p>
                </div>
                <button className="rounded-xl border border-primary p-2 font-semibold text-primary">Explore</button>
            </div>
        </motion.div>
    )
}

export default CourseCard