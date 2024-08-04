import Image from 'next/image'
import React from 'react'

function Application({img, applicationType, note}:{img:string, applicationType:string, note:string}) {
    return (
        <div className='p-6 pt-8 rounded-2xl bg-white shadow-[0px_18px_47px_0px_rgba(47,50,125,0.10)]'>
            <div className='w-full aspect-[1.88/1] relative'>
                <Image
                    src={img}
                    fill
                    alt="Image"
                    className='object-cover rounded-xl'
                />
            </div>
            <h5 className='font-medium text-[#252641] mt-1 mb-2'>Become a {applicationType}</h5>
                <p className='text-sm'>{note}</p>
                <button className='bg-primary text-white text-sm rounded-lg py-2 mt-6 px-4 ml-auto border border-primary block hover:bg-transparent hover:text-primary transition-all'>Apply as a {applicationType}</button>
        </div>
    )
}

export default Application