'use client'

import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link';

function LoginTab() {
    const pathName = usePathname();

    return (
        <div className='rounded-full p-4 bg-primary/60 text-white w-fit'>
            <Link className={`button ${pathName === "/login" && "bg-primary"}`} href="/login">Login</Link>
            <Link className={`button ${pathName === "/register" && "bg-primary"}`} href="/register">Register</Link>
        </div>
    )
}

export default LoginTab