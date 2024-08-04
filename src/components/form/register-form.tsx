'use client'

import React, { useState } from 'react'
import { Input, Password } from './form-components/inputs'

interface form {email: string, username: string, password: string}

function RegisterForm() {
    const [formData, setFormData] = useState<form>({email: "", username: "", password: ""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

    }

    return (
        <form action="" className='flex flex-col gap-6 sm:gap-4'>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Input id='email' type='email' value={formData.email} handleChange={handleChange}/>
            <Input id='username' type='text' value={formData.username} handleChange={handleChange}/>
            <Password id='password' value={formData.password} handleChange={handleChange}/>
            <button className="button bg-primary text-white px-16 ml-auto block">Login</button>
        </form>
    )
}

export default RegisterForm