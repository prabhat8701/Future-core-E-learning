import EducationalOffer from '@/components/courses/educational-offer/educational-offer'
import Title from '@/components/courses/title/title'
import FormInput from '@/components/form-input/form-input'
import TopEducationOffer from '@/components/top-education-offer/top-education-offer'
import Wrapper from '@/components/wrapper/wrapper'
import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <main>
            <section className='container mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 py-10 px-4 items-start'>
                <div className='w-full lg:w-3/5 lg:pr-16'>
                    <div className=" rounded-2xl bg-white shadow-boxed px-4 py-8 sm:p-8">
                        <h1 className='text-blue font-semibold text-2xl'>Checkout</h1>
                        <h4 className='text-[#5B5B5B] font-semibold text-sm'>Card Type</h4>
                        <div className='grid grid-cols-4 gap-4 pb-10 pt-5'>
                            <div className='payment-card-wrapper'>
                                <img src="/payment-cards/Paypal.png" alt="" />
                            </div>
                            <div className='payment-card-wrapper'>
                                <img src="/payment-cards/america-visa.jpg" alt="" />
                            </div>
                            <div className='payment-card-wrapper'>
                                <img src="/payment-cards/visa.png" alt="" />
                            </div>
                            <div className='payment-card-wrapper'>
                                <img src="/payment-cards/master-card.png" alt="" />
                            </div>
                        </div>

                        <form action="">
                            <FormInput
                                label='Name on Card'
                                type='text'
                                id='name-on-card'
                                placeholder='Enter Name on Card'
                            />
                            <FormInput
                                label='Card Number'
                                type='number'
                                id='card-number'
                                placeholder='Enter Card Number'
                            />
                            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-10'>
                                <FormInput
                                    label='Expiration Date (MM/YY)'
                                    type='month'
                                    id='expiry-date'
                                    placeholder='Enter Expiry Date'
                                />
                                <FormInput
                                    label='CVV'
                                    type='number'
                                    id='cvv'
                                    placeholder='Enter CVV'
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <input
                                    type='checkbox'
                                    id='save-card'
                                />
                                <label htmlFor="save-card" className='text-sm sm:text-base'>Save my information for faster checkout</label>
                            </div>
                            <button className='bg-primary rounded-md py-2.5 w-full mt-8 text-white'>Confirm Payment</button>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 rounded-2xl text-secondary-color px-4 py-8 sm:p-8 bg-wrapper-background">
                    <h2 className='mb-3 text-blue'>SUMMARY</h2>

                    <ul className=''>
                        <li className='flex gap-4 py-4 checkout-spacing flex-col min-[320px]:flex-row'>
                            <div className="rounded-xl relative h-20 aspect-[1.6/1] overflow-hidden">
                                <Image
                                    src="/course-image.jpg"
                                    fill
                                    alt='Course banner'
                                    className='object-cover'
                                />
                            </div>
                            <div className='leading-[180%] flex flex-col justify-between'>
                                <h5 className='text-black text-sm'>adipising elit, sed do eiusmod tempor</h5>
                                <p className='text-sm'>Lorem ipsum dollar...</p>
                                <p className='text-black tracking-[0.48px] text-lg'>$24.69</p>
                            </div>
                        </li>
                        <li className='flex gap-4 checkout-spacing flex-col min-[320px]:flex-row'>
                            <div className="rounded-xl relative h-20 aspect-[1.6/1] overflow-hidden">
                                <Image
                                    src="/course-image.jpg"
                                    fill
                                    alt='Course banner'
                                    className='object-cover'
                                />
                            </div>
                            <div className='leading-[180%] flex flex-col justify-between'>
                                <h5 className='text-black text-sm'>adipising elit, sed do eiusmod tempor</h5>
                                <p className='text-secondary-color text-sm'>Lorem ipsum dollar...</p>
                                <p className='text-black tracking-[0.48px] text-lg'>$24.69</p>
                            </div>
                        </li>
                    </ul>
                    <p className='checkout-spacing flex justify-between font-semibold'>
                        <span>Subtotal</span>
                        <span>$51.38</span>
                    </p>
                    <p className='checkout-spacing flex justify-between font-semibold'>
                        <span>Coupon Discount</span>
                        <span>0%</span>
                    </p>
                    <p className='checkout-spacing flex justify-between font-semibold'>
                        <span>Tax</span>
                        <span>$5</span>
                    </p>
                    <p className='text-black border-b-0 checkout-spacing flex justify-between font-semibold'>
                        <span>Total</span>
                        <span>$56.38</span>
                    </p>
                </div>
            </section>

            <TopEducationOffer />
        </main>
    )
}

export default Page