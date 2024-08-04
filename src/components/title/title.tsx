'use client'

import React from 'react'
import {motion} from 'framer-motion'

function Title({blueText, turqoiseText, note}:{blueText:string, turqoiseText:string, note:string}) {
    return (
        <>
            <h3 className='text-3xl font-bold text-blue mb-4 text-center'>{blueText} <span className='text-turqoise'>{turqoiseText}</span></h3>
            <motion.p 
                className="max-w-3xl mx-auto text-center"
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5 }}
            >
                {note}
            </motion.p>
        </>
    )
}

export default Title