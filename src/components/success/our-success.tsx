'use client'

import React, {useState} from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'


function Oursuccess() {
    return (
        <article className='py-20'>
            <div className="container mx-auto text-center text-[#010514CC]/80">
                <h3 className='text-4xl font-bold mb-4'>Our Success</h3>
                <motion.p 
                    className=' max-w-3xl mx-auto'
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5 }}
                >
                        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. 
                </motion.p>

                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-5 pt-16'
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5 }}
                >
                    <Counts
                        count={15}
                        prefix='K+'
                        note='Student'
                    />
                    <Counts
                        count={75}
                        prefix='%'
                        note='Total Success'
                    />
                    <Counts
                        count={35}
                        prefix=''
                        note='Main questions'
                    />
                    <Counts
                        count={26}
                        prefix=''
                        note='Chief Experts'
                    />
                    <Counts
                        count={16}
                        prefix=''
                        note='Years of Experience'
                    />
                </motion.div>
            </div>
        </article>
    )
}

function Counts({count, prefix, note}:{count: number, prefix: string, note:string}){
    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    return(
        <div className='text-center'>
            <h4 className='text-5xl text-gradient' ref={ref}>
                {inView ? <CountUp end={count} /> : 0}{prefix}
            </h4>
            <p className='text-lg'>{note}</p>
        </div>
    )
}

export default Oursuccess