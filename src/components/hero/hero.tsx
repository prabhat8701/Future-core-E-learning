'use client'

import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/hero-image.png'
import portrait from '../../../public/portrait.jpg'
import { motion } from 'framer-motion'
import Wrapper from '../wrapper/wrapper'

function Hero() {

    return (
        <section className='text-white overflow-hidden'>
            <div className="container mx-auto flex flex-col md:flex-row px-4">
                <motion.article 
                    className='md:w-2/5 pt-10 md:pt-20 text-center md:text-left'
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0 }}
                    transition={{duration: 0.5 }}
                >
                    <h1 className='font-bold text-4xl lg:text-5xl mb-4 md:mb-8'><span className='text-[#F48C06]'>Studying</span> Online is now much easier</h1>
                    <p className="lg:text-lg mb-5 md:mb-10">TOTC is an interesting platform that will teach you in more an interactive way</p>

                    <div className='flex items-center gap-4 justify-center md:justify-start'>
                        <button className="button bg-white/30 whitespace-nowrap">Join for free</button>
                        <button className='rounded-full p-2.5 bg-white flex items-center justify-center'>
                            <svg width="16" height="16" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
                            </svg>
                        </button>
                        <span className='text-[#252641] text-sm lg:text-base'>Watch how it works</span>
                    </div>
                </motion.article>
                <div className='relative flex-1 z-[51]'>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1 }}
                        className='absolute right-1/4 top-[10%]'
                    >
                        <Image
                            src="/icon/media.svg"
                            height={80}
                            width={80}
                            alt='Icon'
                        />
                    </motion.div>

                    <motion.div 
                        className='absolute top-1/4 left-14 z-50'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, delay: 0.5 }}
                    >
                        <Cards
                            image='/icon/calender.svg'
                            title='250k'
                            note='Assisted student'
                            color='#23BDEE'
                        />
                    </motion.div>
                    <motion.div 
                        className='absolute top-1/2 right-14 z-50'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, delay: 1 }}
                    >
                        <Cards
                            image='/icon/email.svg'
                            title='Congratulations'
                            note='Your admission completed'
                            color='#F88C3D'
                        />
                    </motion.div>
                    <motion.div 
                        className='p-3 lg:p-5 rounded-lg backdrop-blur-[10px] flex bg-white/80 gap-3 lg:gap-5 absolute top-3/4 left-14 z-50'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, delay: 1.5 }}
                    >
                        <div 
                            className='p-2 h-10 lg:h-12 w-10 lg:w-12 grid place-content-center rounded-full overflow-hidden border border-black relative'
                        >
                            <Image
                                src={portrait}
                                fill
                                alt='Icon'
                                className=''
                            />
                        </div>
                        <div>
                            <h5 className='font-bold font-nunito-sans lg:text-xl text-[#595959] leading-tight lg:leading-snug'>User Experience Class</h5>
                            <p className='text-[#545567] tracking-[0.4px] text-sm lg:text-base leading-tight lg:leading-snug'>Today at 12.00 PM</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='relative aspect-[0.774/1] h-[580px] mx-auto '
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5 }}
                    >
                        <Image
                            src={heroImage}
                            fill
                            alt='Hero Image'
                        />
                    </motion.div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

function Cards({image, title, note, color}:{image: string, title: string, note: string, color: string}){
    return (
        <div className='p-3 lg:p-5 rounded-lg backdrop-blur-[10px] flex bg-white/80 gap-3 lg:gap-5'>
            <div style={{backgroundColor: color}} className={`p-2 h-9 w-9 lg:h-12 lg:w-12 grid place-content-center rounded-md bg-[${color}]`}>
                <div className='relative h-5 w-5 lg:h-6 lg:w-6'>
                    <Image
                        src={image}
                        fill
                        alt='Icon'
                    />
                </div>
            </div>
            <div>
                <h5 className='font-bold font-nunito-sans lg:text-xl text-[#595959] leading-tight lg:leading-normal'>{title}</h5>
                <p className='text-[#545567] tracking-[0.4px]text-sm lg:text-base leading-tight lg:leading-normal'>{note}</p>
            </div>
        </div>
    )
}

export default Hero