'use client'

import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

import illustration from '../../../../public/illustration.png'
import testIllustration from '../../../../public/test-illustration.png'
import classIllustration from '../../../../public/class-Illustration.png'
import discussionIllustration from '../../../../public/discussion-illustration.png'

function FeatureTtems() {
    return (
        <>
            <section className='overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-32 pb-20'>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className='flex-1 md:pr-10'
                >
                    <h5 className='title'><span className='text-turqoise'>Tools</span> For Teachers And Learners</h5>
                    <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className='aspect-[1.11/1] relative w-full md:flex-1 shrink-0'
                >
                    <Image
                    src={illustration}
                    fill
                    alt='Illustration Image'
                    />
                </motion.div>
            </section>

            <motion.section 
                className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10 lg:gap-32 pb-20'
                initial={{opacity: 0, y: 200}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div className='aspect-[1/1.08] relative w-full md:flex-1 shrink-0'>
                    <Image
                    src={testIllustration}
                    fill
                    alt='Illustration Image'
                    />
                </div>
                <div className='flex-1'>
                    <h5 className='title'>Assessment, <span className='text-turqoise'>Quizzes,</span><br/> Test</h5>
                    <p>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
                </div>
            </motion.section>

            <section className='flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-20 pb-20 overflow-hidden'>
                <motion.div 
                    className='flex-1'
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                >
                    <h5 className='title'>Class Management <span className='text-turqoise'>Tools for Educators</span></h5>
                    <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                </motion.div>
                <motion.div 
                    className='aspect-[1.41/1] relative w-full md:flex-1 shrink-0'
                    initial={{opacity: 0, scaleX: 0}}
                    whileInView={{opacity: 1, scaleX: 1}}
                    transition={{duration: 0.5}}
                >
                    <Image
                    src={classIllustration}
                    fill
                    alt='Illustration Image'
                    />
                </motion.div>
            </section>

            <motion.section 
                className='flex flex-col-reverse md:flex-row items-center gap-5 md:pb-20'
                initial={{opacity: 0, y: 200}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div className='aspect-[1.35/1] relative w-full md:flex-1 shrink-0'>
                    <Image
                    src={discussionIllustration}
                    fill
                    alt='Illustration Image'
                    />
                </div>
                <div className='flex-1 md:pl-12'>
                    <h5 className='title'>One-on-one<span className='text-turqoise block'>Discussions</span></h5>
                    <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </motion.section>

            <div className='pb-20'>
                <motion.button 
                    whileTap={{scale: 0.5}}
                    transition={{duration: 0.3}}
                    className='button border border-primary text-primary font-normal block mx-auto hover:bg-primary hover:text-white'

                >
                    See more features
                </motion.button>
                    
            </div>
        </>
    )
}

export default FeatureTtems