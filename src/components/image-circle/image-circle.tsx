import Image from 'next/image'
import React from 'react'

function ImageCircle({path}:{path: string}) {
    return (
        <div className="relative h-10 w-10 rounded-full mx-auto overflow-hidden">
            <Image
                src={path}
                fill
                alt='Creator Image'
                className='object-cover object-top'
            />
        </div>
    )
}

export default ImageCircle