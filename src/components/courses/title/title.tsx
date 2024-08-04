import Link from 'next/link'
import React from 'react'

function Title({text}:{text: string}) {
    return (
        <h4 className='mb-5 flex items-center justify-between'>
            <span className='text-xl text-dark-blue font-semibold'>{text}</span>
            <Link href="" className='text-primary font-bold text-sm'>See all</Link>
        </h4>
    )
}

export default Title