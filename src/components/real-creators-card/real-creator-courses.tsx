import Image from 'next/image'
import React from 'react'

interface Props {
    image: string,
    name: string
}

function RealCreatorCourses({image, name}: Props) {
    return (
        <li>
            <div>
                <div className=' h-52 w-52 overflow-hidden mx-auto relative'>
                    <Image
                        src={image}
                        fill
                        alt='Creator image'
                        className='object-cover object-top'
                    />
                </div>
                <article className='bg-white text-center pb-8 px-4 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.25)] pt-28 -mt-28'>
                    <h4 className='text-blue font-semibold my-2'>{name}</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                </article>
            </div>
        </li>
    )
}

export default RealCreatorCourses