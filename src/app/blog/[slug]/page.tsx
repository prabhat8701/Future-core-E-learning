import RelatedBlog from '@/components/blog/related-blog/related-blog'
import RelatedBlogWrapper from '@/components/blog/related-blog/related-blog-wrapper'
import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <div>
            <div className='relative w-full h-96 object-cover'>
                <Image
                    src="/blog-banner.png"
                    fill
                    alt='Banner image'
                    className='object-cover'
                />
            </div>
            <div className="container mx-auto">
                <article className='flex flex-col gap-4 py-10 text-sm leading-[180%]'>
                    <h4 className='text-blue text-2xl font-semibold leading-[180%]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h4>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform </p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage </p>
                </article>
                <div className='flex items-center gap-4 text-sm'>
                    <span className='label'>affordable</span>
                    <span className='label'>stunning</span>
                    <span className='label'>making</span>
                    <span className='label'>madbrawns</span>
                </div>
                <div className='flex gap-4 items-center py-8'>
                    <Image
                        src='/portrait.jpg'
                        height={70}
                        width={70}
                        alt='Writer Image'
                        className='object-cover rounded-md'
                    />
                    <p>
                        <span className="text-xs block">written by</span>
                        <span className='text-black'>Lina</span>
                    </p>
                </div>
            </div>
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
        </div>
    )
}

export default Page