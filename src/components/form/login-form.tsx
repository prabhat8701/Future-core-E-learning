'use client'

import React, { useState } from 'react'
import { Input, Password } from './form-components/inputs'

function LoginForm() {
    const [formData, setFormData] = useState<{email: string, password: string}>({email: "", password: ""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

    }

    return (
        <form action="" className='flex flex-col gap-6'>
            <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Input id='email' type='email' value={formData.email} handleChange={handleChange}/>
            <Password id='password' value={formData.password} handleChange={handleChange}/>
            <button className="button bg-primary text-white px-16 ml-auto block">Login</button>
        </form>
    )
}

export default LoginForm