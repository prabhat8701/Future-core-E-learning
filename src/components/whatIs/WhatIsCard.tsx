'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

function WhatIsCard({image, type, buttonText}: {image: StaticImageData, type: 'INSTRUCTORS' | "STUDENTS", buttonText: string}) {
    return (
        <motion.div 
            className='rounded-md aspect-[1.5/1] relative group overflow-hidden after:content-[""] after:h-full after:w-full after:absolute after:bg-black/50 after:top-0 after:left-0'
            initial={{opacity: 0, x: type === "INSTRUCTORS" ? -200 : 200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5 }}
        >
            <Image
                src={image}
                fill
                alt='Instructor'
                placeholder='blur'
            />
            <div className='absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 z-10 -translate-y-1/2'>
                <motion.div 
                    initial={{opacity: 0, scaleX: 0}}
                    whileInView={{opacity: 1, scaleX: 1}}
                    transition={{duration: 0.5, delay: 0.5 }}
                >
                    <h5 className='text-xl md:text-2xl whitespace-nowrap font-semibold mb-2'>FOR {type}</h5>
                    <button className='border rounded-full py-2 sm:py-3 px-4 whitespace-nowrap sm:px-6 group-odd:border-white group-even:border-primary group-even:bg-primary group-odd:hover:bg-white group-odd:hover:text-blue transition-all group-even:hover:opacity-80'>
                        {buttonText}
                    </button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default WhatIsCard