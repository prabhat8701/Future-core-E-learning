import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
<footer className='px-4 py-10 bg-blue text-[#B2B3CF]'>
<div className='mx-auto max-w-xl flex flex-col items-center gap-10'>
                <div className='flex items-center'>
                    <Image
                        src='/logo.svg'
                        height={83}
                        width={114}
                        alt='Logo'
                        className='mr-4 scale-75 md:scale-100'
                    />
                    <h4 className='text-white relative px-8 after:content-[""] after:absolute after:h-full after:w-px after:bg-white after:top-0 after:left-0'>Virtual Class <br/> for Zoom</h4>
                </div>

                <form>
                    <h5 className='text-lg text-center font-medium mb-1'>Subscribe to get our Newsletter</h5>
                    <div className='flex flex-col min-[300px]:flex-row gap-1 md:gap-4'>
                        <input type="email" placeholder='Your email' className='rounded-full px-4 py-1 border flex-1 border-[#83839A] bg-transparent focus:outline-none' />
                        <button className='button bg-primary text-white'>Subscribe</button>
                    </div>
                </form>

                <div className='text-sm text-center'>
                    <ul className='flex items-center justify-center mb-2'>
                        <li className='px-1.5 sm:px-4 border-r border-r-[#626381] last:border-none'>Careers</li>
                        <li className='px-1.5 sm:px-4 border-r border-r-[#626381] last:border-none'>Privacy Policy</li>
                        <li className='px-1.5 sm:px-4 border-r border-r-[#626381] last:border-none'>Terms & Condition</li>
                    </ul>
                    <p>© 2021 Class Technologies Inc. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer