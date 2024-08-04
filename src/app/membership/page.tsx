import Application from '@/components/application/application'
import CoachingNote from '@/components/coaching-note/coaching-note'
import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import PricingCard from '@/components/pricing-card/pricing-card'
import Testimonial from '@/components/testimonial/testimonial'
import React from 'react'

function Page() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF' />
            <main>
                <div className="container mx-auto px-4 pt-8 pb-16 md:py-16">
                    <h2 className='text-center text-2xl md:text-4xl font-bold text-primary'>Affordable pricing</h2>
                    <div className='mx-auto max-w-3xl grid md:grid-cols-3 pt-5 pb-10 md:py-10 gap-4'>
                        <PricingCard
                            type="Basic Plan"
                            price = "FREE"
                            duration = "FOREVER"
                            features={["Access to All Courses", "Limited Quizzes and Assignments", "Email Support"]} 
                            btnText="Try for free"
                            listBg="#C2C2C2"
                        />
                        <PricingCard
                            type="Pro"
                            price = "$24"
                            duration = "MONTH"
                            features={["Access to Premium Courses", "Unlimited Quizzes and Assignments", "Priority Email Support", "Downloadable Resources"]} 
                            btnText="Get Started"
                            listBg="#FDCB6E"
                        />
                        <PricingCard
                            type="Business Plan"
                            price = "$12"
                            duration = "MONTH"
                            features={["Access for Entire Team", "Customized Learning Paths", "Dedicated Customer Support", "Analytics and Progress Tracking"]} 
                            btnText="Get Started"
                            listBg="#55EFC4"
                        />
                    </div>

                    <CoachingNote/>

                    <div>
                        <h4 className="text-2xl font-semibold text-[#2D3436] text-center mb-4">FAQ</h4>
                        <Faq/>
                    </div>
                </div>
            </main>
            <section className='bg-[#9DCCFF] py-10'>
                <div className="container mx-auto px-4">
                    <h4 className='text-2xl text-dark font-semibold'>What our students have to say</h4>
                    <Testimonial />
                    <div className='bg-blue rounded-3xl py-10 -mb-24 px-8 flex items-center justify-between'>
                        <p className='text-white font-semibold text-lg'>APP is available for free</p>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <button className='app-download-btn bg-[#29B9E7]'>
                                <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.6094 14.4453C25.3711 14.4453 26.0156 13.8594 26.0156 13.0391C26.0156 12.2773 25.3711 11.6328 24.6094 11.6328C23.8477 11.6328 23.2031 12.2773 23.2031 13.0391C23.2031 13.8594 23.8477 14.4453 24.6094 14.4453ZM9.08203 14.4453C9.84375 14.4453 10.4883 13.8594 10.4883 13.0391C10.4883 12.2773 9.84375 11.6328 9.08203 11.6328C8.32031 11.6328 7.67578 12.2773 7.67578 13.0391C7.67578 13.8594 8.32031 14.4453 9.08203 14.4453ZM25.1367 6.00781C29.9414 8.64453 33.2227 13.5078 33.75 19.25H0C0.46875 13.5078 3.75 8.64453 8.55469 6.00781L5.74219 1.14453C5.68359 1.02734 5.68359 0.910156 5.68359 0.792969C5.68359 0.5 5.91797 0.207031 6.26953 0.207031C6.50391 0.207031 6.67969 0.382812 6.79688 0.558594L9.60938 5.48047C11.8359 4.48438 14.2969 3.95703 16.875 3.95703C19.4531 3.95703 21.8555 4.48438 24.082 5.48047L26.8945 0.558594C27.0117 0.382812 27.1875 0.207031 27.4219 0.207031C27.7734 0.207031 28.0078 0.5 28.0078 0.792969C28.0078 0.910156 28.0078 1.02734 27.9492 1.14453L25.1367 6.00781Z" fill="white"/>
                                </svg>
                                Android APP
                            </button>
                            <button className='app-download-btn bg-primary'>
                                <svg width="20" height="23" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5078 8.30859C20.5703 8.19141 19.2812 8.30859 17.6406 8.71875C16.2344 9.12891 15.0625 9.59766 14.0664 10.125C13.1289 9.59766 11.957 9.12891 10.5508 8.71875C8.91016 8.30859 7.62109 8.19141 6.68359 8.30859C5.16016 8.60156 3.87109 9.42188 2.93359 10.7695C2.05469 12 1.46875 13.5234 1.17578 15.3398C0.882812 17.0391 0.882812 18.7383 1.23438 20.3789C1.70312 23.1914 2.64062 25.4766 4.04688 27.3516C5.6875 29.6367 7.79688 30.75 10.375 30.75C10.9609 30.75 11.6641 30.5742 12.4258 30.1641C12.8945 29.8711 13.4805 29.6953 14.0664 29.6953C14.7109 29.6953 15.2969 29.8711 15.7656 30.1641C16.5273 30.5742 17.2305 30.75 17.8164 30.75C20.3945 30.75 22.5039 29.6367 24.1445 27.3516C25.5508 25.4766 26.4883 23.1914 26.957 20.3789C27.3086 18.7383 27.3086 17.0391 27.0156 15.3398C26.7227 13.5234 26.1367 12 25.2578 10.7695C24.3203 9.42188 23.0312 8.60156 21.5078 8.30859ZM18.2852 5.90625C18.8125 5.37891 19.1641 4.67578 19.3984 3.73828C19.6328 3.15234 19.6914 2.44922 19.6914 1.6875L19.6328 0.808594L18.7539 0.75C18.0508 0.75 17.3477 0.867188 16.7031 1.04297C15.8242 1.27734 15.1211 1.6875 14.5352 2.15625C13.832 2.91797 13.3633 3.97266 13.2461 5.37891C13.1289 6.08203 13.1289 6.72656 13.2461 7.25391L14.0664 7.3125C14.8281 7.3125 15.5312 7.25391 16.1172 7.01953C17.0547 6.78516 17.7578 6.43359 18.2852 5.90625Z" fill="white"/>
                                </svg>
                                IOS APP
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 pt-32">
                <div className="container mx-auto">
                    <article className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16'>
                        <Application
                            img='/news1.png'
                            applicationType='Teacher'
                            note='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
                        />
                        <Application
                            img='/news2.png'
                            applicationType='Coursector'
                            note='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
                        />
                    </article>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Page