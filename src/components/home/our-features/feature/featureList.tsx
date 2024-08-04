'use client'
import React from 'react'
import {motion} from 'framer-motion'

function FeatureList({children, text}:{children: React.ReactNode, text: string}) {
    return (
        <motion.li 
            className='flex items-center gap-4 lg:gap-8'
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 bg-white drop-shadow-lg grid place-content-center">
                {children}
            </div>
            <p className=''>{text}</p>
        </motion.li>
    )
}

export default FeatureList