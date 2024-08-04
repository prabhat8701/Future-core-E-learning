'use client'

import React from 'react'
import Image from 'next/image'
import smilingWoman from '../../../../public/smiling-woman.png'
import { FaStar } from 'react-icons/fa6'
import { motion } from 'framer-motion'


function Testimonial() {
    return (
        <section className='pb-20 overflow-hidden'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-20 items-center px-4'>
                <motion.article 
                    className='md:w-2/5 lg:w-1/3'
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                >
                    <p className='flex items-center text-sm text-[#525596] gap-4 mb-2'>
                        <span className='h-px w-10 bg-[#525596]'/>
                        <span>TESTIMONIAL</span>
                    </p>
                    <h3 className=' font-nunito-sans text-3xl text-blue mb-4'>What they say?</h3>
                    <div className='flex flex-col gap-4'>
                        <p>TOTC has got more than 100k positive ratings from our users around the world.</p>
                        <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                        <p>Are you too? Please give your assessment</p>
                        <div className='flex items-center rounded-full border border-primary pl-4 w-fit gap-3'>Write your assessment 
                        <button className='h-10 w-10 rouned-full border border-primary rounded-full'>
                            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#49BBBD"/>
                            </svg>
                        </button>
                        </div>
                    </div>
                </motion.article>
                <div className='relative w-full md:flex-1 shrink-0'>
                    <motion.div 
                        className='relative md:w-2/3 lg:w-1/2 aspect-[1/1.25] mx-auto'
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src={smilingWoman}
                            fill
                            alt='Smiling woman'
                            className='object-cover'
                        />
                        <button className='bg-white h-10 w-10 rounded-full grid place-content-center shadow-md absolute top-1/2 -translate-y-1/2 right-0 lg:-right-10'>
                            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L14 12L2 22" stroke="#1EA4CE" stroke-width="4"/>
                            </svg>
                        </button>
                    </motion.div>
                    <motion.div 
                        className='absolute bottom-0 right-0 text-sm rounded-2xl w-11/12 lg:w-2/3 border-l-8 border-[#F67766] p-4 lg:p-6 bg-white shadow-[2px_4px_60px_0px_rgba(41,44,124,0.10)]'
                        initial={{opacity: 0, skewX: 100}}
                        whileInView={{opacity: 1, skewX: 0}}
                        transition={{duration: 0.5, delay: 0.5}}
                    >
                        <p 
                            className='lg:leading-[180%] pl-4 text-sm md:text-base border-l border-[#BDBDD1] font-nunito-sans mb-4'
                        >
                            &quot;Thank you so much for your help. It&apos;s exactly what I&apos;ve been looking for. You won&apos;t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.&quot;
                        </p>
                        <div className='flex items-center justify-between pl-4'>
                            <span>Gloria Rose</span>
                            <div className='flex flex-col lg:gap-2'>
                                <div className='text-xs lg:text-sm gap-1 text-yellow-400 flex'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                                <span>12 reviews at yelp</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial