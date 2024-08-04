import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
   
function MarketingArticles({
    bannerImage, tag, duration, title, text, creator, price
}:{
    bannerImage:string, tag:string, duration:string, title:string, text:string, creator:{image:string, name:string}, price: {initialPrice: number, currentPrice: number}
}){
    return (
        <Link href="/courses/this-is-a-dummy-course" className='block w-full sm:w-1/2 lg:w-1/4 p-4 py-0: lg:px-2'>
            <div className='rounded-md bg-white h-full shadow-[0px_10px_30px_0px_rgba(47,50,125,0.10)] gap-3 flex flex-col p-4'>
                <div className='relative aspect-[1.4/1]'>
                    <Image
                        src={bannerImage}
                        fill
                        alt='Article image'
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='text-xs flex items-center justify-between'>
                    <p className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
                            <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                            <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                            <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                            <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                        </svg>
                        <span>{tag}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z" fill="#D9D9D9"/>
                        </svg>
                        <span>{duration}</span>
                    </p>
                </div>
                <h4 className='text-blue text-xl font-medium'>{title}</h4>
                <p className='text-sm leading-[180%]'>{text}</p>
                <div className='flex gap-2 items-center mt-auto text-sm'>
                    <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
                        <Image 
                            src={creator.image}
                            height={30}
                            width={30}
                            alt='Creator image'
                            className='object-cover object-top'
                        />
                    </div>
                    <span className='font-medium text-black'>{creator.name}</span>
                    <span className='ml-auto line-through italic'>${price.initialPrice}</span>
                    <span className='text-primary font-bold'>${price.currentPrice}</span>
                </div>
            </div>
        </Link>
    )
}

export default MarketingArticles