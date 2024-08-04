import React from 'react'

function PricingCard({
    type, price, duration, features, btnText, listBg
}:{
    type:string, price:string, duration:string, features: string[], btnText:string, listBg:string
}) {
    return (
        <div className='group py-4 px-4 flex flex-col hover:shadow-[0px_16px_24px_0px_rgba(38,50,56,0.08),0px_8px_8px_0px_rgba(38,50,56,0.12)]'>
            <div className='flex items-center justify-between text-xs text-[#2D3436] h-6'>
                <span className='text-primary font-medium'>{type}</span>
                {type === "Pro" && <span className=' block rounded-full py-0.5   px-4 border border-[#6C5CE7]'>BEST!</span>}
            </div>
            <h3 className='font-bold text-4xl py-2'>{price} <span className='uppercase text-sm'>/{duration}</span></h3>
            <ul className='mb-8'>
                {features.map((item, index) => {
                    return (
                        <li key={index} className='flex items-center gap-2 py-2 text-xs'>
                            <div className='h-4 w-4 rounded-full grid place-content-center shrink-0 ' style={{backgroundColor: listBg}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.4815 8.64001L10.3215 14.8L7.52148 12" stroke="#2D3436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <button className='w-full py-2 mt-auto px-4 border border-[#ADADAD] text-primary font-bold rounded-2xl group-hover:bg-primary group-hover:text-white'>{btnText}</button>
        </div>
    )
}

export default PricingCard