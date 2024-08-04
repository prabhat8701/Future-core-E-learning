import React from 'react'

function Rating({number}:{number: number}) {
    return (
        <li className='flex gap-2 lg:gap-4 items-center py-0.5'>
            <span className='w-1/5 lg:w-2/12 text-sm'>{number} stars</span>
            <div className='bg-[#D9D9D9] h-1.5 rounded-full overflow-hidden flex-1'>
                <div className='h-full w-3/4 bg-primary' />
            </div>
        </li>
    )
}

export default Rating