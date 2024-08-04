import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import news1 from '../../../public/news1.png'
import RelatedBlog from '@/components/blog/related-blog/related-blog'
import MarketingArticles from '@/components/blog/marketing-articles/marketing-articles'
import RelatedBlogWrapper from '@/components/blog/related-blog/related-blog-wrapper'
import Marketing from '@/components/blog/marketing-articles/marketing'

async function Page() {
    return (
        <div>
            <main>
                <article className='bg-[#9DCCFF]'>
                    <div className="container mx-auto">
                        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 py-10">
                            <div className='flex flex-col gap-4 md:gap-0'>
                                <p className='text-black text-sm mb-2 lg:mb-4'>By Themadbrains in <span className='text-primary'>inspiration</span></p>
                                <h1 className='text-2xl lg:text-4xl font-semibold text-blue'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                                <p className='mt-auto text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <Link href="" className='text-sm py-2 px-4 mt-auto w-fit rounded-md bg-primary text-white'>Start learning now</Link>
                            </div>
                            <div className='relative aspect-[1.48/1]'>
                                <Image
                                    src={news1}
                                    fill
                                    alt='Banner image'
                                    className='object-cover rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                </article>

                <section>
                    <div className="container mx-auto py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <h4 className='text-xl font-bold text-black mb-4'>Reading blog list</h4>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12'>
                                {[{title: "UX/UI", image: '/news3.png'}, {title: "React", image: '/coding.jpg'}, {title:"PHP", image: '/writing.jpg'}, {title: "JavaScript", image: '/coding2.png'}].map((item, index) => {
                                    return (
                                        <div key={index} className='relative aspect-[1.1/1] rounded-xl overflow-hidden'>
                                            <Image
                                                src={item.image}
                                                fill
                                                alt={item.title}
                                            />
                                            <div className="absolute bottom-4 w-3/4 p-2 bg-white/70 text-center font-semibold rounded-md left-1/2 -translate-x-1/2 text-sm md:text-base ">{item.title}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedBlogWrapper>
                    <RelatedBlog
                        bannerImage='/instructor-image.png'
                        title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
                        profileImage='/portrait.jpg'
                        name='Nicholas'
                        note='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
                        views='255,505'
                    />
                    <RelatedBlog
                        bannerImage='/news1.png'
                        title='Zoom’s earliest investors are betting millions on a better Zoom for schools'
                        profileImage='/portrait.jpg'
                        name='Nicholas'
                        note='Zoom was never created to be a consumer product. Nonetheless, the...'
                        views='432,309'
                    />
                </RelatedBlogWrapper>

                <section className=''>
                    <div className="container mx-auto py-20">
                        <div className="max-w-6xl mx-auto">
                            <h4 className='text-xl font-bold px-4 text-black mb-4'>Marketing Articles</h4>
                            <Marketing />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page