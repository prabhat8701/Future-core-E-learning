import Image from 'next/image'
import React from 'react'

function EducationalOffer({img}:{img:string}) {
    return (
        <div className='rounded-xl overflow-hidden relative p-8 md:p-4 lg:p-8 text-white gap-6 flex flex-col justify-between'>
            <Image
                src={img}
                fill
                alt='Img'
                className='-z-20 object-cover'
            />
            <div className='bg-[#171B41]/50 h-full w-full absolute top-0 left-0 -z-10' />
            <button className="h-12 w-12 text-sm font-bold rounded bg-[#FF0000]/60 p-2 grid place-content-center">60%</button>
            <h5 className='font-semibold text-lg'>For Instructor</h5>
            <p>TOTC’s school management software helps traditional and online schools manage scheduling,</p>
        </div>
    )
}

export default EducationalOffer