import Marketing from '@/components/blog/marketing-articles/marketing'
import CoachingNote from '@/components/coaching-note/coaching-note'
import CategoryCard from '@/components/courses/category/course-category'
import CourseProgress from '@/components/courses/progress/course-progress'
import Title from '@/components/courses/title/title'
import RecommendedCourses from '@/components/recommended-courses/recommended-courses'
import Wrapper from '@/components/wrapper/wrapper'
import React from 'react'


function Courses() {
    return (
        <div>
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                    <h3 className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-4'>
                        <span className='md:text-xl text-[#252641] font-semibold'>Welcome back, ready for your next lesson?</span>
                        <button className='text-sm text-primay font-bold w-fit ml-auto sm:ml-0'>View History</button>
                    </h3>
                    <CourseProgress/>
            </Wrapper>
            <Wrapper backgroundColor='transparent'>
                <h4 className='md:text-xl text-dark-blue font-semibold mb-5'>Choice favourite course from top category</h4>
                <CategoryCard />
            </Wrapper>
            <RecommendedCourses />
            <Wrapper backgroundColor='transparent'>
                <Title text='Get Choice of your courses'/>
                <Marketing />
                <div className='py-10'>
                    <CoachingNote/>
                </div>
                <Title text='The course in personal development'/>
                <Marketing />
            </Wrapper>
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                <Title text='Students are viewing'/>
                <Marketing />
            </Wrapper>
        </div>
    )
}

export default Courses