'use client'
import React from 'react'
import { FaAngleUp } from 'react-icons/fa6'


function ScrollBtn() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className='w-fit fixed bottom-10 right-5 z-50'>
            <button 
                onClick={handleClick} 
                className="bg-primary h-10 w-10 rounded grid place-content-center text-white"><FaAngleUp />
                </button>
        </div>
    )
}

export default ScrollBtn