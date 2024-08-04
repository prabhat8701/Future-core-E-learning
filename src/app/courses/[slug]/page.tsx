import Marketing from '@/components/blog/marketing-articles/marketing'
import EducationalOffer from '@/components/courses/educational-offer/educational-offer'
import Rating from '@/components/courses/rating/rating'
import Review from '@/components/courses/rating/review'
import Title from '@/components/courses/title/title'
import EverythingNote from '@/components/everything-note/everything-note'
import Wrapper from '@/components/wrapper/wrapper'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Page({params}:{params: Params}) {
    console.log(params)
    const slug = params.slug
    return (
        <main>
            <div className='h-[200px] sm:h-[300px] md:h-[450px] w-full relative'>
                <Image
                    src="/course-banner.jpg"
                    fill
                    alt='Course Banner Image'
                    className='object-cover'
                />
            </div>
            <section>
                <div className="container mx-auto h-full pb-10 md:pb-0 px-4 md:px-0">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16 h-full place-content-end">
                        <div className='md:col-span-2 py-10'>   
                            <div className='flex justify-around'>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button bg-primary text-white'>Overview</button>
                            </div>
                            <div className='bg-wrapper-background mt-8 sm:mt-12 p-4 lg:p-8 rounded-2xl'>
                                <div className='flex gap-5 lg:gap-10'>
                                    <div className='bg-white rounded-3xl w-48 text-center hidden sm:flex flex-col justify-between p-4 gap-2'>
                                        <h4 className='text-black/50 font-bold text-2xl'>4 out of 5</h4>
                                        <div className='flex justify-center gap-2 text-[#FDB022]'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div>
                                            Top rating
                                        </div>
                                    </div>
                                    <ul className='flex-1 flex flex-col gap-2'>
                                        <Rating number={5} />
                                        <Rating number={4} />
                                        <Rating number={3} />
                                        <Rating number={2} />
                                        <Rating number={1} />
                                    </ul>
                                </div>
                                <div className='pt-8'>
                                    <Review />
                                    <Review />
                                </div>
                            </div>
                        </div>
                        <div className='md:-mt-48 lg:-mt-52'>
                            <div className='relative border-[1.25rem] border-white rounded-tl-md rounded-tr-md h-48 lg:h-52 overflow-hidden hidden md:block'>
                                <Image
                                    src="/course-banner.jpg"
                                    fill
                                    alt='Course Banner Image'
                                    className='object-cover hover:scale-125 transition-all'
                                />
                            </div>
                            <article className='sm:px-5'>
                                <div className='course-info-wrapper'>
                                    <h2 className='font-semibold items-center flex justify-center gap-3 sm:gap-0 sm:justify-between text-black py-5'>
                                        <span className='text-2xl sm:text-xl lg:text-2xl'>$49.65</span>
                                        <span className='opacity-50 text-lg lg:text-xl'>$99.99</span>
                                        <span className='opacity-50 text-lg lg:text-xl'>50% off</span>
                                    </h2>
                                    <span className="block text-center text-primary py-5">11 hour left at this price</span>
                                    <Link href={`${slug}/checkout`} className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold transition-all hover:scale-105 text-center block">Buy Now</Link>
                                </div> 
                                <div className='pt-5 pb-4 course-info-wrapper'>
                                    <h4 className="course-details-title">This Course Included</h4>
                                    <ul>
                                        <li className='course-details'>
                                            <div>
                                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.8906 10.5L20.6875 8.74219C21.2344 8.23438 20.9609 7.33594 20.2578 7.17969L17.8359 6.55469L18.5 4.13281C18.6953 3.42969 18.0703 2.76562 17.3672 2.96094L14.9453 3.66406L14.3203 1.20312C14.1641 0.539062 13.2266 0.265625 12.7188 0.8125L11 2.60938L9.24219 0.8125C8.73438 0.265625 7.79688 0.5 7.64062 1.20312L7.01562 3.66406L4.59375 2.96094C3.89062 2.76562 3.26562 3.42969 3.46094 4.13281L4.125 6.55469L1.70312 7.17969C1 7.33594 0.726562 8.23438 1.27344 8.74219L3.07031 10.5L1.27344 12.2578C0.726562 12.7656 1 13.6641 1.70312 13.8594L4.125 14.4844L3.46094 16.9062C3.26562 17.6094 3.89062 18.2344 4.59375 18.0391L7.01562 17.375L7.64062 19.7969C7.83594 20.5391 8.73438 20.7344 9.24219 20.2266L11 18.4297L12.7188 20.2266C13.2266 20.7734 14.125 20.5391 14.3203 19.7969L14.9453 17.375L17.3672 18.0391C18.0703 18.2344 18.6953 17.6094 18.5 16.9062L17.8359 14.4844L20.2578 13.8594C20.9609 13.6641 21.2344 12.7656 20.6875 12.2578L18.8906 10.5Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Money Back Guarantee
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 5.125C20 4.10938 19.1406 3.25 18.125 3.25H14.6875L14.1797 2C13.9062 1.25781 13.2031 0.75 12.4219 0.75H7.53906C6.75781 0.75 6.05469 1.25781 5.78125 2L5.3125 3.25H1.875C0.820312 3.25 0 4.10938 0 5.125V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V5.125ZM14.6875 10.75C14.6875 13.3672 12.5781 15.4375 10 15.4375C7.38281 15.4375 5.3125 13.3672 5.3125 10.75C5.3125 8.17188 7.38281 6.0625 10 6.0625C12.5781 6.0625 14.6875 8.17188 14.6875 10.75ZM13.4375 10.75C13.4375 8.875 11.875 7.3125 10 7.3125C8.08594 7.3125 6.5625 8.875 6.5625 10.75C6.5625 12.6641 8.08594 14.1875 10 14.1875C11.875 14.1875 13.4375 12.6641 13.4375 10.75Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Access on all devices
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.75 5.8125V0.5H0.9375C0.390625 0.5 0 0.929688 0 1.4375V19.5625C0 20.1094 0.390625 20.5 0.9375 20.5H14.0625C14.5703 20.5 15 20.1094 15 19.5625V6.75H9.6875C9.14062 6.75 8.75 6.35938 8.75 5.8125ZM11.25 15.0312C11.25 15.3047 11.0156 15.5 10.7812 15.5H4.21875C3.94531 15.5 3.75 15.3047 3.75 15.0312V14.7188C3.75 14.4844 3.94531 14.25 4.21875 14.25H10.7812C11.0156 14.25 11.25 14.4844 11.25 14.7188V15.0312ZM11.25 12.5312C11.25 12.8047 11.0156 13 10.7812 13H4.21875C3.94531 13 3.75 12.8047 3.75 12.5312V12.2188C3.75 11.9844 3.94531 11.75 4.21875 11.75H10.7812C11.0156 11.75 11.25 11.9844 11.25 12.2188V12.5312ZM11.25 9.71875V10.0312C11.25 10.3047 11.0156 10.5 10.7812 10.5H4.21875C3.94531 10.5 3.75 10.3047 3.75 10.0312V9.71875C3.75 9.48438 3.94531 9.25 4.21875 9.25H10.7812C11.0156 9.25 11.25 9.48438 11.25 9.71875ZM15 5.26562C15 5.03125 14.8828 4.79688 14.7266 4.60156L10.8984 0.773438C10.7031 0.617188 10.4688 0.5 10.2344 0.5H10V5.5H15V5.26562Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Certification of completion
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.9688 10H14.4922C14.7266 10 15 9.76562 15 9.53125V4.25781C15 4.02344 14.7266 3.75 14.4922 3.75H12.9688C12.7344 3.75 12.5 4.02344 12.5 4.25781V9.53125C12.5 9.76562 12.7344 10 12.9688 10ZM16.7188 10H18.2422C18.4766 10 18.75 9.76562 18.75 9.53125V0.507812C18.75 0.273438 18.4766 0 18.2422 0H16.7188C16.4844 0 16.25 0.273438 16.25 0.507812V9.53125C16.25 9.76562 16.4844 10 16.7188 10ZM5.46875 10H6.99219C7.22656 10 7.5 9.76562 7.5 9.53125V6.75781C7.5 6.52344 7.22656 6.25 6.99219 6.25H5.46875C5.23438 6.25 5 6.52344 5 6.75781V9.53125C5 9.76562 5.23438 10 5.46875 10ZM9.21875 10H10.7422C10.9766 10 11.25 9.76562 11.25 9.53125V1.75781C11.25 1.52344 10.9766 1.25 10.7422 1.25H9.21875C8.98438 1.25 8.75 1.52344 8.75 1.75781V9.53125C8.75 9.76562 8.98438 10 9.21875 10ZM19.375 12.5H2.5V0.625C2.5 0.3125 2.1875 0 1.875 0H0.625C0.273438 0 0 0.3125 0 0.625V13.75C0 14.4531 0.546875 15 1.25 15H19.375C19.6875 15 20 14.7266 20 14.375V13.125C20 12.8125 19.6875 12.5 19.375 12.5Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            32 Moduls
                                        </li>
                                    </ul>
                                </div>
                                <div className='pt-5 pb-4 course-info-wrapper'>
                                    <h4 className="course-details-title">This Course Included</h4>
                                    <p className='text-sm'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                </div>
                                <div className='pt-5 pb-4 course-info-wrapper'>
                                    <h4 className="course-details-title">Share this course</h4>
                                    <div className='flex items-center gap-2 py-2'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z" fill="#696984"/>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#696984"/>
                                            <path d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z" fill="white"/>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#FF0000"/>
                                            <path d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z" fill="white"/>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#696984"/>
                                            <path d="M15.9992 9.2C18.1992 9.2 18.4992 9.2 19.3992 9.2C20.1992 9.2 20.5992 9.4 20.8992 9.5C21.2992 9.7 21.5992 9.8 21.8992 10.1C22.1992 10.4 22.3992 10.7 22.4992 11.1C22.5992 11.4 22.6992 11.8 22.7992 12.6C22.7992 13.5 22.7992 13.7 22.7992 16C22.7992 18.3 22.7992 18.5 22.7992 19.4C22.7992 20.2 22.5992 20.6 22.4992 20.9C22.2992 21.3 22.1992 21.6 21.8992 21.9C21.5992 22.2 21.2992 22.4 20.8992 22.5C20.5992 22.6 20.1992 22.7 19.3992 22.8C18.4992 22.8 18.2992 22.8 15.9992 22.8C13.6992 22.8 13.4992 22.8 12.5992 22.8C11.7992 22.8 11.3992 22.6 11.0992 22.5C10.6992 22.3 10.3992 22.2 10.0992 21.9C9.79922 21.6 9.59922 21.3 9.49922 20.9C9.39922 20.6 9.29922 20.2 9.19922 19.4C9.19922 18.5 9.19922 18.3 9.19922 16C9.19922 13.7 9.19922 13.5 9.19922 12.6C9.19922 11.8 9.39922 11.4 9.49922 11.1C9.69922 10.7 9.79922 10.4 10.0992 10.1C10.3992 9.8 10.6992 9.6 11.0992 9.5C11.3992 9.4 11.7992 9.3 12.5992 9.2C13.4992 9.2 13.7992 9.2 15.9992 9.2ZM15.9992 7.7C13.6992 7.7 13.4992 7.7 12.5992 7.7C11.6992 7.7 11.0992 7.9 10.5992 8.1C10.0992 8.3 9.59922 8.6 9.09922 9.1C8.59922 9.6 8.39922 10 8.09922 10.6C7.89922 11.1 7.79922 11.7 7.69922 12.6C7.69922 13.5 7.69922 13.8 7.69922 16C7.69922 18.3 7.69922 18.5 7.69922 19.4C7.69922 20.3 7.89922 20.9 8.09922 21.4C8.29922 21.9 8.59922 22.4 9.09922 22.9C9.59922 23.4 9.99922 23.6 10.5992 23.9C11.0992 24.1 11.6992 24.2 12.5992 24.3C13.4992 24.3 13.7992 24.3 15.9992 24.3C18.1992 24.3 18.4992 24.3 19.3992 24.3C20.2992 24.3 20.8992 24.1 21.3992 23.9C21.8992 23.7 22.3992 23.4 22.8992 22.9C23.3992 22.4 23.5992 22 23.8992 21.4C24.0992 20.9 24.1992 20.3 24.2992 19.4C24.2992 18.5 24.2992 18.2 24.2992 16C24.2992 13.8 24.2992 13.5 24.2992 12.6C24.2992 11.7 24.0992 11.1 23.8992 10.6C23.6992 10.1 23.3992 9.6 22.8992 9.1C22.3992 8.6 21.9992 8.4 21.3992 8.1C20.8992 7.9 20.2992 7.8 19.3992 7.7C18.4992 7.7 18.2992 7.7 15.9992 7.7Z" fill="white"/>
                                            <path d="M15.9992 11.7C13.5992 11.7 11.6992 13.6 11.6992 16C11.6992 18.4 13.5992 20.3 15.9992 20.3C18.3992 20.3 20.2992 18.4 20.2992 16C20.2992 13.6 18.3992 11.7 15.9992 11.7ZM15.9992 18.8C14.4992 18.8 13.1992 17.6 13.1992 16C13.1992 14.5 14.3992 13.2 15.9992 13.2C17.4992 13.2 18.7992 14.4 18.7992 16C18.7992 17.5 17.4992 18.8 15.9992 18.8Z" fill="white"/>
                                            <path d="M20.3992 12.6C20.9515 12.6 21.3992 12.1523 21.3992 11.6C21.3992 11.0477 20.9515 10.6 20.3992 10.6C19.8469 10.6 19.3992 11.0477 19.3992 11.6C19.3992 12.1523 19.8469 12.6 20.3992 12.6Z" fill="white"/>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#696984"/>
                                            <path d="M8.09992 15.7083C12.3949 13.8371 15.2589 12.6034 16.6919 12.0074C20.7834 10.3056 21.6335 10.01 22.1877 10.0001C22.3095 9.99805 22.582 10.0283 22.7586 10.1715C22.9076 10.2924 22.9486 10.4558 22.9683 10.5705C22.9879 10.6851 23.0123 10.9464 22.9929 11.1505C22.7712 13.4801 21.8118 19.1335 21.3237 21.7427C21.1172 22.8468 20.7105 23.217 20.3168 23.2532C19.4613 23.3319 18.8116 22.6878 17.9829 22.1446C16.6862 21.2946 15.9537 20.7654 14.695 19.936C13.2404 18.9774 14.1834 18.4506 15.0124 17.5896C15.2293 17.3643 18.999 13.9355 19.0719 13.6244C19.0811 13.5855 19.0895 13.4405 19.0034 13.3639C18.9172 13.2874 18.7901 13.3136 18.6983 13.3344C18.5683 13.3639 16.4968 14.7331 12.4839 17.4419C11.8959 17.8457 11.3633 18.0424 10.8862 18.0321C10.3601 18.0207 9.34822 17.7346 8.59598 17.4901C7.67333 17.1902 6.94002 17.0316 7.00388 16.5223C7.03714 16.257 7.40248 15.9856 8.09992 15.7083Z" fill="white"/>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#696984"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 10.3C20.1 8.8 18.1 8 16 8C11.6 8 8 11.6 8 16C8 17.4 8.40001 18.8 9.10001 20L8 24L12.2 22.9C13.4 23.5 14.7 23.9 16 23.9C20.4 23.9 24 20.3 24 15.9C24 13.8 23.1 11.8 21.6 10.3ZM16 22.6C14.8 22.6 13.6 22.3 12.6 21.7L12.4 21.6L9.89999 22.3L10.6 19.9L10.4 19.6C9.69999 18.5 9.39999 17.3 9.39999 16.1C9.39999 12.5 12.4 9.5 16 9.5C17.8 9.5 19.4 10.2 20.7 11.4C22 12.7 22.6 14.3 22.6 16.1C22.6 19.6 19.7 22.6 16 22.6ZM19.6 17.6C19.4 17.5 18.4 17 18.2 17C18 16.9 17.9 16.9 17.8 17.1C17.7 17.3 17.3 17.7 17.2 17.9C17.1 18 17 18 16.8 18C16.6 17.9 16 17.7 15.2 17C14.6 16.5 14.2 15.8 14.1 15.6C14 15.4 14.1 15.3 14.2 15.2C14.3 15.1 14.4 15 14.5 14.9C14.6 14.8 14.6 14.7 14.7 14.6C14.8 14.5 14.7 14.4 14.7 14.3C14.7 14.2 14.3 13.2 14.1 12.8C14 12.5 13.8 12.5 13.7 12.5C13.6 12.5 13.5 12.5 13.3 12.5C13.2 12.5 13 12.5 12.8 12.7C12.6 12.9 12.1 13.4 12.1 14.4C12.1 15.4 12.8 16.3 12.9 16.5C13 16.6 14.3 18.7 16.3 19.5C18 20.2 18.3 20 18.7 20C19.1 20 19.9 19.5 20 19.1C20.2 18.6 20.2 18.2 20.1 18.2C20 17.7 19.8 17.7 19.6 17.6Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                <div className="max-w-6xl mx-auto">
                    <Title text='Marketing Articles' />
                    <Marketing />
                </div>
            </Wrapper>

            <div className='pb-0'>
                <Wrapper backgroundColor='transparent'>
                    <div className="max-w-6xl mx-auto mt-5 md:mt-10">
                        <div className='px-4 pb-8'>
                            <EverythingNote />
                        </div>
                        <Title text='Top Educational Offers are listed here' />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 lg:gap-12">
                            <EducationalOffer img="/instructor-image.png" />
                            <EducationalOffer img="/instructor-image.png" />
                            <EducationalOffer img="/instructor-image.png" />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </main>
    )
}

export default Page