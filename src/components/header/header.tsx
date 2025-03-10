import React from 'react'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'


function Header({textColor, linkColor}:{textColor:string, linkColor:string}) {
    return (
        <header className={`p-4 `}>
            <div className="container mx-auto flex justify-between items-center">
                <div className='relative w-[57px] h-[41px]'>
                <svg width="57" height="41" viewBox="0 0 114 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.9645 4.94975C39.9171 2.99713 43.0829 2.99713 45.0355 4.94975L78.0502 37.9645C80.0029 39.9171 80.0029 43.0829 78.0503 45.0355L45.0355 78.0502C43.0829 80.0029 39.9171 80.0029 37.9645 78.0503L4.94975 45.0355C2.99713 43.0829 2.99713 39.9171 4.94975 37.9645L37.9645 4.94975Z" stroke="#00FFF0" stroke-width="2"/>
                    <path d="M40.144 29.536V33.92H34.192V52H28.72V33.92H22.768V29.536H40.144ZM54.7943 52.224C52.6823 52.224 50.7409 51.7333 48.9703 50.752C47.2209 49.7707 45.8236 48.4053 44.7783 46.656C43.7543 44.8853 43.2423 42.9013 43.2423 40.704C43.2423 38.5067 43.7543 36.5333 44.7783 34.784C45.8236 33.0347 47.2209 31.6693 48.9703 30.688C50.7409 29.7067 52.6823 29.216 54.7943 29.216C56.9063 29.216 58.8369 29.7067 60.5863 30.688C62.3569 31.6693 63.7436 33.0347 64.7463 34.784C65.7703 36.5333 66.2823 38.5067 66.2823 40.704C66.2823 42.9013 65.7703 44.8853 64.7463 46.656C63.7223 48.4053 62.3356 49.7707 60.5863 50.752C58.8369 51.7333 56.9063 52.224 54.7943 52.224ZM54.7943 47.232C56.5863 47.232 58.0156 46.6347 59.0823 45.44C60.1703 44.2453 60.7143 42.6667 60.7143 40.704C60.7143 38.72 60.1703 37.1413 59.0823 35.968C58.0156 34.7733 56.5863 34.176 54.7943 34.176C52.9809 34.176 51.5303 34.7627 50.4423 35.936C49.3756 37.1093 48.8423 38.6987 48.8423 40.704C48.8423 42.688 49.3756 44.2773 50.4423 45.472C51.5303 46.6453 52.9809 47.232 54.7943 47.232ZM86.7665 29.536V33.92H80.8145V52H75.3425V33.92H69.3905V29.536H86.7665ZM89.8647 40.736C89.8647 38.5173 90.3447 36.544 91.3047 34.816C92.2647 33.0667 93.5981 31.712 95.3047 30.752C97.0327 29.7707 98.9847 29.28 101.161 29.28C103.827 29.28 106.11 29.984 108.009 31.392C109.907 32.8 111.177 34.72 111.817 37.152H105.801C105.353 36.2133 104.713 35.4987 103.881 35.008C103.07 34.5173 102.142 34.272 101.097 34.272C99.4114 34.272 98.0461 34.8587 97.0007 36.032C95.9554 37.2053 95.4327 38.7733 95.4327 40.736C95.4327 42.6987 95.9554 44.2667 97.0007 45.44C98.0461 46.6133 99.4114 47.2 101.097 47.2C102.142 47.2 103.07 46.9547 103.881 46.464C104.713 45.9733 105.353 45.2587 105.801 44.32H111.817C111.177 46.752 109.907 48.672 108.009 50.08C106.11 51.4667 103.827 52.16 101.161 52.16C98.9847 52.16 97.0327 51.68 95.3047 50.72C93.5981 49.7387 92.2647 48.384 91.3047 46.656C90.3447 44.928 89.8647 42.9547 89.8647 40.736Z" fill={textColor}/>
                    </svg>
                </div>
                <nav style={{color: textColor, marginLeft:'39%'}} className={`gap-6 lg:gap-10 margin-left39% text-[${textColor}]  hidden md:flex`}>
                    <Link href="/">Home</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="">Careers</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="">About Us</Link>
                </nav>
                <div className='hidden md:flex items-center gap-6'>
                    <Link style={{backgroundColor: textColor, color: linkColor}} className='button' href="/login">Login</Link>
                    <Link style={{color: textColor}} className='button bg-white/30' href="/register">Sign Up</Link>
                </div>
                <button style={{color: textColor}} className='text-xl p-2 hover:bg-white/20 md:hidden'>
                    <FaBars />
                </button>
            </div>
        </header>
    )
}

export default Header