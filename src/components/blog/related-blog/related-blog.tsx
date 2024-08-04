import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RelatedBlog({
            bannerImage,title,profileImage,name,note,views
        }:{
            bannerImage: string,title: string,profileImage:string, name:string, note:string,views:string
    }){
    return (
        <div className='rounded-2xl overflow-hidden bg-white bg-[0px_18.829999923706055px_47.08000183105469px_0px_rgba(47,50,125,0.10)] px-4 lg:px-6 pt-4 lg:pt-8 pb-6 lg:pb-12'  >
            <div className='rounded-2xl overflow-hidden relative aspect-[1.88/1]'>
                <Image
                    src={bannerImage}
                    fill
                    alt='Banner Image'
                    className='object-cover'
                />
            </div>
            <h4 className='text-blue md:text-lg font-medium leading-[180%] mt-4'>{title}</h4>
            <div className='flex items-center gap-2 my-6'>
                <Image
                    src={profileImage}
                    height={40}
                    width={40}
                    alt='Profile Image'
                    className='rounded-full'
                />
                <span>{name}</span>
            </div>
            <p className='text-sm md:text-base'>{note}</p>
            <div className='flex items-center text-sm gap-4 mt-8'>
                <Link href="" className='underline mr-auto'>Read more</Link>
                <svg width="18" height="12" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3008 7.69562C21.1914 3.55499 16.9727 0.742493 12.207 0.742493C7.40234 0.742493 3.18359 3.55499 1.07422 7.69562C0.996094 7.85187 0.957031 8.04718 0.957031 8.24249C0.957031 8.47687 0.996094 8.67218 1.07422 8.82843C3.18359 12.9691 7.40234 15.7425 12.207 15.7425C16.9727 15.7425 21.1914 12.9691 23.3008 8.82843C23.3789 8.67218 23.418 8.47687 23.418 8.28156C23.418 8.04718 23.3789 7.85187 23.3008 7.69562ZM12.207 13.8675C9.08203 13.8675 6.58203 11.3675 6.58203 8.24249C6.58203 5.15656 9.08203 2.61749 12.207 2.61749C15.293 2.61749 17.832 5.15656 17.832 8.24249V8.28156C17.832 11.3675 15.293 13.9066 12.207 13.9066V13.8675ZM12.207 4.49249C11.8555 4.53156 11.5039 4.57062 11.1914 4.64874C11.4258 4.96124 11.543 5.35187 11.543 5.78156C11.543 6.79718 10.7227 7.61749 9.70703 7.61749C9.27734 7.61749 8.88672 7.50031 8.57422 7.26593C8.49609 7.57843 8.45703 7.92999 8.45703 8.24249C8.45703 10.3128 10.1367 11.9925 12.207 11.9925C14.2773 11.9925 15.957 10.3128 15.957 8.24249C15.957 6.17218 14.2773 4.53156 12.207 4.53156V4.49249Z" fill="#49BBBD"/>
                </svg>
                <span>{views}</span>
            </div>
        </div>  
    )
}

export default RelatedBlog