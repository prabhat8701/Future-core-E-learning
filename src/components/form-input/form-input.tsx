import React from 'react'

interface Props{
    id: string;
    label: string;
    type: string;
    // value: string;
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder:string
}

function FormInput({id,label,type,placeholder}:Props) {
    return (
        <div className='mb-4'>
            <label htmlFor={id} className='font-semibold text-sm mb-2 text-[#5B5B5B] block'>{label}</label>
            <input 
                type={type}
                // value={value}
                // onChange={(e)=>handleChange(e)}
                id={id}
                className='border rounded-md border-[#D9D9D9] p-4 text-sm w-full'
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormInput