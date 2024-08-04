import { Time } from '@/components/icon/icons'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Review() {
    return (
        <article className='py-4 border-b border-b-[#696984]/50 last:border-b-0'>
            <div className='flex justify-between items-end mb-4'>
                <div className='flex gap-3'>
                    <div className="rounded-full h-10 w-10 overflow-hidden">
                        <Image
                            src="/portrait.jpg"
                            height={40}
                            width={40}
                            alt='Image'
                        />
                    </div>
                    <div>
                        <span className='text-black text-sm font-semibold'>Johnson   </span>
                        <div className='flex justify-center text-sm gap-1 text-[#FDB022]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
                <span className='text-sm flex items-center gap-1'><Time/> 3 months</span>
            </div>
            <p className='text-sm leading-[180%] tracking-[0.4px]'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
        </article>
    )
}

export default Review