import Image from 'next/image'
import React from 'react'
import login1 from '../../../public/login_1.jpg'
import login2 from '../../../public/login_2.jpg'
import LoginTab from '@/components/login-tab/login-tab'
function Layout({children}:{children: React.ReactNode}) {
    return (
        <main className='px-4 sm:p-8 flex gap-10 h-screen'>
            <div className='relative rounded-3xl overflow-hidden flex-1 h-full hidden md:block'>
                <Image
                    src={login1}
                    fill
                    alt='Login Image'
                    placeholder='blur'
                    className='object-cover'
                />
                <div className='text-white absolute left-10 bottom-10   '>
                    <h4 className='font-bold text-2xl'>Lorem Ipsum is simply </h4>
                    <p>Lorem Ipsum is simply </p>
                </div>
            </div>
            <div className='w-full max-w-[400px] md:max-w-[unset] mx-auto md:mx-0 md:w-2/5 lg:w-[500px] flex flex-col items-center lg:px-8 justify-center shrink-0'>
                <h5 className='text-sm mb-8'>Welcome to TOTC</h5>
                <LoginTab />
                {children}
            </div>
        </main>
    )
}

export default Layout